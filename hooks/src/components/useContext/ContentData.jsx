import { UserContext } from './MyContexts';

const ContentData = () => {
    return (
        <UserContext.Consumer>
        {
            user => {
                return (
                    <div>
                        <ul>
                            <li>Name : {user.name}</li>
                            <li>Age : {user.age}</li>
                        </ul>
                    </div>
                )
            }
        }
        </UserContext.Consumer>


        
    )
}

export default ContentData;