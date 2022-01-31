import { PostProvider } from "./Posts";
import { UserProvider } from "./Users";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <PostProvider>{children}</PostProvider>
    </UserProvider>
  );
};

export default Providers;
