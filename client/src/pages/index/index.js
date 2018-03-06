import React from 'react';
import dynamic from 'dva/dynamic';
import { connect } from 'dva';
import Main from './components/Main';

/* function IndexPage({ dispatch, main }) {
  const fetchArticle = () => {
    return dispatch({
      type: 'main/fetch',
    });
  };
  return (
    <div>
      <Main fetchArticle={fetchArticle} />
    </div>
  );
}

IndexPage.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  main: state.main,
});
 */
const Users = app =>
  dynamic({
    app,
    models: () => [import('./models/home')],
    component: () => Main,
  });
export default Users;
