import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import './css/imageskills.css';
import ImageIt from './common/image';

const Image = () => {
	const particle = []

	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { absolutePath: { regex: "/(png)/" }, relativeDirectory: { eq: "skills" } }) {
				edges {
					node {
						childImageSharp {
							fluid {
								src
							}
						}
					}
				}
			}
		}
	`);

	data.allFile.edges.map((edge) =>
		particle.push({
			src: edge.node.childImageSharp.fluid.src,
			width: 35,
			height: 35
		})
	);


	return (
		<div>
			<ImageIt skills={particle} />
		</div>
	);
};

export default Image;
