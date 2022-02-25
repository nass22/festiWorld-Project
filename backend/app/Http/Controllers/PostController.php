<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class PostController extends Controller
{
    //function fetch
    public function fetch(){
        $url='https://app.ticketmaster.com/discovery/v2/events.json?size=10&keyword=festival&dmaId=354&apikey=FPTdwquKq3R9upWz97Sa7WpeFakc2jNl';
        $session=curl_init();

        curl_setopt($session, CURLOPT_URL, $url);
        curl_setopt($session, CURLOPT_RETURNTRANSFER, true);


        $allData= curl_exec($session);
        curl_close($session);

        $response = json_decode($allData);
     
        $obj=$response->_embedded;
        $size=count($obj->events);
        
        for ($i=0; $i < $size; $i++ ){
            $festival = new Post;
            $festival->title = $obj->events[$i]->name;
            $festival->location = $obj->events[$i]->_embedded->venues[0]->state->name;
            $festival->image = $obj->events[$i]->images[0]->url;
            $festival->start_date = $obj->events[$i]->dates->start->localDate;
            $festival->genre = $obj->events[$i]->classifications[0]->genre->name;
            $festival->save();
        }

        return Post::all();
    
    }

    public function showAllPosts(){
        return response()->json(Post::all());
    }

    public function create(Request $request){
        $post=Post::create($request->all());
        return response()->json($post);
    }

    public function delete($id){
        $post = Post::find($id);
        if($post){
            $post->delete();
            return response()->json(["status" => "success"]);
        } else {
            return response()->json(["status" => "error"]);
        }
    }

    public function showPost($id){
        $post = Post::find($id);
        return response()->json($post);
    }

    //A modifier
    public function search(Request $request){
        $location = $request->input('location');
        $musicType = $request->input('music-type');

        if($location->isEmpty() && $musicType->isEmpty()){

            return response()->json(Post::all()); //test: listAllPosts();

        } else if ($location->isEmpty()) {

            $festival = Post::where('musicType', $musicType)->get();
            return response()->json($festival);

        } else if ($musicType->isEmpty()){

            $festival = Post::where('location', $location)->get();
            return response()->json($festival);

        } else {

            $festival = Post::where('location', $location)->where('musicType', $musicType)->get();
            return response()->json($festival);

        }
        
    }
    
    //Récupère une img random
    public function getRandomImg(){

        $url = "https://api.unsplash.com/photos/random/?query=musicfestivals&client_id=3Ls0LURZokLtsjEO-tGCasKHlCx4WuFH3mFOaPr5IFA";
        $curl = curl_init();

        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_URL, $url); 

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            return $response;
        }

    }
}
