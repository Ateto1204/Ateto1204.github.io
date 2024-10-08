import { useEffect } from 'react';
import { githubAvatarUrl } from '../data/faviconData';

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