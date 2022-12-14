import React from 'react';

const Countdown = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center pl-5 lg:pl-32 auto-cols-max">
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{'--value':  + '15'}}></span>
        </span>
        days
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
        <span style={{'--value':  + '15'}}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
        <span style={{'--value':  + '15'}}></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown font-mono text-5xl">
          <span style={{'--value':  + '15'}}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;