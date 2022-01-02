import { toast } from "react-toastify";
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

export const fetchAccountDetails = () => {
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
