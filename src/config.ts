export const config = {
  port: 4444,
  get url() {
    return `http://localhost:${this.port}`;
  },
  minio: {
    host: '172.18.0.2',
    port: 9000,
    user: 'root',
    password: 'password'
  }
};
