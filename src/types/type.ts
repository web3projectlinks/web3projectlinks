export interface ChainDetail {
  name: string;
  type: string;
}

export interface SocialPlatforms {
  discord: string;
  twitter: string;
  reddit: string;
  community: string;
  coinmarketcap_community: string;
  twitter_hashtag: string;
}

export interface UrlData {
  name: string;
  url: string;
}

export interface MetaData {
  name: string;
  data: UrlData[];
}

export interface ProjectData {
  id: string;
  description: string;
  tags: string[];
  coin_details: {
    name: string;
    symbol: string;
    logo: string;
    max_supply: string;
  };
  official_links: {
    website: string;
    whitepaper: string;
    documentation: string;
    forum: string;
    github: string;
  };
  social_platforms: SocialPlatforms;
  chain_details: ChainDetail[];
  meta_data: MetaData[];
}

export interface CryptoDataType {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null | number; // It can be null or a number
  last_updated: string;
}
