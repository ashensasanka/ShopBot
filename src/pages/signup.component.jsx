import React, { Component } from 'react'
import { Button, Img, Line, Text } from "components";


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      fname:"",
      lname:"",
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {fname,lname,email,password}= this.state;
    console.log(fname,lname,email,password);
    fetch("http://localhost:5000/register",{
      method:"POST",
      crossDomain:true,
      headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        fname,
        email,
        lname,
        password
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userRegister1");
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className=" h-[712px] mx-auto relative w-full">
        <div className="absolute bg-gray-900 flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-9 md:px-5 right-[0] w-[41%]">
          <Text
            className="capitalize ml-8 md:ml-[0] sm:text-[43.33px] md:text-[49.33px] text-[57.33px] text-white-A700"
            size="txtPoppinsBold5733">
            SIGN UP
          </Text>
          <Text
            className="capitalize md:ml-[0] ml-[34px] mt-8 text-base text-white-A700"
            size="txtPoppinsRegular16">
            Enter Your Details
          </Text>
          <Line className=" md:ml-[0] mt-[10px] w-[81%]" />         
          <input
            style={{ borderRadius: '10px',background: '#202D42', color: 'white' }}
            type="text"
            className="p-2.5 placeholder-color text-base text-left w-full"
            placeholder="First name"
            onChange={e=>this.setState({fname: e.target.value})}/>
          <Line className=" md:ml-[0] mt-[10px] w-[81%]" />
          <input
            style={{ borderRadius: '10px',background: '#202D42', color: 'white' }} 
            type="text" 
            className="p-2.5 placeholder-color text-base text-left w-full" 
            placeholder="Last name" 
            onChange={e=>this.setState({lname: e.target.value})}/>
          <Line className=" md:ml-[0] mt-[10px] w-[81%]" />
          <input
            style={{ borderRadius: '10px',background: '#202D42', color: 'white' }}
            type="email"
            className="p-2.5 placeholder-color text-base text-left w-full"
            placeholder="Enter email"
            onChange={e=>this.setState({email: e.target.value})}/>
          <Line className=" md:ml-[0] mt-[10px] w-[81%]" />
          <input
            style={{ borderRadius: '10px',background: '#202D42', color: 'white' }}
            type="password"
            className="p-2.5 placeholder-color text-base text-left w-full"
            placeholder="Enter password"
            onChange={e=>this.setState({password: e.target.value})}/>
          <Line className=" md:ml-[0] mt-[50px] w-[81%]" />
          <Button type="submit" className="capitalize cursor-pointer font-bold min-w-[220px] sm:min-w-full md:ml-[0] ml-[354px] text-[19.2px] text-center">
            SINGUP
          </Button>
          <h1 className="capitalize mt-[-25px] text-base text-white-A700"
            style={{ color:'white',marginLeft: '20px' }}>
            Already registered <a href="/" style={{ color:'green'}}>sign in?</a>
          </h1>
          <Line className=" md:ml-[0] mt-[120px] w-[81%]" />
        </div>
        <div className="absolute bg-blue_gray-700 flex flex-col md:gap-10 gap-[0px] h-full inset-y-[0] justify-start left-[0] my-auto p-[59px] md:px-5 w-3/5">
          <Img
            className="h-[60px] md:h-auto ml-4 md:ml-[0] object-cover w-[27%]"
            src="images/img_untitled103.png"
            alt="untitled103"
          />
          <div className="flex flex-col mb-[0px] md:ml-[0] ml-[70px] mr-20 relative w-[70%] md:w-full">
            <Img
              className="h-[520px] mx-auto object-cover w-full"
              src="images/img_robo011.png"
              alt="robo011"
            />
            <div className="bg-gradient  h-[86px] ml-[177px] mt-[-32px] rounded-[106px] w-[36%] z-[1]"></div>
          </div>
          </div>
      </form>
    )
  }
}
