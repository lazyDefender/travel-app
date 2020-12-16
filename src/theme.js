import { createMuiTheme } from '@material-ui/core'
import {
    deepOrange,
    cyan,
} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan[500],
        },
        // secondary: {
        //     main: cyan[500],
        // },
    }
})

export default theme