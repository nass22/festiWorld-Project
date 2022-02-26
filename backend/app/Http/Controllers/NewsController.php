<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function fetchNews(){
        $url='https://newsapi.org/v2/everything?q=music&apiKey=13cd0554caf6465a877596e1663c3a19';

        $session=curl_init();

        curl_setopt($session, CURLOPT_URL, $url);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

        $allData= curl_exec($session);
        curl_close($session);

        $response = json_decode($allData, true);

        $size=count($response['articles']);

        for($i=0; $i < $size; $i++){
            $news = new News;
            $news->title = $response['articles'][$i]['title'];
            $news->content = $response['articles'][$i]['content'];
            $news->save();
        }

        return News::all();
    }


    public function show(){
        return News::all();
    }

    public function store(Request $request){
        $validateData=$request->all();
        $news = News::create($validateData);
    }
}
