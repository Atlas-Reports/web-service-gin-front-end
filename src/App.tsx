import { router } from './pages';
import { RouterProvider } from 'react-router';

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}