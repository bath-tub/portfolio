import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import {Breadcrumb, H1, Flexbox, P2, H2, P3, P1} from '@components';
import {BREAKPOINTS} from '@theme';

const TopContainer = styled(Flexbox)`
  width: 100%;
  height: 404px;
  padding-bottom: 80px;
`;

const GridContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 500px);
  margin-top: 5rem;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1rem;

  @media ${BREAKPOINTS.md} {
    grid-template-columns: 1fr;
  }
`;

const ContentContainer = styled.div`
  grid-column: 1 / span 1;

  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Aside = styled.aside`
  grid-column: 2 / span1;
  position: -webkit-sticky;
  position: sticky;
  top: 150px;
  margin-left: 1rem;

  @media ${BREAKPOINTS.md} {
    display: none;
  }
`;

export default () => {
  return (
    <div>
      <TopContainer flexColumn justifyEnd alignStart>
        <Breadcrumb />

        <H1>Custom React Hooks to make life easy...</H1>
      </TopContainer>

      <GridContainer>
        <ContentContainer>
          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
          <H2>Some fancy ass title</H2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>

          <P2>
            React has undergone significant modifications in the previous three
            years, resulting in significant change in the way react apps are
            built. The most significant modifications are the Functional
            Component Pattern and Hooks.
          </P2>
        </ContentContainer>

        <div>
          <Aside>
            <P1>TABLE of CONTENTS</P1>
            <P3>Introduction</P3>
            <P3>What are Hooks?</P3>
            <P3>Why use custom Hooks?</P3>
            <P3>Precautions to be followed</P3>
          </Aside>
        </div>
      </GridContainer>
    </div>
  );
};
