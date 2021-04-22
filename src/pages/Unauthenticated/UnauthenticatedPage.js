/**
 * The parent page for the app's public-facing content.
 */

import * as React from 'react';
//import classNames from 'classnames';

// import { Branding, Card, Flex, Typography } from 'navigader/components';
// import { makeStylesHook } from 'navigader/styles';


/** ============================ Components ================================ */
export const UnauthenticatedPage = ({ children }) => {
  // const classes = useStyles();
  //const gradientClasses = classNames(classes.gradient, Branding.useGradientStyles().root);

  return (
    <div >

        <h2>
          Energy Explorer
        </h2>
        <p>A logo would go here</p>
        <div>{children}</div>
    </div>
  );
};
