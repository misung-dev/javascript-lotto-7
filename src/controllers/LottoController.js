import { LOTTO_PRIZE, LOTTO_PRICE } from "../constants/lotto.js";
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

  async getWinningNumberList() {
    const winningNumbers = await LottoView.promptWinningNumbers();

    LottoValidator.validateWinningNumbers(winningNumbers);

    const winningNumberList = winningNumbers.split(",").map(Number);

    return winningNumberList;
  }

  async getBonusNumber(winningNumberList) {
    const bonusNumber = await LottoView.promptBonusNumber();

    LottoValidator.validateBonusNumber(bonusNumber, winningNumberList);

    return Number(bonusNumber);
  }

  calculateResults() {
    const rankStatus = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    this.lottoList.forEach((lotto) => {
      const rank = Lotto.checkRank(
        lotto.getNumberList(),
        this.winningNumberList,
        this.bonusNumber
      );

      if (rank === -1) {
        return;
      }

      rankStatus[rank] += 1;
    });

    return rankStatus;
  }

  calculateProfitRate(results) {
    const totalPrize = Object.keys(results).reduce(
      (acc, rank) => acc + results[rank] * LOTTO_PRIZE[rank],
      0
    );

    return (totalPrize / (this.lottoList.length * LOTTO_PRICE)) * 100;
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

    this.winningNumberList = await this.getWinningNumberList();
    this.bonusNumber = await this.getBonusNumber(this.winningNumberList);

    const results = this.calculateResults();
    const profitRate = this.calculateProfitRate(results);

    LottoView.printNewLine();
    LottoView.printResults(results, profitRate);

    return;
  }
}

export default LottoController;
