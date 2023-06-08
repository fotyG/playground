import { useEffect, useState } from "react";
import { fetchScores, registerScore } from "../libs/getHighScores";
import { PacmanLoader } from "react-spinners";
import { toast } from "react-hot-toast";

const Modal = ({ totalMoveCounter, setTotalMoveCounter, fetchDataOnOpen }) => {
  const [scores, setScores] = useState([]);
  const [name, setName] = useState("");
  const [activeTab, setActiveTab] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") return;
    if (totalMoveCounter < 28) return;
    setIsLoading(true);
    try {
      await registerScore({ name, score: totalMoveCounter });
      toast.success("Your score has been registered!");
      setName("");
      setTotalMoveCounter(0);
      setActiveTab(false);
    } catch (error) {
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchScores().then((data) => setScores(data));
  }, [isLoading, fetchDataOnOpen]);

  return (
    <>
      {/* <button
        className="btn btn-primary"
        onClick={() => window.hs_modal.showModal()}
      >
        open modal
      </button> */}

      <dialog
        id="hs_modal"
        className="modal"
      >
        <form
          method="dialog"
          className="modal-box"
          onSubmit={handleSubmit}
        >
          <div className="tabs">
            <a
              className={"tab tab-lifted " + (activeTab ? "tab-active" : "")}
              onClick={() => setActiveTab(true)}
            >
              Your Score
            </a>
            <a
              className={"tab tab-lifted " + (!activeTab ? "tab-active" : "")}
              onClick={() => setActiveTab(false)}
            >
              Leaderboard
            </a>
          </div>
          <h3 className="font-bold my-5 text-xl">
            {activeTab ? "Submit Your Score" : "Top 10"}
          </h3>
          {activeTab &&
            (totalMoveCounter === 0 ? (
              <p>Thank you for submitting your score!</p>
            ) : (
              <div className="flex flex-col gap-5">
                <div className="flex gap-1 items-center">
                  <label className="text-xl font-bold">Name:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="outline-none border-[2px] border-primary rounded-md p-2 text-sm md:text-xl"
                  />
                </div>
                <p className="text-xl">
                  You completed the game in {totalMoveCounter} moves!
                </p>
                <button
                  className={
                    "btn btn-primary " +
                    (isLoading ? "hover:cursor-not-allowed disabled" : "")
                  }
                  type="submit"
                >
                  {isLoading ? (
                    <PacmanLoader
                      size={15}
                      color="#1e293b"
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
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button onClick={() => setActiveTab(true)}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Modal;
