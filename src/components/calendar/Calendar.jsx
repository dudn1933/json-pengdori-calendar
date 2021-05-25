import styled from 'styled-components';
import { useContext } from "react";
import { GlobalContext } from "../util/globalContext/globalContext";
import Year_Month from './year_month/Year_Month';

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

const LeftButton = styled.button`
    position:absolute;
    left:2rem;
`;
const RightButton = styled.button`
    position:absolute;
    right:2rem;
`;
const StyleCalendar = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
    align-items: center;
`;
const StyleBox = styled.div`
    display:flex;
    overflow: hidden;
    width:21.5rem;
`;
