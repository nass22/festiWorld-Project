<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function listAllPosts(){
        return response()->json(Post::all());
    }

    public function createPost(Request $request){
        $post=Post::create($request->all());
        return response()->json($post);
    }

    public function deletePost($id){
        $post = Post::find($id);
        if($post){
            $post->delete();
            return response()->json(["status" => "success"]);
        } else {
            return response()->json(["status" => "error"]);
        }
    }

    public function listPost($id){
        $post = Post::find($id);
        return response()->json($post);
    }

    // public function viewSearch(){
    //     return view('search');
    // }

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

    public function profile($id){
        $profile = User::find($id);

        return response()->json($profile);
    }
}
