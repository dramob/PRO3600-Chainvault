import Navbar from "../components/navigation/navbar";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
export default function MainLayout({ children }) {
	return (
		<div>
			
            <Navbar />
            
			{children}
			
			
			<Footer/>

		</div>
	);
}
