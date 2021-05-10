import React from 'react';
class StateX extends React.Component{
constructor (props){
    super(props);
    this.state = {
        companyName: "Developers Boat",
        estd:"2021",
        founder:" Vijaya Chandran ",
        expert:"Dynamic Website Development and SEO Services with SMM",
        city:"Hyderabad"
    };
}
changeColor=() =>{
    this.setState({color:"black"});
}
changeBg=()=>{
    this.setState({background:"red"});
}
render(){
    return(
        <div className="ReactDivf">
            <h3>We Are {this.state.companyName} in {this.state.city}</h3>
            <br></br>
            <p>{this.state.companyName} strated in {this.state.estd}. {this.state.founder} is a expert in {this.state.expert} in {this.state.city}.</p>
        </div>
    );
}
}
export default StateX;