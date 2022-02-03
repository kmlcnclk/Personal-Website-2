const url = [
  'https://api.raindrop.io/rest/v1/raindrops/0',
  '?perpage=50',
  '&search=[{"key":"tag","val":"history"}]',
  '&sort=-created',
].join('');

export async function getBookmarks() {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`,
    }),
  });
  return res.json();
}
