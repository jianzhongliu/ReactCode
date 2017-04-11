import React from 'react';
import App from './app'
import Rodal from'rodal'
import Card from 'antd/lib/card';
import Login from './login';
import Register from './register';

require('rodal/src/rodal.css');
require('../css/About.css');

var Hello = React.createClass({
	getInitialState:function (){
		return {
			visible:false
		}
	},
  	show:function() {
        this.setState({ visible: true });
    },

    hide:function() {
        this.setState({ visible: false });
    },
  render() {
    return(<div>
    	<App/>
		<div style={{position:'flex',flexDirection:'row',margin:'10px',paddingTop:'10px'}}>
		      <button onClick={this.show} >showRodal</button>
			  <Card style={{ width: 400 ,top:40,boderWidth:'1px',borderColor:'#d3d3d3'}} bodyStyle={{ padding: 0,marginTop:0}}>
			  	<Login style={{width:400,height:200}}></Login>
			  </Card>
			  <Card style={{ width: 400 ,marginTop:'20px'}} bodyStyle={{ padding: 0,marginTop:0}}>
			  	<Register></Register>
			  </Card>
			  <Card style={{ width: 400 ,top:40,backgroundColor: '#d1d1d1'}} bodyStyle={{ padding: 0 ,marginTop:20}}>
				    <div className="custom-image">
				      <img alt="example" width="400" src="http://pic33.nipic.com/20130916/3420027_192919547000_2.jpg" />
				    </div>
				    <div className="custom-card">
				      <h3>Europe Street beat</h3>
				      <p>www.instagram.com</p>
				    </div>
			  </Card>
		</div>

    	<h1> Hello World!  </h1>
    	<h2>{this.props.params["userName"]}</h2> 
    	<h1>your passwd is </h1>
    	<h3>{this.props.params.userPasswd}</h3>
    	<div>

    	</div>
    	</div>);
  }
});

export default Hello;
