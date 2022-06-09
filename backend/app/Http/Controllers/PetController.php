<?php

namespace App\Http\Controllers;

use App\Http\Requests\PetRequest;
use App\Http\Resources\PetCollection;
use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        $dados = Pet::get();

        return new PetCollection($dados);
    }

    public function store(PetRequest $request)
    {
        $dados = $request->only(['name', 'history', 'photo']);

        return Pet::create($dados);
    }
}
