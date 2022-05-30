import {createContext, ReactNode, useContext} from "react";
import React from "react";

const LocationDataContext = createContext([]);

type contextProps = {
	children: ReactNode;
	value: any
}
export const LocationDataContextProvider = ({children, value = []}: contextProps) => {
	return (
		<LocationDataContext.Provider
			value={value}>
			{children}
		</LocationDataContext.Provider>
	)
}
export const useLocationDataContext = () =>  useContext(LocationDataContext);

