
import React from 'react';
class UserClass extends React.Component {

    constructor(props) {//receive props from parent component
        super(props);
        console.log(props);

        this.state = {
            count: 0,
            count2: 2
        };
        console.log(this.props.name + "child constructor");

    }

    componentDidMount() {
        console.log(this.props.name + "child componentDidMount");
    }

    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        console.log(this.props.name + "child render");
        return (
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h2>Count:{count}</h2>
                <button onClick={() => {
                    this.setState({ count: count + 1 })
                }}>Count Increase</button>
                <h3>Location:{location}</h3>
                <h4>Name:Rahul</h4>
            </div>
        )
    }
}

export default UserClass;