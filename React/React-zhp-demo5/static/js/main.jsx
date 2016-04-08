'use strict';
var React = require('react');
var ReactDom = require('react-dom');
var Hello = React.createClass({
    getInitialState: function(){     //设置虚拟DOM初始值
        return {
            fontSize:'12px'
        }
    },
    render: function(){
        return (
            <div style={{fontSize:this.state.fontSize}}>Hello{this.props.name}</div>
        )
    },
    componentWillMount:function(){        //将要插入真实DOM

    },
    componentDidMount:function () {       //真实DOM插入完成
        var that = this;
        window.setTimeout(function(){
            that.setState({
                fontSize:'28px'
            })
        },1000)
    }
});
ReactDom.render(<Hello name="zp" />,document.getElementById("haha"));