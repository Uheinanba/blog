import React from 'react';
import { connect } from 'dva';
import Main from '../components/Main';
import styles from './IndexPage.css';

function IndexPage({ dispatch, main }) {
  const fetchArticle = () => {
    return dispatch({
      type: 'main/fetch',
    });
  };
  console.log(main);
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

export default connect(mapStateToProps)(IndexPage);
