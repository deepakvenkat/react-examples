import fetch from 'node-fetch';

const api =   {
  "host": "https://public.opendatasoft.com",
  "path": "/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q=__ZIPCODE__"
}

export const getLatAndLong = async ({ zipcode }) => {
  const host = api.host;
  const path = api.path.replace('__ZIPCODE__', zipcode);
  let result;
  try {
    const response = await fetch(
      `${host}${path}`,
    );
    const { records } = await response.json();
    if (records.length) {
      result = {
        latitude: records[0]?.fields?.latitude,
        longitude: records[0]?.fields?.latitude,
      };
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
  return result;
};
