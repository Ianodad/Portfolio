import React from "react"
import Logo from '../components/logoanimate';


import Layout from "../components/layout"
import SEO from "../components/seo"
import './css/index.css';

import Headline from "../components/headline"

import {
	slideInLeft,
	slideInUp,
	zoomIn
} from 'react-animations';
import Radium, {
	StyleRoot
} from 'radium';


const styles = {
	slideIn: {
		animation: 'x 1s',
		animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
	},
	slideIn2: {
		animation: 'x 1.5s',
		animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
	},
	slideIn3: {
		animation: 'x 2s',
		animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
	},
	slideInUp: {
		animation: 'x 3s',
		animationName: Radium.keyframes(slideInUp, 'slideInUp')
	},
	zoomIn: {
		animation: 'x 4s',
		animationName: Radium.keyframes(zoomIn, 'zoomIn')
	}
};

// adding i am
const IM = "I'M";
const FD = `FULLSTACK  DEVELOPER`

const IndexPage = () => (
	
<Layout>
  <SEO title="Home" />
  <StyleRoot>
    <SEO title="Home" />
    <div className="container-fluid row main" style={{ height: "970px" }}>
      <div
        className = "col-md-6 col-lg-6 col-xl-6 col-sm-12 my-auto"
       
      >
        <div className="home-tag"style={{ marginLeft: "-2em" }}>
          <div className="home-text d-flex flex-column">
            <ul className="list-unstyled" >
              <li className="my-3 py-3" >
                <div className="my-3 py-2" id="line1" style={styles.slideIn}>
                  <Headline
                    id="hi"
                    style={styles.slideIn}
                    name={"hi"}
                    headln={"HI"}
                    data={"i"}
                  />
                </div>
              </li>
              <li className="my-2 py-2" style={{ marginLeft: "5px" }}>
                <div  className="my-2 py-2" id="line2" style={styles.slideIn2}>
                  <div className="name d-flex flex-row d-inline-block">
                    <div>
                      <Headline
											className = "d-inline-block"
                        id="im"
                        style={styles.slideIn}
                        name={"im"}
                        headln={IM}
                        data={"i"}
                      />
                    </div>
                    <div style={{ marginLeft: "11em" }}>
                      <Headline
                        id="ian"
                        style={styles.slideIn}
                        name={"ian"}
                        headln={"IAN,"}
                        data={"n,"}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-3 py-2" style={{ marginLeft: "10px" }}>
                <div className="mt-3 pt-2" id="line3" style={styles.slideIn3}>
                  <div className="name d-flex flex-row">
                    <div>
                      <Headline
                        id="full"
                        style={styles.slideIn}
                        name={"full"}
                        headln={"FULLSTACK"}
                        data={"f"}
                      />
                    </div>
                    <div id="devhide" style={{ marginLeft: "19.5em" }}>
                      <Headline
                        id="dev"
                        style={styles.slideIn}
                        name={"dev"}
                        headln={"DEVELOPER"}
                        data={"d"}
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li className="my-3 py-2" id="devshow" style={{ marginLeft: "14.7em" }}>
                <div className="mt-3 pt-2" id="line3">
                  <div className="name d-flex flex-row">
                    <div className="devhide">
                      <Headline
                        id="dev"
                        style={styles.slideIn}
                        name={"dev"}
                        headln={"DEVELOPER"}
                        data={"d"}
                      />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="home-under-text" style={{ marginLeft: "42px" }}>
            <h4 className="h4" id="under-text" style={styles.slideInUp}>
              FULLSTACK &lt;<span>/</span>&gt; DEVOPS &lt;<span>/</span>&gt;
              GRAPHIC DESIGNER &lt;
              <span>/</span>&gt; PHOTOGRAPHER
            </h4>
          </div>
        </div>
      </div>
      <div
        className = "other col-md-6 col-lg-6 col-xl-6 col-sm-12 my-auto mx-auto  my-auto"
        style={styles.zoomIn}
      >
        <div className="home mx-auto" style={{ maxWidth: "100%" }}>
          <Logo />
        </div>
      </div>
    </div>
  </StyleRoot>
</Layout>
);


export default IndexPage