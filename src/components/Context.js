import React, { createContext, useContext } from 'react';

//This component is used to pass Ridership between components without having to pass props down through every component in between.
//For this application we are passing route and ridership data from the Map component to the RouteStats  and BusRouteDetails components.

export const RidershipContext = createContext();
export const ResultsContext = createContext();

export function RidershipProvider({ children, value }) {
    return <RidershipContext.Provider value={value}>{children}</RidershipContext.Provider>;
}

export function ResultsProvider({ children, value }) {
    return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
}

export function useRidership() {
    return useContext(RidershipContext);
  }
  
  export function useResults() {
    return useContext(ResultsContext);
  }
