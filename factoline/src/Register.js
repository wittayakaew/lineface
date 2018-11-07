import React from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
import axios from 'axios'
class Register extends React.Component{
    constructor(props){
        super(props)
            this.state= {
                name:"John Smith",
                email : "johnsmiht@example.com",
                picture: "https://bulma.io/image/placeholder/96x96.png"
            }
            this.responseFacebook = this.responseFacebook.bind(this)
    }
    responseFacebook(response){
        console.log(response)
        this.setState({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })

        var data = ({
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })

        axios.post("http://localhost:3000/login",data).then((res)=>{
         console.log(res)
         
     })

    }
    render(){
        return(
            <div className="App">
                <FacebookLogin
                appId='1566900763410267'
                fields="name,email,picture"
                callback={this.responseFacebook}
                />
                <div>
                    <figure>
                        <img src={this.state.picture} alt="Not found"/>
                    </figure>
                    <div>
                        <p>{this.state.name}</p>
                        <p>{this.state.email}</p>
                        </div>

                    </div>
            </div>
        )
    }
}

export default Register