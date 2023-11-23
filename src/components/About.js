import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props) {
        super(props);
        console.log("Parent Construcutor")
    }
    componentDidMount() {
        console.log("Inside parent COmponentDidMount")
    }
    render() {
        console.log("Parent Render")
        return (
            <div>
            <h1>About</h1>
            <div>
                loggedIn User :
                <UserContext.Consumer>
                    {(loggedInUser) => <h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>This is About Page of Saquib</h2>
            <UserClass name={"Saquib Alam (class)"} location={"kolkata"}/>
        </div>
        )
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is About Page of Saquib</h2>

//             {/* <User name={"Saquib Alam (function)"} location={"patna"}/> */}
//             <UserClass name={"Saquib Alam (class)"} location={"kolkata"}/>
//         </div>
//     )
// }

export default About;