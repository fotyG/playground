import { useEffect, useState } from "react";

import { fetchScores } from "../libs/getHighScores";
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
    <>
      <dialog
        id="lb_modal"
        className="modal"
      >
        <form
          method="dialog"
          className="modal-box"
        >
          <h3 className="mb-5 rounded-lg bg-primary p-2 text-center text-lg font-bold text-base-100">
            Top 10
          </h3>
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
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
export default LeaderBoardModal;