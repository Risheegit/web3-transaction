import Navbar from "./components/Navbar"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import ApproveTransaction from "./pages/ApproveTransaction"
import CreateTransaction from "./pages/CreateTransaction"
import Login from "./pages/Login"

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/approve" element={<ApproveTransaction />} />
				<Route path="/create" element={<CreateTransaction />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
