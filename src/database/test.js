const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async (db) => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: '-27.222633', 
        lng: '-49.6555874',
        name:'Lar dos Meninos',
        about: 'Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.',
        whatsapp:'123123123',
        images:[

            'https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',

            'https://images.unsplash.com/photo-1595009503377-e3be116106b6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',

            'https://images.unsplash.com/photo-1598749953342-b4ee75629dca?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
        ].toString(),

        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar!',
        opening_hours: 'Horário de visitas Das 8h até 18h',
        open_on_weekends: '0'
    });
    // await db.run(`
    //     INSERT INTO orphanages (
    //         lat,
    //         lng,
    //         name,
    //         about,
    //         whatsapp,
    //         images,
    //         instructions,
    //         opening_hours,
    //         open_on_weekends
    //     ) VALUES (
    //         "-27.222633",
    //         "-49.655581",
    //         "Lar dos Meninas",
    //         "Presta assistência a crianças de 06 a 15 anos que se encontrem em situação de risco e/ou vulnerabilidade social.",
    //         "12341234123",
    //         "https://images.unsplash.com/photo-1598454444314-28649fcaa0e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "Venha como se sentir a vontade e traga muito amor e paciência para dar!",
    //         "Horário de visitas Das 8h até 18h",
    //         "1"
    //     );
    // `); // async - await -> elimina a necessidade de inserir os .then que pede sempre um callback

    // // consultar dados na tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")  // seleciona tudo - linhas e colunas
    console.log(selectedOrphanages);

    // // consultar somente um orfanato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage);

    // // deletar dados da tabela
    await db.run("DELETE FROM orphanages WHERE id='4'");
    await db.run("DELETE FROM orphanages WHERE id='5'");

})