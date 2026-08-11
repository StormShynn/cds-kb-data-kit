---
name: I_SEASON
description: "Season"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASON')/$value
semantic_en: "Season"
semantic_vi: "Season — CDS view cơ bản dựa trên rfm_seasons."
keywords:
  - "season"
  - "internal"
  - "identifier"
  - "product"
  - "year"
  - "collection"
  - "theme"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
---
# I_SEASON

**Season**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SeasonInternalIdentifier` | ✓ | |  | `rfm_suid` | `RAW(16)` | Season Internal Unique Identifier |
| `ProductSeasonYear` |  | |  | `fsh_season_year` | `CHAR(4)` | Season Year |
| `ProductSeason` |  | |  | `fsh_season` | `CHAR(10)` | Season |
| `ProductCollection` |  | |  | `fsh_collection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` |  | |  | `fsh_theme` | `CHAR(10)` | Fashion Theme |
| `ProductSeasonValidFrom` |  | |  | `fsh_validity_frm` | `DATS(8)` | Valid From Date |
| `ProductSeasonValidTo` |  | |  | `fsh_validity_to` | `DATS(8)` | Valid To Date |
| `CreatedByUser` |  | |  | `fsh_createuser` | `CHAR(12)` | User Who Created the Object |
| `CreationDate` |  | |  | `fsh_createdate` | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` |  | |  | `fsh_createtime` | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` |  | |  | `fsh_changeuser` | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` |  | |  | `fsh_changedate` | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` |  | |  | `fsh_changetime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `SeasonLevel` |  | |  | `rfm_seasonlevel` | `CHAR(1)` | Season Level |
| `SeasonYearParent` |  | |  | `rfm_seasonyearparent` | `CHAR(4)` | Season Year Parent |
| `SeasonParent` |  | |  | `rfm_seasonparent` | `CHAR(10)` | Season Parent |
| `CollectionParent` |  | |  | `rfm_collectionparent` | `CHAR(10)` | Collection Parent |
| `ThemeParent` |  | |  | `rfm_themeparent` | `CHAR(10)` | Theme Parent |
| `_SeasonText` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SeasonText` | `I_SeasonText` | [0..*] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASON')/$value)*

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@Analytics:{
  dataCategory                      : #DIMENSION,
  internalName                      : #LOCAL,
  dataExtraction                    : {
  enabled                           : true
} }

@AccessControl.authorizationCheck   : #MANDATORY

@ObjectModel: {
   representativeKey: 'SeasonInternalIdentifier',
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION
                                        ],
   modelingPattern                  :  #ANALYTICAL_DIMENSION ,                                
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #M
   }
} 

@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}

@ObjectModel.sapObjectNodeType.name: 'Season'
@EndUserText.label: 'Season'

define view entity I_Season
  as select from rfm_seasons as seasons 
  association [0..*] to I_SeasonText       as _SeasonText    on seasons.rfm_suid               = _SeasonText.SeasonInternalIdentifier 
  association [0..1] to I_User             as _CreatedByUser on $projection.CreatedByUser      = _CreatedByUser.UserID
  association [0..1] to I_User             as _ChangedByUser on $projection.LastChangedByUser  = _ChangedByUser.UserID
{
  key rfm_suid              as SeasonInternalIdentifier,
      fsh_season_year       as ProductSeasonYear,
      fsh_season            as ProductSeason,
      fsh_collection        as ProductCollection,
      fsh_theme             as ProductTheme,
      @Semantics.time: true
      fsh_validity_frm      as ProductSeasonValidFrom,
      @Semantics.time: true
      fsh_validity_to       as ProductSeasonValidTo,
      @Semantics.user.createdBy: true
      fsh_createuser        as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      fsh_createdate        as CreationDate,
      @Semantics.systemTime.createdAt: true
      fsh_createtime        as CreationTime,
      @Semantics.user.lastChangedBy: true
      fsh_changeuser        as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      fsh_changedate        as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      fsh_changetime        as LastChangeTime,
      rfm_seasonlevel       as SeasonLevel,
      rfm_seasonyearparent  as SeasonYearParent,
      rfm_seasonparent      as SeasonParent,
      rfm_collectionparent  as CollectionParent,
      rfm_themeparent       as ThemeParent,

      /*associations */

      _CreatedByUser,
      _ChangedByUser,
      _SeasonText      
}
```
