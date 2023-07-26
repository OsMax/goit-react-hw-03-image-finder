import consts from './consts';
import axios from 'axios';

function getApi(filter, page) {
  return axios.get(
    `${consts.MAIN_HOST}?key=${consts.API_KEY}&q=${rebuildFilter(
      filter
    )}&page=${page}${consts.MORE_FILTER}`
  );
}

function rebuildFilter(filter) {
  return filter.split(' ').join('+');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getApi };
