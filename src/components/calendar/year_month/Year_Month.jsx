import styled from 'styled-components';
import Days from '../days/Days';

const Year_Month = ({date,index}) => {
    const currentMonth = () => {
        if(date.currentMonth+index > 12) {
            date = new Date(date.today.getFullYear(), date.currentMonth+index);
            return [date.getFullYear(), date.getMonth()];
        } 
        return [date.today.getFullYear(), date.today.getMonth()+index+1];
    }

    let year_month = currentMonth();

    return (
        <StyleYearMonth>
            <YearMonth>{`${year_month[0]}년 ${year_month[1]}월`}</YearMonth>
            <Days day={year_month}/>
        </StyleYearMonth>
    )
}

export default Year_Month;

const YearMonth = styled.div`
    text-align: center;
`;
const StyleYearMonth = styled.div`
    padding: 0 20px;
`;