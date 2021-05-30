import React from 'react';

function PageNotFound(props) {
  const handelClick = () => {
    props.history.push({
      pathname: '/',
    });
  };

  return (
    <>
      <button type="button" onClick={handelClick}>
        Home
      </button>
      <h2 >Oops! Page not found:(</h2>
    </>
  );
}


export default PageNotFound;