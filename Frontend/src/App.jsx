import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from 'axios'
import './App.css'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/random-user')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
      })
  }, [])


  // useEffect(()=>{},[])
  

  return (
    <>
    <h1>frontend and backend connection</h1>
    <h2>Number of users: {users.length}</h2>
    {
      users.map((user, index) => (
        <div key={index}>
          <h3>{user.name}</h3>
          <p>{user.age}</p>
          <p>{user.city}</p>
        </div>
      ))
    }
    </>
  )
}

export default App
