import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useAuth = () => {
    const auth = useSelector(state => state.auth.data)
    return auth
}

export default useAuth