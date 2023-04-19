import { Client } from 'minio';

import { config } from '../../config';

let client: Client | undefined;

function getClient(): Client {
  if (!client) throw new Error('Minio client not initialized');
  return client;
}

function init(): void {
  client = new Client({
    endPoint: config.minio.host,
    port: config.minio.port,
    accessKey: config.minio.user,
    secretKey: config.minio.password,
    useSSL: false
  });
}

export const minio = {
  getClient,
  init
};
