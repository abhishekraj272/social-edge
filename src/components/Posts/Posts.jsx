import { Box } from '@mui/system';
import React from 'react';
import { getPosts } from '../../api';
import { insertPosts, PostContext } from '../../context/PostProvider';
import PostCard from '../PostCard';
import "./Posts.css";

export default function Posts() {
    const { state, dispatch } = React.useContext(PostContext);
    React.useEffect(() => {
        async function getData() {
            const data = await getPosts();
            dispatch(insertPosts(data.data));
        }
        getData()
    }, [dispatch]);

    return (
        <Box sx={{ gridArea: "main" }} className="posts">
            Posts
            <div className="posts__content">
                {
                    state.posts.map((post) => post.postId ? <PostCard post={post} key={post.postId} /> : "")
                }
            </div>
        </Box>
    )
}
