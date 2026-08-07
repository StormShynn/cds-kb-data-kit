---
name: ZMO_I_MOVIE.DDLS
description: Movie View - CDS Data Model
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie.ddls.asddls
semantic_en: Movie View - CDS Data Model — CDS view based on zmo_a_movie.
semantic_vi: Movie View - CDS Data Model — CDS view dựa trên zmo_a_movie.
keywords:
  - movie
  - data
  - model
  - guid
  - title
  - release
  - year
  - director
  - genre
---
# ZMO_I_MOVIE.DDLS

**Movie View - CDS Data Model**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Guid` | ✓ | |  | `guid` |
| `Title` |  | |  | `title` |
| `ReleaseYear` |  | |  | `release_year` |
| `Director` |  | |  | `director` |
| `GenreId` |  | |  | `genre_id` |
| `LastChangedAt` |  | |  | `last_changed_at` |
| `_Genre` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Genre` | `ZMO_I_GENRE` | [0..1] |

## Source Code

*Source: [https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie.ddls.asddls](https://github.com/soschlegel/MovieDemo/blob/097fe3f147dfce6ada78ff6c5e2ae281cea2f9c0/src/zmo_i_movie.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Movie View - CDS Data Model'
define root view entity ZMO_I_MOVIE
  as select from zmo_a_movie
  association [0..1] to ZMO_I_GENRE as _Genre on $projection.GenreId = _Genre.Id
{
  key guid            as Guid,  
      @Search.defaultSearchElement: true
      title           as Title,
      release_year    as ReleaseYear,
      director        as Director,
      genre_id        as GenreId,
      @Semantics.systemDateTime.lastChangedAt: true
      last_changed_at as LastChangedAt,
      _Genre
}
```
