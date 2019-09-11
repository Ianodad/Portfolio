import PropTypes from "prop-types"
import React from "react"
import TopMenu from './topMenu';


const Header = ({ siteTitle, path }) => (
  <header className="container-fluid py-0 my-0 ml-0 pl-0">
    		<TopMenu path={path} />

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
