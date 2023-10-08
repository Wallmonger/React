function Profile({profile, count}) {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item"><p className="h2">User ID: {count}</p> </li>
                <li className="list-group-item">Name: {profile.name}</li>
                <li className="list-group-item">Username: {profile.username}</li>
                <li className="list-group-item">Email: {profile.email}</li>
            </ul>
        </div>
    )
}

export default Profile;