import { useState } from "react";
import "../css/contribute.css";
const Contribute = () => {
  const [data, setData] = useState({question:'',name:''});
  return (
    <div className="contribute">
      <div className="contribute-text">
        <h2 className="contribute-heading">Contribute to this project </h2>
        <div className='contribute-sub'>Help me with adding questions</div>
        <form
          className="contribute-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (
              data.name.trim().length === 0 ||
              data.question.trim().length === 0
            )
              return;
            fetch("http://localhost:8000/new", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            setData((prev) => ({ ...prev, question: "" }));
          }}
          // action="https://rapid-fire-server.herokuapp.com/new"
        >
          <input
            type="text"
            name="name"
            value={data.name ? data.name : ""}
            id=""
            placeholder="Name"
            onChange={(e) => {
              setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
          <input
            type="text"
            name="question"
            value={data.question ? data.question : ""}
            placeholder="Question"
            id=""
            onChange={(e) => {
              setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />

          <button>Send</button>
        </form>
        <h2>Top contributers 🏆</h2>
        <ol className='contributers-list'>
          <li>Tanmay Kachroo - 20 contributes</li>
          <li>Tanmay Kachroo - 20 contributes</li>
          <li>Tanmay Kachroo - 20 contributes</li>
          <li>Tanmay Kachroo - 20 contributes</li>
        </ol>
      </div>
      <div className="contribute-image">
        <img src="/images/contribute.svg" alt="" className='contribute-svg' />
      </div>
    </div>
  );
};

export default Contribute;
