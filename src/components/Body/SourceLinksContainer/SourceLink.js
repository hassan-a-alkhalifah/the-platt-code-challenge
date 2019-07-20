import React from 'react';

function SourceLink({ title, icon }) {
  return (
    <div className='source-link'>
        <div>
            <img src={icon}/>
        </div>
        <p>{title}</p>
    </div>
  );
}

export default SourceLink;