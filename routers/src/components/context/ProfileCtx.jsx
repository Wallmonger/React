import { Component } from 'react';
import profileImg from '../../img/vader.jpg';
import ProfileData from './ProfileData';
import MyContext from './MyContext';

class ProfileCtx extends Component 
{
    render() {

        let value = this.context;
        console.log(value)

        return (
            <div className='container'>
                <h1 className='my-3'>{this.props.info.name}</h1>
                <p>Age: {value.age}</p>
                <img src={profileImg} alt="vador" className='img-thumbnail mb-3' width="600"/>

                <ProfileData />

            </div>
        )
    }
}

// setting context of class
ProfileCtx.contextType = MyContext;

export default ProfileCtx;