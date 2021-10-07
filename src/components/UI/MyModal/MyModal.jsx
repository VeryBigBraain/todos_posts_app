import cl from './MyModal.module.css';

const MyModal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? `${cl.modal} ${cl.modal_active}` : cl.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${cl.modalContent} ${cl.modalContent_active}` : cl.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
