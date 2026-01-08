import { use } from "react";
import Post from './post'

export default function Posts({postFetch}){
    const post = use(postFetch);
    return(
        <div className="users-css">
            <p>Posts: {post.length}</p>
            {
                post.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}