import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axiosApi from "../services/AxiosApi";
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  user: null,
  userData: null,
  editData: null,
  creating: false,
  loading: false,
  logout: false,
  detail: null,
};

const SET_USER = "SET_USER";

export const userRegister = createAsyncThunk(
  "/register",
  async (credentials) => {
    try {
      await axiosApi.post("/users/users/", credentials);
    } catch (error) {
      handleError(error);
    }
  }
);

export const userLogin = createAsyncThunk(
  "/login",
  async (credentials, { rejectWithValue }) => {
    try {
      await axiosApi.post("/users/login/", credentials);
    } catch (error) {
      if (
        error.response &&
        error.response.data.detail === "Пользователь с такой почтой не найден."
      ) {
        return rejectWithValue(error.response.data);
      } else {
        handleError(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const ConfirmUser = createAsyncThunk(
  "/confirm",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosApi.post(
        "/users/users/confirm/",
        credentials
      );
      return data;
    } catch (error) {
      if (
        error.response &&
        error.response.data.detail === "Неверный код подтверждения или email."
      ) {
        return rejectWithValue(error.response.data);
      } else {
        handleError(error);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserData = createAsyncThunk("/getUserData", async (id) => {
  try {
    const { data } = await axiosApi.get(`/users/users/${id}/`);
    return data;
  } catch (error) {
    handleError(error);
  }
});

export const editUserData = createAsyncThunk(
  "/editUserData",
  async ({ id, editData }) => {
    try {
      await axiosApi.patch(`/users/users/${id}/`, editData);
    } catch (error) {
      handleError(error);
    }
  }
);

export const logoutUser = createAsyncThunk("/logoutUser", async (id) => {
  try {
    await axiosApi.delete(`/users/users/${id}`);
  } catch (error) {
    handleError(error);
  }
});
const handleError = (error) => {
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log(error.request);
  } else {
    console.log("Error", error.message);
  }
  console.log(error.config);
};

export const setUser = createAction(SET_USER);

export const useAuth = () => useSelector((state) => state.authReducer);

export const logout = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch(setUser(null));
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(userRegister.pending, (state) => {
      state.creating = true;
    })
    .addCase(userRegister.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.creating = false;
    })
    .addCase(userRegister.rejected, (state) => {
      state.creating = false;
    })
    .addCase(userLogin.pending, (state) => {
      state.creating = true;
      state.detail = null;
    })
    .addCase(userLogin.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.creating = false;
      state.detail = null;
    })
    .addCase(userLogin.rejected, (state, { payload }) => {
      state.creating = false;
      state.detail = payload;
    })
    .addCase(ConfirmUser.pending, (state) => {
      state.creating = true;
      state.detail = null;
    })
    .addCase(ConfirmUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.creating = false;
      state.detail = null;
    })
    .addCase(ConfirmUser.rejected, (state, { payload }) => {
      state.creating = false;
      state.detail = payload;
    })
    .addCase(getUserData.pending, (state) => {
      state.creating = true;
    })
    .addCase(getUserData.fulfilled, (state, { payload }) => {
      state.userData = payload;
      state.creating = false;
    })
    .addCase(getUserData.rejected, (state) => {
      state.creating = false;
    })
    .addCase(editUserData.pending, (state) => {
      state.loading = true;
    })
    .addCase(editUserData.fulfilled, (state, { payload }) => {
      state.loading = false;
    })
    .addCase(editUserData.rejected, (state) => {
      state.loading = false;
    })
    .addCase(logoutUser.pending, (state) => {
      state.logout = true;
    })
    .addCase(logoutUser.fulfilled, (state) => {
      state.creating = false;
    })
    .addCase(logoutUser.rejected, (state) => {
      state.creating = false;
    })
    .addCase(SET_USER, (state, { payload }) => {
      state.user = payload;
    });
});
