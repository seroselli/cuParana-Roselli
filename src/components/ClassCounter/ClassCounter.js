import { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(props){
        super(props)
        if(props.event===""){
            this.state = { count: 0} 
            this.styles = {
                display:"block"
            }
            
        }
        else{
           this.state = { count: 0}  
           this.styles = {
            display:"none"
             }
        } 

    }

    decrement = () =>{
        if(this.state.count > 0){
            this.setState({
                count: this.state.count - 1
            })
        }

    }

    increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }



  render() {
    return (
        <>
        <div className='d-flex allign-center'>
                <div className="d-flex justify-content-center">
                    <button style={this.styles} className="btn btn-danger" onClick={this.decrement}>-</button>
                    <div className="align-middle px-3 my-auto fw-bold">
                        {this.state.count}
                     </div>
                     <button style={this.styles} className="btn btn-success" onClick={this.increment}>+</button>
                </div>
        </div>

        </>

    )
  }
}
