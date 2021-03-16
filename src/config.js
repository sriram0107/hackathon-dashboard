export const EVENTS = 15;
export const PRIVATE = "private";
export const PUBLIC = "public";
export const GUEST_USERNAME = "guest";
export const GUEST_PASSWORD = "abcd";

// gets the endpoint for a particular id
// NOTE : id is guarenteed to be between 1 and EVENTS (exclusive)
export const GET_API_ENDPOINT = (id) => {
  return `https://api.hackthenorth.com/v3/graphql?query={ event(id: ${id}) { id name event_type permission 
            start_time end_time description speakers { name profile_pic } public_url private_url related_events } }`;
};

// ADDITIONAL CONTROLS

// to set color schemes for various events
export const ColorScheme = {
  workshop: "#FFFF99",
  activity: "#9999FF",
  tech_talk: "#FF66FF",
};

// To set headings for events
export const Events = {
  workshop: "Workshop",
  activity: "Activity",
  tech_talk: "Tech Talk",
};
