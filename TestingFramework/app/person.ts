﻿interface IPerson {
    getFullName(): string;
}

class Person implements IPerson {

    private firstName: string;
    private lastName: string;

    setFirstName(value: string) {
        this.firstName = value;
    }

    setLastName(value: string) {
        this.lastName = value;
    }

    getFullName(lastNameFirst: boolean = false): string {
        if (lastNameFirst) {
            return this.lastName + ", " + this.firstName;
        }
        return this.firstName + ", " + this.lastName;
    }
}