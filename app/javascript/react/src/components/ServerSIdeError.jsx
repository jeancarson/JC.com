import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

const ServerSideError = ({ errors = [] }) => {
  return (
    <>
      <p className="lean fw-bold">Dummy</p>
      {errors.map((error, index) => (
        <p key={index} className="text-danger">
          {error}
        </p>
      ))}
    </>
  );
};

export default ServerSideError;
