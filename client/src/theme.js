import { createMuiTheme } from '@material-ui/core'
import {
    deepOrange,
    cyan,
} from '@material-ui/core/colors'
import { ukUA } from '@material-ui/core/locale'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[500],
        },
        // secondary: {
        //     main: cyan[500],
        // },
    }
}, ukUA)

export default theme