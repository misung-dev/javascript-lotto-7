import LottoController from "./controllers/LottoController.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const lottoController = new LottoController();

    try {
      await lottoController.start();
    } catch (error) {
      Console.print(error.message);

      await this.run();
    }
  }
}

export default App;
