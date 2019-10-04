import React from 'react';
import Img from 'gatsby-image';
import '../css/work.css';


const Workout = (props) => {
	return (
		<div className="wrapper mx-auto d-flex flex-wrap">
			{props.images.map((image) => {
				return (
					<div className="card mx-4 my-4" >
						<div className="img overflow-hidden">
							<Img fluid={image.image} />
						</div>
						<div className="info">
							<h1>{image.title}</h1>
							<p>{image.info}</p>
							<div className="buttons d-flex flex-column">
								<button className="px-2 mb-1 mx-auto w-100 code-btn">
									<a className="code-link" href={image.code} target="_blank">
										Code
									</a>
								</button>
								<button className="px-2  mt-1 mx-auto w-100 web-btn">
									<a   className="web-link" href={image.website} target="_blank">
										Website
									</a>
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default Workout;
