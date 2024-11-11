import { useTonConnectUI } from "@tonconnect/ui-react";
import { Wallet2Icon, XIcon } from "lucide-react";
import { toast } from "react-toastify";

// Type guard to check if wallet has an address property
function hasAddress(wallet: any): wallet is { address: string } {
  return wallet && typeof wallet.address === 'string';
}

export default function Wallet() {
  const [tonConnectUI] = useTonConnectUI();

  const connectWallet = async () => {
    try {
      await tonConnectUI.connectWallet();
      toast.success("Wallet connected successfully!");
    } catch (error) {
      toast.error("Failed to connect wallet.");
      console.error("Connection error:", error);
    }
  };

  const disconnectWallet = () => {
    tonConnectUI.disconnect();
    toast.info("Wallet disconnected.");
  };

  return (
    <div className="wallet-container">
      <h1>TON Wallet</h1>
      {/* Checking if wallet is available and of correct type */}
      {tonConnectUI.wallet ? (
        <div>
          <p>
            Connected Address:{" "}
            {hasAddress(tonConnectUI.wallet) ? tonConnectUI.wallet.address : "Address not available"}
          </p>
          <button onClick={disconnectWallet}>
            <XIcon className="icon" /> Disconnect
          </button>
        </div>
      ) : (
        <button onClick={connectWallet}>
          <Wallet2Icon className="icon" /> Connect TON Wallet
        </button>
      )}
    </div>
  );
}
