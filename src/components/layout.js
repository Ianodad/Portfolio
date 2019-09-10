/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router';

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Location>{({ navigate, location }) => (

      <div className="container-fluid px-0">

      <div className="header  container-fluid  my-0 py-0 ml-0 pl-0">
        <Header siteTitle={data.site.siteMetadata.title} author={data.site.siteMetadata.author} path={location} />
      </div>
      <div>
          <div className="main-right container-fluid float-right">
            <main className="container-fluid">{children}</main>
          </div>
    
      </div>
      </div>
      )}
    </Location>
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
