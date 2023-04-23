import { Link, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/kekw',
        element: (
            <div>
                <Link to="/">Back to home</Link>
                <h1>Kekw</h1>
            </div>
        ),
    },
    {
        path: '*',
        element: (
            <div>
                <Link to="/">Back to home</Link>
                <h1>Not found</h1>
            </div>
        ),
    },
]);

export default router;
