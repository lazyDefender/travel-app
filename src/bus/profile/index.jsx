import React from 'react'
import {
    Grid,
} from '@material-ui/core'
import { useSelector } from 'react-redux'

import Order from './components/Order'
import useOrdersByUser from './hooks/useOrdersByUser'
import UserForm from './components/UserForm'

const Profile = (props) => {
    const { id } = useSelector(state => state.auth.data || {})
    const orders = useOrdersByUser(id)
    return <>
        <UserForm/>
         <Grid container spacing={3}>
             {orders?.map(o => {
                 return <>
                    <Grid item 
                    // xs={12}
                    >
                        <Order {...o}/>
                    </Grid>
                 </>
             })}
      </Grid>
    </>
}

export default Profile