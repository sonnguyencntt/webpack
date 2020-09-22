import React, { Component } from 'react';

import './../../login.css';
import callApi from './../../ultis/apiCaller';

import { Redirect } from "react-router-dom";

import {connect} from 'react-redux';






class Login extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          userName : '',
          passWord : '',
          alert : {
          
            classcomponent : 'alert alert-danger',
            text : 'Tài khoản hoặc mật khẩu không đúng. Vui lòng kiểm tra lại ^-^',
            display : 'hide-alert'
        }
        };
      }
    
   
componentWillMount()
{
    this.props.redirect_func({
        type : {
            redirect : {
              type : 'REDIRECT_PAGES',
              data : 'not_verfication'
            }
          }
       })
}
 submit = (callback) =>{
     const data = {username : this.state.userName,
                    password : this.state.passWord}
    callApi('checkpass', 'POST', data).then(res =>{
        console.log(res);
       
        if(typeof res.data.token != 'undefined')
        {
            document.cookie = res.data.token
            callback(true,res.data.user[0])
            
        }
        else
        {
            callback(false,null)

            var alert = {...this.state.alert};
            alert.display = '';
            this.setState({alert:alert})
        }
      
       
     });
    //  this.setState({redirect:true})
 }
 onchange = (e)=>{
    var value = e.target.value;
    var name = e.target.name
     this.setState({
         [name] : value
     });
 }
  render() 
  {
    console.log('login')

    if (this.props.redirect == true) {
       
        return <Redirect to={{
            pathname: '/',
            
        }}
/>
      }
    return (

<div className="cont">
<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 alert-position" id = {this.state.alert.display}>
		
		<div class="col-xs-7 col-sm-7 col-md-7 col-lg-7">
			
		</div>
		
		<div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 alert-format">
		<div class={this.state.alert.classcomponent} id = "alert-text" role="alert">
  {this.state.alert.text}
</div>
		</div>
		
		
	</div>
    <div class="demo">
        <div class="login">
            <div class="imgcontainer">
                <img src="https://i.pinimg.com/564x/87/49/1b/87491b914706f1beecb87434f5a01fd8.jpg" alt="Avatar" class="avatar"/>
                   
            </div>
            <div class="login__coffee">
               <p>Login</p>
            </div>
            <div class="login__form">
                <div class="login__row">
                    <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
                        <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
                    </svg>
                    <input type="text" name='userName' onChange = {(e)=>{this.onchange(e)}} class="login__input name" placeholder="Username" value = {this.state.userName}/>
                </div>
                <div class="login__row">
                    <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
                        <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
                    </svg>
                    <input type="password" name = 'passWord' onChange = {(e)=>{this.onchange(e)}} class="login__input pass" placeholder="Password" value = {this.state.passWord}/>
                </div>
                <button onClick = {()=>{this.submit((data,user)=>{
                    this.props.redirect_func({
                        type :{
                            redirect : {
                                type : 'REDIRECT_PAGES',
                                data : data

                            },
                            get_idUser : {
                                type : 'GET_ID_USER',
                                data : user
                            }
                        }
                    })
                })}} class="login__submit">Sign in</button>
                <p class="login__signup">Don't have an account? &nbsp;<a>Sign up</a></p>
            </div>
        </div>
    </div>
</div>
    );
  }
}


const  mapStateToProps = state =>{
  
    console.log(state);
      return{
       redirect : state.table.redirect
    
      }
    };
    
    
    const mapDispatchToProps = (dispatch, props) =>{
      return {
        redirect_func : (tap) =>{
          dispatch(tap)
        },
        
      }
    }
    
    
    export default connect(mapStateToProps,mapDispatchToProps)(Login);