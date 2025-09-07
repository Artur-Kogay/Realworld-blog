import { type FC } from 'react';
import styles from './Modal.module.scss';
import { NegativeButton } from '@/shared/ui';
import crossIcon from '../assets/icon/cross.svg';

type IModal = {
  toggleActive: () => void;
  fc: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Modal: FC<IModal> = ({ toggleActive, fc }) => {
  return (
    <section className={styles.modal}>
      <div className={styles.modal_content}>
        <button className={styles.modal_cross} onClick={toggleActive}>
          <img src={crossIcon} alt="cross" />
        </button>
        <h1>Confirm to delete</h1>
        <NegativeButton fc={fc}>Delete</NegativeButton>
      </div>
    </section>
  );
};

export default Modal;
