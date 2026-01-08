import { use } from "react"
import User from './user'
export default function Users({userFetch}){
    const users = use(userFetch);
    return(
        <div className="users-css">
            <p>Users: {users.length}</p>
            {
                users.map(userr => <User userr = {userr}></User>)
            }
        </div>
    )
}