import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div style={{display: 'flex', flexDirection:'column', width:'400px'}}>
      <AddPostForm/>
       <PostsList/>
    </div>
  );
}

export default App;
