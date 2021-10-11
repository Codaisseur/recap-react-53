import { useEffect, useState } from "react";
import axios from "axios";

const Homepage = props => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/players", {
          headers: {
            authorization: `Bearer ${props.token}`,
          },
        });
        setPlayers(response.data);
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
      <div>
        {players.map(p => (
          <div>
            <h3>
              {p.name} - {p.nationality}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
