import SorchIcon from "../../assets/icons/ShapeSorchIcon.svg";
import React, { FC, ChangeEvent } from "react";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);  
    };

    return (
        <div className="flex items-center px-4 py-2 bg-gray-50 text-white outline-none w-[630px] h-[44px] my-[20px] rounded-3xl hover:bg-gray-100">
            <input
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}  
                className="px-1 py-2 bg-gray-50 hover:bg-gray-100 text-black outline-none w-[830px] rounded-3xl"
            />
            <img src={SorchIcon} className="w-[19px] h-[19px] cursor-pointer" alt="Shape Sorch Icon.svg" />
        </div>
    );
};

export default SearchBar;


