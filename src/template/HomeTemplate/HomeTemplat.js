import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "./page/Footer/Footer";
import Header from "./page/Header/Header";

export const HomeTemplates = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
