import { Migration } from '@mikro-orm/migrations';

export class Migration20210105052313 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" rename column "user_name" to "username";');


    this.addSql('alter table "user" drop constraint "user_user_name_unique";');

    this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
  }

}
