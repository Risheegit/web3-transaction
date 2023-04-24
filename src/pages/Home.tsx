// interface IHomeProps {
// 	from: string
// 	to: string
// 	money: number
// }

const Home = () => {
	// const userName = "Rebhav"

	const transactions = [
		{
			from: "Patil",
			amount: "100,100,123 Bonk",
			to: "Rebhav",
			approved: true,
		},
		{
			from: "Rebhav",
			amount: "150,100,787 Bonk",
			to: "Patil",
			approved: false,
		},
		{
			from: "Patil",
			amount: "100,100,123 Bonk",
			to: "Rebhav",
			approved: true,
		},
		{
			from: "Patil",
			amount: "100,100,123 Bonk",
			to: "Rebhav",
			approved: true,
		},
		{
			from: "Patil",
			amount: "100,100,123 Bonk",
			to: "Rebhav",
			approved: true,
		},
		{
			from: "Patil",
			amount: "100,100,123 Bonk",
			to: "Rebhav",
			approved: true,
		},
		{
			from: "Patil",
			amount: "100,100,123 Bonk",
			to: "Rebhav",
			approved: true,
		},
		{
			from: "Patil",
			amount: "100,100,123 Bonk",
			to: "Rebhav",
			approved: true,
		},
	]
	return (
		<div className="w-full flex flex-wrap items-center  bg-black justify-around gap-16 px-28 ">
			{transactions.map(({ from, to, amount }) => {
				return (
					<div className="flex flex-col  items-center  h-80 w-96 justify-center rounded-lg bg-white bg-opacity-10 hover:scale-105 hover:z-30 hover:cursor-pointer hover:border-green hover:border-2">
						<div
						// className={`${
						// 	from == userName
						// 		? "bg-green-400 w-2/5 flex flex-col items-center justify-center border-2 rounded-lg border-black"
						// 		: "bg-gray-200 w-2/5 flex flex-col items-center justify-center border-2 rounded-lg border-black"
						// }`}
						>
							<div className="flex items-center text-2xl justify-center p-4">
								<h1 className="text-green">Transaction 1</h1>
							</div>
							<div className="flex w-60 py-4 px-5  border-white border-2 rounded-lg ">
								<h1 className="text-green pr-4">Sender: </h1>
								<h1 className="text-white">{from}</h1>
							</div>
							<div className="flex w-60 py-4 px-5 my-4  border-white border-2 rounded-lg ">
								<h1 className="text-green pr-4">Receiver: </h1>
								<h1 className="text-white">{to}</h1>
							</div>
							<div className="flex w-72 py-4 px-5  border-green border-2 rounded-lg gap-3 ">
								<h1 className="text-green pr-4">Amount: </h1>
								<h1 className="text-white">{amount}</h1>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Home
