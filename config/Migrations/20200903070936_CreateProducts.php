<?php
use Migrations\AbstractMigration;

class CreateProducts extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     * @return void
     */
    public function change()
    {
        $table = $this->table('products');
        $table->addColumn('name', 'string', [
            'default' => null,
            'limit' => 255,
            'null' => false,
        ]);
        $table->addColumn('type', 'string', [
            'default' => null,
            'limit' => 127,
            'null' => false,
        ]);
        $table->addColumn('link_amazon_com', 'string', [
            'default' => null,
            'limit' => 511,
            'null' => false,
        ]);
        $table->addColumn('link_kakaku_com', 'string', [
            'default' => null,
            'limit' => 511,
            'null' => false,
        ]);
        $table->addColumn('link_mercari', 'string', [
            'default' => null,
            'limit' => 511,
            'null' => false,
        ]);
        $table->addColumn('modified', 'datetime', [
            'default' => null,
            'null' => false,
        ]);
        $table->create();
    }
}
