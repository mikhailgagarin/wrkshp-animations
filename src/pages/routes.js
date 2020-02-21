import React, {Suspense, lazy} from 'react';
import {Route, Switch, useLocation} from 'react-router-dom';
import {useTransition} from 'react-spring';

import Layout from 'components/Layout';
import AnimatedRouter from 'components/AnimatedRouter';

// Route-based code splitting
let Home = lazy(() => import('./Home'));
let Basic = lazy(() => import('./Basic'));
let Chains = lazy(() => import('./Chains'));
let Springs = lazy(() => import('./Springs'));
let Trails = lazy(() => import('./Trails'));
let NotFound = lazy(() => import('./NotFound'));

export default function Routes() {
    const location = useLocation();
    const transitions = useTransition(location, ({pathname}) => pathname, {
        from: {opacity: 0, transform: 'translateX(50%)'},
        enter: {opacity: 1, transform: 'translateX(0)'},
        leave: {opacity: 0, transform: 'translateX(-50%)'}
   });

    return (
        <Layout>
            <Suspense fallback={<div>Loading...</div>}>
                {transitions.map(({item, props, key}) => (
                    <AnimatedRouter key={key} style={props}>
                        <Switch location={item}>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route path='/basic'>
                                <Basic />
                            </Route>
                            <Route path='/springs'>
                                <Springs />
                            </Route>
                            <Route path='/trails'>
                                <Trails />
                            </Route>
                            <Route path='/chains'>
                                <Chains />
                            </Route>
                            <Route path='*'>
                                <NotFound />
                            </Route>
                        </Switch>
                    </AnimatedRouter>
                ))}
            </Suspense>
        </Layout>
    );
}
