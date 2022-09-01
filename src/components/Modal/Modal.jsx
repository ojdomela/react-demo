import React from 'react'
import styled from 'styled-components';
import { toggleModal } from '../../utils/displayReducer';
import { useDispatch } from 'react-redux';
import { SignIn, SignUp } from './Form/Form';

export default function Modal() {
    const closeBtnRef = React.useRef(null);
    const containerRef = React.useRef(null);
    const dispatch = useDispatch();
    const [showSignUp, setShowSignUp] = React.useState(false);

    const handleToggle = (e) => {
        if (e.target === closeBtnRef.current || e.target === containerRef.current) {
            dispatch(toggleModal())
        }
    }

  return (
    <Container ref={containerRef} onClick={handleToggle}>
        <ModalWrapper>
            <CloseButton ref={closeBtnRef} onClick={handleToggle}>X</CloseButton>
            {showSignUp ? <SignIn setShowSignUp={setShowSignUp} /> : <SignUp setShowSignUp={setShowSignUp} />}
        </ModalWrapper>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
`;

const ModalWrapper = styled.div`
    color: black;
    display: flex;
    padding: 2rem;
    align-items: center;
    flex-direction: column;
    background-color: white;
    border-radius: 1rem;
`;

const CloseButton = styled.button`
    align-self: flex-end;
`
