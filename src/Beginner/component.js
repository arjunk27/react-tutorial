const ComponentExample = () => {
  return (
    <>
      <div>Component 1</div>
      <ChildComponent />
    </>
  );
};

export default ComponentExample;

const ChildComponent = () => {
  return <div>ChildComponent</div>;
};
