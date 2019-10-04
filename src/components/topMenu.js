import React from 'react';

// bootstrap styling
import NavbarTop from './navbar';

import { useStaticQuery, graphql } from 'gatsby';

import './css/menu.css';


const TopMenu = ({ path }) => {
	const data = useStaticQuery(graphql`
		query {
			home: file(relativePath: { eq: "menu/home.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			homeselect: file(relativePath: { eq: "menu/homewhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			about: file(relativePath: { eq: "menu/about.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			aboutselect: file(relativePath: { eq: "menu/aboutwhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			skills: file(relativePath: { eq: "menu/skills.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			skillsselect: file(relativePath: { eq: "menu/skillswhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			work: file(relativePath: { eq: "menu/work.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			workselect: file(relativePath: { eq: "menu/workwhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			blog: file(relativePath: { eq: "menu/blog.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			blogselect: file(relativePath: { eq: "menu/blogwhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			gallery: file(relativePath: { eq: "menu/gallery.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			galleryselect: file(relativePath: { eq: "menu/gallerywhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			contact: file(relativePath: { eq: "menu/contact.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			contactselect: file(relativePath: { eq: "menu/contactwhite.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			logo: file(relativePath: { eq: "logo.png" }) {
				childImageSharp {
					fluid(maxWidth: 512, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const icons = [
		{
			image: data.home.childImageSharp.fluid,
			select: data.homeselect.childImageSharp.fluid,
			name: 'HOME',
			link: '/'
		},
		{
			image: data.about.childImageSharp.fluid,
			select: data.aboutselect.childImageSharp.fluid,
			name: 'ABOUT',
			link: '/about'
		},
		{
			image: data.skills.childImageSharp.fluid,
			select: data.skillsselect.childImageSharp.fluid,
			name: 'SKILLS',
			link: '/skills'
		},
		{
			image: data.work.childImageSharp.fluid,
			select: data.workselect.childImageSharp.fluid,
			name: 'WORK',
			link: '/work'
		},
		{
			image: data.blog.childImageSharp.fluid,
			select: data.blogselect.childImageSharp.fluid,
			name: 'BLOG',
			link: '/blog'
		},
		{
			image: data.gallery.childImageSharp.fluid,
			select: data.galleryselect.childImageSharp.fluid,
			name: 'GALLERY',
			link: '/gallery'
		},
		{
			image: data.contact.childImageSharp.fluid,
			select: data.contactselect.childImageSharp.fluid,
			name: 'CONTACT',
			link: '/contact'
		}
	];
	const logo = {
		image: data.logo.childImageSharp.fluid,
		name: 'Logo'
	};

	return (
		<div className="top-bar ml-0 pl-0 fixed-top overflow-hidden">
			<NavbarTop className="ml-0 pl-0" icons={icons} logo={logo} path={path} />
		</div>
	);
};

export default TopMenu;