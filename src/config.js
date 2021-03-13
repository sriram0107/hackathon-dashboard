const EVENTS = 15;
const PRIVATE = "private";
const PUBLIC = "public";
export const GUEST_USERNAME = "guest";
export const GUEST_PASSWORD = "abcd";

const GET_API_ENDPOINT = (id) => {
  return `https://api.hackthenorth.com/v3/graphql?query={ event(id: ${id}) { id name event_type permission 
            start_time end_time description speakers { name profile_pic } public_url private_url related_events } }`;
};

// if loggedIn is true, private events are returned
export async function getEvent(loggedIn) {
  var data = [];
  for (var i = 1; i <= EVENTS; ++i) {
    console.log(i);
    fetch(GET_API_ENDPOINT(i))
      .then((res) => res.json)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return data;
}

// ADDITIONAL CONTROLS
export const ColorScheme = {
  workshop: "#FFFF99",
  activity: "#9999FF",
  tech_talk: "#FF66FF",
};
