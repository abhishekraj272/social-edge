import { Divider, Fab, FormControl, InputLabel, MenuItem, Modal, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { insertPosts, PostContext } from '../../context/PostProvider';
import { sortPosts } from '../../helper';
import AddPost from '../AddPost';
import "./Menu.css";

export default function Menu() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [sortBy, setSortBy] = React.useState('');
    const { state, dispatch } = React.useContext(PostContext)

    const handleSort = (e) => {
        setSortBy(e.target.value);
        const sortedPosts = sortPosts(state.posts, e.target.value);
        dispatch(insertPosts(sortedPosts));
    }
    return (
        <Box sx={{ gridArea: "menu" }} className="menu">
            <div className="menu__header">
                <Typography>Menu</Typography>
                <Fab onClick={() => setModalOpen(true)} size="small" variant="extended">New Post</Fab>
            </div>

            <Divider sx={{ mt: 2, mb: 2 }} />

            <div className="menu__content">
                <FormControl fullWidth>
                    <InputLabel id="sort-by">Sort By</InputLabel>
                    <Select
                        labelId="sort-by"
                        value={sortBy}
                        label="Sort By"
                        onChange={handleSort}
                    >
                        <MenuItem value="up">Upvote</MenuItem>
                        <MenuItem value="down">Downvote</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <AddPost onClose={() => setModalOpen(false)} />
            </Modal>

        </Box>
    )
}
