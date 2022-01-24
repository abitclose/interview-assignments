import React, { Component } from 'react';
import {connect} from "react-redux";
import {Layout, Menu} from "antd";
import Logo from "../Logo";
import * as Icons from '@ant-design/icons';
const { Sider } = Layout;
const { SubMenu } = Menu;

class SideMenu extends Component {

    state = {
        collapsed: false,
        menus : this.props.menus
    };



    getIcon = ( name )=>{
        return React.createElement(Icons[name])
    }

    onCollapse = collapsed => {
        this.setState({collapsed});
    };

    render() {

        const {collapsed , menus} = this.state;

        return (

            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <Logo collapsed={collapsed} />
                <Menu key="0" theme="dark" defaultOpenKeys={["0"]} defaultSelectedKeys={["0"]} mode="inline">
                    {menus.map((item , index) =>{
                        return (
                            <SubMenu key={index} icon={this.getIcon(item.icon)} title={item.title} >
                                {
                                    item.childs.map(subItem =>{
                                        return (
                                            <Menu.Item key={subItem.name} icon={this.getIcon(subItem.icon)}>
                                                {subItem.title}
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </SubMenu>
                        )
                    })}
                </Menu>
            </Sider>
        );
    }
}

export default connect(state =>{
    return {
        menus: state.app.menus
    }
},dispach => {
    return {

    }
})(SideMenu);