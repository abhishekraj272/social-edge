import {
    Checkbox,
    Fab,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { submitPost } from "../../api";
import { PostContext, updatePosts } from "../../context/PostProvider";
import { UserContext } from "../../context/UserProvider";
import "./AddPost.css";

const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFF",
    border: "2px solid #F0E9D2",
    width: 500,
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const formInitState = {
    title: "",
    content: "",
    attachmentType: "",
    attachmentUrl: "",
    isLocation: true,
    isComments: true,
};

export default function AddPost({ onClose }) {
    const [form, setForm] = React.useState(formInitState);
    const { state } = React.useContext(UserContext);
    const { dispatch } = React.useContext(PostContext);
    const submitForm = () => {
        submitPost(form, state.user);
        dispatch(updatePosts([{ ...form, username: state.user }]));
        onClose()
    };
    const formComplete = () => {
        return !form.title || !form.content || !form.attachmentType || !form.attachmentUrl;
    }
    return (
        <div>
            <Box sx={style} className="addPost">
                <Typography sx={{ mb: 2 }} variant="h6" component="h2">
                    Add Post
                </Typography>
                <div className="addPost__row">
                    <TextField
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        label="Title"
                        variant="outlined"
                        required
                    />
                    <TextField
                        onChange={(e) => setForm({ ...form, content: e.target.value })}
                        label="Caption"
                        variant="outlined"
                        required
                    />
                </div>
                <div className="addPost__row">
                    <FormControl sx={{ minWidth: 195 }}>
                        <InputLabel required id="select-att-type">Attachment Type</InputLabel>
                        <Select
                            labelId="select-att-type"
                            id="select-att-type-id"
                            value={form.attachmentType}
                            label="Attachment Type"
                            onChange={(e) =>
                                setForm({ ...form, attachmentType: e.target.value })
                            }
                        >
                            <MenuItem value="imageUrl">Image URL</MenuItem>
                            <MenuItem value="ytUrl">Youtube Embed URL</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        required
                        onChange={(e) =>
                            setForm({ ...form, attachmentUrl: e.target.value })
                        }
                        type="url"
                        label="Attachment URL"
                        variant="outlined"
                    />
                </div>
                <div className="addPost__row">
                    <FormControlLabel
                        required
                        control={
                            <Checkbox
                                checked={form.isLocation}
                                onChange={(e) =>
                                    setForm({ ...form, isLocation: e.target.checked })
                                }
                            />
                        }
                        label="Location"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={form.isComments}
                                onChange={(e) =>
                                    setForm({ ...form, isComments: e.target.checked })
                                }
                            />
                        }
                        label="Comments"
                    />
                </div>
                <div className="addPost__btn">
                    <Fab
                        onClick={onClose}
                        sx={{ mr: 2 }}
                        size="medium"
                        variant="extended"
                    >
                        Cancel
                    </Fab>
                    <Fab
                        onClick={submitForm}
                        color="primary"
                        size="medium"
                        variant="extended"
                        disabled={formComplete()}
                    >
                        Submit
                    </Fab>
                </div>
            </Box>
        </div>
    );
}
