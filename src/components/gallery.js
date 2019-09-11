import React, { useState, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

const ImageGrid = () => {
	let photos = [];
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { absolutePath: { regex: "/(jpg)/" }, relativeDirectory: { eq: "gallery" } }) {
				edges {
					node {
						id
						name
						childImageSharp {
							fluid {
								base64
								tracedSVG
								aspectRatio
								src
								srcSet
								srcWebp
								srcSetWebp
								sizes
								originalImg
								originalName
								presentationWidth
								presentationHeight
							}
						}
					}
				}
			}
		}
	`);
	{
		data.allFile.edges.map((edge) =>
			photos.push({
				src: edge.node.childImageSharp.fluid.src,
				caption: edge.node.name,
				width: 5,
				height: 4
			})
		);
	}
	const [ currentImage, setCurrentImage ] = useState(0);
	const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
	};
	return (
		<div>
			<Gallery photos={photos} onClick={openLightbox} />
			<ModalGateway>
				{viewerIsOpen ? (
					<Modal onClose={closeLightbox}>
						<Carousel
							currentIndex={currentImage}
							views={photos.map((x) => ({
								...x,
								srcset: x.srcSet,
								caption: x.title
							}))}
						/>
					</Modal>
				) : null}
			</ModalGateway>
		</div>
	);
};

export default ImageGrid;
