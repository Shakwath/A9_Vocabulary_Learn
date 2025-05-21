import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Mainlayput from '../Layouts/Mainlayput';
import Home from '../Pages/Home';
import Startlearning from '../Pages/Startlearning';
import Tutorials from '../Pages/Tutorials.JSX';
import AboutUs from '../Pages/AboutUs';
import PrivateRoute from '../Components/Provider/PrivateRoute';
import Login from '../Components/Login';
import LessonDetail from '../Components/LessonDetail';
import SignUp from '../Components/Register';
import Error404 from '../Components/Error404';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayput></Mainlayput> ,
    children: [
        {
          path: "/",
          element:<Home></Home>,
         },
         {
            path: "/Startlearning",
            element:<Startlearning></Startlearning>,
           },
           {
            path: "/lesson/:lesson_no",
            element: <PrivateRoute><LessonDetail></LessonDetail></PrivateRoute>,
            },
           {
            path: "/Tutorials",
            element:<Tutorials></Tutorials>,
           },
           {
            path: '/AboutUs',
            element:<AboutUs></AboutUs>,
           },
           {
            path: 'login',
            element:<Login></Login>,
           },
            {
                    path : '/signUp',
                    element: <SignUp></SignUp>
            },
            {
                path: "/*",
                element: <Error404></Error404>,
            },
            
       ],
    },
]);

export default router;