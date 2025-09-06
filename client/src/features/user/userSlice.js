import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/axios.js'
import toast from 'react-hot-toast'


const initialState = {
    value: null
}

export const fetchUser = createAsyncThunk('user/fetchUser', async (token) => {
    console.log('Fetching user data with token:', token?.substring(0, 20) + '...')
    const { data } = await api.get('/api/user/data', {
        headers: {Authorization: `Bearer ${token}`}
    })
    console.log('User data response:', data.success ? 'Success' : 'Failed', data.user?.username || 'No username')
    return data.success ? data.user : null
})

export const updateUser = createAsyncThunk('user/update', async ({userData ,token}) => {
    const { data } = await api.post('/api/user/update', userData, {
        headers: {Authorization: `Bearer ${token}`}
    })
    if(data.success){
        toast.success(data.message)
        return data.user
    }else{
        toast.error(data.message)
        return null
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: (state) => {
            state.value = null
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchUser.fulfilled, (state, action)=>{
            console.log('User state updated with:', action.payload?.username || 'No user')
            state.value = action.payload
        }).addCase(updateUser.fulfilled, (state, action)=>{
            state.value = action.payload
        })
    }
})

export const { resetUser } = userSlice.actions
export default userSlice.reducer