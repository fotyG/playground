import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";

import { fetchScores } from "../libs/getHighScores";
import { Player } from "@/types";

interface LeaderBoardModalProps {
  fetchDataOnOpen: boolean;
}

const NewLeaderBoardModal: React.FC<LeaderBoardModalProps> = ({
  fetchDataOnOpen,
}) => {
  const [data, setData] = useState<Player[]>([]);

  useEffect(() => {
    fetchScores().then((data) => setData(data as Player[]));
  }, [fetchDataOnOpen]);

  return (
    <Dialog>
      <DialogTrigger className="btn border-primary hover:btn-secondary">
        Show Leaderboard
      </DialogTrigger>
      <DialogContent className="modal-box">
        <DialogHeader>
          <DialogTitle className="mb-5 rounded-lg bg-primary p-2 text-center text-lg font-bold text-base-100">
            Top 10
          </DialogTitle>
        </DialogHeader>
        <form method="dialog">
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-2">
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

export default NewLeaderBoardModal;
