export interface Note {
    title: string;
    subtitle: string;
  }
  
  export interface Attachment {
    title: string;
    subtitle: string;
  }
  
  export interface Opportunity {
    title: string;
    subtitle: string;
  }
  
  export interface Task {
    title: string;
    subtitle: string;
  }
  
  export const Notes: Note[] = [
    { title: "Note 1", subtitle: "Subtitle for Note 1" },
    { title: "Note 2", subtitle: "Subtitle for Note 2" },
    { title: "Note 3", subtitle: "Subtitle for Note 3" },
  ];
  
  export const Attachments: Attachment[] = [
    { title: "Attachment 1", subtitle: "Subtitle for Attachment 1" },
    { title: "Attachment 2", subtitle: "Subtitle for Attachment 2" },
    { title: "Attachment 3", subtitle: "Subtitle for Attachment 3" },
  ];
  
  export const Opportunities: Opportunity[] = [
    { title: "Opportunity 1", subtitle: "Subtitle for Opportunity 1" },
    { title: "Opportunity 2", subtitle: "Subtitle for Opportunity 2" },
    { title: "Opportunity 3", subtitle: "Subtitle for Opportunity 3" },
  ];
  
  export const Tasks: Task[] = [
    { title: "Task 1", subtitle: "Subtitle for Task 1" },
    { title: "Task 2", subtitle: "Subtitle for Task 2" },
    { title: "Task 3", subtitle: "Subtitle for Task 3" },
  ];
  