import React,{useState,Component} from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate=useNavigate();
    const [uname, setusername]= useState('');
    const [pswd,setpassword]=useState('');
    
    const joinRoom = () => {
        if(!pswd || !uname){
          toast.error('password or Username are not correct');
          return;
        }
        navigate(`/home`,{
          state:{
            uname,
          },
        });
      
        };
    
  const handleInputEnter=(e)=>{
    
    if(e.code==='Enter'){
      console.log('event',e.code);
      joinRoom();
    }
  }
    return (
        <div className='homePagewrapper'>
          <div className="formWrapper">
            <img src="/logo.png" alt="livecode"/>
            <h4 className='mainLabel1'>Sign Up</h4>
            <div className='inputGroup'>
              <input type='text'
                className='inputbox'
                placeholder='Username'
                value={uname}
                onChange={(e)=>setusername(e.target.value)}
                onKeyUp={handleInputEnter}
              />
              <input type='text'
                className='inputbox' 
                placeholder='password'
                value={pswd}
                onChange={(e)=>setpassword(e.target.value)}
                onKeyUp={handleInputEnter}
              />
              
              <button className='btn1 joinbtn' onClick={joinRoom}>Join</button>
              <span className='createInfo'>
                Not an existing user?  &nbsp;
                <a href='' className='createnew'>
                  Register here!
                </a>
              </span>
            </div>
          </div>
          
        </div>
      )
    }

export default Signup