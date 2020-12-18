import React from 'react'
import { Link } from 'react-router-dom'
import {
    Button,
    Box,
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Avatar,
    makeStyles,
    Container,
} from '@material-ui/core'
import { book } from '../../navigation/book'
import useAuth from '../../global/hooks/useAuth'
import { store } from '../../init/store'
import { authActions } from '../../redux/auth/actions'

const signOut = () => {
    store.dispatch(authActions.signOut())
}

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
}))

const AuthBar = (props) => {
    const classes = useStyles()
    const auth = useAuth()
    const defaultBar =
    <AppBar
        position="fixed"
      >
        <Toolbar>  
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                
                    <Grid item>
                        Travel_app
                    </Grid>
                    {/* <Divider/> */}
                    <Grid item>
                        <Button
                                variant="contained"
                                disableElevation
                                color="primary"
                            >
                            <Link to={book.signup}>Зареєструватись</Link>
                        </Button> 
                        <Button
                            variant="contained"
                            disableElevation
                            color="primary"
                        >
                            <Link to={book.login}>Увійти</Link>
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        
      </AppBar>
    const signedInBar = <>
    <AppBar
        position="fixed"
      >
        <Toolbar>  
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                
                    <Grid item>
                        Travel_app
                    </Grid>
                    {/* <Divider/> */}
                    <Grid item>
                        <Button
                            variant="contained"
                            disableElevation
                            color="primary"
                        >
                            <Link to={book.profile}>Мій профіль</Link>
                        </Button>
            
                        <Button 
                            onClick={signOut}
                            variant="contained"
                            disableElevation
                            color="primary"
                        >Вийти</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        
      </AppBar>
        
    </>
    return <>
    {/* <Container> */}
        <Box pt={2} pb={2}>
            {auth ? signedInBar : defaultBar}
            <div className={classes.offset}/>
        </Box>
    {/* </Container> */}
    </>
}

export default AuthBar