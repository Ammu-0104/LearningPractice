import React from 'react';
import './Nav.css';

const Sample = () => {
  return (
    <div className='main'>
        <div className='cont1'>
            <div className='Num'>A</div>
            <div className='Num'>B</div>
        </div>
        <div className='cont1'>
            <div className='Num'>c</div>
            <div className='cont2'>
                <div className='Num'>D</div>
                <div className='Num'>E</div>
            </div>
        </div>
        <div className='cont1'>
            <div className='Num'>F</div>
        </div>
        <div className='cont1 contSub'>
            <div className='Num'>G</div>
        </div>
    </div>
  )
}

export default Sample