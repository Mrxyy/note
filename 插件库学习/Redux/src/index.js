// import {
// 	createStore,
// 	Store,
// 	combineReducers,
// 	applyMiddleware,
// 	bindActionCreators,
// 	compose
// } from "redux"
// // 编写redux
// function add(s = [],a){
//     console.log(a.type);
// 	if(a.type == "UI"){
//         console.log(s,2222222222222);
//         return a
//     }
//     console.log(s,44444444);
//     return s
// }
// function rem(s,a){
	
// }

// //编写action 函数
// function actioner(ui){
// 	return {
// 		type:ui,
// 		text:123
// 	}
// }

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);
console.log(store.getState())
// 可以手动订阅更新，也可以事件绑定到视图层。

store.subscribe(() =>
  console.log(store.getState())
);
// //添加
// let store =  createStore(add)
// console.log(store.getState());
// store.dispatch(actioner("UI"))
// store.dispatch(actioner("U"))
// console.log(store.getState());

//TODO
import React,{createContext} from 'react'
import { render} from 'react-dom'
// import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
// console.log(React,render,Provider,createStore,document.getElementById('app'));
// let store = createStore(todoApp)
let cex = createContext("a")
// let {Provider} = cex
// console.log(store,store.getState());
class Provider extends React.Component{
    constructor(props){
        super(props)
        let t = this
        console.log(props,74454,this.props)
        let b = this.props.store.a
        alert(b)
        Object.defineProperty(this.props.store,"a",{
            set(value){
                console.log(a,value)
                b = value
                // t.props.store.a = value
                t.forceUpdate()
                // t.render()
            },
            get(){
                // console.log(this,888)
                return b
            }
        })
    }
    render(){
        console.log(this.props.store.a,85)
        return (
            <cex.Provider value={this.props.store}> 
                {this.props.children}
            </cex.Provider>
        )
    }
}
Provider.contextType = cex;
function Al(){
    return <button onClick = {a}>+</button>
}
function Lpp(props){
    console.log(props,999)
    return <div>
         {props.children}
    </div>
}
function a(){
     store.a++
     console.log(store)
}
// 内部触发了 fx(state.fx,action) fx1(state.fx1,action) 
let store = {
    a:2
}
console.log(store)
render(
    
// provider 是框架内部创建了一个 createContext() 创建了一个context 我们把store传入
  // <Provider store={store}>
  //   <App />
    
  // </Provider>,
  <div>
    <Al></Al>
    <Provider store={store}>
        <Lpp>
           1232
        </Lpp>
    </Provider>
  </div>,
  document.getElementById('app')
)
	
console.log(store.a )