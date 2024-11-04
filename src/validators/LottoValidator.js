import {
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
  LOTTO_PRICE,
  LOTTO_NUMBER_PICK_COUNT,
} from "../constants/lotto.js";
import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import LottoView from "../views/LottoView.js";

class LottoValidator {
  static validatePurchaseAmount(amount) {
    if (isNaN(amount)) {
      LottoView.throwError(ERROR_MESSAGES.invalidLottoPurchaseAmount);

      return;
    }

    if (amount < MIN_LOTTO_NUMBER) {
      LottoView.throwError(ERROR_MESSAGES.invalidLottoPriceMin);

      return;
    }

    if (amount % LOTTO_PRICE !== 0) {
      LottoView.throwError(ERROR_MESSAGES.invalidLottoPriceUnit);

      return;
    }
  }

  static validateLottoNumberList(numberList) {
    if (numberList.length !== LOTTO_NUMBER_PICK_COUNT) {
      LottoView.throwError(ERROR_MESSAGES.invalidLottoNumberLength);

      return;
    }

    if (
      numberList.some(
        (number) =>
          isNaN(number) ||
          number < MIN_LOTTO_NUMBER ||
          number > MAX_LOTTO_NUMBER
      )
    ) {
      LottoView.throwError(ERROR_MESSAGES.invalidLottoNumber);

      return;
    }

    if (!numberList.every((number) => Number.isInteger(number))) {
      LottoView.throwError(ERROR_MESSAGES.invalidLottoNumberInteger);

      return;
    }

    if (new Set(numberList).size !== LOTTO_NUMBER_PICK_COUNT) {
      LottoView.throwError(ERROR_MESSAGES.invalidLottoNumberDuplicate);

      return;
    }
  }
}

export default LottoValidator;
