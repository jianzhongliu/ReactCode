import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router';
require('../css/App.css');
require('../css/iconfont.css');

var App = React.createClass({
  render() {
    return (
      <div style={{width:'100%',height:'100%',margin:'0px auto'}}>
            <div className='div-logo'>
              <div style={{marginLeft:'15px', float:'left',width:'40px',height:'40px',borderRadius:'8px', backgroundColor:'#000',textAlign:'center',lineHeight:'38px'}}>
                <span style={{fontSize:'24px',color:'#F6B549', backgroundColor:'#000',width:'50px'}} className="iconfont icon-test">&#xe609;</span>
              </div>

              <div style={{marginLeft:'10px', float:'left',textAlign:'left',fontFamily:"YouYuan"}}>58婚恋</div>

              <br/>
              <p style={{float:'left', marginLeft:'15px',fontSize:'14px', float:'left',textAlign:'left',lineHeight:'30px',fontFamily:"YouYuan"}}>高端的恋爱交友平台</p>
            </div>

            <div className='div-bg'>
                <h2 className='div-bg-content'><p>找优质对象，就上58婚恋！</p></h2>
            </div>            
            <div className='div-footer'>
              <p>联系我们：</p>
              <p>QQ：767381290</p>
              <p>版权所有@上海凉木信息科技有限公司 沪ICP备16052019号-1</p>
            </div>
      </div>
    );
  }
});

export default App;
/*// ReactDom.render(<App />, document.getElementById('app'));*/












