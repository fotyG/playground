import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

interface CheaterModalProps {
  restartGame: () => void;
}

const CheaterModal: React.FC<CheaterModalProps> = ({ restartGame }) => {
  return (
    <Dialog
      defaultOpen
      onOpenChange={restartGame}
    >
      <DialogContent className="modal-box flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-xl">
            We don't respect cheaters around here..
          </DialogTitle>
          <DialogDescription className="text-xl">
            Tampering with state to get into Top 10 is very tempting, but only
            the top-Gs belong on the list!
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-square w-52 overflow-hidden rounded-md">
          <Image
            src={"/images/spank.gif"}
            fill
            className="object-cover"
            alt="spank"
          />
        </div>
        <button
          className="btn-primary btn text-lg"
          onClick={restartGame}
        >
          I'm sorry! 😔
        </button>
      </DialogContent>
    </Dialog>
  );
};
export default CheaterModal;
