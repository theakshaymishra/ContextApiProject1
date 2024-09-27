import React , {useState , useContext} from 'react'
import UserContext from '../Context/UserContext'

const Login = () => {
    const [ username , setuserName ] = useState('');
    const [ password , setPassword ] = useState('');
    const { setUser } = useContext(UserContext);
    
    const handleSubmit = (e) => {
       console.log("clicked")
       e.preventDefault();
       setUser({username , password})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type="text"
             placeholder='Username' 
             value={username}
             onChange={ (e)=> setuserName(e.target.value)}/>
      <input type="password" 
             placeholder='Password'
             value={password}
             onChange={ (e)=> setPassword(e.target.value)} />
      <button onClick={handleSubmit}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"> click me!
      </button>
    </div>
  )
}

export default Login;
