import { createBrowserRouter } from "react-router-dom";
import App from "./pages/MainPage";
import TaskDetailsPage from "./pages/TaskDetailsPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/TaskDetail",
        element: <TaskDetailsPage/>
    }
]);

export default router;
