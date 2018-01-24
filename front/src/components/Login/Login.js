import React, { Component } from 'react';
import axios from 'axios';
import API_HOST from '../../config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      password: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }
  handleClick() {
    const login_info = {
      user_id: this.state.user_id,
      password: this.state.password
    };
    console.log(login_info)
    const req_address = `${API_HOST}/auth/login`;
    axios.post(req_address, login_info)
      .then(function (response) {
        console.log(response);
        if (response.data.code === 200) {
          console.log("Login successfull");
        }
        else if (response.data.code === 204) {
          console.log("user_id password do not match");
          alert("user_id password do not match")
        }
        else {
          console.log("user_id does not exists");
          alert("user_id does not exist");
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
            name="user_id"
            placeholder="id"
            onChange={event =>
              this.setState({ user_id: event.target.value })
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