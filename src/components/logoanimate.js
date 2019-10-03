import React from 'react';
import './css/logo.css';

const Logoanimate = () => {
	return (
		// <div
		// 	className="homelogo"
		// 	style={{
		// 		width: '30em',
		// 		height: '25em'
		// 	}}
		// />
		
		<div className="homelogo" style={{
				width: '40em',
				height: '1em'
			}}>
        <svg className ="svgg" viewBox="0 0 700 500">
          <symbol id="s-text"><text textAnchor="middle" x="50%" y="50%" dy=".35em">iN</text></symbol>
          <use className="text" xlinkHref="#s-text" /><use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" /><use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
        </svg>
      </div>
	);
};

export default Logoanimate;
