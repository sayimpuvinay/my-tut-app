import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom'; 

export default function Home() {
  const navigate = useNavigate(); 

  const handleUstateClick = () => {
    navigate('/ustate'); 
  };

  const handleUeffectClick = () => {
    navigate('/ueffect'); 
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center vh-100">
      <h5 className="heading mb-4">Please click on the button which you want to understand....!</h5>
      <div className='middle-button d-flex flex-row justify-content-around w-50'>
        <div class="box-3">
            <div class="btn btn-us" onClick={handleUstateClick}>
                <span>useState</span>
            </div>
        </div>
        <div class="box-3">
            <div class="btn btn-ue" onClick={handleUeffectClick}>
                <span>useEffect</span>
            </div>
        </div>
      </div>
    </div>
  );
}
