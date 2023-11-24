import React, { useState, useEffect } from "react";
import ChatMessage from "./chatMessage";
import { analyze } from "utils";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Layout, theme, Button } from "antd";
import Logo from "components/Logo"
import MenuList from "components/MenuList";
import ToggleThemeButton from "components/ToggleThemeButton";

const {Header, Sider} = Layout;

export default function ChatBot() {
  const loadingEle = document.querySelector('.loading')
  const toggleLoading = (show) => loadingEle.classList.toggle("d-none",show);
  const [userData, setUserData] = useState({});
  const [messages, setMessages] = useState([
    {
      message: 'Hi, May I have your name?',
    },
  ]);
  const [text, setText] = useState('');

  useEffect(() => {
    // toggleLoading(true);
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData(data.data);
      });
  }, []);

  const onSend = () => {
    toggleLoading(false);
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);

    // Simulate asynchronous behavior (e.g., API call) using setTimeout
    setTimeout(() => {
      toggleLoading(true); // Set loading to false after receiving the reply

      list = [...list, { message: reply }];
      setMessages(list);
    }, 2000); // Adjust the timeout based on your actual response time
  } else {
    toggleLoading(true); // Set loading to false if no reply is expected immediately

    list = [...list,
      {message: `Hi, ${text}`},{message: "How can I help you?"}];
    setMessages(list);
  }
    // setMessages(list);
    setText('');
    
    setTimeout(() => {
      document.querySelector('#copyright').scrollIntoView();
    }, 2000);
  };

  const logout = () => {
    window.localStorage.clear();
    window.location.href = './sign-in';
  };

  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token:{ colorBgContainer},
  } = theme.useToken();

  return (
    <div >
      <div >
        <Layout style={{ backgroundColor: '#202D42'  }}>
          <Sider className="sidebar" theme={darkTheme ? 'dark' : 'light'} collapsed={collapsed} collapsible trigger={null}>
            <Logo />
            
            <MenuList darkTheme={darkTheme} />
            <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
            <div>
              <br />
              <button onClick={logout} className="btn btn-primary btn-position">Log Out</button>
            </div>
          </Sider>
          <div style={{backgroundColor: '#202D42'}}>
          <Header style={{ padding: 0, background: '#202D42' ,backgroundColor: '#202D42'}}>
            <Button className='toggle' onClick={() => setCollapsed(!collapsed)} type="text" icon={collapsed ? <MenuUnfoldOutlined style={{ color: 'white' }}/> : <MenuFoldOutlined style={{ color: 'white' }}/>} />
          </Header>
          </div>
          
          <div style={{ backgroundColor: '#202D42', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <div className='chat-message' >
            {messages.length > 0 && messages.map((data, index) => <ChatMessage key={index} {...data} />)}
            <div className='loading d-flex d-none'>
              <div className='circle circle-1'></div>
              <div className='circle circle-2'></div>
              <div className='circle circle-3'></div>
            </div>
            <div className='d-flex ml-2'>
              <input type="text" style={{ backgroundColor: '#202D42', borderRadius: '10px', marginRight: '10px', color: 'white' }} className='form-control' value={text} onChange={(e) => setText(e.target.value)} />
              <button className='btn' style={{ backgroundColor: '#00C9FF', borderRadius: '20px' }} onClick={onSend}><FontAwesomeIcon icon={faPaperPlane} /></button>
            </div>
            <div id='copyright' className='ms-3'>
              Copyright reserved tamil skillhub
            </div>
          </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          
          </div>
        </Layout>
      </div>
      <div>
        
      </div>
      <div>
        
      </div>
      
      <div>
        
      </div>
    </div>
  );
}
