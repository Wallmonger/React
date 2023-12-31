import React from 'react';


const Car = ({width, height, color}) => {
    return (
        <svg height={height * 3} viewBox="0 0 48 48" width={width * 3} xmlns="http://www.w3.org/2000/svg"><path d="M37.84 12.02c-.41-1.18-1.53-2.02-2.84-2.02h-22c-1.31 0-2.43.84-2.84 2.02l-4.16 11.98v16c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-2h24v2c0 1.1.9 2 2 2h2c1.11 0 2-.9 2-2v-16l-4.16-11.98zm-24.84 19.98c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm22 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm-25-10l3-9h22l3 9h-28z" fill={color} /><path d="M0 0h48v48h-48z" fill="none"/></svg>
    )
}

export default Car;