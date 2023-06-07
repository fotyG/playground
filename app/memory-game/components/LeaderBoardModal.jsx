import { useEffect, useState } from "react";
import { fetchScores } from "../libs/getHighScores";

const LeaderBoardModal = ({ fetchDataOnOpen }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchScores().then((data) => setData(data));
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
          <h3 className="font-bold text-lg text-center text-base-100 mb-5 bg-primary rounded-lg p-2">
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
