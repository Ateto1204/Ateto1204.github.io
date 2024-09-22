import { useEffect } from 'react';

const githubUsername = 'Ateto1204';
const githubAvatarUrl = `https://github.com/${githubUsername}.png`;

const setFavicon = (url: string) => {
  let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }
  link.href = url;
};

function FaviconSetter() {
  useEffect(() => {
    setFavicon(githubAvatarUrl);
  }, []);

  return null;
};

export default FaviconSetter;