import BigNumber from 'bignumber.js';

// URLS
export const GAS_PRICE_API = 'https://gasprice.poa.network/';
export const ZAPPER_GAS_PRICE_API = 'https://api.zapper.fi/v1/gas-price?api_key=96e0cc51-a62e-42ca-acee-910ea7d2a241';
export const ETHERSCAN_URL = 'https://etherscan.io/';

export const IBEUR_ETH_ADDRESS = '0xa2d81bedf22201a77044cdf3ab4d9dc1ffbc391b'         // -> sushi lp pair for EUR
export const IBFF_ADDRESS = '0xb347132eFf18a3f63426f4988ef626d2CbE274F5'              // -> reward asset (think CRV)
export const VEIBFF_ADDRESS = '0x4d0518c9136025903751209ddddf6c67067357b1'            // -> vested reward asset  (think veCRV)
export const FF_FAUCET_ADDRESS = '0x7d254d9adc588126edaee52a1029278180a802e8'         // -> stake sushi lp pair, get reward asset
export const FF_DISTRIBUTION_ADDRESS = '0x27761efeb0c7b411e71d0fd0aee5dde35c810cc2'   // -> after locking, get protocol fees
export const GAUGE_PROXY_ADDRESS = '0xd9c8620c0c0b866b7b5180d2d70093165340326d'       // -> gauge proxy for voting etc.

export const IBKRW_ADDRESS = '0x95dFDC8161832e4fF7816aC4B6367CE201538253'             // -> KRW
export const IBKRW_GAUGE_ADDRESS = '0x8992FD229B574b8083de1249BC6Fd3711fDA45dD'       // -> KRW Gauge
export const IBKRW_POOL_ADDRESS = '0x8461A004b50d321CB22B7d034969cE6803911899'        // -> KRW Pool

export const IBEUR_ADDRESS = '0x96e61422b6a9ba0e068b6c5add4ffabc6a4aae27'             // -> EUR
export const IBEUR_GAUGE_ADDRESS = '0x9d7CA778d067045a9d6B871c9D28589875308018'       // -> EUR Gauge
export const IBEUR_POOL_ADDRESS = '0x19b080FE1ffA0553469D20Ca36219F17Fcf03859'        // -> EUR Pool


// GENERAL
export const ERROR = 'ERROR';
export const STORE_UPDATED = 'STORE_UPDATED';
export const TX_SUBMITTED = 'TX_SUBMITTED';

export const CONNECTION_CONNECTED = 'CONNECTION_CONNECTED';
export const CONNECTION_DISCONNECTED = 'CONNECTION_DISCONNECTED';
export const CONNECT_WALLET = 'CONNECT_WALLET';

export const CONFIGURE = 'CONFIGURE';
export const CONFIGURE_RETURNED = 'CONFIGURE_RETURNED';

export const ACCOUNT_CONFIGURED = 'ACCOUNT_CONFIGURED';
export const ACCOUNT_CHANGED = 'ACCOUNT_CHANGED';

export const GET_GAS_PRICES = 'GET_GAS_PRICES';
export const GAS_PRICES_RETURNED = 'GAS_PRICES_RETURNED';

// FIXED FOREX
export const FIXED_FOREX_UPDATED = 'FIXED_FOREX_UPDATED';

export const CONFIGURE_FIXED_FOREX = 'CONFIGURE_FIXED_FOREX';
export const FIXED_FOREX_CONFIGURED = 'FIXED_FOREX_CONFIGURED';

export const GET_FIXED_FOREX_BALANCES = 'GET_FIXED_FOREX_BALANCES';
export const FIXED_FOREX_BALANCES_RETURNED = 'FIXED_FOREX_BALANCES_RETURNED';

export const FIXED_FOREX_CLAIM_VESTING_REWARD = 'FIXED_FOREX_CLAIM_VESTING_REWARD';
export const FIXED_FOREX_VESTING_REWARD_CLAIMED = 'FIXED_FOREX_VESTING_REWARD_CLAIMED';

