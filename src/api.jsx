import axios from 'axios';
const token = import.meta.env.VITE_FACEBOOK_ACCESS_TOKEN;

export async function fetchGroups(town) {
  const accessToken = token;
  const url = `https://graph.facebook.com/v19.0/search?type=group&q=${encodeURIComponent(
    town
  )}&fields=id,name,description,member_count,privacy&access_token=${accessToken}`;

  try {
    const response = await axios.get(url);
    console.log(response);
    if (response.status !== 200) {
      throw new Error('Failed to fetch groups');
    }
    const data = response.data;
    const filteredGroups = data.data.filter((group) => {
      return (
        group.privacy === 'CLOSED' && // private groups
        group.member_count > 1000 && // over 1000 members
        group.name.toLowerCase().includes(town.toLowerCase()) // within the specified town
      );
    });
    return filteredGroups;
  } catch (error) {
    throw new Error('Failed to fetch groups');
  }

  // try {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch groups');
  //   }
  //   const data = await response.json();
  //   const filteredGroups = data.data.filter(group => {
  //     return (
  //       group.privacy === 'CLOSED' && // private groups
  //       group.member_count > 1000 && // over 1000 members
  //       group.name.toLowerCase().includes(town.toLowerCase()) // within the specified town
  //     );
  //   });
  //   return filteredGroups;
  // } catch (error) {
  //   throw new Error('Failed to fetch groups');
  // }
}
