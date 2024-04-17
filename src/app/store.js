import { configureStore } from "@reduxjs/toolkit";

let state = {
    employees: []
};

const reducer = (currentState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return {
                ...currentState,
                employees: [...currentState.employees, action.payload.newEmployee]
            };
        case 'ADD_EMPLOYEES_LIST':
            return {
                ...currentState,
                employees: [...currentState.employees, action.payload.newEmployeesList]
            };
        case 'DELETE_ALL_EMPLOYEES':
            return {
                ...currentState,
                employees: []
            }
        default:
            return currentState;
    }
};

export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)