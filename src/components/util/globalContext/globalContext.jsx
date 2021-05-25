import { useReducer,createContext, useMemo } from "react";

const today = new Date();

const initDate = {
    today: today,
    currentMonth: today.getMonth()+1,
    firstDate: new Date(today.getFullYear(), today.getMonth(), 1), //현재달의 첫째 날
    lastDate: new Date(today.getFullYear(), today.getMonth() + 1, 0) //현재 달의 마지막 날
}

const dateReducer = (state, action) => {
    switch (action.type) {
        case 'rightButton':
            return {
                today: new Date(state.today.getFullYear(), state.today.getMonth()+1, state.today.getDate()),
                currentMonth: state.currentMonth === 12 ? 1 : state.currentMonth+1,
                firstDate: new Date(state.firstDate.getFullYear(), state.firstDate.getMonth()+1, 1),
                lastDate: new Date(state.lastDate.getFullYear(), state.lastDate.getMonth()+2, 0)
            }
        case 'leftButton':
            return {
                today: new Date(state.today.getFullYear(), state.today.getMonth()-1, state.today.getDate()),
                currentMonth: state.currentMonth === 1 ? 12 : state.currentMonth-1,
                firstDate: new Date(state.firstDate.getFullYear(), state.firstDate.getMonth()-1, 1),
                lastDate: new Date(state.lastDate.getFullYear(), state.lastDate.getMonth(), 0)
            }
        default:
            return state;
    }
}

export const GlobalContext = createContext({
    date: null,
    dispatch: () => {},
});

export const GlobalProvider = ({ children }) => {
    const [date, dispatch] = useReducer(dateReducer, initDate);
    const value = useMemo(() => ({ date, dispatch }), [date, dispatch]);
    return ( 
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}
