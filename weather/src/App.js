import React from "react";
import { Provider } from "react-redux";
import store from "./redux/reducer/rootReducer";
import "./App.css";
import Find from "./components/top-bar/find";
import MainWidget from "./showTemperature/mainWidget";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import InnerBgImg from "./components/backgr-img/spring.jpg";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div
          className="backgroung-image"
          style={{ backgroundImage: "url(" + InnerBgImg + ")" }}
        >
          <Find />
          <MainWidget />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

// const [todayData, setTodayData] = useState(false);
// // const [oneCall, setOneCall] = useState(null);
// const [call5Day, setCall5Day] = useState(false);

// const loadTestData = async () => {
//   const allData = await api.CurrentWeatherData();
//   setTodayData(allData.data);
//   const fiveDayData = await api.Call5DayData();
//   setCall5Day(fiveDayData.data);
//   const lat = allData.data.coord.lat;
//   const lon = allData.data.coord.lon;
//   const someData = await api.OneCallAPI(lat, lon);
//   console.log(someData);
// };

// useEffect(() => {
//   loadTestData();
//   console.log("loaded 5 day data", call5Day);
// }, []);

//////////////////////////////

/* {call5Day ? (
        <FormForToday
          date={"09"}
          // temperature={Math.floor(call5DayData.main.temp - 273)}
          condition={2}
          wind={1}
          pressure={2}
          humidity={1}
        />
      ) : null}

      <button onClick={loadTestData}>get test Data</button> */
