import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ImageSkills from '../components/imageSkills';

import './css/skills.css';

const Skills = () => (
	<Layout>
		<SEO title="Skills" />
		<div className="container-fluid my-skills row" style={{height:"900px" }}>
		<ImageSkills/>
			<div className="col-md-8 col-lg-6 col-sm-12 mx-auto">
				<div className="skills  col-md-10 mx-auto" style={{ marginTop: '14em' }}>
					<div className="skills-header my-2">
						<span className="h1">S</span>
						<span className="h1 pl-1">K</span>
						<span className="h1 pl-1">I</span>
						<span className="h1 pl-1">L</span>
						<span className="h1 pl-1">L</span>
						<span className="h1 pl-1">S</span>
						<span className="px-1"> </span>
						<span className="h1 pl-1">&</span>
						<span className="px-1"> </span>
						<span className="h1">E</span>
						<span className="h1 pl-1">X</span>
						<span className="h1 pl-1">P</span>
						<span className="h1 pl-1">E</span>
						<span className="h1 pl-1">R</span>
						<span className="h1 pl-1">I</span>
						<span className="h1">E</span>
						<span className="h1 pl-1">N</span>
						<span className="h1 pl-1">C</span>
						<span className="h1 pl-1">E</span>
					</div>
					<div className="skills-content h-100">
						<p className="p1">
							As a full - stack developer, I have developed the adequate skills necessary to create a web
							application from the back - end to the front end.
						</p>
						<p className="p1">
							These necessary skills have been developed through thousands of intensive dedicated hours
							building projects.
						</p>
						<p className="p1">
							My go-to backend tool is nodejs. The powerful V8 javascript engine creates a platform to
							build high performance and scalable network applications in JavaScript.
						</p>
						<p className="p1">
							My mastery of javascript allows me to build front end UI with frameworks like jquery and my
							personal favorite Reactjs
						</p>
						<p className="p1">
							Database is no expectation to regard to skills that I have acquired. Able to master SQL
							database like Postgres . This with NoSql database like MongoDB and GraphQl .
						</p>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default Skills;
