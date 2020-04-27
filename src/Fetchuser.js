import React from  'react'

class  Fetchuser extends React.Component{
    constructor(){
        super()
        this.state={
            user:{}
        }
    }
    componentDidMount(){
       fetch("https://jsonplaceholder.typicode.com/users")
      
        .then(response => response.json())
        .then(data => {
            this.setState({
                user : data
            })
        })
    }
    render(){
     
        return(
            <div>
              
                <p>hello</p>
            </div>
        );
    }
}

export default Fetchuser
