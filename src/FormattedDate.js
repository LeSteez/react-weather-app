import react from 'react';

export default function FormattedDate(props) {
    let days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    let currentTime = new Date();
    let options = {timeStyle: 'short', hour12: true};
    let timeString = currentTime.toLocaleTimeString('en-US', options);


    return `${day} ${timeString}`;
}