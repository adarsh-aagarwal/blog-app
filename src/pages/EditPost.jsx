import React from 'react'
import { useState,useEffect } from 'react'
import {Container,PostForm} from '../components'
import appwriteSerivce from '../appwrite/config'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function EditPost() {
    const[post,setPosts]=useState(null)
    const {slug}=useParams
    const navigate=useNavigate()

    useEffect(()=>{
        if(slug)
        {
            appwriteSerivce.getPost(slug).then((post)=>{
                if (post) {
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
                
    },[slug,navigate])
    return post?(
    <div className='py-8'>
        <Container>
            <PostForm post={post}/>
        </Container>

    </div>
    ):null
}

export default EditPost
