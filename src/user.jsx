import { use } from "react"

export default function User({userr}){
    const {name,phone,website,address} = userr;
    return(
        <div className="users-css">
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Address(street): {address.street}</p>
        </div>
    )
}