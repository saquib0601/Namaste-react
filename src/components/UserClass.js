import React, { Component } from 'react'

class UserClass extends Component {

    constructor(props) {
        super(props);
        
        console.log(props)
        this.state = {
          count: 0,
          userInfo : {
            userName : "Dummy",
            userLocation: "Default",
          }
        }
    }

    async componentDidMount() {
      console.log("inside component DId MOunt")
      const data = await fetch("https://api.github.com/users/saquib0601")
      const json = await data.json();
      console.log(json)

      this.setState({
        userInfo : json
      });

    }

    componentDidUpdate() {
      console.log("inside child COmponenetDidUpdate")
    }

    componentWillUnmount() {
      console.log("Inside child compoenentWillUnmount")
    }

  render() {
    const { name, location } = this.props;
    const { login, html_url, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Count : {this.state.count}</h2>
        <button onClick={()=> {
          this.setState({
            count : this.state.count + 1
          })
        }}
        >Count Increase</button>
        <h2>Name : {login}</h2>
        <h2>userUrl : {html_url}</h2>
        <h2>Contact : @saquib0601</h2>
        <h2>"-----------"</h2>
        <h2>Name : {name}</h2>
        <h2>Location : {location}</h2>
        <h2>Contact : @saquib0601</h2>
      </div>
    )
  }
}

export default UserClass;
