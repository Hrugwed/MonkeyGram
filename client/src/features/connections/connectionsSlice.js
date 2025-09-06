import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../api/axios'


const initialState = {
    connections: [],
    pendingConnections: [],
    followers: [],
    following: []
}

export const fetchConnections = createAsyncThunk('connections/fetchConnections', async (token) => {
    console.log('Fetching connections with token:', token?.substring(0, 20) + '...')
    const { data } = await api.get('/api/user/connections', {
         headers: { Authorization: `Bearer ${token}` },
    })
    console.log('Connections response:', data.success ? 'Success' : 'Failed', data.connections?.length || 0, 'connections')
    return data.success ? data : null;
})

const connectionsSlice = createSlice({
    name: 'connections',
    initialState,
    reducers: {
        resetConnections: (state) => {
            state.connections = []
            state.pendingConnections = []
            state.followers = []
            state.following = []
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchConnections.fulfilled, (state, action)=>{
            if(action.payload){
                console.log('Connections state updated with:', action.payload.connections?.length || 0, 'connections')
                state.connections = action.payload.connections
                state.pendingConnections = action.payload.pendingConnections
                state.followers = action.payload.followers
                state.following = action.payload.following
            }
        })
    }
})

export const { resetConnections } = connectionsSlice.actions
export default connectionsSlice.reducer