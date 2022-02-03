import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY }).base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
);

const minifiedRecords = (records) => {
  return records.map((record) => minifyRecord(record));
};

const minifyRecord = (record) => {
  return {
    Id: record.id,
    ...record.fields,
  };
};

export async function getTable(table) {
  const records = await base(table)
    .select({
      sort: [{ field: 'Created', direction: 'desc' }],
    })
    .all();

  const data = await minifiedRecords(records);
  return data.filter((o) => !o.Draft);
}
