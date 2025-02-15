import NoteBody from "./components/Notes/NoteBody";
import SidebarLayout from "./components/Sidebar/SidebarLayout";



export default function App() {
    return (
        <div className="w-full h-full block md:flex">
            <SidebarLayout/>
            <NoteBody/> 
        </div>
    );
}
