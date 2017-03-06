import React from 'react';



let data=[
  '白菜烩饼',
  '巧克力',
  '芒果糯米饭',
  '草莓冰激凌',
  '橙子',
  '屎',
  '屎',
  '屎',
  '黯然销魂饭',
  '不吃了',
  '火锅',
  '烤肉饭',
  '米线',
  '炒面皮',
  '油泼面',
  '看看你的肚子吧',
  '芋圆仙',
  '火山飘雪',
  '屎',
  '屎'
]
class EatWhat extends React.Component{
  constructor(){
    super();
    this.state={
      start:false,
      data,
      text:''
    }
  }
  select(){
  let result=this.state.data[Math.floor(Math.random()*this.state.data.length)]
  this.setState({text:result})
  }
  handleClick(){
    if (this.state.start) {
      this.setState({start:false})
      clearInterval(this.interval)
    } else {
      this.setState({start:true})
      this.interval=setInterval(()=>this.select(),50);
    }
  }
  render(){
      return(
        <div className='eat'>
          <p>今天吃什么:<span>{this.state.text}</span></p>
          <br/>
          <button className='btn btn-primary' onClick={this.handleClick.bind(this)}>{this.state.start?'停止':'开始'}</button>
        </div>
      )
  }
}
export default EatWhat;
