<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function show(){
        return News::all();
    }

    public function store(Request $request){
        $validateData=$request->all();
        $news = News::create($validateData);
    }
}