export const FIXED_FOREX_CLAIM_STAKING_REWARD = 'FIXED_FOREX_CLAIM_STAKING_REWARD';
export const FIXED_FOREX_STAKING_REWARD_CLAIMED = 'FIXED_FOREX_STAKING_REWARD_CLAIMED';

export const FIXED_FOREX_APPROVE_STAKE_SLP = 'FIXED_FOREX_APPROVE_STAKE_SLP'
export const FIXED_FOREX_STAKE_SLP_APPROVED = 'FIXED_FOREX_STAKE_SLP_APPROVED'

export const FIXED_FOREX_STAKE_SLP = 'FIXED_FOREX_STAKE_SLP'
export const FIXED_FOREX_SLP_STAKED = 'FIXED_FOREX_SLP_STAKED'

export const FIXED_FOREX_UNSTAKE_SLP = 'FIXED_FOREX_UNSTAKE_SLP'
export const FIXED_FOREX_SLP_UNSTAKED = 'FIXED_FOREX_SLP_UNSTAKED'

export const FIXED_FOREX_APPROVE_VEST = 'FIXED_FOREX_APPROVE_VEST'
export const FIXED_FOREX_VEST_APPROVED = 'FIXED_FOREX_VEST_APPROVED'

export const FIXED_FOREX_VEST = 'FIXED_FOREX_VEST'
export const FIXED_FOREX_VESTED = 'FIXED_FOREX_VESTED'

export const FIXED_FOREX_VEST_AMOUNT = 'FIXED_FOREX_VEST_AMOUNT'
export const FIXED_FOREX_AMOUNT_VESTED = 'FIXED_FOREX_AMOUNT_VESTED'

export const FIXED_FOREX_VEST_DURATION = 'FIXED_FOREX_VEST_DURATION'
export const FIXED_FOREX_DURATION_VESTED = 'FIXED_FOREX_DURATION_VESTED'

export const FIXED_FOREX_VOTE = 'FIXED_FOREX_VOTE'
export const FIXED_FOREX_VOTE_RETURNED = 'FIXED_FOREX_VOTE_RETURNED'

export const FIXED_FOREX_APPROVE_DEPOSIT_CURVE = 'FIXED_FOREX_APPROVE_DEPOSIT_CURVE'
export const FIXED_FOREX_DEPOSIT_CURVE_APPROVED = 'FIXED_FOREX_DEPOSIT_CURVE_APPROVED'

export const FIXED_FOREX_DEPOSIT_CURVE = 'FIXED_FOREX_DEPOSIT_CURVE'
export const FIXED_FOREX_CURVE_DEPOSITED = 'FIXED_FOREX_CURVE_DEPOSITED'

export const FIXED_FOREX_WITHDRAW_CURVE = 'FIXED_FOREX_WITHDRAW_CURVE'
export const FIXED_FOREX_CURVE_WITHDRAWN = 'FIXED_FOREX_CURVE_WITHDRAWN'

export const FIXED_FOREX_APPROVE_STAKE_CURVE = 'FIXED_FOREX_APPROVE_STAKE_CURVE'
export const FIXED_FOREX_STAKE_CURVE_APPROVED = 'FIXED_FOREX_STAKE_CURVE_APPROVED'

export const FIXED_FOREX_STAKE_CURVE = 'FIXED_FOREX_STAKE_CURVE'
export const FIXED_FOREX_CURVE_STAKED = 'FIXED_FOREX_CURVE_STAKED'

export const FIXED_FOREX_UNSTAKE_CURVE = 'FIXED_FOREX_UNSTAKE_CURVE'
export const FIXED_FOREX_CURVE_UNSTAKED = 'FIXED_FOREX_CURVE_UNSTAKED'


export const APPROVE_FUSD = 'APPROVE_FUSD'
export const FUSD_APPROVED = 'FUSD_APPROVED'

export const MINT_FUSD = 'MINT_FUSD'
export const FUSD_MINTED = 'FUSD_MINTED'

export const BURN_FUSD = 'BURN_FUSD'
export const FUSD_BURNT = 'FUSD_BURNT'

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0);
