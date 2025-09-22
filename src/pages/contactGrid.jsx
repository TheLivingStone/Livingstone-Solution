import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import AppData from "@data/app.json";

import ArrowIcon from "@layouts/svg-icons/Arrow";

const Contact = () => {
  return (
    <div className="container2" id="blur" style={{}}> 
    <div className="container text home">
      <h2>Our Services</h2>
      <p>By selecting the necessary options in the calculator, you can see the approximate cost of
        developing your proOur Serject</p>
    </div>
    <div className="container pricing home animate fast">{/*[*/}
      <div className="container col g15 fillw">
        <div className="container head" style={{"margin":"15px 15px"}}>
          <div className="container row g15" id="namenswitch">
            <h3>Design</h3>
            <label className="switch">
              <input type="checkbox" id="toggleGrid" defaultChecked="checked" />
              <span className="slider round" />
            </label>
          </div>
          <p className="vio">We create a product that fits exactly into your goals</p>
        </div>
        <hr />
        <div className="grid" id="gridContainer" style={{"display":"grid","gap":"10px","grid-template-columns":"repeat(3, calc(33.33333% - 10px))","grid-template-rows":"repeat(1, 130px)","margin-left":"20px","padding":"25px 0"}}>
          <div className="price-option" onclick="addToStack1('Concept : Project ideology')">
            <img alt="checkbox" className="checkmark" />
            <h4>Concept</h4>
            <p>Project ideology</p>
          </div>
          <div className="price-option">
            <img alt="checkbox" className="checkmark" />
            <h4>User Flow</h4>
            <p>Project outline</p>
          </div>
          <div className="price-option ">
            <img alt="checkbox" className="checkmark" />
            <h4>Wire Frame</h4>
            <p>The framework of the future site</p>
          </div>
          <div className="price-option">
            <img alt="checkbox" className="checkmark" />
            <h4>UI</h4>
            <p>User Interface</p>
          </div>
          <div className="price-option">
            <img alt="checkbox" className="checkmark" />
            <h4>UX</h4>
            <p>User Experience</p>
          </div>
          <div className="price-option">
            <img alt="checkbox" className="checkmark" />
            <h4>Brandbook</h4>
            <p>«Design Bible» of the project</p>
          </div>
        </div>
        <hr />
      </div>
      {/*]*/}
      <div className="container col g15 fillw">
        <div className="container head " style={{"margin":"15px 5px"}}>
          <div className="container row g15" id="namenswitch">
            <h3>Frontend</h3>
            <label className="switch">
              <input type="checkbox" id="toggleGrid1" />
              <span className="slider round" />
            </label>
          </div>
          <p className="vio">We create a shell of the project on the reactive basis of advanced
            technologies</p>
        </div>
        <hr />
        <div className="grid" id="gridContainer1" style={{"display":"grid","gap":"10px","grid-template-columns":"repeat(3, calc(33.33333% - 10px))","grid-template-rows":"repeat(1, 130px)","padding":"25px 0"}}>
          <div className="price-option" onclick="addToStack('Technical specification : Interaction scheme')">
            <img alt="checkbox" />
            <h4>Technical specification</h4>
            <p>Interaction scheme</p>
          </div>
          <div className="price-option" onclick="addToStack('Layout : Static pages')">
            <img alt="checkbox" />
            <h4>Layout
            </h4>
            <p>Static pages</p>
          </div>
          <div className="price-option" onclick="addToStack('Routing : Data processing')">
            <img alt="checkbox" />
            <h4>Routing
            </h4>
            <p>Data processing</p>
          </div>
          <div className="price-option" onclick="addToStack('FrontEnd : Communication with the BackEnd')">
            <img alt="checkbox" />
            <h4>FrontEnd
            </h4>
            <p>Communication with the BackEnd</p>
          </div>
          <div className="price-option"><img alt="checkbox" onclick="addToStack('UX : User Experience')" />
            <h4>UX</h4>
            <p>User Experience</p>
          </div>
          <div className="price-option"><img alt="checkbox" onclick="addToStack('Translations : On the frontend side')" />
            <h4>Translations
            </h4>
            <p>On the frontend side</p>
          </div>
        </div>
        <hr />
      </div>
      {/*]*/}
      <div className="container col g15 fillw">
        <div className="container head" style={{"margin":"15px 5px"}}>
          <div className="container row g15" id="namenswitch">
            <h3>BackEnd</h3>
            <label className="switch">
              <input type="checkbox" id="toggleGrid2" />
              <span className="slider round" />
            </label>
          </div>
          <p className="vio">From scratch, we create a solid foundation for your project with unlimited
            growth opportunities</p>
        </div>
        <hr />
        <div className="grid" id="gridContainer2" style={{"display":"grid","gap":"10px","grid-template-columns":"repeat(3, calc(33.33333% - 10px))","grid-template-rows":"repeat(1, 130px)","padding":"25px 0"}}>
          <div className="price-option"><img alt="checkbox" />
            <h4>Servers
            </h4>
            <p>Building a house for the project</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Balance
            </h4>
            <p>For large-scale projects</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Writing methods
            </h4>
            <p>Programming</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>API
            </h4>
            <p>FrontEnd and BackEnd communication language</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Cloud tech </h4>
            <p>
              Load reduction</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Git &amp; Docker
            </h4>
            <p>
              Building infrastructure</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container col g15 fillw">
        <div className="container head" style={{"margin":"15px 5px"}}>
          <div className="container row g15" id="namenswitch">
            <h3>App Development</h3>
            <label className="switch">
              <input type="checkbox" id="toggleGrid3" />
              <span className="slider round" />
            </label>
          </div>
          <p className="vio">Crafting and delivering Native, Hybrid Apps &amp; PWS Toilored solution aligned
            with your goles.</p>
        </div>
        <hr />
        <div className="grid" id="gridContainer3" style={{"display":"grid","gap":"10px","grid-template-columns":"repeat(3, calc(33.33333% - 10px))","grid-template-rows":"repeat(1, 130px)","padding":"25px 0"}}>
          <div className="price-option"><img alt="checkbox" />
            <h4>Servers
            </h4>
            <p>Building a house for the project</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Balance
            </h4>
            <p>For large-scale projects</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Writing methods
            </h4>
            <p>Programming</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>API
            </h4>
            <p>FrontEnd and BackEnd communication language</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4 tech >
              <p>
                Load reduction</p>
            </h4></div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Git &amp; Docker
            </h4>
            <p>
              Building infrastructure</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container col g15 fillw">
        <div className="container head" style={{"margin":"15px 5px"}}>
          <div className="container row g15" id="namenswitch">
            <h3>Digital Marketing</h3>
            <label className="switch">
              <input type="checkbox" id="toggleGrid4" />
              <span className="slider round" />
            </label>
          </div>
          <p className="vio">Take your Marketing game to next Level with us </p>
        </div>
        <hr />
        <div className="grid" id="gridContainer4" style={{"display":"grid","gap":"10px","grid-template-columns":"repeat(3, calc(33.33333% - 10px))","grid-template-rows":"repeat(1, 130px)","padding":"25px 0"}}>
          <div className="price-option"><img alt="checkbox" />
            <h4>Servers
            </h4>
            <p>Building a house for the project</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Balance
            </h4>
            <p>For large-scale projects</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Writing methods
            </h4>
            <p>Programming</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>API
            </h4>
            <p>FrontEnd and BackEnd communication language</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4 tech >
              <p>
                Load reduction</p>
            </h4></div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Git &amp; Docker
            </h4>
            <p>
              Building infrastructure</p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container col g15 fillw">
        <div className="container head" style={{"margin":"55px 5px"}}>
          <div className="container row g15" id="namenswitch">
            <h3>Branding</h3>
            <label className="switch">
              <input type="checkbox" id="toggleGrid5" />
              <span className="slider round" />
            </label>
          </div>
          <p className="vio">Explore Complete Brand Solutions for your Business with us </p>
        </div>
        <hr />
        <div className="grid" id="gridContainer5" style={{"display":"grid","gap":"10px","grid-template-columns":"repeat(3, calc(33.33333% - 10px))","grid-template-rows":"repeat(1, 130px)","padding":"25px 0"}}>
          <div className="price-option"><img alt="checkbox" />
            <h4>Servers
            </h4>
            <p>Building a house for the project</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Balance
            </h4>
            <p>For large-scale projects</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Writing methods
            </h4>
            <p>Programming</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4>API
            </h4>
            <p>FrontEnd and BackEnd communication language</p>
          </div>
          <div className="price-option"><img alt="checkbox" />
            <h4 tech >
              <p>
                Load reduction</p>
            </h4></div>
          <div className="price-option"><img alt="checkbox" />
            <h4>Git &amp; Docker
            </h4>
            <p>
              Building infrastructure</p>
          </div>
        </div>
        <hr />
      </div>
      {/*]*/}
      <div className="container total">
        <button className="red square" id="contactButton" onclick="toggle()">Discuss the project</button>
      </div>
    </div>
    <div className="container blog-home animate fast">
      <div className="container row sbetween center">
        <div className="container head">
          <h3>Our blog</h3>
          <p className="vio">We share news from the IT world, insiders of our studio and revive the
            genre of text interviews</p>
        </div><button className="grey">All articles</button>
      </div>
      <div className="home-articles-wrapper">{/*[*/}
        <div style={{"background-color":"rgba(0, 0, 0, 0)","background-position":"center center","background-repeat":"repeat, repeat","background-attachment":"scroll, scroll","background-image":"url('assets/webp/websock1.webp')","background-size":"auto, auto","background-origin":"padding-box, padding-box","background-clip":"border-box, border-box"}} className="article home"><button><img />Read</button><span className="sausage-red">Uutiset</span><span className="sausage-trs">10.06.23</span>
          <div className="container">
            <h3 className="light fillw">Websocketien tarkoitus, sovellukset ja toiminta</h3>
            <p className="light">Verkkoteknologioiden kehitys on mullistanut tavan, jolla olemme
              vuorova...</p>
          </div>
        </div>
        <div style={{"background-color":"rgba(0, 0, 0, 0)","background-position":"center center","background-repeat":"repeat, repeat","background-attachment":"scroll, scroll","background-image":"url('assets/webp/wheel-of-fortune-by-wheelwidget.com.webp')","background-size":"auto, auto","background-origin":"padding-box, padding-box","background-clip":"border-box, border-box"}} className="article home"><button><img />Read</button><span className="sausage-red">Uutiset</span><span className="sausage-trs">9.05.23</span>
          <div className="container">
            <h3 className="light fillw">Kuinka Onnenpyörä-widget parantaa verkkosivuston tuloksia
            </h3>
            <p className="light">Meillä on ilo ilmoittaa, että verkkosivustomme, GetSport.io, on
              esitelty...</p>
          </div>
        </div>{/*]*/}
      </div>
    </div>
  </div>
  
  );
};
export default Contact;
