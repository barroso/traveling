import { Suspense } from "react";
import NavBar from "./components/nav-bar";
import { Route, Routes } from "react-router-dom";
import About from "./routes/about";
import Contact from "./routes/contact";
import NotFound from "./pages/not-found";
  
const App = () => {
	return (
		<>
			<NavBar />
			<Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</>
	);
};

export default App;