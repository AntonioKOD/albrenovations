import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper suppressHydrationWarning>
      <div className="card" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   cursor: pointer;
   width: 190px;
   height: 254px;
   background: rgb(255, 255, 255);
   border-radius: 5px;
   border: 1px solid rgba(0, 0, 255, .2);
   transition: all .2s;
   box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
  }

  .card:hover {
   box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, .2);
  }`;

export default Card;
