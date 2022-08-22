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
        <article key={post.id} style={{border:'1px solid black', margin:'20px 0px 0px 0px', padding:'10px 10px 10px 10px', }}>
            <h3>{post.title}</h3>
            <p> {post.content.substring(0, 100)}</p>
            <div style={{display: 'flex', flexGrow: '1'}}>
            <p style={{ flexGrow: '1'}}><PostAuthor userId={post.userId}/>  </p>
            <p style={{ flexGrow: '1'}}><TimeAgo timestamp={post.date}/>  </p>

            </div>
            
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