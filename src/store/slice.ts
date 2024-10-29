import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../types/auth";
import { featureData } from "../types/feature";
import axios from "axios";

interface AsyncThunkConfig {
    rejectValue: string; 
}
interface sliceType{
    auth: boolean;
    profile: auth | null;
    currentFeature: featureData | null;
    featureLoading: boolean;
    featureError: string | null;
    featureType: string;
    page: number;
    data: featureData[];
}

export const getFeature:any = createAsyncThunk<featureData, string, AsyncThunkConfig>(
    '/getfeature',
    async(url:string,{rejectWithValue})=>{
        try{
            const resp = await axios.get(url);
            const featureType = url.split('/')
            return {...resp.data,type: featureType[4]};
        } catch {
            rejectWithValue('сущность не найдена' as string);
        }
    }
)

const initialState:sliceType = {
    auth: false,
    profile: null,
    currentFeature: null,
    featureLoading: false,
    featureError: null,
    featureType: 'people',
    page: 1,
    data: [],
}

const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        setAuth: (state,{payload})=>{
            state.auth = true;
            state.profile = payload;
        },
        setPage: (state,{payload})=>{
            state.page = payload;
        },
        setData: (state,{payload})=>{
            state.data = payload;
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(getFeature.fulfilled, (state,{payload})=>{
            let {type,...other} = payload;
            state.currentFeature = other;
            state.featureType = type;
            state.featureLoading = false
        })
        builder.addCase(getFeature.pending, (state)=>{
            state.featureLoading = true
        })
        builder.addCase(getFeature.rejected, (state,action)=>{
            state.featureError = action.payload as string || 'сущность не найдена';
            state.featureLoading = false
        })
    }
})

export const {setAuth,setPage,setData} = slice.actions;
export default slice.reducer;