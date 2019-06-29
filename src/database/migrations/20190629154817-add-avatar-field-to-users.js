module.exports = {
  up: (queryInterface, Sequelize) => {
    // adiciona uma coluna na tabela users
    // o nome da coluna adicionada vai ser avatar_id
    // o type dessa colunas é um INTEGER porq é o id de outra tabela
    // references (relacionamento de tabela): qual tabela (files) qual coluna (id)
    // onUpdate e onDelete é em relação a tabela de referencia
    // Se a alterar o valor na files muda na users tbm
    // Se deleter o avatar na files coloca null na users
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
