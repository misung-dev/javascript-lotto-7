import { Console } from "@woowacourse/mission-utils";
import { LOTTO_RANK_MATCH_COUNT, LOTTO_PRIZE } from "../constants/lotto.js";

class LottoView {
  static async promptPurchaseAmount() {
    return await Console.readLineAsync("구입금액을 입력해 주세요.\n");
  }

  static async promptWinningNumbers() {
    return await Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
  }

  static async promptBonusNumber() {
    return await Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
  }

  static async printLottoCount(count) {
    await Console.print(`${count}개를 구매했습니다.`);
  }

  static async printLottoNumbers(lottoList) {
    lottoList.forEach((lotto) => {
      Console.print(`[${lotto.getNumberList().join(", ")}]`);
    });
  }

  static async printNewLine() {
    await Console.print("");
  }

  static printResults(rankStatus, profitRate) {
    Console.print("당첨 통계");
    Console.print("---");

    Object.keys(rankStatus)
      .sort((a, b) => b - a)
      .forEach((rank) => {
        Console.print(
          `${LOTTO_RANK_MATCH_COUNT[rank].generalNumber}개 일치${
            Number(rank) === 2 ? ", 보너스 볼 일치" : ""
          } (${LOTTO_PRIZE[rank].toLocaleString()}원) - ${rankStatus[rank]}개`
        );
      });
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  }

  static throwError(message) {
    throw Error(`[ERROR] ${message}`);
  }
}

export default LottoView;
