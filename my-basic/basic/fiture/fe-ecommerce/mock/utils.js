function sendResult(data, delay) {
  const responseData = {
    result: 0,
    message: 'request success',
    ...data,
  };

  if (delay) {
    return (req, res) => {
      setTimeout(() => {
        res.json(responseData);
      }, delay);
    };
  }

  return responseData;
}

function sendList(data, delay) {
  return sendResult(
    {
      ...data,
      total: 200 + Math.round(Math.random() * 100),
    },
    delay,
  );
}

export { sendList, sendResult };
