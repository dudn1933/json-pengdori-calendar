import styled from 'styled-components';

const Days = ({day}) => {
    const firstDate = new Date(day[0], day[1]-1, 1); //현재달의 첫째 날     3의 1은 4월의 첫날
    const lastDate = new Date(day[0], day[1], 0); //현재 달의 마지막 날     5의 0은 4월의 막날
    const render = () => {
        let days = [];
        let count = 1;
        let dayOfWeek = firstDate.getDay();
        
        while(lastDate.getDate() >= count) {
            days.push(count);
            count++;
        }
        return new Array(dayOfWeek).fill("").concat(days).map((v,i) => <Day key={i} weekday={i}>{v}</Day>);
    }

    return (
        <StyleDays>
            {render()}
        </StyleDays>
    )
}

export default Days;

const StyleDays = styled.div`
    display:grid;
    grid-template-columns: repeat(7, 1fr);
`;
const Day = styled.div`
    color: ${({ weekday }) => weekday%7 === 0 ? 'red' : weekday%7 === 6 ? 'blue' : null};
    text-align: center;
`;
