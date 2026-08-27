declare module '*.csv' {
    const content: Array<{
      Name: string;
      Subteam: string;
      School: string;
      Linkedin: string;
      Headshot: string;
    }>;
    export default content;
  }