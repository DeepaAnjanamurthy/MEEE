import { Link } from "react-router-dom";
import './App.scss';
import chakraImg from '../assets/images/sevenchakras.png';



function App() {
  return (
    <div className="mainpage">
          <img className="mainimage" src={chakraImg} alt="seven chakras"/>
          <div className="login__container">
              <h2 className="login__form-header">Login to begin</h2>
            
            <form className="login__form">
              <h3 className="login__form-label">User Name</h3>
              <input className="login__form-uname" type="text" placeholder="User Name"/>
              <h3 className="login__form-label">Password</h3>
              <input className="login__form-password" type="password" placeholder="Password"/>
              <div className="btns">
                <button className="login__form-btn cbtn">Cancel</button>

                <Link to={"/welcome"}>
                  <button className="login__form-btn">Login</button>
                </Link>
              </div>
            </form>
          </div>
          
    </div>
  );
}

export default App;
