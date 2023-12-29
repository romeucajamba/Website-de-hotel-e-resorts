import { Header } from "./layout/header/header";
import { Main } from "./layout/main/main";
import { Footer } from "./layout/footer/footer";


export default function Home() {
  return (
   <div className="bg-white">
        <Header/>
        <Main/>
        <Footer/>
   </div>
  )
}
