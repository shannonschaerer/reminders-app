import React, {useState} from 'react';

import ReminderList from "./components/ReminderList";
import Reminder from "./models/Reminder";

const reminders: Reminder[] = [

];

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Create todo list" },
  ]);
  return (

    <div className="App">
      <ReminderList items={reminders} />
    </div>

  );
}

export default App;
