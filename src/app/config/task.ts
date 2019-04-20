export interface  Task {
    id: string;
    name: string;
    topic: string;
    shortDescription: string;
    taskDescription: string;
    difficulty: string;
    code: string;
    tests?: [
        {
            input: string;
            output: string;
            status: string;
        }
    ];
    creator: string;
    enabled: boolean;
    timestamps: string;
}
