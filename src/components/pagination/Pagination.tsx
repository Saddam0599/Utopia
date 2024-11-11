import React, { useState } from "react";
import { Pagination } from "antd";

interface ListingProps {
  listings: any[];  
}

const ITEMS_PER_PAGE = 12;

const ListingCardPagination: React.FC<ListingProps> = ({ listings }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Pagination
        current={currentPage}
        pageSize={ITEMS_PER_PAGE}
        total={listings.length}
        onChange={handlePageChange}
        style={{ textAlign: "center", marginTop: "20px" }}
      />
    </div>
  );
};

export default ListingCardPagination;
