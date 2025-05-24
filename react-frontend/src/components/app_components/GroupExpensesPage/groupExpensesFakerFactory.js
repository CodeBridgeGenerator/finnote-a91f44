
import { faker } from "@faker-js/faker";
export default (user,count,paidByIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(""),
paidBy: paidByIds[i % paidByIds.length],
type: faker.lorem.sentence(""),
amount: faker.lorem.sentence(""),
description: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
