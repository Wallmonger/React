import { memo } from 'react';

const Count = ({count, bgColor, text}) => {

    console.log(`%c Pourcentage ${text} loaded`, 'color: blue')

    const progress = {width: count + '%'}
    
    return (
        <>
            <p className="h1">{count} %</p>

            <div className="progress">
                <div className={`progress-bar progress-bar-striped bg-${bgColor}`} role="progressbar" style={progress} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}

export default memo(Count);