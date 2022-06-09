<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdoptionCollection;
use App\Models\Adoption;
use App\Rules\SinglePetAdoption;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{
    public function index()
    {
        $adoptions = Adoption::with('pet')->get();

        return new AdoptionCollection($adoptions);
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email', new SinglePetAdoption($request->input('pet_id', 0))],
            'value' => ['required', 'numeric', 'between:10,100'],
            'pet_id' => ['required', 'integer', 'exists:pets,id']
        ]);

        $dados = $request->only([
            'email',
            'value',
            'pet_id',
        ]);

        return Adoption::create($dados);
    }
}
