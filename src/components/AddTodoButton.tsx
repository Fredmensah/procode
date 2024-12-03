import { FaPlus } from "react-icons/fa";
import IconButton from "./IconButton";

interface AddTodoButtonProps {
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>; // Correct type for setState
}
  
export default function AddTodoButton({setIsModalOpen}: AddTodoButtonProps) {
    function openModal(): void {
      setIsModalOpen(true);
    }

    return (
        <div className="add-button">
            <IconButton
                icon={<FaPlus />}
                onClick={openModal}
                size="small"
                color="#FFFFFF"
                tooltip="Add new task"
            />

        </div>
    )
}
