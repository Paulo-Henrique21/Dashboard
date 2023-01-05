import Dnd from "../../components/Dnd";
import './style.css'

export default function DragAndDrop() {
    return (
        <div className="page-dnd">
            <h1>Drag and drop</h1>
            <div className="page-dnd-dashboard">

                <div className="page-dnd-draggable"><Dnd /></div>
            </div>
        </div>
    )
}