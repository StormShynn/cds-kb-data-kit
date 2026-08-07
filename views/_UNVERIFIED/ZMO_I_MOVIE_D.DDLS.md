---
name: ZMO_I_MOVIE_D.DDLS
description: Draft Movie View
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie_d.ddls.asddls
semantic_en: Draft Movie View — CDS view based on zmo_a_movie.
semantic_vi: Draft Movie View — CDS view dựa trên zmo_a_movie.
keywords:
  - draft
  - movie
  - guid
  - title
  - release
  - year
  - director
  - genre
tags:
  - FT
  - component:FT
---
# ZMO_I_MOVIE_D.DDLS

**Draft Movie View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie_d.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Guid` | ✓ | |  | `guid` |  |  |
| `Title` |  | |  | `title` |  |  |
| `ReleaseYear` |  | |  | `release_year` |  |  |
| `Director` |  | |  | `director` |  |  |
| `GenreId` |  | |  | `genre_id` |  |  |
| `GenreName` |  | | `_Genre` | `Name` |  |  |
| `LastChangedAt` |  | |  | `last_changed_at` |  |  |
| `_Genre` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Genre` | `ZMO_I_GENRE` | [0..1] |

## Source Code

*Source: [https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie_d.ddls.asddls](https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie_d.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Draft Movie View'
@Search.searchable: true

define root view entity ZMO_I_MOVIE_D
  as select from zmo_a_movie
  association [0..1] to ZMO_I_GENRE as _Genre on $projection.GenreId = _Genre.Id
{
  key guid            as Guid,  
      @Search.defaultSearchElement: true

      title           as Title,
      release_year    as ReleaseYear,
      director        as Director,
      genre_id        as GenreId,
      _Genre.Name     as GenreName,
      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at as LastChangedAt,
      _Genre
}
```
