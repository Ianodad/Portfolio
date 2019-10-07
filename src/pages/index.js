import React from "react"
import Logo from '../components/logoanimate';


import Layout from "../components/layout"
import SEO from "../components/seo"
import './css/index.css';

import { slideInLeft, slideInUp, zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';


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

    
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<StyleRoot>
			<SEO title="Home" />
			<div className="container-fluid row main">
				<div className="col-md-6 col-lg-6 col-xl-6" style={{ marginTop: '18em' }}>
					<div className="home-tag float-right align-middle">
						<div className="home-text">
							<h3 className="my-1" id="line1" style={styles.slideIn}>
								HI
							</h3>
							<h3 className="my-1" id="line2" style={styles.slideIn2}>
								I'M IAN,
							</h3>
							<h3 className="my-1" id="line3" style={styles.slideIn3}>
								FULLSTACK DEVELOPER
							</h3>
						</div>
						<div className="home-under-text">
							<h4 className="h4" id="under-text" style={styles.slideInUp}>
								FULLSTACK &lt;<span>/</span>&gt; DEVOPS &lt;<span>/</span>&gt; GRAPHIC DESIGNER &lt;
								<span>/</span>&gt; PHOTOGRAPHER
							</h4>
						</div>
					</div>
				</div>
				<div className="other col-md-6 my-auto mx-auto" style={styles.zoomIn}>
					<div className="home mx-auto col-md-6" style={{ marginTop: '16em', maxWidth: '100%' }}>
						<Logo />
					</div>
				</div>
			</div>
		</StyleRoot>
	</Layout>
);


export default IndexPage
