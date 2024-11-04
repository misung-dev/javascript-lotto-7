import { MIN_LOTTO_NUMBER, LOTTO_PRICE } from "../constants/lotto.js";
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
}

export default LottoValidator;
