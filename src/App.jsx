import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/authService"
import { login, logout } from "./redux/authSlice"
import { Footer, Header } from './Components/component'
import { Outlet } from 'react-router-dom'

// checking if user is loged in or not....
function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen w-full flex flex-wrap content-between bg-slate-200'>
      <div className='w-full block'>
        <Header />
        <main className='w-3/4 mx-auto'>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : null
}

export default App
