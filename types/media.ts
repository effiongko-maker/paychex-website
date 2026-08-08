export type ImageMediaSource = {
  type: "image";
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export type VideoMediaSource = {
  type: "video";
  src: string;
  alt: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
};

export type MediaSource = ImageMediaSource | VideoMediaSource;
