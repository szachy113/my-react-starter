interface Response {
  data: number;
}

const fetchCount = (amount = 1): Promise<Response> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: amount });
    }, 500);
  });

export default fetchCount;
