import React from 'react';

function InfoLink({ title, logo }) {
  return (
    <a href='#'>
        <div>
            <img src={logo} alt={`${title} logo`}/>
            <h4>{title}</h4>
        </div>
    </a>
  );
}

export default InfoLink;