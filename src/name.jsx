import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
import "./styles.css";

const Bounce = styled.div`
  animation: 2s ${keyframes`${bounce}`}infinite;
`;

export default class Name extends Component {
  render() {
    return (
      <Bounce>
        <h1
          style={{
            margin: 50
          }}
        >
          Hi, I'm Jay
        </h1>
      </Bounce>
    );
  }
}

