import React, { useState } from "react";

export default function Login() {
  const [name, setname] = useState();
  const [password, setpassword] = useState();
  const handleForm = ()=>{

    }
  return (
    <div className="login-page">
      <h1>Login</h1>

    <div className="form">
      <label htmlFor="uname">UserName
      </label>
      <input type="text" value={name} id="uname" name="uname" onChange={(e)=>setname(e.target.value)} />
      <label htmlFor="password">Password</label>
      <input type="password" value={password} id="password" name="password"  onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={()=>handleForm()}>
          Login
      </button>

    </div>
    </div>
  );
}
