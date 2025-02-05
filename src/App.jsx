import './App.css'
import LoadingPage from './Components/LoadingPage'
import LoginForm from './Components/LoginForm'
import Navbar from './Components/Navbar'


function App() {

  return (
    <>
      <div className='container-fluid'>
        <LoadingPage />
        <LoginForm />
        {/* <Navbar /> */}
      </div>
    </>
  )
}

export default App
