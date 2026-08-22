import Modal from "@/shared/ui/modal/Modal";


interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SuccessModal({
  isOpen,
  onClose
}: SuccessModalProps): React.JSX.Element | null {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="text-surface text-center 
      relative"
    >
      <div className="success-modal">
        <h2 className="text-2xl">Trip request sent!</h2>

        <p>
          Your trip request has been successfully submitted.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="bg-bg text-text
          px-2 py-1 rounded-2xl absolute top-2.5 right-2.5
          hover:bg-amber-50 transition-all duration-300
          cursor-pointer"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}

export default SuccessModal;