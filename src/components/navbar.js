import React, { Component } from 'react';
import Img from 'gatsby-image';

import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import { Link } from 'gatsby';

// icons
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';
import { instagram } from 'react-icons-kit/fa/instagram';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import Media from 'react-media';

import './css/topmenu.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hoverIcon: '',
			path: ''
		};
	}

	componentDidMount() {
		this.setState({
			path: this.props.path.pathname
		});
	}

	onHover = (icon) => {
		this.setState({
			hoverIcon: icon
		});
	};

	offHover = () => {
		this.setState({
			hoverIcon: ''
		});
	};
	render() {
		const styles = {
			fadeIn: {
				animation: 'x 1.5s',
				animationName: Radium.keyframes(fadeIn, 'fadeIn')
			},
			slideInRight: {
				animation: 'x 1.5s',
				animationName: Radium.keyframes(fadeIn, 'fadeIn')
			}
		};

		return (
			<StyleRoot>
				<nav className="navbarTop navbar navbar-expand-md py-0 my-0 pl-0 ml-0" style={styles.slideInRight}>
					<StyleRoot>
						<a className="navbar-brand ml-1 pl-1" style={styles.fadeIn}>
							<Img
								fluid={this.props.logo.image}
								className="menuText"
								style={{
									width: '37px'
								}}
							/>
						</a>
					</StyleRoot>
					<div className="navbar mx-0 px-0 mx-auto">
						{this.props.icons.map((icon) => (
							<Link to={icon.link}>
								<a
									className="nav-item nav-link active px-1 mx-1 my-0 py-0"
									onMouseEnter={() => this.onHover(icon.name)}
									onMouseLeave={this.offHover}
									// onClick={() => this.iconSelect(icon.name)}
									style={{
										width: '37px'
									}}
								>
									{!(this.state.hoverIcon === icon.name) ? (
										<StyleRoot>
											<div className="menuText" style={styles.fadeIn}>
												{this.state.path === icon.link ? (
													<Img fluid={icon.select} className="menuText" />
												) : (
													<Img fluid={icon.image} className="menuText" />
												)}
											</div>
										</StyleRoot>
									) : (
										<StyleRoot
											style={{
												fontSize: '8px',
												textTransform: 'uppercase'
											}}
										>
											<p
												className="imageName text-center my-auto px-0 mx-auto"
												id="imageName"
												style={styles.fadeIn}
											>
												{icon.name}
											</p>
										</StyleRoot>
									)}
								</a>
							</Link>
						))}
					</div>
					<StyleRoot>
						<Media
							query="(min-width: 720px)"
							render={() => (
								<div className="navbar mx-0 pl-0 ml-auto flex-row mx-0 px-0" style={styles.fadeIn}>
									<a
										href="https://www.linkedin.com/in/ian-odhiambo/"
										style={{
											color: 'white'
										}}
										className="nav-item nav-link active mx-1 px-0"
									>
										<Icon size={20} icon={linkedin} />
									</a>
									<a
										href="https://github.com/Ianodad"
										style={{
											color: 'white'
										}}
										className="nav-item nav-link mx-1 px-0"
									>
										<Icon size={20} icon={github} />
									</a>
									<a
										href="#"
										style={{
											color: 'white'
										}}
										className="nav-item nav-link mx-1 px-0"
									>
										<Icon size={20} icon={twitter} />
									</a>
									<a
										href="https://www.instagram.com/ianodad/"
										style={{
											color: 'white'
										}}
										className="nav-item nav-link  mx-1 px-0"
										tabIndex={-1}
									>
										<Icon size={20} icon={instagram} />
									</a>
								</div>
							)}
						/>
					</StyleRoot>
				</nav>
			</StyleRoot>
		);
	}
}

export default Navbar;
