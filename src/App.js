import { Box } from "@mui/system";
import "./App.css";
import Posts from "./components/Posts";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import { PostProvider } from "./context/PostProvider";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
                               "main main main menu"`,
        }}
      >
        <UserProvider>
          <Navbar />
          <PostProvider>
            <Posts />
            <Menu />
          </PostProvider>
        </UserProvider>
      </Box>
    </div>
  );
}

export default App;
