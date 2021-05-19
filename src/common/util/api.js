import _ from 'lodash';

import { cookieManager } from './cookies';
import { omitFalsey } from './omitFalsey';
import { printWarning } from './printWarning';

/** ============================ Query compilation ========================= */
function makeFilterQueryParams(filterClauses) {
  if (!filterClauses) return [];

  // Each of the filters gets its own `filter` query parameter
  const queryParamPairs = [];
  Object.entries(filterClauses).forEach(([field, filterClause]) => {
    if (filterClause.operation === 'in') {
      // Every value in the `IN` clause gets its own query parameter
      const paramKey = `filter{${field}.in}`;
      queryParamPairs.push(...filterClause.value.map((v) => [paramKey, v]));
    } else {
      queryParamPairs.push([`filter{${field}}`, filterClause.value]);
    }
  });

  return queryParamPairs;
}

function makePaginationQueryParams(params) {
  const { page, pageSize, sortDir, sortKey } = params;
  const queryParamPairs = [];

  // Handle the 1-indexing for the backend
  if (!_.isUndefined(page)) queryParamPairs.push(['page', page + 1]);
  if (pageSize) queryParamPairs.push(['page_size', pageSize]);
  if (sortKey) queryParamPairs.push(['sort[]', (sortDir === 'desc' ? '-' : '') + sortKey]);

  return queryParamPairs;
}

function makeIncludeExcludeQueryParam(
  key,
  fields
) {
  if (!fields) return [];

  // If the value is an array, repeat the parameter key once per element
  const paramKey = `${key}[]`;
  return Array.isArray(fields) ? fields.map((v) => [paramKey, v]) : [[paramKey, fields]];
}

/**
 * Produces the querystring for a request, given an object representing the key-value pairs to
 * include in the querystring.
 *
 * @param {string} route: the base route to which the querystring will be appended
 * @param {QueryParams} params: the object of key-value pairs that should be converted into a
 *   querystring
 */
export function appendQueryString(route, params) {
  if (!params) return route;

  // Handle any dynamic rest params
  const drQueryParamPairs = [
    ...makeIncludeExcludeQueryParam('include', params.include),
    ...makeIncludeExcludeQueryParam('exclude', params.exclude),
    ...makeFilterQueryParams(params.filter),
    ...makePaginationQueryParams(params),
  ];

  // Handle all other params
  const nonDynamicRestParams = _.omit(params, [
    'exclude',
    'include',
    'filter',
    'page',
    'pageSize',
    'sortKey',
    'sortDir',
  ]);
  const nonDRQueryParamPairs = omitFalsey(
    Object.entries(nonDynamicRestParams).map(([key, value]) => {
      // Apply some basic validation on the `unknown` type
      if (typeof value === 'string' || typeof value === 'number' || Array.isArray(value)) {
        return [key, value];
      }

      // Print a warning and return `null`. The `null` value will be removed by `omitFalsey`
      printWarning(`Query parameter "${key}" received invalid value: ${value}`);
      return null;
    })
  );

  // Reduce the array of pairs
  const queryString = [...drQueryParamPairs, ...nonDRQueryParamPairs]
    .map(([param, value]) => [param, encodeURIComponent(value.toString())].join('='))
    .join('&');

  return route.concat(queryString.length === 0 ? '' : `?${queryString}`);
}

/** ============================ Headers =================================== */
/**
 * Produces the headers to send with a request
 *
 * @param {ContentType} contentType: the value for the 'Content-Type` header
 */
export function getRequestHeaders(contentType) {
  const authToken = cookieManager.authToken;
  return new Headers(
    omitFalsey({
      'Authorization': authToken && `Token ${authToken}`,
      'Content-Type': contentType,
      'X-CSRFToken': cookieManager.csrfToken,
    })
  );
}
