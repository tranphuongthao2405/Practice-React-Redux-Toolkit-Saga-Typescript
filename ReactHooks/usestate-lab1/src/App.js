import { useState, useEffect } from "react";
import queryString from "query-string";
import "./App.css";
import ColorBox from "./components/ColorBox/index";
import TodoList from "./components/TodoList/index";
import TodoForm from "./components/TodoForm/index";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });
  const [showClock, setShowClock] = useState(true);

  useEffect(() => {
    // async function here
    const fetchPostList = async () => {
      try {
        // encode thanh querystring trong url
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;

        const response = await fetch(requestUrl);
        const responseJson = await response.json();
        const { data, pagination } = responseJson;

        // setState here
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch posts: ", error.message);
      }
    };

    // call async function here
    fetchPostList();
  }, [filters]);

  const handleTodoClick = (todo) => {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleTodoFormSubmit = (formValues) => {
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, _page: newPage });
  };

  const handleFiltersChange = (newFilter) => {
    // reset ve trang 1
    // do thay doi filter
    // filter search co the khong tra ve nhieu du lieu de du nhieu hon 1 trang
    setFilters({ ...filters, _page: 1, title_like: newFilter.searchTerm });
  };

  return (
    <div className="App">
      {/* <ColorBox /> */}
      {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <br />
      <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide clock" : "Show clock"}
      </button>
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
