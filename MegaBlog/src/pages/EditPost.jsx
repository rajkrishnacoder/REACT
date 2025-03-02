import React, {useState, useEffect} from 'react';
import {Container, PostForm} from '../components'
import appwriteService from '../appwrite/conf'
import { useNavigate, useParams } from 'react-router-dom';

function EditPost(props) {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }
    }, [slug, navigate])
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
    ) : null
}

export default EditPost;