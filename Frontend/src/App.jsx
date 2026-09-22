import { useEffect, useState } from 'react'
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

  return (
    <div className="app">
      <h1>Frontend and Backend Connection</h1>

      <h2>
        Number of users: <span>{users.length}</span>
      </h2>

      <div className="user-container">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <h3>{user.name}</h3>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>City:</strong> {user.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App