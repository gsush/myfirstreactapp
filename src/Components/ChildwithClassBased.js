import React, { Component } from 'react'

class ChildwithClassBased extends Component {

    render() {
        let { username, age, company, salary } = this.users.props;
        return (
            <div>
                <h1>i am {username}</h1>
                <p>my age{age}</p>
                <p>my company{company}</p>
                <p>my salary {salary}</p>
            </div>
        )
    }
}
export default ChildwithClassBased;