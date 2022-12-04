import { hash, sign } from "eth-crypto";

connectButton.onclick = connect;
uploadButton.onclick = uploadData;
verify.onclick = checkVerification;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected!";
  } else {
    fundButton.innerHTML = "Please install metamask!";
  }
}

async function uploadData() {
  if (typeof window.ethereum !== "undefined") {
    const pubKey = document.getElementById("pubKey").value;
    // const pvtKey = document.getElementById("pvtKey").value;
    const pvtKey = "0xhegxe";
    const addressOrg = document.getElementById("addressOrg").value;
    const dataHash = document.getElementById("dataHash").value;
    const user = document.getElementById("userAddress").value;
    const tokenUri = document.getElementById("tokenUri").value;
    const signerIdentity = {
      privateKey: pvtKey,
      publicKey: pubKey,
      address: addressOrg,
    };
    const message = hash.keccak256([
      { type: "string", value: dataHash },
    ]);
    const signature = sign(signerIdentity.privateKey, message);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.uploadData([
        dataHash,
        signature,
        addressOrg,
        user,
        tokenUri,
      ]);
      await listenForTransactionMined(transactionResponse, provider);
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  }
}

async function checkVerification(orgAddress) {
  if (typeof window.ethereum !== "undefined") {
    console.log(orgAddress);
    //const orgAddress = document.getElementById("orgAddress").value;
    //const message = document.getElementById("message").value;
    //const signature = document.getElementById("signature").value;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.checkVerification([
        orgAddress,
      ]);
      await listenForTransactionMined(transactionResponse, provider);
      console.log("done");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = {checkVerification};