import axios from 'axios';
const token = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;

export async function fetchGroups(town, radius) {
  const accessToken = token;
  const url = `https://graph.facebook.com/search?type=group&q=${encodeURIComponent(
    town
  )}&distance${radius}&fields=id,name,description,member_count,privacy&access_token=${accessToken}`;

  try {
    const response = await axios.get(url);
    console.log(response);
    if (response.status !== 200) {
      throw new Error('Failed to fetch groups');
    }
    const data = response.data;
    const filteredGroups = data.data.filter((group) => {
      return (
        group.privacy === 'CLOSED' &&
        group.member_count > 1000 &&
        group.name.toLowerCase().includes(town.toLowerCase())
      );
    });
    return filteredGroups;
  } catch (error) {
    throw new Error('Failed to fetch groups');
  }
}
