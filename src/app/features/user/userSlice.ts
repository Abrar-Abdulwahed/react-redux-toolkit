import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
    id: number,
    name: string,
}
type initialStateType = {
    loading: boolean,
    data: User[],
    error: string, //string | undefined,
}
const initialState: initialStateType = {
    loading: false,
    data: [],
    error: '',
}

// async action
const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    return data;
});
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message || "something wrong!";
        })
    }
});

export { fetchUsers };
export default userSlice.reducer;