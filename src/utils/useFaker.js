import { useState, useEffect } from 'react';
import faker from 'faker';

export default function useFaker(numberOfFakes) {
    const [fakerData, setFaketData] = useState(null);

    useEffect(() => {
        function createData() {
            let fakePeople = [];
            for (let i = 0; i < numberOfFakes; i ++) {
                const person = {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    contact: {
                        phone: faker.phone,
                        email: faker.email
                    },
                    profilePicture: faker.image.avatar(),
                    profession: faker.name.jobType(),
                    professionDescription: faker.name.jobDescriptor()
                }
                fakePeople.push(person);
            }
            return fakePeople;
        }
        setFaketData(createData());
    }, []);
    return fakerData;
}