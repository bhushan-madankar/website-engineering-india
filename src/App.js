import EventsPage from './EventsPage';
import './EventsPage.css'; // ✅ Fix: removed './src/'

function App() {
  return (
    <div className="App">
      <EventsPage />
    </div>
  );
}

export default App;
