from googleapiclient import discovery
import json
import os
from dotenv import load_dotenv

load_dotenv()

PERSPECTIVE_API_KEY = os.getenv('PERSPECTIVE_API_KEY')

client = discovery.build(
  "commentanalyzer",
  "v1alpha1",
  developerKey=PERSPECTIVE_API_KEY,
  discoveryServiceUrl="https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1",
  static_discovery=False,
)

analyze_request = {
  'comment': { 'text': 'friendly greetings from python' },
  'requestedAttributes': {'TOXICITY': {}}
}

response = client.comments().analyze(body=analyze_request).execute()
print(json.dumps(response, indent=4))

