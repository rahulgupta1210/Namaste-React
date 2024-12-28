
import React from 'react';
class UserClass extends React.Component {

    constructor(props) {//receive props from parent component
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "dummyname",
                location: "dummylocation",
                avatar_url: "dummyurl"
            }
        };
        console.log(this.props.name + "child constructor");

    }

    async componentDidMount() {
        this.timer = setInterval(() => {
            console.log("parent setInterval");
        }, 1000);
        console.log(this.props.name + "child componentDidMount");
        const data = await fetch("https://api.github.com/users/rahulgupta1210");
        const dataJson = await data.json();
        console.log(dataJson);
        this.setState({
            userInfo: dataJson
        });
    }

    componentDidUpdate() {
        console.log(this.props.name + "child componentDidUpdate");
    }

    componentWillUnmount() {
        setInterval.clear(this.timer);
        console.log(this.props.name + "child componentWillUnmount");
        
    }

        render() {
            //const { name, location } = this.props;
            const { count } = this.state;
            const { name, location ,avatar_url} = this.state.userInfo;
             console.log(this.props.name + "child render");
            return (
                <div className="user-card">
                    <img src={avatar_url} alt="avatar" />
                    <h2>Name:{name}</h2>
                    {/* <h2>Count:{count}</h2>
                    <button onClick={() => {
                        this.setState({ count: count + 1 })
                    }}>Count Increase</button> */}
                    <h3>Location:{location}</h3>
                </div>
            )
        }
    }

export default UserClass;