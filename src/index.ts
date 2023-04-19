import Express from 'express';

import { config } from './config';
import { minio } from './lib/minio';

async function main(): Promise<void> {
  const app = Express();

  minio.init();

  // testBucket
  // zvavtom/file.txt

  // testBucket/zvavtom/file.txt

  await minio.getClient().makeBucket('test3', 'us-east-1');

  // await minio.getClient().putObject('test3', 'test.txt', Buffer.from('some file'));

  // await minio.getClient().setBucketPolicy(
  //   'test',
  //   JSON.stringify({
  //     Version: '2012-10-17',
  //     Statement: [
  //       {
  //         Effect: 'Allow',
  //         Principal: { AWS: ['*'] },
  //         Action: ['s3:GetObject'],
  //         Resource: [`arn:aws:s3:::test`]
  //       }
  //     ]
  //   })
  // );

  app.listen(config.port, () => {
    console.log(`Listening on ${config.url}`);
  });
}

main();
