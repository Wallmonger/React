import { Component } from 'react';
import axios from 'axios';
import profileImg from '../img/blank_profile.png';
class Profile extends Component 
{

    state = {
        data : {}
    }

    componentDidMount() {
        const dataId = this.props.match.params.profileId;

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                this.setState({
                    data: response.data[dataId]
                })
            })
            .catch((error) => {
                console.error("There is an error: " + error)
            })
    }

    render() {

        const {email, name, phone} = this.state.data;

        return(
            <div className='container mt-3'>
                <h1>Profile</h1>
                <img src={profileImg} alt="profile" width="200"/>

                <ul className='list-group list-group-flush'>
                    <li className="list-group-item"><strong>Name :</strong> {name}</li>
                    <li className="list-group-item"><strong>Email :</strong> {email}</li>
                    <li className="list-group-item"><strong>Phone :</strong> {phone}</li>
                </ul>
            </div>
        )
    }
}

export default Profile;