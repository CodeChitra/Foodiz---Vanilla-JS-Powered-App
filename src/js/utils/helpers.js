const timeout = function (s) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new Error(`Request took too long! Timeout after ${s} second`));
      }, s * 1000);
    });
};
export async function getJson(url) {
  try {
    const response = await Promise.race([fetch(url), timeout(10)]);
    if (!response.ok) {
      throw new Error(
        'Some Error Occured While Getting Recipe Data! Please Try Again Later!'
      );
    }
    let data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
