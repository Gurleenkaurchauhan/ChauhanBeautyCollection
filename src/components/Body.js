import React from 'react';

function Body(props) {
  return (
    <div 
      style={{ 
        textAlign: 'center', 
        color: props.mode === 'dark' ? 'white' : 'black',
        marginTop: '5%'  // Top margin as percentage
      }}
    >
      <h1 className="fw-semibold">
        For the beauty in you
      </h1>
      <p>
        Your one-stop destination for accessories and makeup that inspire confidence
      </p>
    </div>
  );
}

export default Body;

