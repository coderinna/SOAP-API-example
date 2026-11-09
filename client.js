const soap = require('soap');

async function main() {

    const client =
        await soap.createClientAsync(
            'http://localhost:8000/soap?wsdl'
        );


    // =========================
    // GET
    // =========================

    console.log('\n--- GET USER ---');

    let [result] =
        await client.GetUserAsync({
            id: '1'
        });

    console.log(result);


    // =========================
    // CREATE
    // =========================

    console.log('\n--- CREATE USER ---');

    [result] =
        await client.CreateUserAsync({
            name: 'Liisa',
            email: 'liisa@example.com'
        });

    console.log(result);

    const newUserId = result.id;


    // =========================
    // UPDATE
    // =========================

    console.log('\n--- UPDATE USER ---');

    [result] =
        await client.UpdateUserAsync({
            id: newUserId,
            name: 'Liisa Updated',
            email: 'liisa.updated@example.com'
        });

    console.log(result);


    // =========================
    // GET AGAIN
    // =========================

    console.log('\n--- GET UPDATED USER ---');

    [result] =
        await client.GetUserAsync({
            id: newUserId
        });

    console.log(result);


    // =========================
    // DELETE
    // =========================

    console.log('\n--- DELETE USER ---');

    [result] =
        await client.DeleteUserAsync({
            id: newUserId
        });

    console.log(result);


    // =========================
    // GET AFTER DELETE
    // =========================

    console.log('\n--- GET AFTER DELETE ---');

    try {

        [result] =
            await client.GetUserAsync({
                id: newUserId
            });

        console.log(result);

    } catch (error) {

        console.log(
            'User no longer exists'
        );

    }

}


main().catch(console.error);