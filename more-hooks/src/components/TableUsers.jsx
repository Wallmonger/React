const TableUsers = ({dataArray}) => {
    return (
        <table id="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    dataArray.map(({id, name, username, email, address}) => {
                        return (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>{username}</td>
                                <td>{email}</td>
                                <td>{address.street} {address.suite} {address.city} {address.zipcode}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TableUsers