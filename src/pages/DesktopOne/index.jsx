import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Img, Line, Text } from "components";


export default class Login extends Component{
  constructor(props) {
    super(props)
    this.state={
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const {email,password}= this.state;
    console.log(email,password);
    fetch("http://localhost:5000/login-user",{
      method:"POST",
      crossDomain:true,
      headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
        password,
      }),
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data, "userRegister");
      if(data.status==="ok"){
        alert("login Successful");
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);
        window.location.href = "./userDetails";
      }
    });
  }
  render() {
    return (
      <>
      <form className=" h-[712px] mx-auto relative w-full" onSubmit={this.handleSubmit}>
        <div className="absolute bg-gray-900 flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-9 md:px-5 right-[0] w-[41%]">
          <Text
            className="capitalize ml-8 md:ml-[0] sm:text-[43.33px] md:text-[49.33px] text-[57.33px] text-white-A700"
            size="txtPoppinsBold5733">
            SIGN IN
          </Text>
          <Text
            className="capitalize md:ml-[0] ml-[34px] mt-8 text-base text-white-A700"
            size="txtPoppinsRegular16">
            Sign in with email Address
          </Text>
          <Line className="bg-blue_gray-700 h-px ml-9 md:ml-[0] mt-[20px] w-[81%]" />
          <input
            style={{ borderRadius: '10px',background: '#202D42', color: 'white' }}
            name="emailaddress"
            placeholder="enter email"
            className=" p-2.5 placeholder-color text-base text-left w-full"
            // wrapClassName="md:ml-[0] ml-[31px] mt-8 w-[81%]"
            type="email"
            onChange={(e)=> this.setState({email: e.target.value})}/>
          <Line className=" md:ml-[0] mt-[10px] w-[81%]" />
          <input
            style={{ borderRadius: '10px' , background: '#202D42', color: 'white'}}
            name="password"
            placeholder="Password"
            className="lowercase p-2.5 placeholder-color text-base text-left w-full"
            // wrapClassName="md:ml-[0] ml-[31px] mt-[46px] w-[81%]"
            type="password"
            onChange={(e)=> this.setState({password: e.target.value})}/>
          <Button className="capitalize cursor-pointer font-bold min-w-[220px] sm:min-w-full md:ml-[0] ml-[24px] mt-10 text-[19.2px] text-center">
            SIGNIN
          </Button>
          <Link to="/sign-up">
          <Button className="capitalize cursor-pointer font-bold min-w-[220px] sm:min-w-full md:ml-[0] ml-[354px] text-[19.2px] text-center">
              SINGUP
          </Button>
          </Link>
            <h1 className="capitalize mt-[-25px] text-base text-white-A700" 
            style={{ color:'white',marginLeft: '20px' }}>
              Don't have an account Sign up here
            </h1>
          <Line className=" md:ml-[0] mt-[0px] w-[81%]" />
          <Text
            className="capitalize ml-9 md:ml-[0] mt-[47px] text-base text-white-A700"
            size="txtPoppinsRegular16"
          >
            Or continue with open account
          </Text>
          <Text
            className="bg-blue_gray-900 capitalize h-14 justify-center ml-9 md:ml-[0] mt-9 sm:px-5 px-[35px] py-[13px] rounded-lg text-[19.2px] text-shadow-ts text-white-A700 w-[419px]"
            size="txtPoppinsSemiBold192"
          >
            GOOGLE
          </Text>
          <Text
            className="capitalize md:ml-[0] ml-[35px] mt-[41px] text-[13.33px] text-blue_gray-900"
            size="txtPoppinsRegular1333"
          >
            <span className="text-blue_gray-700 font-poppins text-left font-normal">
              By registering you agree with our
            </span>
            <span className="text-light_blue-A400 font-poppins text-left font-normal">
              {" "}
              terms & conditions
            </span>
          </Text>
          <Text
            className="capitalize md:ml-[0] ml-[33px] mt-1 text-[13.33px] text-blue_gray-700"
            size="txtPoppinsRegular1333Bluegray700"
          >
            Powered by Siyol Sri Lanka private limited in collaborate with SLTC
          </Text>
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
    </>
    )
  }
}

