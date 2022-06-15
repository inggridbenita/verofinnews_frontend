@extends('layouts.app')

@section('title')
  Verofin News
@endsection

@push('add-on-style')
  <link rel="stylesheet" href="/css/elements/news_list.css">
  <link rel="stylesheet" href="/css/elements/news_item.css">
  <link rel="stylesheet" href="/css/pages/user/home.css">
@endpush

@section('content')
  @include('includes.head')
  <main id="news-list"></main>
  @include('includes.newsTemplate')
@endsection

@push('add-on-script')
  <script src="/js/pages/user/home.js"></script>
@endpush