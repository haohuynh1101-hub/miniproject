import React from "react";

const IndexPage = () => <React.Fragment />;

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/ant-design",
      permanent: false,
    },
  };
};

export default IndexPage;
