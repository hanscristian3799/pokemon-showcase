export interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: "male" | "female";
    email: string;
    phone: string;
    username: string;
    birthDate: string;
    image: string;
    address: {
        address: string;
        city: string;
        postalCode: string;
        state: string;
    };
}
