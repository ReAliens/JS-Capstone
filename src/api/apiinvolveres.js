const baseUrl =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps";
const appId = "WJ94PTIw3sHPQ1asnzBz";

export const reservationMovies = async (itemID, name, dateStart, dateEnd) => {
  const req = await fetch(`${baseUrl}/${appId}/reservations`, {
    method: "POST",
    body: JSON.stringify({
      item_id: itemID,
      username: name,
      date_start: dateStart,
      date_end: dateEnd,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(itemID, name, dateEnd, dateStart);
  const res = await req.json();
  return res;
};

export const getReservations = async (id) => {
  const req = await fetch(`${baseUrl}/${appId}/reservations?item_id=${id}`);
  const res = await req.json();
  return res;
};