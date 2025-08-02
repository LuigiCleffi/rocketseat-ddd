export class Entity<T> {
    private _id: UniqueEntityID;
    protected props: T;

    get id(): string {
        return this._id.toString();
    }

    protected constructor(props: T, id?: UniqueEntityID) {
        this.props = props;
        this._id = id ?? new UniqueEntityID();
    }
}