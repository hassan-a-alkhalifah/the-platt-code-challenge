import React from 'react';

function SourceLinkComponent({ title, icon }) {
  return (
    <div className='source-link'>
        <div>
            <img src={icon}/>
        </div>
        <p>{title}</p>
    </div>
  );
}

export default SourceLinkComponent;