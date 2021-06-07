import React from "react";

const IndexPage = () => <React.Fragment />;

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/dashboard/CEO",
      permanent: false,
    },
  };
};

export default IndexPage;
