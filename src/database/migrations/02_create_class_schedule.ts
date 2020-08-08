import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
            .notNullable()
            .references('id') //referenia o campo ID da tabela classes
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE') //caso uma aula for deletada, o agendamento some junto
            ;
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule');
}