import React, { Component } from 'react';

import { Link } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';
import { instagram } from 'react-icons-kit/fa/instagram';
import { linkedin } from 'react-icons-kit/fa/linkedin';

import { fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { Location } from '@reach/router';

import Img from 'gatsby-image';

class mainmenu extends Component {
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
				<div
					className="side-bar flex-column row px-0 mx-0"
					style={{
						width: '95px'
					}}
				>
					<div className="top-logo px-0 mx-0 col-12" style={styles.fadeIn}>
						<StyleRoot>
							<a className="navbar-brand ml-1 pl-1" style={styles.fadeIn}>
								<Img
									fluid={this.props.logo.image}
									className="menuText"
									style={{
										width: '37px'
									}}
								/>
								{/* {()=>this.transition(this.props.logo.image)} */}
							</a>
						</StyleRoot>
					</div>
					<StyleRoot>
						<div className="sidenav  mx-auto my-auto col-12" style={styles.fadeIn}>
							<ul className="nav flex-column  mx-2">
								{this.props.icons.map((icon) => (
									<li
										className="nav-link active pb-1 my-auto"
										id="home"
										style={{
											height: '50px'
										}}
									>
										<Link to={icon.link}>
											<a
												className="home-tag"
												style={styles.fadeIn}
												onMouseEnter={() => this.onHover(icon.name)}
												onMouseLeave={this.offHover}
											>
												<div
													className="over"
													style={{
														width: '30px'
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
														<StyleRoot>
															<p
																className="imageName text-center my-auto mx-auto pr-1"
																id="imageName"
																style={{
																	fontSize: '8px',
																	width: '40px'
																}}
															>
																{icon.name}
															</p>
														</StyleRoot>
													)}
												</div>
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</StyleRoot>
					<div className="social col-12 mx-auto pl-3" style={styles.fadeIn}>
						<ul className="nav flex-column">
							<li className="nav-link py-0">
								<a
									href="https://www.linkedin.com/in/ian-odhiambo/"
									style={{
										color: 'white'
									}}
								>
									<Icon size={20} icon={linkedin} />
								</a>
							</li>
							<li className="nav-link py-0">
								<a
									href="https://github.com/Ianodad"
									style={{
										color: 'white'
									}}
								>
									<Icon size={20} icon={github} />
								</a>
							</li>
							<li className="nav-link  py-0">
								<a
									href="#twitter"
									style={{
										color: 'white'
									}}
								>
									<Icon size={20} icon={twitter} />
								</a>
							</li>
							<li className="nav-link  py-0">
								<a
									href="https://www.instagram.com/ianodad/"
									style={{
										color: 'white'
									}}
								>
									<Icon size={20} icon={instagram} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</StyleRoot>
		);
	}
}

export default mainmenu;
