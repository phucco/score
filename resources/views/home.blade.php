@extends('layouts.app')

@section('content')
<div class="container">
    <router-view />
    <base-loading></base-loading>
</div>
@endsection
