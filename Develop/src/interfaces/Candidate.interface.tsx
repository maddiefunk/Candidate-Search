// TODO: Create an interface for the Candidate objects returned by the API\

export interface Candidate {
    name: string;
    login: string;
    location: string;
    email?: string | null;
    avatar_url: string;
    html_url: string;
}

