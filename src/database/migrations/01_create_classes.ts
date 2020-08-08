import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id') //referenia o campo ID da tabela users
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE') //caso o prof seja deletado, as aulas dele somem junto
            ;
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('classes');
}