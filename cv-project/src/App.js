import React, { Component } from "react";
import uniqid from "uniqid";
import General from "./components/General";

class App extends Component {
    constructor() {
        super();

        this.state = {
            generalInfo: {
                name: '',
                email: '',
                phone: '',
                id: uniqid()
            },
            genInfo: [],
            educationInfo: {
                school: '',
                major: '',
                grad: '',
                id: uniqid(),
            },
            edInfo: [],
        };
    };

    handleNameChange = (e) => {
        this.setState({
            generalInfo: {
                name: e.target.value,
                email: this.state.generalInfo.email,
                phone: this.state.generalInfo.phone,
                id: this.state.generalInfo.id,
            }
        });
    };

    handleEmailChange = (e) => {
        this.setState({
            generalInfo: {
                name: this.state.generalInfo.name,
                email: e.target.value,
                phone: this.state.generalInfo.phone,
                id: this.state.generalInfo.id,
            }
        });
    };

    handlePhoneChange = (e) => {
        this.setState({
            generalInfo: {
                name: this.state.generalInfo.name,
                email: this.state.generalInfo.email,
                phone: e.target.value,
                id: this.state.generalInfo.id,
            }
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            genInfo: this.state.genInfo.concat(this.state.generalInfo),
            generalInfo: {
                name: '',
                email: '',
                phone: '',
                id: uniqid()
            },
        });
    };

    render() {
        const { generalInfo, genInfo } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor="singleInput">Enter Name</label>
                    <input
                        onChange={this.handleNameChange}
                        value={generalInfo.name}
                        name="name"
                        type="text"
                        id="generalInfoNameInput"
                    />
                    <label htmlFor="singleInput">Enter email</label>
                    <input
                        onChange={this.handleEmailChange}
                        value={generalInfo.email}
                        name="email"
                        type="email"
                        id="generalInfoEmailInput"
                    />
                    <label htmlFor="singleInput">Enter Phone Number</label>
                    <input
                        onChange={this.handlePhoneChange}
                        value={generalInfo.phone}
                        name="phone"
                        type="number"
                        id="generalInfoPhoneInput"
                    />
                    <button type="submit">
                        Add Name
                </button>
                </form>
                <General genInfo={genInfo} />
            </div>
        );
    }
}

export default App;