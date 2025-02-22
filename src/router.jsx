import { Outlet, createBrowserRouter, } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'

const Root = () => {
    return (
        <Outlet />
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Landing />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            }
        ]
    }
])

export default router;