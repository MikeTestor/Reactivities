
import { useEffect, useState } from "react"

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";



function App() {
  const title = "Reactivities jaaaawhee";
  const [activities, setActivities] = useState<Activity[]>([]);
  
  // useEffect(() => {
  //   fetch("https://localhost:5001/api/activities")
  //     .then(response => response.json())
  //     .then(data => setActivities(data));
  // }, []);

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:5001/api/activities")
      .then(response => setActivities(response.data));
      return () => {};
  }, []);

  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText>{activity.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      {/* <h3>{title}</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul> */}
    </>    
  )
}

export default App
