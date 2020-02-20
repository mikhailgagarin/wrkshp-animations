import React, { Suspense, lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { useTransition } from "react-spring";

import Layout from "components/Layout";
import AnimatedRouter from "components/AnimatedRouter";

// Route-based code splitting
let Home = lazy(() => import("./Home"));
let SomeRoute = lazy(() => import("./SomeRoute"));
let AnotherRoute = lazy(() => import("./AnotherRoute"));
let NotFound = lazy(() => import("./NotFound"));

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, ({ pathname }) => pathname, {
    from: { opacity: 0, transform: "translateX(50%)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-50%)" }
  });

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        {transitions.map(({ item, props, key }) => (
          <AnimatedRouter key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/some-route">
                <SomeRoute />
              </Route>
              <Route path="/another-route">
                <AnotherRoute />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </AnimatedRouter>
        ))}
      </Suspense>
    </Layout>
  );
}
