import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { book } from '../../navigation/book'
import useAuth from '../../global/hooks/useAuth'

const AuthBar = (props) => {
    const auth = useAuth()
    console.log('auth',auth)
    const defaultBar = <>
        <Link to={book.signup}>Зареєструватись</Link>
        <Link to={book.login}>Увійти</Link>
    </>
    const signedInBar = <>
        <Link to={book.profile}>Мій профіль</Link>
        <Button>Вийти</Button>
    </>
    return <>
    {auth ? signedInBar : defaultBar}
        
    </>
}

export default AuthBar