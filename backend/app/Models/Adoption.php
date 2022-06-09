<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adoption extends Model
{
    use HasFactory;

    protected $table = 'adoptions';

    protected $fillable = [
        'email',
        'value',
        'pet_id',
    ];

    public function pet()
    {
        // abaixo estou fazendo um relacionamento entre as tabelas pets e adoptions
        // o relacionamento é feito através do campo pet_id
        return $this->belongsTo(Pet::class, 'pet_id');
    }
}
