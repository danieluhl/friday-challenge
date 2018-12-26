// before anyone gives me crap about the name, I'm doing it so people
// don't know we use AirTable (might be a risk).
import dotenv from 'dotenv'
import Airtable from 'airtable'

dotenv.config()
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_APIKEY }).base(
  process.env.AIRTABLE_APPID
)
const TABLE = 'Submissions'

export const handler = (event, context, callback) => {
  const {
    httpMethod: method,
    queryStringParameters: params,
    path,
    body,
    headers,
  } = event
  const { identity, user } = context.clientContext
  const { id } = params
  switch (method) {
    case 'GET':
      if (!id) {
        airtable(TABLE)
          .select({})
          .firstPage((err, records) => {
            callback(null, {
              statusCode: 200,
              body: JSON.stringify(records.map(record => record._rawJson)),
            })
          })
      } else {
        airtable(TABLE).find(id, (err, record) => {
          callback(null, {
            statusCode: 200,
            body: JSON.stringify(record._rawJson),
          })
        })
      }
      break
    case 'POST':
      if (!body) {
        return callback(null, {
          statusCode: 400,
        })
      }
      if (!user) {
        return callback(null, {
          statusCode: 401,
        })
      }
      const { slug: Slug, url: URL } = body
      airtable.create(
        {
          Slug,
          URL,
        },
        (err, record) => {
          if (err) return callback(err)
          callback(null, { statusCode: 201, body: record })
        }
      )
      break
    case 'PUT':
      if (!body || !id) {
        return callback(null, {
          statusCode: 400,
        })
      }
      if (!user) {
        return callback(null, {
          statusCode: 401,
        })
      }
      airtable.update(id, { body }, (err, record) => {
        if (err) return callback(err)
        callback(null, { statusCode: 200, body: record })
      })
      break
    case 'DELETE':
      if (!body || !id) {
        return callback(null, {
          statusCode: 400,
        })
      }
      if (!user) {
        return callback(null, {
          statusCode: 401,
        })
      }
      airtable.destroy(id, (err, didDeleteRecord) => {
        if (err) return callback(err)
        callback(null, { statusCode: 200, body: { didDeleteRecord } })
      })
      break
    default:
      break
  }
}
