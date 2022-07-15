import { parse } from 'node-html-parser';

const CACHE: { [url: string]: any } = {};

const baseUrl = 'https://en.wikipedia.org/api/rest_v1/page/html';

export async function getThumbnailLinkFromPage(pageUrl: string): Promise<string> {
  const pageName = pageUrl.split('wiki/')[1];
  const url = `${baseUrl}/${pageName}`;
  let text: string;
  if (CACHE[url]) {
    console.log('getting', { url }, 'from cache');
    text = CACHE[url];
  } else {
    const data: Response = await fetch(url);
    text = await data.text();
    CACHE[url] = text;
  }
  // console.log({ wikipediaResponse: text });
  const root = parse(text);
  const firstInfoboxImage = root.querySelectorAll('.infobox-image')[0];
  let infoboxImageSrc;
  if (firstInfoboxImage) {
    const infoboxImage = firstInfoboxImage.querySelectorAll('img')[0] as any;
    infoboxImageSrc = infoboxImage?._attrs?.src;
  }
  return infoboxImageSrc;
};

export async function getCircuitImageLinkFromPage(pageUrl: string, circuitName: string): Promise<string> {
  const pageName = pageUrl.split('wiki/')[1];
  const url = `${baseUrl}/${pageName}`;
  let text: string;
  if (CACHE[url]) {
    console.log('getting', { url }, 'from cache');
    text = CACHE[url];
  } else {
    const data: Response = await fetch(url);
    text = await data.text();
    CACHE[url] = text;
  }
  const root = parse(text);
  let imgs: any[] = [];
  root.querySelectorAll('.infobox-image').forEach(infoBoxImage => imgs.push(...infoBoxImage.querySelectorAll('img')));
  // console.log({ imgs });
  let trackLayoutImg;
  let trackLogoImg;
  imgs.forEach(img => {
    if (img?.attrs?.src.toLowerCase().includes('logo')) {
      trackLogoImg = img?.attrs?.src;
    } else if (img?.attrs?.src.toLowerCase().includes('svg')) {
      trackLayoutImg = img?.attrs?.src;
    }
  });
  // console.log({trackLayoutImg, trackLogoImg, img0: imgs[0].attrs.src})
  return `https:${trackLayoutImg || trackLogoImg || imgs[0].attrs.src}`;
};



export interface WikipediaSummaryResponse {
  "type": string,
  "title": string,
  "displaytitle": string,
  "namespace": {
    "id": 0,
    "text": string
  },
  "wikibase_item": string,
  "titles": {
    "canonical": string,
    "normalized": string,
    "display": string
  },
  "pageid": number,
  "thumbnail": {
    "source": string,
    "width": number,
    "height": number
  },
  "originalimage": {
    "source": string,
    "width": number,
    "height": number
  },
  "lang": string,
  "dir": string,
  "revision": string,
  "tid": string,
  "timestamp": string,
  "description": string,
  "description_source": string,
  "content_urls": {
    "desktop": {
      "page": string,
      "revisions": string,
      "edit": string,
      "talk": string
    },
    "mobile": {
      "page": string,
      "revisions": string,
      "edit": string,
      "talk": string
    }
  },
  "extract": string,
  "extract_html": string
};