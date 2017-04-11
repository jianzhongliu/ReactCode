
import React from 'react';

import App from './App'
import Input from 'antd/lib/input';
import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';

require('../css/login.css');
require('antd/lib/input/style/index.css');
require('antd/lib/button/style/index.css');

var Login = React.createClass({
 render:function (){
 	return (
 		<div style={{borderColor:'#d2d2d2',borderWidth:'1px',borderStyle:'solid'}}>
 			<div className='login-title'>
	 			<h2 className="login-login-title">用户登录</h2>
	 			<h6 className = 'login-login-register'>还没有链家账号？<a href='' style={{color:'red'}}>马上注册</a></h6>
 			</div>

 			<div className='login-input'>
 				<Input style={{height:'30px', width:'calc(100% - 2px)',padding:'0'}}
			        placeholder="请输入用户名"
			        onChange={this.onChangeUserName} />

			      <Input style={{height:'30px',width:'calc(100% - 2px)', padding:'0',marginTop:'10px'}}
			        placeholder="请输入密码"
			        onChange={this.onChangeUserName} />
 			</div>

		 <Button style={{height:'40px',width:'calc(100% - 20px)', margin:'10px',fontSize:'16px'}} type="primary" >登录</Button>

 		</div>);
 }
});

export default Login;