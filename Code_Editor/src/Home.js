import React,{useState} from 'react';
//import './App.css';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Home = () =>  {
  const navigate=useNavigate();
  const [roomId, setRoomId]= useState('');
  const [username,setUsername]=useState('');
  const createNewRoom=(e)=>{
    e.preventDefault();
    const id=uuidv4();
    setRoomId(id);
    toast.success('Created a new room');
    //console.log(id);
  };

const joinRoom = () => {
  if(!roomId || !username){
    toast.error('Room ID or Username not given');
    return;
  }
  navigate(`/Landing/${roomId}`,{
    state:{
      username,
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
        <h4 className='mainLabel'>Paste Invitation Room ID</h4>
        <div className='inputGroup'>
          <input type='text'
            className='inputbox' 
            placeholder='Room ID'
            onChange={(e)=>setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}

          />
          <input type='text'
            className='inputbox' 
            placeholder='Username'
            onChange={(e)=>setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
            
          />
          
          <button className='btn1 joinbtn' onClick={joinRoom} >Join</button>
          <span className='createInfo'>
            Don't have an invite?  &nbsp;
            <a onClick={createNewRoom} href='' className='createnew'>
              Create Room
            </a>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Home