import React from 'react'

import PropertyCell from './propertyCell'



var PropertyList = React.createClass({

	getInitialState:function (){
		return {
			propertyView:'加载中...'
		};
	},
	componentDidMount:function (){
		this.listData();		
	},
	listData:function() {
		var propertys = {
			image_url:'http://img02.tooopen.com/images/20140504/sy_60294738471.jpg',
			title:'有钥匙房源，上门实勘，配套完善，业主诚意出售',
			block:'华浜新村 ',
			style:'2室0厅',
			area:'51.81平',
			road:'宝山 淞南 | 高区/5层 | 朝南 | 1985年建',
			total_price:'215',
			price:'41497',
			views:'28',
			tag:['ral','five','only','door']
		};
		var arrayProperty = [propertys];
		var propertyHtml = arrayProperty.map(function(item){
			return (<PropertyCell sourceData={item} key={item.image_url}/>);
		});
		this.setState({
			propertyView:propertyHtml
		});
	},

	render:function (){
		return (
			<div onClick={this.listData}>
				{this.state.propertyView}
			</div>
			);
	}

})

export default PropertyList;