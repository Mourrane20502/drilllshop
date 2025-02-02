"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Define the type for the search data
interface SearchData {
  id: number;
  title: string;
  link: string;
}

// Define the props for the SearchComponent
interface SearchComponentProps {
  data: SearchData[];
  onSearchToggle: (isOpen: boolean) => void; // Callback to notify the header
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  data,
  onSearchToggle,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchData[]>([]);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  const toggleSearch = () => {
    const newSearchOpenState = !searchOpen;
    setSearchOpen(newSearchOpenState);
    onSearchToggle(newSearchOpenState); // Notify the header about the search state
    if (!newSearchOpenState) {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  return (
    <div className="relative">
      {searchOpen ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-6 py-2 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
          />
          <X
            onClick={toggleSearch}
            className="text-black dark:text-white cursor-pointer"
          />
        </div>
      ) : (
        <Search
          onClick={toggleSearch}
          className="w-6 h-6 dark:text-white cursor-pointer"
        />
      )}

      {searchResults.length > 0 && (
        <div className="absolute top-12 left-0 w-full bg-white dark:bg-black border border-gray-300 rounded-lg shadow-lg">
          {searchResults.map((result) => (
            <Link
              key={result.id}
              href={result.link}
              className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {result.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
