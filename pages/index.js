import Image from "next/image";
import Button from "@/components/button";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Mohon isi judul dan deskripsi");
      return;
    }

    setTodos([...todos, { id: Date.now(), title, desc }]);
    setTitle("");
    setDesc("");

    if (edit) {
      setEdit(false);
    }
  };

  const handleEdit = (id) => {
    setEdit(true);
    todos.map((todo) => {
      if (todo.id == id) {
        setTitle(todo.title);
        setDesc(todo.desc);
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    });
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };
  return (
    <>
      <main class="contents">
        <div class="row">
          <div class="content-wrapper">
            <h1>NWDC</h1>
            <p>Night login Web Dev Community</p>
            <a href="/anggota" class="btn">
              Explore More...
            </a>
          </div>
          <div class="content-wrapper">
            {/* <!-- isi dengan nama path gambar yang ada pada
    folder img --> */}
            <img
              src="https://i.ibb.co/rQ5cTLX/NWDC.png"
              alt="logo Night Login Web Community"
              srcset=""
            />
          </div>
        </div>
        <div class="row">
          <div class="content-wrapper w-9">
            <h1>Ketua</h1>
            <a>Ahmad Zaki Akmal</a>
            <h1>Anggota</h1>
            <p>Daftar Anggota NWDC</p>
            <ul>
              <a>Alphonsus Aditya</a>
              <a>Anggito Muhammad Amien</a>
              <a>Muhammad Fajrulfalaq Izzulfirdausyah Suryaprabandaru</a>
              <a>Muhammad Muqtada Alhaddad</a>
            </ul>
          </div>
          <div class="content-wrapper">
            <img
              src="https://i.ibb.co/rQ5cTLX/NWDC.png"
              alt="logo Night Login Web Community"
              srcset=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center m-[30px]">
          <h1 className="text-[30px] text-center font-bold">Todos</h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center gap-[14px] mt-[15px]"
          >
            <div className="flex flex-row items-center justify-center gap-[14px]">
              <h4 className="text-[20px]">Judul</h4>
              <input
                type="text"
                className="ring-[2px] ring-inset ring-cyan-500 p-[5px] rounded-lg ml-[33px]"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                id="title"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-[14px]">
              <h4 className="text-[20px]">Deskripsi</h4>
              <input
                type="text"
                className="ring-[2px] ring-inset ring-cyan-500 p-[5px] rounded-lg"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                value={desc}
                id="desc"
              />
            </div>
            <Button type={edit ? "Edit" : "Add"} className="mx-auto mt-[2px]" />
          </form>

          {todos.map((todo) => (
            <div
              key={todo.id}
              className="flex flex-row items-start justify-between w-[500px] bg-slate-300 rounded-xl py-[10px] px-[20px] mt-[15px]"
            >
              <div className="flex flex-col items-start justift-start">
                <h1 className="text-[20px]">{todo.title}</h1>
                <h1 className="text-[16px]">{todo.desc}</h1>
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px]">
                {edit ? (
                  ""
                ) : (
                  <Button type="Edit" onClick={() => handleEdit(todo.id)} />
                )}
                <Button type="Delete" onClick={() => handleDelete(todo.id)} />
              </div>
            </div>
          ))}

          {todos.length == 0 ? (
            ""
          ) : (
            <Button type="Delete All" onClick={() => handleDeleteAll()} />
          )}
        </div>
      </main>
    </>
  );
}
