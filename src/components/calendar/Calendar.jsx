import styled, { keyframes } from 'styled-components';
import { useContext, useState } from "react";
import { GlobalContext } from "../util/globalContext/globalContext";
import Year_Month from './year_month/Year_Month';

export const Calendar = () => {
    const {date, dispatch} = useContext(GlobalContext);
    const [move, setMove] = useState('');
    
    const rightButton = () => {
        setMove('right');
        setTimeout(() => {setMove('')},100);
        return dispatch({ type: 'rightButton' });
    }

    const leftButton = () => {
        setMove('left');
        setTimeout(() => {setMove('')},100);
        return dispatch({ type: 'leftButton' });
    }

    const fourMonth = new Array(4).fill('').map((_,i) => {
        return <Year_Month date={date} index={i} />
    })
    
    return (
        <StyleCalendar>
            <LeftButton onClick={leftButton}>{"<"}</LeftButton>
            <StyleBox move={move}>
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

const right = keyframes`
    from {
        left: 200px;
    }
    to {
        left: 0px;
    }
`;

const left = keyframes`
    from {
        right: 200px;
    }
    to {
        right: 0px;
    }
`;

const StyleBox = styled.div`
    position:relative;
    display:flex;
    overflow: hidden;
    width:21.5rem;
    right:0px;

    animation-duration: .1s;
    animation-timing-function: ease-in-out;
    animation-name: ${({move}) => move === 'left' ? left : move === 'right' ? right : null };
`;
