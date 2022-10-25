export function Api(data:any, time = 3000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}
