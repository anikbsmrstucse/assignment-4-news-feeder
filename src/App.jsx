import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Newsboard from "./components/Newsboard/Newsboard";

export default function App() {
  return (
    <>
     <Header />
     <main className="my-10 lg:my-14">
        <Newsboard />
     </main>
     <Footer />
    </>
  )
}