export default function Post({post}){
    const {id,title,body} = post;
    return(
        <div className="users-css">
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    )
}