import { cookieManager } from './cookies';
import { omitFalsey } from './omitFalsey';

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
