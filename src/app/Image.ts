export interface Image {
    name: string;
    small: string;

}

export interface ServerResponse<T> {
    page: number;
    pages: number;
    items: T[];

}