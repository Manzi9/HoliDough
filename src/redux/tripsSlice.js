import { createSlice } from "@reduxjs/toolkit";
import { getCurrencySymbol, getIndex } from "../utils/utils";
import { initialState } from "./InitialState";

export const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { text, data } = action.payload;
      state[text] = data; // Dynamically set the state property

      // set selectedTripId
      if (state.trips) {
        state.selectedTripId = state.trips[state.trips.length - 1].id;
      }

      //set homecurrencySymbol inside each trip
      if (state.trips && state.currencyCodes) {
        state.trips.map((item, index) => {
          item.details.homeCurrencySymbol = getCurrencySymbol(
            { ...state.currencyCodes },
            state.trips[index].details.homeCurrency
          );
        });
      }

      if (text === "currencies") {
        const currencies = Object.keys(data);
        const favs = ["EUR", "USD", "GBP"];
        favs.forEach((item) => {
          const found = currencies.findIndex((el) => el === item);
          currencies.splice(found, 1);
          currencies.unshift(item);
        });
        state.currencyRates = data;
        state.currencyNames = currencies;
      }
    },
    deleteExpense: (state) => {
      //get index of the current trip
      const indexTrip = getIndex(state.trips, state.selectedTripId);
      //get index of clicked expense
      const index = getIndex(state.trips[indexTrip].expenses, state.popUp.id);
      // delete expense
      state.trips[indexTrip].expenses.splice(index, 1);
      //set popUp to empty so popUp disappears
      state.popUp = {};
    },
    togglePopUp: (state, { payload }) => {
      if (!payload) {
        state.popUp = {};
        return;
      }

      const { config, component } = payload;
      const { id, title } = config;
      state.popUp.showPopUp = !state.popUp.showPopUp;
      state.popUp.id = id;
      state.popUp.title = title;
      state.popUp.component = component;
    },
    formEvent: (state, { payload }) => {
      state[payload.id] = payload.value;
    },
    addExpenseData: (state, { payload }) => {
      let result = handleData(
        { ...payload },
        state.homeCurrency,
        state.currencyRates
      );
      state.expenses.push(result);
    },
  },
});

export const {
  setData,
  deleteExpense,
  togglePopUp,
  formEvent,
  addExpenseData,
} = tripsSlice.actions;

export const selectTrips = (state) => state.trips.trips;
// export const selectExpenses = (state) => state.trips.trips[0].expenses;
export const selectPopUp = (state) => state.trips.popUp;
export const selectCurrencyCodes = (state) => state.trips.currencyCodes;
export const selectHomeCurrencySymbol = (state) =>
  state.trips.travelInfo.homeCurrencySymbol;
export const selectOrder = (state) => state.trips.order;
export const selectFilter = (state) => state.trips.filter;
export const selectFilterDate = (state) => state.trips.filterDate;
export const selectCurrencyRates = (state) => state.trips.currencyRates;
export const selectCurrencyNames = (state) => state.trips.currencyNames;
export const selectHomeCurrency = (state) => state.trips.homeCurrency;
export const selectSelectedTripId = (state) => state.trips.selectedTripId;

export default tripsSlice.reducer;
