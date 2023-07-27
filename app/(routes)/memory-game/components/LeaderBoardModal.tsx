import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";

import { fetchScores } from "../lib/getHighScores";
import { Player } from "@/types";

interface LeaderBoardModalProps {
  fetchDataOnOpen: boolean;
}

const LeaderBoardModal: React.FC<LeaderBoardModalProps> = ({
  fetchDataOnOpen,
}) => {
  const [data, setData] = useState<Player[]>([]);

  useEffect(() => {
    fetchScores().then((data) => setData(data as Player[]));
  }, [fetchDataOnOpen]);

  return (
    <Dialog>
      <DialogTrigger className="btn border-primary hover:btn-secondary transition-all duration-500">
        Show Leaderboard
      </DialogTrigger>
      <DialogContent className="modal-box">
        <DialogHeader>
          <DialogTitle className="mb-5 rounded-lg bg-primary p-2 text-center text-2xl font-bold text-base-100">
            Top 10
          </DialogTitle>
        </DialogHeader>
        <form method="dialog">
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-2 text-lg">
              {data.map((player, idx) => (
                <p key={player.id}>
                  {idx === 0
                    ? "🥇 1."
                    : idx === 1
                    ? "🥈 2."
                    : idx === 2
                    ? "🥉 3."
                    : idx + 1 + "."}{" "}
                  {player.name}: {player.score} moves
                </p>
              ))}
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeaderBoardModal;
