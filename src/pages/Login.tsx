// import CurrencyEth from "../assets/CurrencyEth"

const Login = () => {
	return (
		<div className="absolute z-0 top-0 w-full h-screen bg-black flex flex-col items-center justify-center">
			<div className="bg-white bg-opacity-5 rounded-xl w-2/5 h-64 flex flex-col items-center justify-center ">
				<img src="Wallet.png" alt="img not found" />
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
