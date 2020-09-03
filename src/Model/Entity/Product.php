<?php
namespace App\Model\Entity;

use Cake\ORM\Entity;

/**
 * Product Entity
 *
 * @property int $id
 * @property string $name
 * @property string $type
 * @property string $link_amazon_com
 * @property string $link_kakaku_com
 * @property string $link_mercari
 * @property \Cake\I18n\FrozenTime $modified
 */
class Product extends Entity
{
    /**
     * Fields that can be mass assigned using newEntity() or patchEntity().
     *
     * Note that when '*' is set to true, this allows all unspecified fields to
     * be mass assigned. For security purposes, it is advised to set '*' to false
     * (or remove it), and explicitly make individual fields accessible as needed.
     *
     * @var array
     */
    protected $_accessible = [
        'name' => true,
        'type' => true,
        'link_amazon_com' => true,
        'link_kakaku_com' => true,
        'link_mercari' => true,
        'modified' => true,
    ];
}
