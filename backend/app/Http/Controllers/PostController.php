<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
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

    // public function viewSearch(){
    //     return view('search');
    // }

    //A modifier
    public function search(Request $request){
        $location = $request->input('location');
        $musicType = $request->input('musictype');

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
