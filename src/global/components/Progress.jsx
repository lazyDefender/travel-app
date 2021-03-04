import React from 'react'
import {
    Backdrop,
    CircularProgress,
} from '@material-ui/core'

const Progress = () => {
    return <Backdrop  open={true} >
        <CircularProgress color="inherit" />
    </Backdrop>
}

export default Progress
