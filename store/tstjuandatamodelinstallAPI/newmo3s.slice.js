import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_newmo3_list = createAsyncThunk(
  "newmo3s/api_v1_newmo3_list",
  async payload => {
    const response = await apiService.api_v1_newmo3_list(payload)
    return response.data
  }
)
export const api_v1_newmo3_create = createAsyncThunk(
  "newmo3s/api_v1_newmo3_create",
  async payload => {
    const response = await apiService.api_v1_newmo3_create(payload)
    return response.data
  }
)
export const api_v1_newmo3_retrieve = createAsyncThunk(
  "newmo3s/api_v1_newmo3_retrieve",
  async payload => {
    const response = await apiService.api_v1_newmo3_retrieve(payload)
    return response.data
  }
)
export const api_v1_newmo3_update = createAsyncThunk(
  "newmo3s/api_v1_newmo3_update",
  async payload => {
    const response = await apiService.api_v1_newmo3_update(payload)
    return response.data
  }
)
export const api_v1_newmo3_partial_update = createAsyncThunk(
  "newmo3s/api_v1_newmo3_partial_update",
  async payload => {
    const response = await apiService.api_v1_newmo3_partial_update(payload)
    return response.data
  }
)
export const api_v1_newmo3_destroy = createAsyncThunk(
  "newmo3s/api_v1_newmo3_destroy",
  async payload => {
    const response = await apiService.api_v1_newmo3_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const newmo3sSlice = createSlice({
  name: "newmo3s",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_newmo3_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_newmo3_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_newmo3_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_newmo3_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_newmo3_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_newmo3_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_newmo3_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_newmo3_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_newmo3_list,
  api_v1_newmo3_create,
  api_v1_newmo3_retrieve,
  api_v1_newmo3_update,
  api_v1_newmo3_partial_update,
  api_v1_newmo3_destroy,
  slice: newmo3sSlice
}
