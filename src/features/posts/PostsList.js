import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import TimeAgo from './TimeAgo'
import ReactionButtons from "./ReactionButtons";


const PostsList = () => {
    
    // const posts = useSelector(state=> state.posts)
    const posts = useSelector(selectAllPosts)
    
    console.log(posts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p> {post.content.substring(0, 100)}</p>
            <p ><PostAuthor userId={post.userId}/>  </p>
            <p ><TimeAgo timestamp={post.date}/>  </p>
            <ReactionButtons post={post}/>

        </article>
    ))

    // console.log(renderedPosts)
 
    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};
export default PostsList;