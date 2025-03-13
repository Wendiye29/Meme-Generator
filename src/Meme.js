import React, {Component} from "react";
import a from "./Imgg/1.jpg"

//import c from "./Imgg/3.png"
import df from "./Imgg/4.jpg"
import e from "./Imgg/5.jpg" 
import f from "./Imgg/6.jpg"
import g from "./Imgg/8.jpeg"
import hi from "./Imgg/8.jpeg"
import he from "./Imgg/8.jpeg"
import hy from "./Imgg/8.jpeg"
class Generating extends Component{
constructor(){
    super()
    this.state={
        topText:"",
        bottomText: "",
        imageIndex:0,
        allImages:[
            a, df, e, f,g,hi, he, hy
        ]
    }
    this.Changing=this.Changing.bind(this)
    this.txtChanging=this.txtChanging.bind(this)
}
Changing(event){
event.preventDefault()
this.setState((prevState =>({
    imageIndex:(prevState.imageIndex + 1) % prevState.allImages.length
})))
}
txtChanging(event){
    this.setState({
[event.target.name]:event.target.value
    }
)
}
render(){
    return(
        <form onSubmit={this.Changing}>
            <input type="text"
            name="topText"
            placeholder="top Text"
            onChange={this.txtChanging} />
            <input type="text"
            name="bottomText"
            placeholder="bottom Text"
            onChange={this.txtChanging} 
            />
            <button >Generate</button>
            <div>
                <h3>{this.state.topText}</h3>
                <img className="img" src={this.state.allImages[this.state.imageIndex]}
                alt="picture"/>
                <h3 h>{this.state.bottomText}</h3>
            </div>
        </form>
    )
}
}
export default Generating