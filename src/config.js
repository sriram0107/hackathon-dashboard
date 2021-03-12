const EVENTS = 15;
const PRIVATE = "private";
const PUBLIC = "public";

const GET_API_ENDPOINT = (id) => {
  return `https://api.hackthenorth.com/v3/graphql?query={ event(id: ${id}) { id name event_type permission 
            start_time end_time description speakers { name profile_pic } public_url private_url related_events } }`;
};

export const ColorScheme = {
  workshop: "#FFFF99",
  activity: "#9999FF",
  tech_talk: "#FF66FF",
};

export async function getEvent(loggedIn) {
  var data = [];
  for (var i = 1; i <= EVENTS; ++i) {
    console.log(i);
    fetch(GET_API_ENDPOINT(i))
      .then((res) => res.json)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    // try {
    //   var event = await fetch(GET_API_ENDPOINT(i));
    //   if (
    //     (event.event_type === PRIVATE && loggedIn) ||
    //     event.event_type === PUBLIC
    //   ) {
    //     data.push(event);
    //   }
    // } catch (err) {
    //   console.log(err);
    //   return [];
    // }
  }
  return data;
}
