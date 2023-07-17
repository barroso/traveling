import { Suspense } from "react";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Services from "./routes/services";
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
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;