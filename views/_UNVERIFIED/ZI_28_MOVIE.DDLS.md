---
name: ZI_28_MOVIE.DDLS
description: a
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/AlexOwcharow/abap_movie/blob/168ea69e8fb5f1e783ebeecfb55a743aacfbd439/src/zi_28_movie.ddls.asddls
semantic_en: a — CDS view based on ZR_28_Movie2.
semantic_vi: a — CDS view dựa trên ZR_28_Movie2.
keywords:
  - movie
  - uuid
  - title
  - genre
  - publishing
  - year
  - runtime
---
# ZI_28_MOVIE.DDLS

**a**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/AlexOwcharow/abap_movie/blob/168ea69e8fb5f1e783ebeecfb55a743aacfbd439/src/zi_28_movie.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MovieUuid` | ✓ | |  |  |  |  |
| `Title` |  | |  |  |  |  |
| `Genre` |  | |  |  |  |  |
| `PublishingYear` |  | |  |  |  |  |
| `RuntimeInMin` |  | |  |  |  |  |
| `ImageUrl` |  | |  |  |  |  |
| `CreatedAt` |  | |  |  |  |  |
| `CreatedBy` |  | |  |  |  |  |
| `LastChangedAt` |  | |  |  |  |  |
| `LastChangedBy` |  | |  |  |  |  |
| `GenreText` |  | | `_GenreText` | `text` |  |  |
| `AverageRating` |  | | `_AverageRating` | `AverageRating` |  |  |
| `AverageRatingCriticality` |  | |  | `case when _AverageRating.AverageRating > 6.6 then 3 when _AverageRating.AverageRating > 3.3 then 2 when _AverageRating.AverageRating > 0 then 1 else 0 end` |  |  |
| `_Ratings` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GenreText` | `ZI_28_GerneText` | [1..1] |
| `_AverageRating` | `ZI_28_AverageRating` | [0..1] |

## Source Code

*Source: [https://github.com/AlexOwcharow/abap_movie/blob/168ea69e8fb5f1e783ebeecfb55a743aacfbd439/src/zi_28_movie.ddls.asddls](https://github.com/AlexOwcharow/abap_movie/blob/168ea69e8fb5f1e783ebeecfb55a743aacfbd439/src/zi_28_movie.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'a'

/*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ]  } */
define root view entity ZI_28_Movie
  as select from ZR_28_Movie2

  association [1..1] to ZI_28_GerneText     as _GenreText     on $projection.Genre = _GenreText.value_low
  association [0..1] to ZI_28_AverageRating as _AverageRating on $projection.MovieUuid = _AverageRating.MovieUUID
  composition [0..*] of ZI_28_Rating as _Ratings

{
  key MovieUuid,

      Title,

      @ObjectModel.text.element: [ 'GenreText' ]
      Genre,

      PublishingYear,
      RuntimeInMin,
      ImageUrl,
      CreatedAt,
      CreatedBy,
      LastChangedAt,
      LastChangedBy,

      /* Transient Data */
      _GenreText.text               as GenreText,
      _AverageRating.AverageRating,

      case when _AverageRating.AverageRating > 6.6 then 3
          when _AverageRating.AverageRating > 3.3 then 2
          when _AverageRating.AverageRating > 0 then 1
          else 0
      end                           as AverageRatingCriticality,

      _Ratings
// _association_name // Make association public
}
```
