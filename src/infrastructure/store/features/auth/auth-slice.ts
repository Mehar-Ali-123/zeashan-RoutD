import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface AuthState {
    value: number;
    token: string;
    user?: any,
    companies?: any
    departmentRespId: string;
}

const initialState: AuthState = {
    value: 0,
    token:"",
    user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        profilePicture: "",
        isDeleted: false,
        isEmployeeVerfied: false,
        isVerified: false,
        resetToken: "",
        resetTokenExpiry: "",
        secretToken: "",
        secretTokenCreatedAt: "2022-12-21T06:34:14.000Z",
        passwordUpdatedAt: "2022-12-21T06:34:14.000Z",
        createdAt: "2022-12-21T06:34:14.000Z",
        updatedAt: "2022-12-21T06:34:14.000Z",
        department: {
            id: '',
            name: '',
            departmentId: '',
            isActive: true,
            createdAt: '2023-01-18T07:08:13.022Z',
            updatedAt: '2023-01-18T07:08:13.022Z'
        },
        subDepartment: {
            id:"",
            name:"",
        },
    },
    companies: {
        id: "",
        employeeCode: "",
        accessLevel: "",
        isActive: true,
        createdAt: "2022-12-21T06:34:14.000Z",
        updatedAt: "2022-12-21T06:34:14.000Z",
        company: null
    },
    departmentRespId: "",
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, actions: PayloadAction<any>)=> {
            if(actions.payload.data.payload.token){
                state.token = actions.payload.data.payload.token
                state.user = actions.payload.data.user
                state.companies = actions.payload.data.companies
            }
        },
        setSignUpToken:(state, actions: PayloadAction<string>) => {
            if(actions.payload){
                state.token= actions.payload
            }
        },
        setDepartmentRespId: (state, actions: PayloadAction<string>) => {
            if(actions.payload){
                state.departmentRespId= actions.payload
            }
        },
        clearDepartmentRespId: (state) => {
            state.departmentRespId=initialState.departmentRespId
        },
        clearAuth: (state) => {
            state.token = initialState.token;
            state.user = initialState.user;
        },
    }
})

export const {
    setAuth,
    clearAuth, 
    setSignUpToken, 
    setDepartmentRespId, 
    clearDepartmentRespId
} = authSlice.actions
export default authSlice.reducer