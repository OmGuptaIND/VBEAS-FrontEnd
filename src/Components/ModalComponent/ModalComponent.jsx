import styled from "styled-components";
import Modal from '@mui/material/Modal';

export default function ModalComponent({children, open, handleClose}) {
    return (
        <ModalContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'>
                {children}
            </Modal>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    border-radius: 20px;
`;
