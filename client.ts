const { google } = require('googleapis');

API_KEY = 'copy-your-api-key-here';
DISCOVERY_URL =
  'https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1';

google.discoverAPI(DISCOVERY_URL)
  .then(client => {
    const analyzeRequest = {
      comment: {
        text: 'Jiminy cricket! Well gosh durned it! Oh damn it all!',
      },
      requestedAttributes: {
        TOXICITY: {},
      },
    };

    client.comments.analyze(
      {
        key: API_KEY,
        resource: analyzeRequest,
      },
      (err, response) => {
        if (err) throw err;
        console.log(JSON.stringify(response.data, null, 2));
      });
  })
  .catch(err => {
    throw err;
  });

