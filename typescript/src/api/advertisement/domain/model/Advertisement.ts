export class Advertisement {
    public id: string;
    public description: string;
    public password: string;

    constructor(id: string, description: string, password: string) {
        this.id = id;
        this.description = description;
        this.password = password;
    }
}