import React from 'react'
import {
    Grid,
    Typography
} from '@material-ui/core'
import {
    Cancel,
} from '@material-ui/icons'
import OrdersListItem from './OrdersListItem'

const OrdersList = ({orders}) => {
    const listJSX = <Grid container spacing={3}>
            {orders?.map(o =>  <OrdersListItem order={o} key={o.id} />)}
        </Grid>
    return orders?.length ? {listJSX} : <div>
    <Grid 
        container
        direction="column"
        alignItems="center"
        justify="center"
    >
        <Grid item>
            <Cancel/>
        </Grid>
        <Grid item>
            <Typography>
                Ще немає замовлень
            </Typography>
        </Grid>
    </Grid>
    
    
</div>
}

export default OrdersList