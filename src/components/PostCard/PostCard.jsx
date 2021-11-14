import { Avatar, Fab, Paper, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";
import { stringAvatar } from "../../helper";
import "./PostCard.css";
import { votePost } from "../../api";
import Attachment from "../Attachment";

export default function PostCard({ post }) {
    const [hideText, setHideText] = React.useState(true);
    const [cardState, setCardState] = React.useState({
        upvote: post.upvote,
        downvote: post.downvote,
        comments: post.comments.length,
        upClicked: false,
        downClicked: false
    });

    const vote = async (type) => {
        await votePost(post.postId, type);
        if (type === "upvote") {
            setCardState({ ...cardState, upClicked: true, upvote: cardState.upvote + 1 });
            return;
        }
        setCardState({ ...cardState, downClicked: true, downvote: cardState.downvote + 1 });
    }
    return (
        <Paper elevation={2} className="postcard">
            <div className="postcard__user">
                <Avatar {...stringAvatar(post.username)} />
                <Typography variant="h6">{post.username}</Typography>
            </div>
            <Typography sx={{ fontSize: 14 }}>{post.city}</Typography>
            <Attachment type={post.attachmentType} url={post.attachmentUrl} />
            <Typography
                onClick={() => setHideText(!hideText)}
                sx={{ mt: 2 }}
                className={`postcard__text${hideText ? "Overflow" : "Full"}`}
            >
                <b>{post.title}</b>
                <br />
                {post.content}
            </Typography>
            <div className="postcard__icons">
                <Fab onClick={() => vote("upvote")} disabled={cardState.upClicked} sx={{ mr: 2 }} variant="extended" size="small">
                    <ThumbUpIcon />
                    {cardState.upvote}
                </Fab>
                <Fab onClick={() => vote("downvote")} disabled={cardState.downClicked} sx={{ mr: 2 }} variant="extended" size="small">
                    <ThumbDownIcon />
                    {cardState.downvote}
                </Fab>
                <Fab sx={{ mr: 2 }} variant="extended" size="small">
                    <CommentIcon /> Comments {cardState.comments}
                </Fab>
            </div>
        </Paper>
    );
}
