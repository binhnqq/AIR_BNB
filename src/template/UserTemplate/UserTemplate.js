import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "../HomeTemplate/page/Footer/Footer";
import Header from "../HomeTemplate/page/Header/Header";

export const UserTemplates = (props) => {
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
            <Header {...propsRoute}></Header>

            <Component {...propsRoute} />

            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
