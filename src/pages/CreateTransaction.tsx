import { useState, useRef } from "react"

const CreateTransaction = () => {
	const [users, setUsers] = useState<string[]>([])
	const inputRef = useRef<HTMLInputElement>(null)

	const handleButtonClick = () => {
		const inputValue = inputRef.current?.value
		if (inputValue) {
			setUsers((prevUsers) => [...prevUsers, inputValue])
			inputRef.current!.value = ""
		}
	}

	return (
		<div className="absolute top-0 h-screen  bg-black w-full flex flex-col overflow-y-auto items-center justify-center">
			<div className=" bg-white bg-opacity-5 w-2/5  flex flex-col items-center ">
				<div className="flex border-white border-2 rounded-lg w-80 items-center mt-10 h-8 ">
					<form>
						<button
							className="text-white pl-4 pt-5"
							type="button"
							onClick={handleButtonClick}
						>
							+
						</button>
						<input
							className="text-white relative bottom-6 left-5 px-4 w-80 bg-transparent focus:outline-none"
							type="text"
							placeholder="search and add a wallet to split with"
							name="inputName"
							id="inputName"
							ref={inputRef}
						/>
					</form>
				</div>
				<div className="border-white border-2 rounded-2xl h-40 w-40 my-10 flex items-center justify-center">
					<div className="text-white text-3xl relative left-8">$</div>
					<input
						className="relative left-10 bg-transparent w-32 h-32 text-white text-3xl border-none focus:outline-0"
						placeholder="00"
						type="text"
					/>
					<br></br>
				</div>
				<div className="text-white flex flex-col-reverse flex-grow max-h-48 overflow-y-auto items-center">
					<ul>
						{users.map((user, index) => (
							<li
								key={index}
								className="bg-white flex items-center justify-center bg-opacity-5 border-green border-2 rounded-lg h-16 w-96 mb-4"
							>
								{user}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default CreateTransaction
