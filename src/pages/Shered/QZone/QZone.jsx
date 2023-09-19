import React from 'react';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='shadow p-3 text-black'>
            <h4>Q-Zone</h4>
            <div>
                <img className='w-100 mb-5' src={qZone1} alt="" />
                <img className='w-100 mb-5' src={qZone2} alt="" />
                <img className='w-100 mb-5' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;