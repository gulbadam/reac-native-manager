import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
const HeaderTitle =( props )=> {
  return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>{props.headerText}</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
export default HeaderTitle;