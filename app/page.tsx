import Image from "next/image";
import TitleBar from "./components/titlebar";
import Header from "./components/header";

export default function Home() {
  return (
    <>
<TitleBar title="Home"/>
<Header/>
   <div>
    <h1>
      Hellow World
    </h1>
    <p>
      My First React
    </p>
   </div>
   </>
  );
}
