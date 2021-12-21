const baseUrl = ' https://pokeapi.co/api/v2/pokemon?limit=52';

export const getData = async () => {
  const req = await fetch(baseUrl);
  const res = await req.json();
  return res;
};

export const getPokeData = getData().then(async (data) => {
  const myArr = [];
  await data?.results?.reduce(async (acc, curr) => {
    acc = await acc;
    try {
      const req = await fetch(curr?.url);
      const res = await req.json();
      myArr.push(res);
      return acc;
    } catch (ex) {
      return acc;
    }
  }, {});

  return myArr;
});
