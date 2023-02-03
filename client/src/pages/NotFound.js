import React from 'react';
import NotFound from '../components/NotFound/index';
import errorObject from '../components/NotFound/Data';

function NotFoundPage() {
  return (
    <>
      <NotFound {...errorObject} />
    </>
  );
}

export default NotFoundPage;
