export default function parseRoute(hashRoute) {
  if (hashRoute.startsWith('#')) {
    hashRoute = hashRoute.replace('#', '');
  }
  const [path, queryString] = hashRoute.split('?');
  const params = new URLSearchParams(queryString);
  // console.log('type of query str', typeof (queryString));
  // console.log('::QUERYSTRING::', queryString, '::PATH::', path, '::PARAMS::', params);
  return { path, params };
}
