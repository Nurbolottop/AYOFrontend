import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axiosApi from "../services/AxiosApi";
import { useSelector, useDispatch } from "react-redux";
const initialState = {
  organization: null,
  organizations: [],
  answer: false,
  organizationData: null,
  creating: false,
  loading: false,
  country: [],
  city: [],
  businessAreas: [],
};

const SET_ORGANIZATION = "SET_ORGANIZATION";

export const organizationRequest = createAsyncThunk(
  "/requestOrganization",
  async (credentials) => {
    try {
      const { data } = await axiosApi.post(
        "/organization/organizations/",
        credentials
      );
      return data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const getOrganization = createAsyncThunk(
  "/getOrganizationList",
  async () => {
    try {
      const { data } = await axiosApi.get(`/organization/organizations/`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }
);
export const getItemOrganization = createAsyncThunk(
  "/getItemOrganizationList",
  async (id) => {
    try {
      const { data } = await axiosApi.get(`/organization/organizations/${id}/`);
      return data;
    } catch (error) {
      handleError(error);
    }
  }
);

export const organizationEdit = createAsyncThunk(
  "/editOrganization",
  async ({ id, editData }) => {
    try {
      await axiosApi.patch(`/organization/organizations/${id}/`, editData);
    } catch (error) {
      handleError(error);
    }
  }
);

export const getCounty = createAsyncThunk("/getCountyList", async () => {
  try {
    const { data } = await axiosApi.get("/country/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getCity = createAsyncThunk("/getCityList", async () => {
  try {
    const { data } = await axiosApi.get("/city/");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getBusinessAreas = createAsyncThunk(
  "/getBusinessAreasList",
  async () => {
    try {
      const { data } = await axiosApi.get("/organization/business/arears/");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const setOrganization = createAction(SET_ORGANIZATION);

export default createReducer(initialState, (builder) => {
  builder
    .addCase(organizationRequest.pending, (state) => {
      state.loading = true;
    })
    .addCase(organizationRequest.fulfilled, (state, { payload }) => {
      state.organization = payload;
      state.loading = false;
    })
    .addCase(organizationRequest.rejected, (state) => {
      state.loading = false;
    })
    .addCase(getOrganization.pending, (state) => {
      state.loading = true;
    })
    .addCase(getOrganization.fulfilled, (state, { payload }) => {
      state.organizations = payload;
      state.loading = false;
    })
    .addCase(getOrganization.rejected, (state) => {
      state.loading = false;
    })
    .addCase(getItemOrganization.pending, (state) => {
      state.loading = true;
    })
    .addCase(getItemOrganization.fulfilled, (state, { payload }) => {
      state.organizationData = payload;
      state.loading = false;
    })
    .addCase(getItemOrganization.rejected, (state) => {
      state.loading = false;
    })
    .addCase(organizationEdit.pending, (state) => {
      state.loading = true;
    })
    .addCase(organizationEdit.fulfilled, (state) => {
      state.loading = false;
    })
    .addCase(organizationEdit.rejected, (state) => {
      state.loading = false;
    })
    .addCase(getCounty.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCounty.fulfilled, (state, { payload }) => {
      state.country = payload;
      state.loading = false;
    })
    .addCase(getCounty.rejected, (state) => {
      state.loading = false;
    })
    .addCase(getCity.pending, (state) => {
      state.loading = true;
    })
    .addCase(getCity.fulfilled, (state, { payload }) => {
      state.city = payload;
      state.loading = false;
    })
    .addCase(getCity.rejected, (state) => {
      state.loading = false;
    })
    .addCase(getBusinessAreas.pending, (state) => {
      state.loading = true;
    })
    .addCase(getBusinessAreas.fulfilled, (state, { payload }) => {
      state.businessAreas = payload;
      state.loading = false;
    })
    .addCase(getBusinessAreas.rejected, (state) => {
      state.loading = false;
    })
    .addCase(SET_ORGANIZATION, (state, { payload }) => {
      state.organization = payload;
    });
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

export const useOrganization = () =>
  useSelector((state) => state.organizationReducer);
