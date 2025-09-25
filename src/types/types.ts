export interface Note {
    id: string,             // unique identifier
    title: string,          // note title
    body: string,           // note content
    createdAt: Date,        // creation timestamp
    important?: boolean     // optional flag
}