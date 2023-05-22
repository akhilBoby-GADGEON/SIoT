export class Feedback {
    public consumerName!: string;
    public rating!: number;
    public message!: string;

    constructor(name: string, rating: number, message: string) {
        this.consumerName = name;
        this.rating = rating;
        this.message = message;
    }
}