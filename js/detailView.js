import React from 'react'
import  'whatwg-fetch'
require ('../css/detailView.css');
var DetailVeiw = React.createClass ({
    getInitialState:function () {
        return {
            header_icon:"",
            user_id:'',
            luck_name:'',
            base_info_str:'',
            introduction:'',
            image_array:[],
            title:'58婚恋'
        };
    },
    setTitle:function(title){
        document.title=title;
    },

    tongji:function(){
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7eb93374b315af8a875b56e8ce1319ea";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
        })();
    },

request:function(url){
    fetch(url)
    .then(function(response) {
        return response.json()
    }).then(function(json) {
        console.log('parsed json', json);
alert(json.result.base_info.images);
        this.setState(
        {
            result:json,
            header_icon:json.result.base_info.header_icon,
            user_id:json.result.base_info.user_id,
            luck_name:json.result.base_info.luck_name,
            introduction:json.result.base_info.introduction,
            image_array:json.result.base_info.images.split("|"),
            base_info_str:'工作生活在：'+json.result.base_info.current_location+' | '+json.result.base_info.wages+' | 有房 | 期望'+json.result.base_info.marray_time+'结婚',
            title:'58婚恋'+json.result.base_info.luck_name+'的主页',
        });
    }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
    })
},
componentDidMount:function(){
    var id = this.props.params["id"];
    var url = 'http://localhost:2080/users/get_user_detail?user_id='+ id;
    this.request(url);
},
render:function (){
    var user_id = this.state.user_id;
    var id = this.props.params["id"];
    var url = 'http://localhost:2080/users/get_user_detail?user_id='+ id;
    // this.request(url);
    this.tongji();
    alert(this.state.title);
    this.setTitle(this.state.title);
    return (
        <div className='detail-content'>
            <meta name="viewport" content="width=640,initial-scale=0.5,maximum-scale=0.5, minimum-scale=0.5,user-scalable=no"/>
            <div className='img-border' style={{background: "url('"+this.state.header_icon+"') no-repeat center center",
            backgroundRepeat: "no-repeat",  
            backgroundPosition: "center center",  
            backgroundSize:"cover"}}>
                <p>{parseInt(id/45678)}</p>
            </div>
            <div className='base-info'>
                <ul>
                    <li style={{fontWeight:'bold',fontSize:'28px'}}>{this.state.luck_name}</li>
                    <li>UID:{id} </li>
                    <li style={{size:'10px',fontSize:'26px'}}>{this.state.base_info_str}</li>
                </ul>
            </div>
            <div className='image-info'>
                <p>照片（{this.state.image_array.length}）</p>
            </div>
            <div className='image-view'>
					<img style={{background:"url('"+this.state.image_array[0]+"') no-repeat center center"}} ></img>
					<img style={{background:"url('"+this.state.image_array[1]+"') no-repeat center center"}} ></img>
					<img style={{background:"url('"+this.state.image_array[2]+"') no-repeat center center"}} ></img>
					<img style={{background:"url('"+this.state.image_array[3]+"') no-repeat center center"}} ></img>
					<img style={{background:"url('"+this.state.image_array[4]+"') no-repeat center center"}} ></img>
					<img style={{background:"url('"+this.state.image_array[5]+"') no-repeat center center"}} ></img>
					<img style={{background:"url('"+this.state.image_array[6]+"') no-repeat center center"}} ></img>
					<img style={{background:"url('"+this.state.image_array[7]+"') no-repeat center center"}} ></img>

        	</div>
            <div className='check-info'>
                <p style={{textAlign:'center',width:'100%',color:'#cc9c33'}}>已认证</p>
            </div>
            <div className='check-info'>
                <p>学历认证</p>
                <b>已认证</b>
            </div>
            <div className='check-info'>
                <p>房产认证</p>
                <b>已认证</b>
            </div>
            <div className='check-info'>
                <p>车辆认证</p>
                <b>已认证</b>
            </div>
            <div className='check-info'>
                <p>视频认证</p>
                <b>已认证</b>
            </div>
            <div className='myself-info'>
                <b>自我介绍</b>
                <p> {this.state.introduction}</p>
            </div>
        </div>
    );

}

});

export default DetailVeiw;