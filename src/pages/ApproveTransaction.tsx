// import React from "react"
import { useState } from "react"

const ApproveTransaction = () => {
	// const userName = "Rebhav"
	const [status, setStatus] = useState(false)
	const [checked, setChecked] = useState(false)
	//const [count, setCount] = useState(0)

	const transactions = [
		{ from: "AAAA....BBBB", amount: 100, to: "Rebhav", checked: "false" },
		{ from: "BBBB....AAAA", amount: 150, to: "Patil", checked: "false" },
	]

	const approveTransaction = () => {
		setStatus(true)
		setChecked(true)
		console.log("Status of transaction is", status)
		console.log("checked")
	}
	const disapproveTransaction = () => {
		setStatus(false)
		setChecked(true)
		console.log("Status of transaction is", status)
		console.log("checked")
	}

	//Take care of checked in the backend
	return (
		<div className="absolute top-0 w-full bg-black h-screen flex flex-col justify-center items-center align-middle">
			<div className="relative flex flex-col w-2/5 rounded-lg items-center justify-center bg-white bg-opacity-5">
				{transactions.map(({ from, amount }) => {
					return (
						<>
							{
								<div>
									<div className="relative flex mt-10 items-start justify-start right-0">
										<h1 className="text-white">
											from : {from}
										</h1>
									</div>
									<div className="flex items-center mb-10 border-2 h-16 border-green rounded-lg w-96 justify-between ">
										<div>
											<img
												src="Wallet.png"
												alt="noy found"
											/>
										</div>
										<div className="text-white text-xl">
											<h1>$ {amount}</h1>
										</div>
										<div>
											<button
												onClick={approveTransaction}
											>
												<img src="tick_square_.png" />
											</button>
											<button
												onClick={disapproveTransaction}
											>
												<img src="icon_minus_circle_.png" />
											</button>
										</div>
									</div>
								</div>
							}
						</>
					)
				})}
			</div>
		</div>
	)
}

export default ApproveTransaction
