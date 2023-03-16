const { createContext, useContext } = require("react");

const UserContext = createContext();

const ParentComponent = () => {
  return (
    <UserContext.Provider value={2}>
      <ChildComponent />
    </UserContext.Provider>
  );
};

export default ParentComponent;

const ChildComponent = () => {
  const value = useContext(UserContext);
  return <p>{value}</p>;
};
