// import CurrencyEth from "../assets/CurrencyEth"
// import { ethers } from "ethers"
// import { useState } from "react"

const Login = () => {
	// const [provider, setProvider] = useState<ethers.BrowserProvider | null>(
	// 	null
	// )
	// const [isConnected, setIsConnected] = useState(false)
	// const [isLoading, setIsLoading] = useState(false)
	// const [currentAccount, setCurrentAccount] = useState<string>("")

	// const ethereum = window.ethereum

	// const checkIfWalletIsConnected = async () => {
	// 	// console.log("In checkMetaMask")
	// 	if (ethereum) {
	// 		const provider = new ethers.BrowserProvider(window.ethereum)
	// 		try {
	// 			// await ethereum.enable()
	// 			// setProvider(newProvider)
	// 			// console.log("MetaMask is connected!")
	// 			if (provider) {
	// 				await provider.send("eth_requestAccounts", [])
	// 				const signer = provider.getSigner()
	// 				const signerAddress = await signer.getAddress()
	// 				console.log("Account:", await signer.getAddress())
	// 			}
	// 		} catch (err) {
	// 			console.log("User denied access to MetaMask.")
	// 		}
	// 	} else {
	// 		console.log("MetaMask is not installed.")
	// 	}
	// }

	// const connectWallet = async () => {
	// 	// console.log("In connect wallet")
	// 	try {
	// 		if (!ethereum) return alert("Please install metamask")
	// 		console.log("In connect Wallet")
	// 		const accounts = await ethereum.request({
	// 			method: "eth_requestAccounts",
	// 		})
	// 		// console.log("In connect wallet", accounts)

	// 		setCurrentAccount(accounts[0])
	// 		setIsConnected(true)
	// 		// navigate("/")
	// 		// window.location.reload()
	// 	} catch (error) {
	// 		console.log(error)
	// 		throw new Error("No ethereum object")
	// 	}
	// }

	return (
		<div className="absolute z-0 top-0 w-full h-screen bg-black flex flex-col items-center justify-center">
			<div className="bg-white bg-opacity-5 rounded-xl w-2/5 h-64 flex flex-col items-center justify-center ">
				<img src="" alt="img not found" />
				<h1 className="text-3xl text-white">Connect Wallet</h1>
				<div className="flex justify-between w-3/5 padding-auto bg-white bg-opacity-5 rounded-lg py-5 px-8 mt-8  ">
					<div className="flex">
						<img src="/pages/CurrencyEth.jpg" />
						<div className="text-white text-2xl">Ethereum</div>
					</div>
					<div className="text-green text-2xl cursor-pointer">
						Connect
					</div>
				</div>
			</div>
			Login
		</div>
	)
}

export default Login
