import React from "react";
import { useRouter } from "next/router";

function PortfolioDetails() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>I am details page with ID: {id}</h1>
    </div>
  );
}

export default PortfolioDetails;
