import { useEffect, useState } from "react"
import { keys } from "../network/keys"
import { urls } from "../network/urls"
import { useGetHandler } from "../network/useQueryClient"
import { filterPosts } from "../utils/utils"
import { useParams } from "react-router-dom"
import {
    Container,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Button,
    ListItemButton,
} from "@mui/material";

const UserPosts = () => {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState(0)

    const {id} = useParams()

    const {data, isLoading} = useGetHandler(keys.USER_POSTS, urls.USER_POSTS)

    useEffect(() => {
        if (data) {
            const posts = filterPosts(data, id)
            setPosts(posts)
        }
    }, [data])

    return (
        <>
            {isLoading ? <CircularProgress sx={{ marginLeft: '50%', marginTop: '20%' }} /> : <Container>
                <List>
                    {posts.map(post => (
                    <ListItem key={post.id}>
                        <Container>
                            <ListItemText
                            primary={`Title: ${post.title}`}
                            secondary={post.body}
                            />
                            <Button
                                sx={{color: "black", borderColor: "black"}}
                                variant="outlined"
                                onClick={() => setComments(post.id)}
                                >
                                Show comments
                            </Button>
                            {comments === post.id && <Container>
                                <ListItem>
                                    <ListItemText
                                        primary={"Comments"}
                                    />
                                </ListItem>
                            </Container>}
                        </Container>
                    </ListItem>
                    ))}
                </List>
            </Container>}
        </>
    )
}

export default UserPosts;

