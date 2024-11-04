import LottoValidator from "./validators/LottoValidator.js";

import {
  LOTTO_NUMBER_PICK_COUNT,
  MAX_LOTTO_NUMBER,
  MIN_LOTTO_NUMBER,
} from "./constants/lotto.js";

class Lotto {
  #numberList;

  constructor(numberList = Lotto.generateNumberList()) {
    this.#validate(numberList);
    this.#numberList = numberList;
  }

  #validate(numberList) {
    LottoValidator.validateLottoNumberList(numberList);
  }

  static generateNumberList() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUMBER,
      MAX_LOTTO_NUMBER,
      LOTTO_NUMBER_PICK_COUNT
    ).sort((a, b) => a - b);
  }

  getNumberList() {
    return this.#numberList;
  }
}

export default Lotto;
