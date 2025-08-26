import React, { useState } from 'react'
import axios from 'axios'

function LoginSignUp() {
  let [state, setstate] = useState("Login")
  let [formData, setFormdata] = useState({
    username: "",
    password: "",
    email: ""
  })

  let changehandler = (e) => {
    let name = e.target.name
    let value = e.target.value
    let olddata = formData
    let newdata = { ...olddata, [name]: value }
    setFormdata(newdata)
  }

  let login = async () => {
    console.log("Login executed", formData)
    try {
      let response = await axios.post("http://localhost:4000/api/login", formData)
      if (response.data.success) {
        localStorage.setItem('auth-token', response.data.token)
        window.location.replace("/")
      } else {
        alert(response.data.errors)
      }
    } catch (error) {
      console.log(error)
      alert("Login failed")
    }
  }

  let signup = async () => {
    console.log("Signup executed", formData)
    try {
      let response = await axios.post("http://localhost:4000/api/register", formData)
      if (response.data.success) {
        localStorage.setItem('auth-token', response.data.token)
        window.location.replace("/")
      } else {
        alert(response.data.errors)
      }
    } catch (error) {
      console.log(error)
      alert("Signup failed")
    }
  }

  return (
    <div className="flex justify-center items-center w-full min-h-[80vh] bg-[#fce3fe] py-[50px]">
      <div className="w-[90%] max-w-[500px] bg-white rounded-2xl shadow-lg px-8 py-10">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">{state}</h1>

        <div className="flex flex-col gap-5">
          {state === "Sign Up" ? <input
            name="username"
            value={formData.username}
            onChange={changehandler}
            type="text"
            placeholder="Your Name"
            className="border border-[#c9c9c9] text-[#5c5c5c] text-[18px]  px-4 py-3 focus:outline-1"
          /> : <></>}

          <input
            name="email"
            value={formData.email}
            onChange={changehandler}
            type="email"
            placeholder="Email Address"
            className="border border-gray-300  px-4 py-3 focus:outline-1 "
          />
          <input
            name='password'
            value={formData.password}
            onChange={changehandler}
            type="password"
            placeholder="Password"
            className="border border-gray-300  px-4 py-3 focus:outline-1 "
          />
        </div>

        <button onClick={() => { state === "Login" ? login() : signup() }} className=" cursor-pointer hover:bg-red-400 mt-6 w-full bg-[#ff4141] text-white font-medium py-3 ">
          Continue
        </button>

        {state === "Sign Up" ? <p className="text-center text-[#5c5c5c] mt-4 font-normal">
          Already have an account? <span onClick={() => { setstate("Login") }} className=" text-[#ff4141] font-semibold cursor-pointer hover:underline">Login here</span>
        </p> : <p className="text-center text-[#5c5c5c] mt-4 font-normal">
          Create an account? <span onClick={() => { setstate("Sign Up") }} className=" text-[#ff4141] font-semibold cursor-pointer hover:underline">Click here</span>
        </p>
        }

        <div className="flex items-start gap-2 mt-4 text-gray-500 font-normal">
          <input type="checkbox" id="terms" className="mt-1" />
          <p className=' text-gray-500 font-normal'>
            By continuing, I agree to the <span className="text-[#ff4141] cursor-pointer hover:underline">Terms of Use</span> & <span className="text-[#ff4141] cursor-pointer hover:underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
