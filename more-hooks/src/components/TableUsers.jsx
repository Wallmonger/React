import { useDeferredValue } from "react"

const TableUsers = ({dataArray}) => {

    const deferredValue = useDeferredValue(dataArray);

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
                
                {/* {notification && <tr><td colSpan={4} style={{color: '#af8313'}}>Please wait</td></tr>} */}

                {
                    deferredValue.map(({id, name, username, email, address}) => {
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