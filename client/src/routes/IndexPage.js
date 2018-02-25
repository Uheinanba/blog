import React from 'react';
import dynamic from 'dva/dynamic';
import { connect } from 'dva';
import Main from '../components/Main';
import styles from './IndexPage.css';

function IndexPage({ dispatch, main }) {
  console.log(main);
  const fetchArticle = () => {
    return dispatch({
      type: 'main/fetch',
    });
  };
  return (
    <div className={styles.normal}>
      <Main fetchArticle={fetchArticle} />
    </div>
  );
}

IndexPage.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  main: state.main,
});

// export default connect(mapStateToProps)(IndexPage);

const Users = app =>
  dynamic({
    app,
    models: () => [import('../models/main')],
    component: () => connect(mapStateToProps)(IndexPage),
  });
export default Users;
