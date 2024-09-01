import {
  combineReducers,
  configureStore,
  createListenerMiddleware,
  isAnyOf,
} from "@reduxjs/toolkit";
import reducer from "./reducer";
import authReducer from "./auth.reducer";
import organizationReducer from "./organization.reducer";

const rootReducer = combineReducers({
  reducer,
  authReducer,
  organizationReducer,
});

const localStorageMiddleware = createListenerMiddleware();

localStorageMiddleware.startListening({
  matcher: isAnyOf(
    "/confirm/fulfilled",
    "/logoutUser/fulfilled",
    "/requestOrganization/fulfilled"
  ),
  effect: ({ type }, listenerApi) => {
    const user = listenerApi.getState().authReducer.user;
    const organization =
      listenerApi.getState().organizationReducer.organization;
    if (type === "/confirm/fulfilled") {
      localStorage.setItem("user", JSON.stringify(user));
    }
    if (type === "/logoutUser/fulfilled") {
      localStorage.removeItem("user");
    }
    if (type === "/requestOrganization/fulfilled") {
      localStorage.setItem("organization", JSON.stringify(organization));
    }
  },
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware),
});
