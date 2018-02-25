import React from 'react';

const Main = ({ fetchArticle }) => {
  return <div onClick={fetchArticle}>Main</div>;
};

Main.propTypes = {};

export default Main;
