import axios from "axios";
import React, { useState, useEffect } from "react";
import Videopage from "../components/AccessLevel/VideoPage";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  margin: 50px;
  width: 100vw;
`;

const ContentPage = ({ segment }) => {
  const [contents, setcontents] = useState(null);
  const { id } = useParams();

  const fetchContents = async () => {
    // const url = `https://test-admin.kraznikunderverse.com/api/${segment}`;
    const url = `https://buildit-tier.kraznikunderverse.com/api/${segment}`;
    const options = {
      validate: "alpha romeo tango",
    };
    const { data } = await axios.post(url, options);
    console.log(data.data);
    setcontents(data.data);
    // console.log(contents[id.toString()]);
    console.log(id);
  };

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <Container>
      {contents ? (
        <Videopage content={contents[id.toString()]} segment={segment} />
      ) : null}
    </Container>
  );
};

export default ContentPage;
