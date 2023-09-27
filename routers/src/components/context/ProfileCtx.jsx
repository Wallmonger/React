import { Component } from 'react';
import profileImg from '../../img/vader.jpg';
import ProfileData from './ProfileData';

class ProfileCtx extends Component 
{
    render() {
        return (
            <div className='container'>
                <h1>xxxxx</h1>
                <img src={profileImg} alt="lisa" className='img-thumbnail mb-3' width="700"/>

                <ProfileData />

            </div>
        )
    }
}

export default ProfileCtx;