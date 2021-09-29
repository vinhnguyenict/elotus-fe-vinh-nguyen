import React, { lazy, Suspense } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import "./App.css"
import PageLoad from './components/PageLoader'

import history from './utils/historyHistory'

const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))

const App: React.FC = () => {
    return (
        <Router history={history}>
            <Suspense fallback={<PageLoad />}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>

                    {/* 404 */}
                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export default React.memo(App)
