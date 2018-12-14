import https from 'https'

const AIRTABLE_APIKEY = `Bearer ${process.env.AIRTABLE_ACCESS}`
const config = method => ({
  hostname: 'api.airtable.com/v0/',
  port: 443,
  method,
  headers: [{ Authorization: AIRTABLE_APIKEY }],
})

export const handler = (event, context, callback) => {
  https.request(config('POST'))
}
