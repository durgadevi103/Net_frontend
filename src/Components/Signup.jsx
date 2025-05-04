import React, { useState } from 'react'
import '/src/Css/Login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';



const Signup = () => {
 
  const [form,setForm] = useState({username:"",email:"",password:"",confrimPassword:""})
  
  const  handle_form = (e) =>{
    
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form);
    };

    const handle_submit = async (e) =>{
      e.preventDefault();

      if(form.password != form.confrimPassword){
        alert('password does not match')
        return;
      }

    

    try{
      const response = await axios.post("http://127.0.0.1:8000/api/register/",{
        user_name: form.username,
        user_email:form.email,
        user_password:form.password,
      },{
        headers: {
          "Content-Type": "application/json"
        },


      }
      );

      console.log(response.data);
      alert('signup successfully completed');
      setForm({ username: "", email: "", password: "", confirmPassword: "", });
      
    }catch(error){
      console.error('signup failed :',error);
      alert('signup failed try again later')
    };

  };
    
    return (
        <div className="auth-container">
          <div className="auth-box">
            <h2 className="text-center">Signup</h2>
            <form method='post' onSubmit={handle_submit}>
            <div className="mb-3">
                <label className="form-label" >Username</label>
                <input name='username' placeholder='Enter your name' type="text" className="form-control" value={form.username} onChange={handle_form} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input name='email' placeholder='Enter your email' type="email" className="form-control"  value={form.email} onChange={handle_form}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input name='password' placeholder='Enter your password' type="password" className="form-control"  value={form.password} onChange={handle_form}/>
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input name='confrimPassword' placeholder='Enter your password' type="password" className="form-control" value={form.confrimPassword} onChange={handle_form} />
              </div>
              
              <button type="submit" className="btn btn-primary w-100" >Signup</button>
            </form>
            <p className="mt-3 text-center">Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </div>
      );
}

export default Signup
