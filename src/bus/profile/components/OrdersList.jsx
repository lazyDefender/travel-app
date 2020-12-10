import React from 'react'
import {
    Grid,
} from '@material-ui/core'
import Order from './Order'

const OrdersList = ({orders}) => {
    return <Grid container spacing={3}>
    {orders?.map(o => {
        return (<Grid item 
                key={o.id}
            // xs={12}
            >
                <Order {...o}/>
            </Grid>    
    )})}
</Grid>
}

export default OrdersList