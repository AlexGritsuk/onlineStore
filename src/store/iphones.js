import { createSlice } from "@reduxjs/toolkit";
import API from "../api";


const iphonesSlice = createSlice({
    name: "iphones",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        series: null,
        isLoadingSeries: true,
        color: null,
        isLoadingColor: true,

        currentItems: null,
        isLoadingCurrent: true,

        selectedItem: null,
        currentPage: 1,
    },
    reducers: {
        iphonesRequested: (state) => {
            state.isLoading = true
        },
        iphonesReceved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        iphonesRequestFiled: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        seriesIphonesRequested: (state) => {
            state.isLoadingSeries = true
        },
        seriesIphonesReceved: (state, action) => {
            state.series = action.payload
            state.isLoadingSeries = false
        },
        seriesIphonesField: (state, action) => {
            state.error = action.payload
            state.isLoadingSeries = false
        },
        colorIphonesRequested: (state) => {
            state.isLoadingColor = true
        },
        colorIphonesReceved: (state, action) => {
            state.color = action.payload
            state.isLoadingColor = false
        },
        colorIphonesField: (state, action) => {
            state.error = action.payload
            state.isLoadingColor = false
        },
        currentIphonesRequested: (state) => {
            state.isLoadingCurrent = true
        },
        currentIphonesReceved: (state, action) => {
            state.currentItems = action.payload
            state.isLoadingCurrent = false
        },
        currentIphonesField: (state, action) => {
            state.error = action.payload
            state.isLoadingCurrent = false
        },

        selectedItemIphoneReceved: (state, action) => {
            state.selectedItem = action.payload
        }

    }
});

const { reducer: iphonesReducer, actions } = iphonesSlice;
const {
    iphonesRequested,
    iphonesReceved,
    iphonesRequestFiled,
    seriesIphonesRequested,
    seriesIphonesReceved,
    seriesIphonesField,
    colorIphonesRequested,
    colorIphonesReceved,
    colorIphonesField,

    currentIphonesRequested,
    currentIphonesReceved,
    currentIphonesField,
} = actions


export const loadCurrentIphones = () => async (dispatch) => {
    dispatch(currentIphonesRequested());
    try {
        const data = await API.iphones.fetchAll()
        dispatch(currentIphonesReceved(data))
    } catch (error) {
        dispatch(currentIphonesField(error.message))
    }
};


export const loadSeriesIphones = () => async (dispatch) => {
    dispatch(seriesIphonesRequested());
    try {
        const data = await API.seriesIphone.fetchAll()
        dispatch(seriesIphonesReceved(data))
    } catch (error) {
        dispatch(seriesIphonesField(error.message))
    }
};

export const loadColorIphones = () => async (dispatch) => {
    dispatch(colorIphonesRequested());
    try {
        const data = await API.visualAppearance.fetchAll()
        dispatch(colorIphonesReceved(data))
    } catch (error) {
        dispatch(colorIphonesField(error.message))

    }
};


export const loadIphonesList = () => async (dispatch) => {
    dispatch(iphonesRequested())
    try {
        const data = await API.iphones.fetchAll();
        dispatch(iphonesReceved(data))
    } catch (error) {
        dispatch(iphonesRequestFiled(error.message))
    }
};


export const getHandleChooseCategory = (category) => (state) => {
    if (state.iphones.currentItems) {
        state.iphones.currentPage = 1;
        let productFilter = state.iphones.entities.filter((el) => el.name === category);
        state.iphones.currentItems = productFilter;
        state.iphones.selectedItem = category;
    };
};

export const getHandleChooseCategoryColor = (category) => (state) => {
    if (state.iphones.currentItems) {
        state.iphones.currentPage = 1;
        let productFilter = state.iphones.entities.filter(
            (el) => el.visualAppearance === category
        );
        state.iphones.currentItems = productFilter;
        state.iphones.selectedItem = category;
    };
};

export const getHandleClearFilter = () => (state) => {
    state.iphones.currentItems = state.iphones.entities;
    state.iphones.selectedItem = null
};


export const getHandlePageChange = (pageIndex) => (state) => {
    state.iphones.currentPage = pageIndex;
};

export const getHandleNext = (pages) => (state) => {
    state.iphones.currentPage = function () {
        if (state.iphones.currentPage >= pages.length) {
            return state.iphones.currentPage = 1
        }
        return state.iphones.currentPage - 1
    }
};

export const getHandlePrev = (pages) => (state) => {
    state.iphones.currentPage = function () {
        if (state.iphones.currentPage < 2) {
            return state.iphones.currentPage = pages.length;
        }
        return state.iphones.currentPage - 1
    };
};


export const getIphones = () => (state) => state.iphones.entities;
export const getIphonesLoadingStatus = () => (state) => state.iphones.isLoading;

export const getIphoneById = (iphoneId) => (state) => {
    if (state.iphones.entities) {
        return state.iphones.entities.find((iphone) => iphone._id === iphoneId)
    };
};

export const getSeriesIphones = () => (state) => state.iphones.series;
export const getSeriesIphonesLoadingStatus = () => (state) => state.iphones.isLoadingSeries;

export const getColorIphones = () => (state) => state.iphones.color;
export const getColorIphonesLoadingStatus = () => (state) => state.iphones.isLoadingColor;

export default iphonesReducer;