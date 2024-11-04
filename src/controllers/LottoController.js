import { LOTTO_PRICE } from "../constants/lotto.js";
import Lotto from "../Lotto.js";
import LottoView from "../views/LottoView.js";
import LottoValidator from "../validators/LottoValidator.js";

class LottoController {
  constructor() {
    this.lottoList = [];
    this.winningNumberList = [];
    this.bonusNumber = null;
  }

  async getPurchaseAmount() {
    const amount = await LottoView.promptPurchaseAmount();

    LottoValidator.validatePurchaseAmount(amount);

    return amount;
  }

  async start() {
    const amount = await this.getPurchaseAmount();
    const lottoCount = amount / LOTTO_PRICE;

    LottoView.printNewLine();
    LottoView.printLottoCount(lottoCount);
    LottoView.printNewLine();

    this.lottoList = Array.from({ length: lottoCount }, () => new Lotto());

    LottoView.printLottoNumbers(this.lottoList);
    LottoView.printNewLine();
  }
}

export default LottoController;
