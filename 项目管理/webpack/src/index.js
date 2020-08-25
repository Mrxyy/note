import _ from 'lodash';
// 内置可以导入json
import data from '../package.json';
// 导入css
import css from "./index.css"
// 导入png
import png from "./location.png"
console.log(data,png,css);

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());