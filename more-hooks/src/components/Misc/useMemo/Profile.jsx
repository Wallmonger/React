import { memo } from 'react';

function Profile({profile, count}) {
    console.log('Profile Component')

    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item"><p className="h2">User ID: #{count}</p> </li>
                <li className="list-group-item"><strong>Name:</strong> {profile.name}</li>
                <li className="list-group-item"><strong>Username:</strong> {profile.username}</li>
                <li className="list-group-item"><strong>Email:</strong>  {profile.email}</li>
            </ul>
        </div>
    )
}

export default memo(Profile);