import styled from 'styled-components';
export default function Details({ status, premiered, network }) {
  return (
    <DetailsWrapper>
      <p>Status:{status}</p>
      <p>
        Premiered:{premiered} {!!network && `on ${network.name}`}
      </p>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
