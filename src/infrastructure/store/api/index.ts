/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';


// Initialize an empty api service that we'll inject endpoints into later as needed
export const appApi = createApi({
  baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://dev-api.linkhrms.com',
      prepareHeaders: (headers, { getState, endpoint }) => {
        const token = (getState() as RootState).auth.token;
        console.log('states: ', token);
        if (token && endpoint !== '/auth/login') {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
      },
    }),
  tagTypes: ["Auth", "User"],
  endpoints: () => ({}),
});