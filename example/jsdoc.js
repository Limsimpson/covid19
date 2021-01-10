// @ts-check

// api
/**
 * @typedef {object} CovidSummary
 * @property {Array<object>} Country
 */
/**
 * @returns {Promise<CovidSummary>}
 */
function fetchCovidSummary() {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

// JSDoc을 사용하는 경우 res에 .을 찍는 순간 Intellisense로 Country가 뜸
fetchCovidSummary().then((res) => {
  console.log(res.Country);
});
