import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components/Index'
import { Outlet } from 'react-router-dom'


function App() {

  // console.log(appwriteUrl)

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch() 

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
          <Header />
          <main>
           {/* todo <Outlet /> */}
            A blog with writeapp

          </main>
          <Footer />
      </div>
      
      
    </div>
   ) : null
}

export default App
