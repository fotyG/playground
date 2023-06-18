import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const BlogPosts = () => {
  const [paginationMode, setPaginationMode] = useState("page");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(1);

  const togglePaginationMode = () => {
    setPaginationMode((prev) => {
      if (prev === "page") return "infinite";
      else return "page";
    });
  };

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    return data;
  };

  const fetchPageData = async (page = 1) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
    );
    const data = await response.json();
    return data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ["posts", limit],
    queryFn: () => fetchData(limit),
    keepPreviousData: true,
  });

  const query = useQuery({
    queryKey: ["postsPage", page],
    queryFn: () => fetchPageData(page),
  });

  return (
    <>
      {query.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <button onClick={togglePaginationMode}>Toggle pagination</button>
          {paginationMode === "page" && (
            <div className="container grid grid-cols-2">
              {query.data?.map((item) => (
                <div
                  key={item.id}
                  className="border p-2 m-2"
                >
                  <h1 className="font-bold">{item.title}</h1>
                  <p>{item.body}</p>
                  <p>{item.id}</p>
                </div>
              ))}
              <div className="join col-span-2">
                <button
                  className={
                    "join-item btn btn-sm" + (active == 1 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  1
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 2 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  2
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 3 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  3
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 4 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  4
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 5 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  5
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 6 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  6
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 7 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  7
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 8 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  8
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 9 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  9
                </button>
                <button
                  className={
                    "join-item btn btn-sm" + (active == 10 ? " btn-active" : "")
                  }
                  onClick={(e) => {
                    setPage(e.target.innerHTML);
                    setActive(e.target.innerHTML);
                  }}
                >
                  10
                </button>
              </div>
            </div>
          )}

          {paginationMode === "infinite" && (
            <div className="container grid grid-cols-2">
              {data?.map((item) => (
                <div
                  key={item.id}
                  className="border p-2 m-2"
                >
                  <h1 className="font-bold">{item.title}</h1>
                  <p>{item.body}</p>
                  <p>{item.id}</p>
                </div>
              ))}

              <button
                onClick={() => setLimit((old) => old + 10)}
                disabled={isFetching}
                className="col-span-2"
              >
                {isFetching ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BlogPosts;
