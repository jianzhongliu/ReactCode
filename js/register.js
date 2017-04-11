

import React from 'react';

import App from './App'
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

require('antd/lib/button/style/index.css');

require('../css/register.css');

var Register = React.createClass({
	render:function(){
		return (
			<div style={{borderWidth:'1px',borderColor:'#d3d3d3',borderStyle:'solid'}}>
				<div className='reg-form'>
			        <div className="input-field phone">
			          <input type='text'
			            placeholder="请输入手机号"
			            onChange={this.onChangeUserName} />
			            <Button style={{height:'30px',width:'100px', fontSize:'14px',fontColor:'#d6d6d6'}} type="primary" >发送验证码</Button>
			        </div>
				
				<div className="input-field">
					<input
			        placeholder="昵称"
			        onChange={this.onChangeUserName} />
				</div>
				<div className="input-field">
					<input type='text'
			        placeholder="请输入密码"
			        onChange={this.onChangeUserName} />
				</div>
				<div className="input-field">
					<input type='text'
			       	 placeholder="请确认新密码"
			        	onChange={this.onChangeUserName} />	
				</div>
				<div className="input-field">
				 	<input type='text'
			        placeholder="请输短信验证码"
			        onChange={this.onChangeUserName} />
				 	</div>

				 	

			        <Button style={{height:'40px',width:'calc(100% - 20px)', margin:'10px',fontSize:'16px',fontColor:'#d6d6d6'}} type="primary" >注册</Button>
			      </div>
			</div>
			);
	}
});

export default Register;