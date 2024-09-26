import styled from "styled-components";



export const UserIconWihtName = (props) => {
  const {image,name} = props;
  return(
    <SContainer>
        <img width={160} height={160} src={image} alt={name}　/>
        <p>{name}</p>
    </SContainer>
  );
};

const SContainer =  styled.div`
  text-align: center;
  img{
    border-radius: 50vh;
  }
  p{
    font-size:18px;
    font-weight:bold;
    color:#40514e;
  }
`;
