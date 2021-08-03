import './App.css';
import user1 from '../src/image/user1.png'
import user2 from '../src/image/user2.png'
import user3 from '../src/image/user3.png'
import React, { Component } from 'react'
import {TiTick} from 'react-icons/ti'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      basicPrice : "17",
      plusPrice : "74",
      proPrice : "$ 140",
      monthly: true,
      yearly:false,
      seemore: null,
      user3: user3,
      pro: "PRO" ,
      month:"/Month",
      line1 :" ",
      line2 :"",
      line3 :"",
      line4 :"",
      icon : "",
      plus:<AiOutlinePlus />,
      more :"see more",
      act : true,
      doller: "$"
    }
this.monthly = this.monthly.bind(this)
  }
  monthly(){
    console.log("working")        
    this.setState({   
      basicPrice : "14",
      plusPrice : "74",    
      proPrice : "140", 
      monthly : true,
      yearly:false,
      doller: "$"
    });
  }
  yearly=()=>{
    this.setState({
      basicPrice :"20",
      plusPrice :"99",
      proPrice :"195",
      monthly:false,
      yearly:true,
      doller: "$"
    });
    console.log("yearly", this.state.basicPrice)
  }
  seemore=()=>{
 
    this.setState({
      user3: "",
      pro: "x",
      proPrice : "",
      month: "",
      line1 :"Have your work stroed in a database ",
      line2 :"be searched by industy professionals",
      line3 :"monitor whho you share it with",
      line4 :"promote and share your books",
      icon : <TiTick />,
      more : "see less",
      plus : <AiOutlineMinus />,
      act : true,
      doller: ""
    });
  }
  close=()=>{
    if (this.state.monthly === true){
      this.setState({
        user3: user3,
        pro: "PRO" ,
        month:"/Month",
        proPrice: " 140",
        icon : "",
        line1 :" ",
        line2 :"",
        line3 :"",
        line4 :"",
        more : "see more",
        plus : <AiOutlinePlus />,
        act: false,
        doller: "$"
      }); 
    }else {
      this.setState({
        user3: user3,
        pro: "PRO" ,
        month:"/Month",
        doller: "$",
        proPrice: " 195",
        line1 :" ",
        line2 :"",
        line3 :"",
        line4 :"",
        icon : "",
        more : "see more",
        plus : <AiOutlinePlus />,
        act: false
      })
      
    }
 
  }
  render() {
        return (
      <div className="container-fluid full">
        <div className="row head">
        <div>
          <h3>Pricing Plan</h3>
          <p>Chooese your plan by switching between the different prices</p>
          <span><button onClick={this.monthly} className={this.state.monthly ? "onmonthly mx-1": "monthy mx-1"}>Month</button><button onClick={()=>this.yearly()} className={this.state.yearly ? "onyearly":"yearly"}>Yearly</button></span>
        </div>
        <div className="row pt-5 justify-content-center">
        <div className="col-md-2 mx-3 user">
          <div className="content">
          <img className="userImage" src={user1} alt="user1"/>
          <p className="userp">BASIC <hr className="hr mx-auto"></hr></p>
          <p className="price pt-3"><span className="dollersymbole">$</span>  {this.state.basicPrice}</p>
          <p className="month mx-auto">/Month</p>
          <p className="projects"> <span className="tick"><TiTick /></span>5 Projects</p>
          </div>
         
          <div className="bottom mt-4">
          <button className="choosebtn "> Choose <AiOutlineRight /></button>
          </div>
</div>
<div className="col-md-2 mx-3 user">
<div className="content">
          <img className="userImage" src={user2} alt="user1"/>
          <p className="userp">PLUS <hr className="hr mx-auto"></hr></p>
          <p className="price pt-3"><span className="dollersymbole">$</span>  {this.state.plusPrice}</p>
          <p className="month mx-auto">/Month</p>
          <p className="projects"> <span className="tick"><TiTick /></span>5 Projects</p>
          <p className="projects"> <span className="tick"><TiTick /></span> Get 10 Getty pics </p>
   
          </div>
          <div className="bottom mt-4">
          <button className="choosebtn"> Choose <AiOutlineRight /></button>
          </div>
</div>
<div className="col-md-2 mx-3 user">
<div className="content">
<div className ={ this.state.act ? "linehight":"normallinehight"}>
         <span> <img className="userImage" src={this.state.user3}/></span> 
          <p className="userp" onClick={this.close}>{this.state.pro}<hr className="hr mx-auto"></hr></p>
          <p className="price pt-3"><span className="dollersymbole">{this.state.doller}</span>  {this.state.proPrice}</p>
          <p className="month mx-auto">{this.state.month}</p>
          
          <p className="projects"> <span className="tick"><TiTick /></span>5 Projects</p>
          <p className="projects"> <span className="tick"><TiTick /></span> Get 20 Getty pics </p>
          <p className="projects"> <span className="tick">{this.state.icon}</span> {this.state.line1} </p>
          <p className="projects"> <span className="tick">{this.state.icon}</span> {this.state.line2} </p>
          <p className="projects"> <span className="tick">{this.state.icon}</span> {this.state.line3} </p>
          <p className="projects"> <span className="tick">{this.state.icon}</span> {this.state.line4} </p>
          <div  onClick={this.seemore} ><p className="projects"> <span className="tick"> {this.state.plus} </span> <u> {this.state.more} </u></p></div>
          </div>
         </div>
          <div className="bottom mt-4">
          <button className="choosebtn sticky-top"> Choose <AiOutlineRight /></button>
          </div>
</div>

        </div>
      </div>
      </div>
      
    )
  }
}
export default App;
