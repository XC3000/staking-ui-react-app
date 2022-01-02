/* eslint-disable no-console */
import Web3 from "web3";

import { fetchAccountDetails } from "./web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

// if (currentEnvironment === "development") {
//   ABI = NEWABI;
//   web3 = new Web3(
//     "https://matic.getblock.io/mainnet/?api_key=ac663d41-8448-4308-a84f-5df24b84d6ec" ||
//       Web3.givenProvider
//   );
// } else if (currentEnvironment === "production") {
//   ABI = MAINNETABI;
//   web3 = new Web3(
//     "https://speedy-nodes-nyc.moralis.io/31649378acd900255d51e632/bsc/mainnet" ||
//       Web3.givenProvider
//   );
// }
export class web3Class {
  constructor() {
    this.hi = "Richadd";
  }

  showAddress() {
    console.log(this.hi);
  }

  getTotalAmount() {
    return new Promise(async (resolve, reject) => {
      try {
        const contractData = await this.contractInstance.methods
          .totalAmount()
          .call();
        resolve(web3.utils.fromWei(contractData, "ether"));
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getData() {
    return new Promise(async (resolve, reject) => {
      await fetchAccountDetails();
    });
  }
}
