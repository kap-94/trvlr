export const getPath = (menuItem, frontPageID) => {
  // We just need the final part of the path for inner pages
  // So let's take the full url from the API and grab that part
  // Let's make sure we don't change the home page link, that one doesn't need a path
  let path;

  // Check if it's an external link, we don't wanna change those
  if (menuItem.url?.includes(process.env.NEXT_PUBLIC_API_URL)) {
    if (menuItem.ID !== frontPageID) {
      // Get the url and remove the trailing slash
      let url = menuItem.url.slice(0, -1);
      // Find the position in the string where the last slash is
      let n = url.lastIndexOf("/");
      // Remove everything up to and including the last slash
      path = `/${url.substring(n + 1)}`;
    } else {
      // If the link is meant to go to the home page, we don't want to change anything
      path = "/";
    }
  } else {
    path = menuItem.url;
  }

  return path;
};

export const fixInvalidLink = (link) => {
  return link.startsWith("//") ? link.slice(1) : link;
};

export const convertLink = (link) => {
  if (!link) return "#";
  const convertedLink = link.replace(
    process.env.NEXT_PUBLIC_API_SEARCH_URL_MAIN_SITE,
    "/"
  );
  return fixInvalidLink(convertedLink);
};
