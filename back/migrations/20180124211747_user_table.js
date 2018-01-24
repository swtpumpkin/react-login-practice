
exports.up = (knex, Promise) => {
  return knex.schema.createTable('user', t => {
    t.increments();
    t.string('user_id').notNullable().unique();
    t.string('provider').notNullable();
    t.string('access_token').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('admin_user');
};
