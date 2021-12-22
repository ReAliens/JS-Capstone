const baseUrl = ' https://api.tvmaze.com/shows';

const getData = async () => {
  const req = await fetch(baseUrl);
  const res = await req.json();
  return res;
};

export default getData;
