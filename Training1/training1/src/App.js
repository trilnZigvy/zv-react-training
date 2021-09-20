
import './App.css';
// import {  Container, Col, Row } from "reactstrap";
import Header from './Header/header';
import MainContent from './mainContent/mainContent';
import Footer from './Footer/footer';
function App() {
  return (
    <div style={{position:"relative"}}>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
