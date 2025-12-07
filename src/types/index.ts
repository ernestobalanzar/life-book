// Types for the flipbook application

export interface Drawing {
  id: number;
  src: string;
  alt: string;
}

export interface WelcomeMessage {
  title: string;
  subtitle: string;
  dedication: string;
}

export interface EndMessage {
  title: string;
  subtitle: string;
  replayButton: string;
}

export interface Config {
  secondsPerPage: number;
  welcomeMessage: WelcomeMessage;
  endMessage: EndMessage;
  musicPath: string;
}
