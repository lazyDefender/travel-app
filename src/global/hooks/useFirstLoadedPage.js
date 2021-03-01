import { useSelector } from 'react-redux'

const useFirstLoadedPage = () => {
    const firstLoadedPage = useSelector(state => state.defaultReducer.firstLoadedPage)
    return firstLoadedPage
}

export default useFirstLoadedPage