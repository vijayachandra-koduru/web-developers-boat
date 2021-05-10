import logo from './logo.png';
import './App.css';
import { Component } from "react";
import { Greet, Swet, Asddit } from "./components/Greet";
import { Klass } from "./components/KlassComp";
import Properti from "./components/Properti";
import StateX from "./components/StateX";
import iframes from "./components/iframe";

class App extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt=">Develoers Boat" />
          <p>
            Welcome to Web <b>Develoers Boat</b>
          </p>
          <StateX />
          <a
            className="App-link"
            href="tel:08179697161"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
          >
            Contact Us for More
        </a>
          <br></br>
        <a
            href="https://goo.gl/maps/QK6JZEDHWWevmRYU6"
            target="_blank"
            rel="noreferrer"

        >
          Open Google Map
        </a>
        <br></br>
          <a
            href="tel:+918179697161"
            target="_blank"
            rel="noreferrer"
          >
            Book Your Appointment
        </a>
          <Properti text=" Web developers Boat for " />
          <br></br>
          <img src="https://lh3.googleusercontent.com/61_pg7eX2H_NmRcxqznPDI1GT-bZfEx17bX6WyKiDLRbTc89Nqvxblptn-jvKyS3FX37nKvSHKcHLmit=w1080-h608-p-no-v0" className="image-dev" alt=">Develoers Boat" />
          <div className="Swet">
            <Swet />
            <Asddit />
          </div>

          <Klass />
          <br></br>
          <img src="https://lh3.googleusercontent.com/p/AF1QipNlcitr7YQmpWgkNmaybo_A8ELC7WhpN_Ystshm=s1280-p-no-v1" className="image-dev" alt=">Develoers Boat" />
          <Greet />
          <iframes />
        </header>
        
        <div>Copyright@2021 - developersboat.com</div>
      </div>
    );
  }
}
  

export default App;
