import React from 'react';
import ReactDOM from 'react-dom';
require('./css/basic.scss')
require('./css/index.css')

const Index=()=>{
    return <div className="test">this is test 文d字</div>
}

ReactDOM.render(<Index/>,document.getElementById("index"))