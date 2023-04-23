import { Suspense } from "react";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Contact from "./routes/contact";
import NotFound from "./pages/not-found";
import Board from "./pages/board";
  
const App = () => {
	return (
		<>
			<Header />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<Board />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;