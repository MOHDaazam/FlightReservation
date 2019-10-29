import React from 'react';

import NoDataImage from '../ErrorPages/Assets/img/no-data.jpg'

const NoDataFound = () => {
    return (
        <div className='text-center' style={{
                   marginTop : '170px'         
        }}>
            <h3>Sorry! No data found ...</h3>

            <img src={NoDataImage}></img>
        </div>
    )
}
export default NoDataFound ;