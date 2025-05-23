import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface SidebarState {
  isShow:boolean 
  isLatestUpdatesModalOpen:boolean
}

// Define the initial state using that type
const initialState: SidebarState = {
  isShow: false,
  isLatestUpdatesModalOpen: false,
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showSideBar: (state) => {
      state.isShow = true
    },
    hideSideBar: (state) => {
      state.isShow =  false
    },
    showLatestUpdatesModal: (state) => {
      state.isLatestUpdatesModalOpen = true
    },
    hideLatestUpdatesModal: (state) => {
      state.isLatestUpdatesModalOpen = false
    }
  },
})

export const { showSideBar, hideSideBar , showLatestUpdatesModal , hideLatestUpdatesModal} = sidebarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const isSideBarShow = (state: RootState) => state.sidebarSlice.isShow

export default sidebarSlice.reducer