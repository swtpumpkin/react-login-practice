import React, { Component } from 'react';
import axios from 'axios';
import API_HOST from '../../config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }
  handleClick() {
    const login_info = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(login_info)
    const req_address = `${API_HOST}/admin/login`;
    axios.post(req_address, login_info)
      .then(function (response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successfull");
        }
        else if (response.data.code === 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  enterSubmit(e) {
    if(e.charCode === 13) {
      this.handleClick();
    }
  }
  render(){
    return (
      <div>
        <h1>로그인</h1>
        <form>
          <label>
            아이디
          </label>
          <input
            type="text"
            name="username"
            placeholder="id"
            onChange={event =>
              this.setState({ username: event.target.value })
            }
          />
          <label>
            비밀번호
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={event =>
              this.setState({ password: event.target.value })
            }
            onKeyPress={this.enterSubmit}
          />
          <button
            type="button"
            onClick={this.handleClick}
          >
            제출
          </button>
        </form>
      </div>
    )
  }
}

export default Login;