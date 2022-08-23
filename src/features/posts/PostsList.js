import { useSelector, useDispatch } from "react-redux";

import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import { useEffect } from "react";

import PostsExcerpt from "./PostsExcerpt";

import PostAuthor from "./PostAuthor";
import TimeAgo from './TimeAgo'
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
    
    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)
    const dispath = useDispatch();

    useEffect(()=>{
        if (postStatus==='idle') {
            dispath(fetchPosts())
        }
    },[postStatus, dispath])



    let content;
    if (postStatus === 'loading') {content= <p>Loading...</p>}
    else if (postStatus === 'succeeded') { 
        const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post}/>) 
    }
    else if (postStatus === 'failed'){
        content = <p>{error}</p>
    }
    


    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
};
export default PostsList;