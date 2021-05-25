import styled from 'styled-components';
import { useContext } from "react";
import { GlobalContext } from "../util/globalContext/globalContext";
import Year_Month from './year_month/Year_Month';
import Days from './days/days/Days';

export const Calendar = () => {
    const {date, dispatch} = useContext(GlobalContext);
    
    const rightButton = () => {
        return dispatch({ type: 'rightButton' });
    }

    const leftButton = () => {
        return dispatch({ type: 'leftButton' });
    }

    const fourMonth = new Array(4).fill('').map((_,i) => {
        return <Year_Month date={date} index={i} />
    })
    
    return (
        <StyleCalendar>
            <LeftButton onClick={leftButton}>{"<"}</LeftButton>
            <StyleBox>
                {fourMonth}
            </StyleBox>
            <RightButton onClick={rightButton}>{">"}</RightButton>
        </StyleCalendar>
    )
}

const LeftButton = styled.button``;
const RightButton = styled.button``;
const StyleCalendar = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
`;
const StyleBox = styled.div`
    display:flex;
    overflow: hidden;
    width:21.5rem;
`;
