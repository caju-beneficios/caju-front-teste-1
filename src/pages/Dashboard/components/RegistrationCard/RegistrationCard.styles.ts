import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 4px solid #fff;
  margin: 16px;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  h3,
  p {
    margin: 0;
  }
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    flex-shrink: 0;
  }

  h3,
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }
`;

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .managing-buttons {
    display: flex;
    gap: 8px;
  }

  .delete-button {
    border-color: #c30000;

    svg {
      color: #c30000;
    }
  }

  .approve-button {
    background-color: #9be59b;
    color: #111;
  }

  .reprove-button {
    background-color: #ff919a;
    color: #111;
  }

  .review-again-button {
    background-color: #ff8858;
    color: #111;
  }
`;
