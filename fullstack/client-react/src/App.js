import React from 'react';
import './style/index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo from './components/Logo'
import SideMenu from "./components/widgets/SideMenu";

import {connect} from "react-redux";
import store, {ACTION_TYPES, getStoreValue} from './store'
import SiteBreadcrumb from "./components/widgets/SiteBreadcrumb";
import utils from "./lib/utils";
import {initApp} from "./lib/init";
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {

    state = {
        init : false
    }

    componentDidMount() {
        var that = this;

        initApp().then(result => {
            var config = getStoreValue('app.config')
            if (result === true){
                setTimeout(function () {
                    that.setState({ init : true })
                },config.debug ? 0 : 1800)
            }
        });
    }

    render() {

        if(!this.state.init){
            return (
                <div className='app-loading'> app loading ...</div>
            )
        }

        return (
            <Layout style={{minHeight: '100vh'}}>
                <SideMenu />
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}/>
                    <Content style={{margin: '0 16px'}}>
                        <SiteBreadcrumb />
                        <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                            Bill is a cat.
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>FullStack Case &amp; Created by white</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default connect()(App);
