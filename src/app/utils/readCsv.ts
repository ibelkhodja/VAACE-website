export interface TeamMember {
    name: string;
    subteams: string[];
    school: string;
    linkedin: string;
    headshot: string;
  }
  
  export interface CsvRow {
    Name: string;
    Subteam: string;
    School: string;
    Linkedin: string;
    Headshot: string;
  }


  export function processTeamData(csvData: CsvRow[]): TeamMember[] {
    return csvData.map((row: CsvRow) => ({
      name: row.Name.trim(),
      subteams: row.Subteam.split('|').map((s: string) => s.trim()),
      school: row.School.trim(),
      linkedin: row.Linkedin.trim(),
      headshot: `/team_images/${row.Headshot.trim()}`
    }));
  }