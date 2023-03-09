import { createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
import axios from "axios";

const GET = 'SPACE-TRAVELERS-REACT/missions/GET';
const initialState = [];
const missionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${GET}/fulfilled`:
            return Object.keys(action.payload).map((key) => ({
                missionId: action.payload[key].mission_id,
                missionName: action.payload[key].mission_name,
                description: action.payload[key].description,
            }));
            default:
                return state;
    }
};

const URL = 'https://api.spacexdata.com/v3/missions';
export const fetchMissions = createAsyncThunk(GET, async () => {
    const response = await axios.get(URL);
    return response.data;
});

export default missionsReducer;