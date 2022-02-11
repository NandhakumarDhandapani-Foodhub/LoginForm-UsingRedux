import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../SliceComp/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});

// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from "../SliceComp/userSlice";
// export default configureStore({
//     reducer: {
//           user: userReducer,
//     },
// })
