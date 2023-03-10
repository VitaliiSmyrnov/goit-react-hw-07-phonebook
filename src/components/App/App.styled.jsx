import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: ${p => p.theme.fontSizes.sm};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.white};
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  overflow: auto;

  width: 410px;
  padding: ${p => p.theme.spacing(5)};

  background-color: ${p => p.theme.colors.background};
  box-shadow: ${p => p.theme.shadows.normal};
  border-radius: ${p => p.theme.radii.md};

  h1,
  h2 {
    color: ${p => p.theme.colors.header};
  }
`;

export const Section = styled.div`
  margin-top: ${p => p.theme.spacing(8)};
`;

export const Message = styled.p`
  margin-top: ${p => p.theme.spacing(3)};
`

