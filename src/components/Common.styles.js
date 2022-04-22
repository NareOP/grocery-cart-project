import styled from 'styled-components';

const Title = styled.span(
  ({ color = 'var(--mainBlack)' }) => `
  font-size: 2.5rem;
  text-transform: capitalize;
  color: ${color};

  & span {
    color: var(--pink);
    font-size: 4rem;
  }
`
);

const Button = styled.button(
  ({ size, pink }) => `
  text-transform: uppercase;
  border: 0.1rem solid ${pink ? 'var(--pink)' : 'var(--mainBlack)'};
  color: ${pink ? 'var(--pink)' : 'var(--mainBlack)'};
  border-radius: 0.25rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  width: fit-content;
  transition: 0.3s;
  font-size: ${size === 'larger' ? '1.5rem' : '1rem'};
  margin: 1.25rem 0;
  background: transparent;

  &:hover {
    color: ${pink ? 'var(--mainBlack)' : 'var(--pink)'};
    background-color: ${pink ? 'var(--pink)' : 'var(--mainBlack)'};
    border-color: ${pink ? 'var(--pink)' : 'var(--mainBlack)'};
  }
`
);

const Center = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-transform: translate(-50%, -50%);
`;

const Section = styled.div(
  ({ margin = 0 }) => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: ${margin};
`
);

const HorizontalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & Button {
    margin: 1.25rem 0.5rem;
  }
`;

const TextMuted = styled.p`
  color: var(--mutedText);
  width: 75%;
`;

export { Title, Button, Center, Section, HorizontalButtons, TextMuted };
