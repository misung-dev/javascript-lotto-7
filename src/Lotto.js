import LottoValidator from "./validators/LottoValidator.js";

class Lotto {
  #numberList;

  constructor(numberList = Lotto.generateNumberList()) {
    this.#validate(numberList);
    this.#numberList = numberList;
  }

  #validate(numberList) {
    LottoValidator.validateLottoNumberList(numberList);
  }
}

export default Lotto;
