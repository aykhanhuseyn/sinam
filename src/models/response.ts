interface Response<T> {
  status: 200 | 201 | 401 | 404 | 422 | 500;
  data: T;
}

export default Response;