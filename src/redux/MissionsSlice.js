import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { missions: [] };

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('GET/fetchMissions/fulfilled', async () => {
    const response = await axios.get(URL);
    return response.data;
});

const missionsSlice = createSlice({
    name: 'GET',
    initialState,
    reducers: {
        toogleReserve: (state, { payload }) => {
            state.missions = state.missions.map((mission) => {
                if(mission.mission_id === payload) {
                    return { ...mission, reserved: !mission.reserved };
                }return mission;
            });
        },
    },

    extraReducers: (builder) => {
        builder
         .addCase(fetchMissions.fulfilled, (state, { payload }) => {
            state.missions = payload.map((x) => ({ ...x, reserved: false }));
         });
    },
});

export const { toogleReserve } = missionsSlice.actions;
export default missionsSlice;