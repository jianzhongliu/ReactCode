import React from 'react'

import PropertyCell from './propertyCell'

var PropertyList = React.createClass({


	render:function (){
		return (
			<div>
				<h1>房源列表</h1>
				<PropertyCell/>
			</div>
			);
	}

})

export default PropertyList;