import React from 'react'
import { Redirect } from 'react-router-dom'
import ProfileComponent from '../../bus/profile'
import useAuth from '../../global/hooks/useAuth'
import { book } from '../../navigation/book'

const Profile = (props) => {
    const auth = useAuth()
    const jsx = auth.data ? <ProfileComponent/> : <Redirect to={book.login} />
    return <>
        {jsx}
    </>
}

export default Profile
