import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Player } from "@/types";

interface LeaderBoardModalProps {
  fetchDataOnOpen: boolean;
}

const LeaderBoardModal: React.FC<LeaderBoardModalProps> = ({
  fetchDataOnOpen,
}) => {
  const [data, setData] = useState<Player[]>([]);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await axios.get("/api/score");
      setData(response.data as Player[]);
    };
    try {
      fetchScores();
    } catch (error) {
      toast.error("Error fetching scores");
    }
  }, [fetchDataOnOpen]);

  return (
    <Dialog>
      <DialogTrigger className="btn btn-ghost transition-all duration-500">
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
