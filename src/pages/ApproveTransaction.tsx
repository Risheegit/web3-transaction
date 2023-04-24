// import React from "react"
//import { useState } from "react"

const ApproveTransaction = () => {
	const userName = "Rebhav"
	//const [status, setStatus] = useState(false)
	//const [count, setCount] = useState(0)

	const transactions = [
		{ from: "Patil", amount: 100, to: "Rebhav", approved: true },
		{ from: "Rebhav", amount: 150, to: "Patil", approved: false },
	]

	// const handleClick = () => {
	// 	setStatus(true)
	// }
	return (
		<div className=" w-full flex flex-col justify-center items-center align-middle">
			{transactions.map(({ from, to, amount }) => {
				return (
					<>
						<div className="flex flex-col m-4 items-center w-full justify-center rounded-lg">
							<div
								className={`${
									from == userName
										? "bg-green-400 w-2/5 flex flex-col items-center justify-center border-2 rounded-lg border-black"
										: "bg-gray-200 w-2/5 flex flex-col items-center justify-center border-2 rounded-lg border-black"
								}`}
							>
								<h1 className="text-1xl font-normal">
									From: {from}
								</h1>
								<h1 className="text-1xl font-normal">
									Amount: {amount}
								</h1>
								<h1 className="text-1xl font-normal">
									To: {to}
								</h1>
								<i
									className={`${
										from == userName
											? "fa-light fa-arrow-up-right"
											: "fa-light fa-arrow-down-left"
									}`}
								></i>
								{userName == from && (
									<i className="fa-regular fa-arrow-up-right"></i>
								)}
								<div>
									<button className="rounded-sm bg-cyan-200">
										Approve
									</button>
								</div>
							</div>
						</div>
					</>
				)
			})}
		</div>
	)
}

export default ApproveTransaction
