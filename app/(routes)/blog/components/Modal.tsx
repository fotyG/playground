import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  blogContent?: string;
  cardTitle: string;
  state: boolean;
}

const Modal: React.FC<ModalProps> = ({
  openModal,
  setOpenModal,
  blogContent,
  cardTitle,
  state,
}) => {
  return (
    <Dialog
      open={openModal}
      onOpenChange={setOpenModal}
    >
      <DialogContent className="modal-box">
        <DialogHeader>
          <DialogTitle className="mb-5 rounded-lg bg-primary p-2 text-center text-2xl font-bold text-base-100">
            {cardTitle}
          </DialogTitle>
        </DialogHeader>
        {cardTitle === "Coming Soon..." ? (
          <p className="font-semibold flex items-center justify-justify text-xl">
            {blogContent}
          </p>
        ) : state ? (
          <p className="font-semibold flex items-center justify-center text-justify text-xl">
            {blogContent}
          </p>
        ) : (
          <p className="font-semibold flex items-center justify-center text-xl">
            Complete the event to unlock this blog post!
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
