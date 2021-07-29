@php
/*
$layout_page = shop_news
**Variables:**
- $news: paginate
Use paginate: $news->appends(request()->except(['page','_token']))->links()
*/
@endphp


@extends($sc_templatePath.'.layout')

@section('block_main')
<section class="section section-xl bg-default">
    <div class="container">
      <div class="row row-30">
        @if ($news->count())
            @foreach ($news as $newsDetail)
            <div class="col-sm-6 col-lg-4">
              {{-- Render product single --}}
              @include($sc_templatePath.'.common.blog_single', ['blog' => $newsDetail])
              {{-- //Render product single --}}
            </div>
            @endforeach

        {{-- Render pagination --}}
        @include($sc_templatePath.'.common.pagination', ['items' => $news])
        {{--// Render pagination --}}

        @else
            {!! sc_language_render('front.data_notfound') !!}
        @endif
      </div>

    </div>
  </section>

   {{-- Render include view --}}
   @include($sc_templatePath.'.common.include_view')
   {{--// Render include view --}}

@endsection


@push('styles')
{{-- Your css style --}}
@endpush

@push('scripts')
{{-- //script here --}}
@endpush