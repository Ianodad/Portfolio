import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './css/about.css';

import Headline from '../components/headline';

const About = () => (
	<Layout>
		<SEO title="About" />

		<div
			className="container-fluid about-me row"
			style={{
				height: "970px",
			}}
		>
			<div className="col-md-12 col-12 col-lg-12 col-xl-6 my-auto">
				<div className="about mx-auto col-md-10 col-lg-10 col-sm-12">
					<div className="about-header mb-4 pt-4 d-flex" style={{ marginBottom:"10em" }} >
						<div>
							<Headline id="abouth" name={'abouth'} headln={'ABOUT'} data={'o'} />
						</div>
						<div style={{ marginLeft: '22em' }}>
							<Headline id="me" name={'me'} headln={'ME'} data={'m'} />
						</div>
					</div>
					<div className="about-content mt-4 pt-4">
						<p className="p1">
							I 'm a Fullstack Developer and a graphic designer who has a knack for photography and great
							design.
						</p>
						<p className="p1">
							I am highly passionate about great ideas that are not restricted to the imagination and
							creative direction.
						</p>
						<p className="p1">
							Highly adaptive to the various technologies that help in developing, sustaining and scaling
							projects.
						</p>
						<p className="p1">
							While most of my attention is on interactive projects, I do branding and collateral from
							time to time.This includes logo design, business cards, and other printed materials.
						</p>
					</div>
				</div>
			</div>
			<div className="col-md-12 col-12 col-lg-12 col-xl-6 my-auto mx-auto" />
		</div>
	</Layout>
);

export default About;
