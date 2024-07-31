import React, { useState, useRef } from "react";
import { Pagination } from "@mui/material";
export default function Paginate({
  currentPage,
  handlePageChange,
  handleClick,
  pageCount,
}) {
  return (
    <div>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        onClick={handleClick}
        color="primary"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      />
    </div>
  );
}
