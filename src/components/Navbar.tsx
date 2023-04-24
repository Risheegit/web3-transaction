import { Link } from "react-router-dom"

const Navbar = () => {
	const links = [
		// { name: "Home", link: "/" },
		{ name: "approve transaction", link: "/approve" },
		{ name: "create transaction", link: "/create" },
	]
	return (
		<div className="bg-black w-full z-10 relative flex justify-between ">
			<div className="py-12 px-16 gap-4 cursor-pointer text-white text-2xl font-medium">
				<Link to={"/"}>web3pay</Link>
			</div>
			<ul className=" links flex justify-end py-12 px-32 gap-4 ">
				{links.map(({ name, link }) => {
					return (
						<li
							key={name}
							className="text-xl p-4 cursor-pointer border-green border-2 rounded-xl hover:bg-green text-white hover:text-black "
						>
							<div className=" hover:text-black">
								<Link to={link}>{name}</Link>
							</div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Navbar
