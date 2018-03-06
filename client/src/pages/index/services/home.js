import request from '../../../utils/request';

export function fetch({ page = 1 }) {
  return request(`/api/users`);
}

export function remove(id) {
  return request(`/api/users/$id`);
}
