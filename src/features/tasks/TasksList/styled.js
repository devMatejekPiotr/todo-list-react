import styled from "styled-components";

export const TaskList = styled.ul`
  list-style: none;
  padding: 10px 20px 10px;
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;
`;

export const Task = styled.li`
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 10px 0;
  display: ${({ $done }) => ($done ? "none" : "flex")};
  justify-content: space-between;
  align-items: center;
`;

export const DefaultStyledBtn = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.white};
  width: 30px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
`;

export const Button = styled(DefaultStyledBtn)`
  background-color: ${({ theme }) => theme.colors.taskBtn};
  margin: 0 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskBtnHover};
  }
`;

export const RemoveButton = styled(DefaultStyledBtn)`
  background-color: ${({ theme }) => theme.colors.taskBtnRemove};
  margin: 0 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.taskBtnRemoveHover};
  }
`;

export const Text = styled.span`
  flex-grow: 1;
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};
`;
