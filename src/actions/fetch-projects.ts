"use server";

type AccountType = "demo" | "pro";

export async function fetchCoinData(projectId: string) {
  const account_type: AccountType = "demo";
  const currency = "usd";
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${projectId}&x_cg_demo _api_key=${process.env.COINGECKO_API_KEY}`;
  //
  // `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}d&ids=${projectId}&x_cg_${currency}_api_key=${process.env.COINGECKO_API_KEY}`,
  const res = await fetch(api);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch coin data");
  }
  // console.log("res", res);

  return res.json();
}

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=2
export async function fetchCoinsData(currentPage?: number) {
  // const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1`; //
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${currentPage ?? 1}&x_cg_demo_api_key=${process.env.COINGECKO_API_KEY}`; //
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed to fetch coin data");
  }

  return res.json();
}
export async function fetchProject(projectId: string) {
  const api = `${process.env.HOST_URL}/api/project/${projectId}`;
  const res = await fetch(api);

  if (!res.ok) {
    throw new Error("Failed to fetch coin data");
  }
  return res.json();
}
