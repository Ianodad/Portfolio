import React from 'react';
import {
	useStaticQuery,
	graphql
} from 'gatsby';
import Workout from './common/workout';

const Work = () => {
	const data = useStaticQuery(graphql `
		query {
			anime: file(relativePath: { eq: "work/anime wallpaper.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			instagram: file(relativePath: { eq: "work/Instagram.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			news: file(relativePath: { eq: "work/news.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			github: file(relativePath: { eq: "work/git_hub_search.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			techit: file(relativePath: { eq: "work/techit.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			},
			portfolio: file(relativePath: {
				eq: "work/portfolio.png"
			}) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const images = [{
			title: 'Instargram',
			image: data.instagram.childImageSharp.fluid,
			code: 'https://github.com/Ianodad/Instargram',
			website: 'https://instarglam.herokuapp.com/',
			info: "A clone of  social media Instagram login in to sign up log in and begin"
		},
		{
			title: 'News Highlight',
			image: data.news.childImageSharp.fluid,
			code: 'https://github.com/Ianodad/News_Highlight',
			website: 'https://news-sources-highlight.herokuapp.com/',
			info: 'A website aggregating news from  different sources'
		},
		{
			title: 'Git Search',
			image: data.github.childImageSharp.fluid,
			code: 'https://github.com/Ianodad/Git-Search',
			website: 'https://ianodad.github.io/Git-Search/',
			info: 'A website used to search user on GitHub with together with there repository'

		},
		{
			title: 'Tech It',
			image: data.techit.childImageSharp.fluid,
			code: 'https://github.com/Ianodad/Tech_IT-e_commerce-',
			website: 'http://ianodad.github.io/Tech_IT-e_commerce-/',
			info: 'This is e-commerce based technology'

		},
		{
			title: 'Portfolio',
			image: data.portfolio.childImageSharp.fluid,
			code: 'https://github.com/Ianodad/Portfolio',
			website: 'https://portfolio.ianodad.now.sh/',
			info: 'This is my personal portfolio page built on gatsbyjs'

		}
	];
	return ( <
		div className = "work mx-0 px-0" >
		<
		Workout images = {
			images
		}
		/> <
		/div>
	);
};

export default Work;