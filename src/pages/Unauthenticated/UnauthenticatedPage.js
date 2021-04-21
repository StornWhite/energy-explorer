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
        <a>A logo would go here</a>
        <div>{children}</div>
    </div>
  );
};
