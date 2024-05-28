import { Fragment, useState } from 'react'
import './App.css'
import LoginUserPage from './components/LoginUserPage'
import StudentSignUpPage from './components/StudentSignUpPage'
function App() {

  return (
    <Fragment>
            {/*<LoginUserPage/>*/}
            <StudentSignUpPage/>
    </Fragment>
  )
}

export default App
