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
    this.hi = "test";
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

  fetchAccountDetails = () => {
    return new Promise(async (resolve, reject) => {
      const account = await web3.eth.requestAccounts();
      if (account.length < 1) {
        const notificaton = {
          message: "No Account Found",
          error: true,
        };
        // toast.error("Account not Connected");
        reject(notificaton);
      } else {
        const details = {
          account: {
            address: account[0],
            balance: await web3.eth.getBalance(account[0]),
            isWhiteListed: false,
          },
          connection: {
            isConnected: true,
            network: await web3.eth.net.getNetworkType(),
            networkId: await web3.eth.net.getId(),
          },
          notification: {
            message: `BSC Testnet Network Connected`,
            error: false,
          },
        };
        resolve(details);
      }
    });
  };
}
