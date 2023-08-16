import { useEffect, useState } from "react"
import { keys } from "../network/keys"
import { urls } from "../network/urls"
import { useGetHandler } from "../network/useQueryClient"
import { replaceID, filterPosts } from "../utils/utils"
import { useNavigate, useParams } from "react-router-dom"
import {
    Container,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Button,
} from "@mui/material";
import { routes } from "../routes/routes"

const UserPosts = () => {
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

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
                                onClick={() => {
                                    navigate(replaceID(routes.COMMENTS, id))
                                }}
                                >
                                Show comments
                            </Button>
                        </Container>
                    </ListItem>
                    ))}
                </List>
            </Container>}
        </>
    )
}

export default UserPosts;

