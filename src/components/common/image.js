import React, { Component } from 'react';
import Particles from 'react-particles-js';

class image extends Component {
	render() {
		return (
			<div
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%'
				}}
			>
				<Particles
					params={{
						particles: {
							number: {
								value: 8,
								density: {
									enable: true,
									value_area: 800
								}
							},
							line_linked: {
								enable: false
							},
							move: {
								speed: 3,
								out_mode: 'out'
							},
							shape: {
								type: [ 'images' ],
								images: this.props.skills
							},
							color: {
								value: '#CCC'
							},
							size: {
								value: 30,
								random: false,
								anim: {
									enable: true,
									speed: 4,
									size_min: 10,
									sync: false
								}
							}
						}
					}}
				/>
			</div>
		);
	}
}

export default image;
