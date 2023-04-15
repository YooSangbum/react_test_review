import MainEvent from "./MainEvent";
import MainTopList from "./MainTopList";

function Main(props) {
  return (
    <>
      <MainEvent />
      <MainTopList data={props.data} />
    </>
  );
}

export default Main;
