import express from 'express';
const app = express();

import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
const client = new SecretManagerServiceClient();


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/secret', async (req, res) => {
  const secret = await accessSecret();
  res.send(`Secret: ${secret}`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});


async function createAndAccessSecret() {
  // Create the secret with automation replication.

  const parent = 'projects/28356368051' // Project for which to manage secrets.
  const secretId = 'foo' // Secret ID.
  const payload = 'hello world!' // String source data.

  const [secret] = await client.createSecret({
    parent: parent,
    secret: {
      name: secretId,
      replication: {
        automatic: {},
      },
    },
    secretId,
  });

  console.info(`Created secret ${secret.name}`);

  // Add a version with a payload onto the secret.
  const [version] = await client.addSecretVersion({
    parent: secret.name,
    payload: {
      data: Buffer.from(payload, 'utf8'),
    },
  });

  console.info(`Added secret version ${version.name}`);

  // Access the secret.
  const [accessResponse] = await client.accessSecretVersion({
    name: version.name,
  });

  const responsePayload = accessResponse.payload.data.toString('utf8');
  console.info(`Payload: ${responsePayload}`);
}

async function accessSecret() {
  try {
    // Access the secret.
    const [accessResponse] = await client.accessSecretVersion({
      name: 'projects/28356368051/secrets/secret-test/versions/1',
    });

    const responsePayload = accessResponse.payload.data.toString('utf8');
    console.info(`Secret: ${responsePayload}`);
    return responsePayload;

  } catch (error) {
    console.info(`Error: ${error.message}`);
    return error.message;
  }
}

// createAndAccessSecret();
accessSecret();