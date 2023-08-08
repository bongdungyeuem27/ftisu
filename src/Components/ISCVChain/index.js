import { useState } from "react";
import { getFaucet } from "../../api/chain";

/* eslint-disable no-undef */
export default function ISCVChain() {
  const [account, setAccount] = useState();
  async function addISCVNetwork() {
    // eslint-disable-next-line no-undef
    if (window.ethereum && ethereum.isMetaMask) {
      try {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x41F15",
              chainName: "ISCV",
              nativeCurrency: {
                name: "ISCV",
                symbol: "ISCV",
                decimals: 18,
              },
              rpcUrls: ["https://chain.iscv.ftisu.vn"],
            },
          ],
        });
        console.log("ISCV Network added to Metamask!");
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Metamask extension not detected!");
    }
  }

  const handleGetFaucet = async () => {
    getFaucet(account).catch((error) => console.log(error));
  };
  return (
    <section style={{ marginTop: "30px", padding: "60px 40px" }}>
      <div>
        <button
          className="btn"
          style={{ backgroundColor: "pink", borderWidth: "1px" }}
          onClick={addISCVNetwork}
        >
          Thêm ISCV Chain
        </button>
      </div>
      <div className="mt-3">
        <input
          type="text"
          name="account"
          value={account}
          style={{ borderRadius: "5px" }}
          className="d-block border-2 btn-success"
          onChange={(e) => setAccount(e.target.value)}
        ></input>
        <button
          className="btn mt-2"
          style={{ backgroundColor: "pink", borderWidth: "1px" }}
          onClick={handleGetFaucet}
        >
          Nhận Airdrop
        </button>
      </div>
    </section>
  );
}
