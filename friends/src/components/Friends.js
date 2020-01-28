import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import styled from 'styled-components'

const Pretty = styled.div`
    background: #B05555;
    margin:2%;
    padding: 2%;
    display: flex;
    flex-direction:column;
    align-items:center;
    border-radius:2rem;
    `
const Acc = styled.div`
    background: #F5FD8D;
    display:flex;
    flex-direction:column;
    text-align:center;
    `
 
const Friends = () => {
    const [friends, setFriends] = useState([])
    const [newFriend, setNewFriend] = useState({
        name:'',
        age:'',
        email:''
    })

    const handleChanges = e => {
        setNewFriend({
            ...newFriend, [e.target.name]: e.target.value
        })
        console.log('new friend', newFriend)
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/api/friends', newFriend)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        axiosWithAuth().get('/api/friends')
            .then(res => {
                setFriends(res.data)  
            })
            .catch(err => console.log(err))
    },[friends])

    return(
        <Acc>
            <h1>Friends!!!!</h1>
            <form onSubmit={(e => handleSubmit(e))}>
                <input
                    type='text'
                    name='name'
                    value={newFriend.name}
                    placeholder='Name'
                    onChange={(e => handleChanges(e))}
                />
                <input
                    type='text'
                    name='age'
                    value={newFriend.age}
                    placeholder='Age'
                    onChange={(e => handleChanges(e))}
                />
                <input
                    type='email'
                    name='email'
                    value={newFriend.email}
                    placeholder='Email'
                    onChange={(e => handleChanges(e))}
                />
                <button>Add Friend</button>
            </form>
            {friends.map(item => {
                return(
                    <Pretty>
                        <h4>Name : {item.name}</h4>
                        <p>Age : {item.age}</p>
                        <p>Email : {item.email}</p>
                    </Pretty>
                )
            })}
        </Acc>
    )
}


export default Friends