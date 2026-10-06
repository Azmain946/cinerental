import Header from "./Header";
import SideBar from "./SideBar";

export default function App(){
    return (
        <>
        <Header/>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <SideBar />
        </div>
        </>
    );
}