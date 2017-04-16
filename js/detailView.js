import React from 'react'

require ('../css/detailView.css');
var DetailVeiw = React.createClass ({
setTitle:function(title){
    document.title=title;
},
tongji:function(){
    var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a08c311f6f602dc863400892a8ffcc15";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();
},
render:function (){
    this.tongji();
    this.setTitle('58婚恋-durex的征婚帖');
    return (
        <div className='detail-content'>
            <meta name="viewport" content="width=640,initial-scale=0.5,maximum-scale=0.5, minimum-scale=0.5,user-scalable=no"/>
            <div className='img-border'>
                <p>浏览13980次</p>
            </div>
            <div className='base-info'>
                <ul>
                    <li style={{fontWeight:'bold',fontSize:'28px'}}>durex</li>
                    <li>UID:9147926</li>
                    <li>生活在:上海黄浦区 | 40万-60万 | 有房 | 期望半年内结婚</li>
                </ul>
            </div>
            <div className='image-info'>
                <p>照片（6）</p>
            </div>
            <div className='image-view'>
					<img style={{background:"url('https://qiubo-dev-static2.dongpinbang.com/media/images/e9/e95be5f75d15e529e85bd76c9f80cd76e2ca3a32.jpg') no-repeat center center"}} ></img>
					<img style={{background:"url('https://qiubo-dev-static2.dongpinbang.com/media/images/3c/3cc026fc96a63f4849b0ea5e5eecbdd365cdc36e.jpg') no-repeat center center"}}></img>
					<img style={{background:"url('https://qiubo-dev-static2.dongpinbang.com/media/images/eb/eb8da10759c8d873a0570c1dd6af08c673d1f34f.jpg') no-repeat center center"}}></img>
					<img style={{background:"url('https://qiubo-dev-static2.dongpinbang.com/media/images/ef/efca1ea2ac673fca1a2401fcfd3e9fe4ad751b32.jpg') no-repeat center center"}}></img>
					<img style={{background:"url('https://qiubo-dev-static2.dongpinbang.com/media/images/44/44d30f40b9b5fbfb745425f2fc5b861737879fe5.jpg') no-repeat center center"}}></img>
					<img style={{background:"url('https://qiubo-dev-static2.dongpinbang.com/media/images/da/dabf1114bb6afdb63c72b16166d529332b3161b0.jpg') no-repeat center center"}}></img>
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
                <p>      我的爱情观，各自经济独立又相互支持，一起打造美好生活，承担未知风险。任何一方出了问题，另一方独自也能支撑起两人生活，给对方休息、调整的空间和时间。 欢迎90后来点赞！</p>
            </div>
        </div>
    );

}

});

export default DetailVeiw;