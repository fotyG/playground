import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CheaterModal = ({ restartGame }) => {
  const router = useRouter();
  return (
    <Dialog
      defaultOpen
      onOpenChange={restartGame}
    >
      <DialogContent className="flex flex-col items-center bg-base-100/80 border-primary">
        <DialogHeader>
          <DialogTitle className="text-xl">
            We don't respect cheaters around here..
          </DialogTitle>
          <DialogDescription className="text-xl">
            Tampering with state to get into Top 10 is very tempting, but only
            the top-Gs belong on the list!
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-square rounded-md overflow-hidden w-52">
          <Image
            src={"/images/spank.gif"}
            fill
            className="object-cover"
            alt="spank"
          />
          test
        </div>
        <button
          className="btn btn-primary"
          onClick={restartGame}
        >
          I'm sorry! 😔
        </button>
      </DialogContent>
    </Dialog>
  );
};
export default CheaterModal;
