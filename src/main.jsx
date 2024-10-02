import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, Login, Signup, AddExpense, AddBudget} from './pages';
import { AuthLayout} from './Components/component.js';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/login",
        element: (
          <AuthLayout 
            childern={<Login />}
            authentication={false}> 
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout 
            childern={<Signup />}
            authentication={false}>
          </AuthLayout>
        ),
      },
      {
        path: "/add-expense",
        element: (
          <AuthLayout 
            childern={<AddExpense />}
            authentication={true}>
          </AuthLayout>
        ),
      },
      {
        path: "/plan-budget",
        element: (
          <AuthLayout 
            childern={<AddBudget />}
            authentication={true}>
          </AuthLayout>
        ),
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
