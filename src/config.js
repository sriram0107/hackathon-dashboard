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
export async function getEvent() {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // return await Promise.all(
  //   data.forEach(async (i) => await (await fetch(GET_API_ENDPOINT(i))).json())
  // );
  var data = [];
  // data.push(await (await fetch(GET_API_ENDPOINT(1))).json());
  // console.log(data[0]);
  return data;
}

// ADDITIONAL CONTROLS
export const ColorScheme = {
  workshop: "#FFFF99",
  activity: "#9999FF",
  tech_talk: "#FF66FF",
};
