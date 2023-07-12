import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

import { fetchScores, registerScore } from "../libs/getHighScores";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Player } from "@/types";

interface ModalProps {
  totalMoveCounter: number;
  setTotalMoveCounter: (arg: number) => void;
  setMatchCounter: (arg: number) => void;
  fetchDataOnOpen: boolean;
  matchCounter: number;
}

const NewModal: React.FC<ModalProps> = ({
  totalMoveCounter,
  setTotalMoveCounter,
  setMatchCounter,
  fetchDataOnOpen,
  matchCounter,
}) => {
  const [scores, setScores] = useState<Player[]>([]);
  const [name, setName] = useState("");
  const [activeTab, setActiveTab] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (name === "") return;
    if (totalMoveCounter < 28 || matchCounter < 14) return;
    try {
      setIsLoading(true);
      await registerScore({ name, score: totalMoveCounter });
      toast.success("Your score has been registered!");
      setName("");
      setTotalMoveCounter(0);
      setMatchCounter(0);
      setActiveTab(false);
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchScores().then((data) => setScores(data as Player[]));
  }, [isLoading, fetchDataOnOpen]);

  return (
    <Dialog defaultOpen>
      <DialogTrigger className="btn btn-primary m-2 transition-all">
        Submit your Score
      </DialogTrigger>
      <DialogContent className="modal-box">
        <form
          id="scoreForm"
          method="dialog"
          className="text-lg"
          onSubmit={handleSubmit}
        >
          <div className="tabs">
            <a
              className={
                "tab-lifted tab text-lg " + (activeTab ? "tab-active" : "")
              }
              onClick={() => setActiveTab(true)}
            >
              Your Score
            </a>
            <a
              className={
                "tab-lifted tab text-lg " + (!activeTab ? "tab-active" : "")
              }
              onClick={() => setActiveTab(false)}
            >
              Leaderboard
            </a>
          </div>
          <h3 className="my-5 text-2xl font-bold">
            {activeTab ? "Submit Your Score" : "Top 10"}
          </h3>
          {activeTab &&
            (totalMoveCounter === 0 ? (
              <p className="text-xl">Thank you for submitting your score!</p>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-1">
                  <label
                    htmlFor="name"
                    className="text-xl font-bold"
                  >
                    Name:
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-md border-[2px] border-primary p-2 text-sm outline-none md:text-xl"
                  />
                </div>
                <p className="text-xl">
                  You completed the game in {totalMoveCounter} moves!
                </p>
                <button
                  className={
                    "btn-primary btn " +
                    (isLoading ? "disabled hover:cursor-not-allowed" : "")
                  }
                  type="submit"
                >
                  {isLoading ? (
                    <PacmanLoader
                      size={15}
                      color="hsl(var(--bc))"
                      className="hover:cursor-not-allowed"
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            ))}
          {!activeTab && (
            <div className="flex flex-col ">
              <div className="flex flex-col gap-1">
                {scores.map((player, idx) => (
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
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewModal;
