function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
}

export function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}

export const sortPosts = (posts, by) => {
  let temp;
  if (by === "up") {
    temp = posts.sort((a, b) => b.upvote - a.upvote);
  } else {
    temp = posts.sort((a, b) => b.downvote - a.downvote);
  }
  return temp;
};
