type LogActivity = {
    user_id: number;
    activity: "CREATE" | "EDIT" | "DELETE";
    type: string;
    detail_id: string;
}