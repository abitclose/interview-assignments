import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { Provider } from "react-redux"
import store from './store'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Link } from 'react-router-dom'
import utils from "./lib/utils";


/**
 * render react-app
 */
async function renderReactApp(){

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

/**
 * 应用初始化钩子
 * @returns {Promise<void>}
 */
export async function bootstrap() {
    console.log('react app bootstraped');
}

/**
 * 顶层应用 进入/挂载 本应用时的钩子
 * @param props 传递的参数
 * @returns {Promise<void>}
 */
export async function mount(props) {
    renderReactApp();
}

/**
 * * 顶层应用 退出/卸载 本应用时的钩子
 * @param props
 * @returns {Promise<void>}
 */
export async function unmount(props) {
    ReactDOM.unmountComponentAtNode(props.container ? props.container.querySelector('#root') : document.getElementById('root'));
}

/**
 * 使用 loadMicroApp 方式加载微应用时生效
 * @param props 更新世传递的属性值
 * @returns {Promise<void>}
 */
export async function update(props) {
    console.log('update props', props);
}

/**
 * 如果是独立启动，则直接渲染
 */
if(!window.__POWERED_BY_QIANKUN__){
    renderReactApp();
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
