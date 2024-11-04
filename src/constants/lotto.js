export const LOTTO_PRICE = 1000;

export const LOTTO_NUMBER_PICK_COUNT = 6;

export const MAX_LOTTO_NUMBER = 45;

export const MIN_LOTTO_NUMBER = 1;

export const LOTTO_PRIZE = Object.freeze({
  1: 2000000000,
  2: 30000000,
  3: 1500000,
  4: 50000,
  5: 5000,
});

export const LOTTO_RANK_MATCH_COUNT = Object.freeze({
  1: {
    generalNumber: 6,
    bonusNumber: 0,
  },
  2: {
    generalNumber: 5,
    bonusNumber: 1,
  },
  3: {
    generalNumber: 5,
    bonusNumber: 0,
  },
  4: {
    generalNumber: 4,
    bonusNumber: 0,
  },
  5: {
    generalNumber: 3,
    bonusNumber: 0,
  },
});
