import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { book } from '../../navigation/book'
import useAuth from '../../global/hooks/useAuth'
import { store } from '../../init/store'
import { authActions } from '../../redux/auth/actions'

const signOut = () => {
    store.dispatch(authActions.signOut())
}

const AuthBar = (props) => {
    const auth = useAuth()
    console.log('auth',auth)
    const defaultBar = <>
        <Button>
            <Link to={book.signup}>Зареєструватись</Link>
        </Button>
        <Button>
            <Link to={book.login}>Увійти</Link>
        </Button>
    </>
    const signedInBar = <>
        <Button>
            <Link to={book.profile}>Мій профіль</Link>
        </Button>
        
        <Button onClick={signOut}>Вийти</Button>
    </>
    return <>
    {auth ? signedInBar : defaultBar}
        
    </>
}

export default AuthBar