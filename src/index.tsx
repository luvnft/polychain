import * as React from "react";
import * as ReactDOM from "react-dom";

interface HelloProps{
    message: string;
}

interface HelloState{
}

class Hello extends React.Component<HelloProps,HelloState>{
    render(){
        return <h1>Hello {this.props.message} </h1>;
    }
}

let div = document.createElement("div");
document.body.appendChild(div);
ReactDOM.render(<Hello message="PolyChain!"/>,div);