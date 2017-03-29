
import React from 'react'
import App from './App'

require('../css/About.css');

var About = React.createClass({
	getInitialState:function(){
		return {
			listItem:""
		};
	},
	listView:function (){
			var items = [['e','f'],['g','h'],['i','j'],['k','l'],['m','n']];
			var listDom = items.map(function(item){
					return (<div className='list-item'>
								<h1>{item[0]}</h1>
							</div>);
			});
			this.setState({listItem:listDom});
	},
	 render:function (){
	 	return (
		 		<div className='about'>
			 		<App className='navigation'/>
			 		<div className='banner'></div>
			 		<div className='hot'></div>
			 		<div className='content'> 
				 		<div className = 'main-list'>
				 			<div className='infomation'>
					 			<div className='message'></div>
								<div className='email'></div>
								<div className='notifycation'></div>
					 		</div>
					 		<div className='list-title'></div>
					 		<div className='list' onClick={this.listView}>
					 			{this.state.listItem}
					 		</div>
						</div>
				 		<div className='right-banner'>
				 			<div className='myinfo'></div>
				 			<div className='viewhistory'></div>
				 			<div className='faceback'></div>
				 			<div className='service'></div>
				 		</div>
			 		</div>
		 		</div>
	 		);
	 }
});

export default About;