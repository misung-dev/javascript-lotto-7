import { MissionUtils } from "@woowacourse/mission-utils";
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

  static checkRank(userNumberList, winningNumberList, bonusNumber) {
    const matchCount = userNumberList.filter((userNumber) =>
      winningNumberList.includes(userNumber)
    ).length;
    const isBonusNumberMatch = userNumberList.includes(bonusNumber);

    if (matchCount === 6) {
      return 1;
    }

    if (matchCount === 5 && isBonusNumberMatch) {
      return 2;
    }

    if (matchCount === 5) {
      return 3;
    }

    if (matchCount === 4) {
      return 4;
    }

    if (matchCount === 3) {
      return 5;
    }

    return -1;
  }

  getNumberList() {
    return this.#numberList;
  }
}

export default Lotto;
