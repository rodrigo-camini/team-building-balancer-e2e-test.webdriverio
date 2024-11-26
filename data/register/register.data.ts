import { faker } from '@faker-js/faker';

// export const generateFakerUser = {

//     name: faker.person.fullName(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//     confirmPassword: faker.internet.password(),
//     createdUserText: 'Conectado a\n${name}\n${email}'
// }


export const generateFakerUser = () => {
    const generatedName = faker.person.fullName();
    const generatedEmail = faker.internet.email();
    const generatedPassword = faker.internet.password();

    return {
        name: generatedName,
        email: generatedEmail,
        password: generatedPassword,
        confirmPassword: generatedPassword,
        createdUserText: `Conectado a\n${generatedName}\n${generatedEmail}`
    };
};