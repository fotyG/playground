import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";

interface SkipModalProps {
  unlock: () => void;
}

const SkipModal: React.FC<SkipModalProps> = ({ unlock }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
    >
      <DialogTrigger className="btn border-primary mb-5 w-52 hover:btn-secondary transition-all duration-500">
        Skip
      </DialogTrigger>
      <DialogContent className="modal-box">
        <DialogHeader>
          <DialogTitle className="mb-5 rounded-lg bg-primary p-2 text-center text-2xl font-bold text-base-100">
            Unlock Progress
          </DialogTitle>
        </DialogHeader>
        <p className="text-xl">
          Are you sure you want to skip this amazing game and unlock progression
          to the next step?
        </p>
        <button
          onClick={() => {
            unlock();
            setOpen(false);
          }}
          className="btn btn-outline text-xl"
          type="submit"
        >
          Confirm
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default SkipModal;
