export type ContestCardData = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  time: string;
  participants: string;
  prize: string;
  cta: string;
  gradient: string;
  glow: string;
};

export type VideoCardData = {
  id: string;
  title: string;
  subtitle: string;
  channel: string;
  views: string;
  age: string;
  duration: string;
  gradient: string;
  tag: string;
};

export type UpdateCardData = {
  id: string;
  title: string;
  subtitle: string;
  tone: string;
};
