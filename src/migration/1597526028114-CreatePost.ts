import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePost1597526028114 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.createTable(
      new Table({
        name: 'posts',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar', //可变长的字符串
          },
          {
            name: 'content',
            type: 'text',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // 降级数据库就是删除数据库
    return await queryRunner.dropTable('posts');
  }
}
