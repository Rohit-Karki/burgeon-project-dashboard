import React, {useState} from 'react'
import RealCalendar from 'react-calendar';

const Calendar = () => {
    const [value, onChange] = useState<Date | null | (Date | null)[]>(new Date());

    return (
      <div>
        <RealCalendar onChange={(nextValue) => onChange(nextValue)} showWeekNumbers value={value} />
      </div>
    );
}

export default Calendar