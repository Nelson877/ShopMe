import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
const navigate = useNavigate()
const dispatch = useDispatch()
const auth = useSelector((state)=> state.auth)

const [user, setUser] = useState({
  email: '',
  password: '',
})

useEffect(() =>{
if(auth._id){
  navigate('/cart')
}
},[auth._id, navigate])


// const handleSubmit = (e) =>{
// e.preventDefault()
// console.log(user);
// dispatch(loginUser(user))
// }

  return(
<div
  className="animate-pulse min-h-screen bg-slate-200 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12"
>
  <span
    className="border text-4xl text-yellow-800 px-6 pt-10 pb-6 bg-white w-1/2 max-w-md mx-auto rounded-t-md sm:px-10"
    >LogIn</span
  >
  <div
    className="border relative px-4 pt-10 pb-8 bg-white shadow-xl w-1/2 max-w-md mx-auto sm:px-10 rounded-b-md"
  >
    <form>
      <label for="" className="block">Username or Email</label>
      <input
        type="Email"
        // onChange={(e) => setUser({...user,password: e.target.value})}
        className="border w-full h-10 px-3 mb-5 rounded-md"
        placeholder="Username or Email"
      />
      <label for="" className="block">Password</label>
      <input
        type="password"
        className="border w-full h-10 px-3 mb-5 rounded-md"
        placeholder="password"
        // onChange={(e) => setUser({...user,password: e.target.value})}
      />
      <div className="flex items-start">
        <div className="flex items-start">
          <div className="flex items-center">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="text-sm ml-3">
            <label for="remember" className="font-medium text-gray-900"
              >Remember me</label
            >
          </div>
        </div>
        <a
          href="#"
          className="text-sm text-blue-700 hover:underline ml-auto dark:text-blue-500"
          >Lost Password?</a
        >
      </div>
      <button
        className="mt-5 bg-green-500 hover:bg-blue-700 shadow-xl text-white uppercase text-sm font-semibold px-14 py-3 rounded"
      >
        Login
      </button>
    </form>
  </div>
</div>

  );
};

export default Login;
