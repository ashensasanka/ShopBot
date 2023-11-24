import { Menu } from 'antd'
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined} from '@ant-design/icons';

const MenuList = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark': 'light'} mode='inline' className='menu-bar'>
        <Menu.Item key="home" icon={<HomeOutlined/>}>Home</Menu.Item>
            <Menu.SubMenu key="tasks" icon={<BarsOutlined/> } title="Orders">
                <Menu.Item key="task-1">Now</Menu.Item>
                <Menu.Item key="task-2">Take Away</Menu.Item>
                <Menu.SubMenu key='subtasks' title='SetPriority'>
                    <Menu.Item key='subtask-1'>Urgent</Menu.Item>
                    <Menu.Item key='subtask-2'>Low</Menu.Item>
                </Menu.SubMenu>
            </Menu.SubMenu>
        <Menu.Item key="activity" icon={<AppstoreOutlined/>}>Activity</Menu.Item>
        <Menu.Item key="prograss" icon={<AreaChartOutlined/>}>Prograss</Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined/>}>Payment</Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined/>}>Setting</Menu.Item>
    </Menu>
  )
}

export default MenuList