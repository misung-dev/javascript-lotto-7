import {
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  LOTTO_PRICE,
  LOTTO_NUMBER_PICK_COUNT,
} from "../constants/lotto.js";

export const ERROR_MESSAGES = Object.freeze({
  invalidLottoPurchaseAmount: "로또 구입 금액은 숫자여야 합니다.",
  invalidLottoPriceMin: `로또 구입 금액은 ${LOTTO_PRICE}원 이상이어야 합니다.`,
  invalidLottoPriceUnit: `로또 구입 금액은 ${LOTTO_PRICE}원 단위여야 합니다.`,
  invalidLottoNumber: `로또 번호는 ${MIN_LOTTO_NUMBER}부터 ${MAX_LOTTO_NUMBER}까지의 숫자여야 합니다.`,
  invalidLottoNumberInteger: `로또 번호는 ${MIN_LOTTO_NUMBER}부터 ${MAX_LOTTO_NUMBER}까지의 정수여야 합니다.`,
  invalidLottoNumberLength: `로또 번호는 ${LOTTO_NUMBER_PICK_COUNT}개여야 합니다.`,
  invalidLottoNumberDuplicate: "로또 번호는 중복되지 않아야 합니다.",
  invalidLottoWinningNumberLength: `당첨 번호는 ${LOTTO_NUMBER_PICK_COUNT}개여야 합니다.`,
  invalidLottoWinningNumber: `당첨 번호는 ${MIN_LOTTO_NUMBER}부터 ${MAX_LOTTO_NUMBER}까지의 숫자여야 합니다.`,
  invalidLottoWinningNumberInteger: `당첨 번호는 ${MIN_LOTTO_NUMBER}부터 ${MAX_LOTTO_NUMBER}까지의 정수여야 합니다.`,
  invalidLottoWinningNumberDuplicate: "당첨 번호는 중복되지 않아야 합니다.",
  invalidLottoBonusNumberDuplicateWithWinningNumber:
    "보너스 번호는 당첨 번호와 중복되지 않아야 합니다.",
  invalidLottoBonusNumber: `보너스 번호는 ${MIN_LOTTO_NUMBER}부터 ${MAX_LOTTO_NUMBER}까지의 숫자여야 합니다.`,
  invalidLottoBonusNumberInteger: `보너스 번호는 ${MIN_LOTTO_NUMBER}부터 ${MAX_LOTTO_NUMBER}까지의 정수여야 합니다.`,
});
