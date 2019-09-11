import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './css/gallery.css';
import Gallery from '../components/gallery'



const Gallerypage = () => (
  <Layout>
    <SEO title="Photography" />
    <div className="container-fluid gallery row">
				<div className="align-center mx-auto">
					 <Gallery/>
				</div>
			</div>

  </Layout>
)

export default Gallerypage