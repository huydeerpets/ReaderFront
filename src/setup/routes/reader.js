import Reader from '../../modules/reader/containers/ReaderContainer';

export default {
  reader: {
    path: '/read/:stub/:lang/:volume/:chapter/:subchapter',
    exact: true,
    component: Reader
  }
};
