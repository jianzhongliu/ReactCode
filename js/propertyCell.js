
import React from 'react'
require ('../css/propertyCell.css');

var PropertyCell = React.createClass({
	render:function (){
		return (
			<div className='pro-cell clear'>
				<div className='pro-image' >
					<img src={this.props.sourceData.image_url} alt="图片文本描述" style={{height:'170px',width:'170px'}}/>
				</div>
				<div className='pro-panel'>
					<div className='pro-title'>
						<p>{this.props.sourceData.title}</p>
					</div>
					<div className='pro-block'>
						<div>{this.props.sourceData.block}</div>   
						<div>{this.props.sourceData.style}</div>   
						<div>{this.props.sourceData.area}</div>
					</div>
					<div className='pro-location'>
						<div>{this.props.sourceData.road}</div>
					</div>
					<div className='pro-tag'>
						<div>{this.props.sourceData.road}</div>
					</div>
				</div>
				<div className='pro-price'>
					<div className='pro-priceItem'>
						<h1 sytle={{height:'30px'}}>{this.props.sourceData.total_price}<span style={{fontSize:'12px',color:'red',height:'30px'}}>万</span></h1>
					</div>
				</div>
				<div className = 'pro-views'>
					<h1>{this.props.sourceData.views}<font style={{color:'red'}}>人</font></h1>
				</div>
			</div>
			);
	}
});

export default PropertyCell;