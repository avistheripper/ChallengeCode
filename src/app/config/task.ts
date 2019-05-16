export interface  Task {
    id: string;
    name: string;
    topic: string;
    shortDescription: string;
    taskDescription: string;
    difficulty: {
        weight: number;
        name: string;
    };
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

export interface TaskStatus {
    sid: string;
    tests: [
        {
            input: string;
            output: string;
            status: string;
        }
    ];
}

export interface SolutionStatus {
    code: string;
    id: string;
    results: Array<any>;
    score: number;
    status: string;
    task: string;
    type: string;
    user: string;
    visible: boolean;
}
