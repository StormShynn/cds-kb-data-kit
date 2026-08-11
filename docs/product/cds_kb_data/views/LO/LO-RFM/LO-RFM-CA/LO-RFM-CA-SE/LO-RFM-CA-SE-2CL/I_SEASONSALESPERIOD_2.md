---
name: I_SEASONSALESPERIOD_2
description: "Season Sales Period"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSALESPERIOD_2')/$value
semantic_en: "Season Sales Period"
semantic_vi: "Season Sales Period — CDS view cơ bản dựa trên fsh_sd_periods."
keywords:
  - "season"
  - "sales"
  - "period"
  - "condition"
  - "record"
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
# I_SEASONSALESPERIOD_2

**Season Sales Period**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSALESPERIOD_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` | ✓ | |  | `fsh_crsd` | `CHAR(10)` | Condition Record Number for Seasons |
| `ProductSeasonYear` | ✓ | |  | `fsh_season_year` | `CHAR(4)` | Season Year |
| `ProductSeason` | ✓ | |  | `fsh_season` | `CHAR(10)` | Season |
| `ProductCollection` | ✓ | |  | `fsh_collection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | ✓ | |  | `fsh_theme` | `CHAR(10)` | Fashion Theme |
| `SalesOrganization` |  | |  | `vkorg` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  | `vtweg` | `CHAR(2)` | Distribution Channel |
| `Country` |  | |  | `land1` | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  | `regio` | `CHAR(3)` | Region (State, Province, County) |
| `CustomerGroup` |  | |  | `kdgrp` | `CHAR(2)` | Customer Group |
| `SoldToParty` |  | |  | `kunnr` | `CHAR(10)` | Customer Number |
| `DeliveryStartDate` |  | |  | `sd_dldt_from` | `DATS(8)` | Delivery Date From |
| `DeliveryEndDate` |  | |  | `sd_dldt_to` | `DATS(8)` | Delivery Date To |
| `OrderStartDate` |  | |  | `sd_ordt_from` | `DATS(8)` | Order Date From |
| `OrderEndDate` |  | |  | `sd_ordt_to` | `DATS(8)` | Order Date To |
| `CreatedByUser` |  | |  | `fsh_createuser` | `CHAR(12)` | User Who Created the Object |
| `CreationDate` |  | |  | `fsh_createdate` | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` |  | |  | `fsh_createtime` | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` |  | |  | `fsh_changeuser` | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` |  | |  | `fsh_changedate` | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` |  | |  | `fsh_changetime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `SeasonInternalIdentifier` |  | |  | `season_guid` | `RAW(16)` | Season Internal Unique Identifier |
| `SeasonSalesPeriodUUID` |  | |  | `sales_guid` | `RAW(16)` | Unique Identifier of the Season Sales Periods |
| `SeasonPeriodType` |  | |  | `season_period_type` | `CHAR(2)` | Season period type like sales or stock tranfer |
| `_SalesOrganization` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Season` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrganization` | `I_SalesOrganization` | [1..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_SoldToParty` | `I_Customer` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_Season` | `I_Season` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_CustomerGroup` | `I_CustomerGroup` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSALESPERIOD_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONSALESPERIOD_2')/$value)*

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck   : #MANDATORY

@ObjectModel: {
   supportedCapabilities            : [ #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE
                                        ],
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #M
   }
}

@Analytics.dataExtraction.enabled:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name: 'SeasonSalesPeriod'

@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Season Sales Period'

define view entity I_SeasonSalesPeriod_2
  as select from fsh_sd_periods
  association [1..1] to I_SalesOrganization   as _SalesOrganization   on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_User                as _CreatedByUser       on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                as _ChangedByUser       on  $projection.LastChangedByUser = _ChangedByUser.UserID
  association [0..1] to I_Customer            as _SoldToParty         on  $projection.SoldToParty = _SoldToParty.Customer
  association [0..1] to I_DistributionChannel as _DistributionChannel on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [1..1] to I_Season              as _Season              on  $projection.ProductSeasonYear = _Season.ProductSeasonYear
                                                                      and $projection.ProductSeason     = _Season.ProductSeason
                                                                      and $projection.ProductCollection = _Season.ProductCollection
                                                                      and $projection.ProductTheme      = _Season.ProductTheme
  association [0..1] to I_Country             as _Country             on  $projection.Country = _Country.Country
  association [0..1] to I_Region              as _Region              on  $projection.Country = _Region.Country
                                                                      and $projection.Region  = _Region.Region
  association [1..1] to I_CustomerGroup       as _CustomerGroup       on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
{
  key fsh_crsd           as ConditionRecord,
  key fsh_season_year    as ProductSeasonYear,
  key fsh_season         as ProductSeason,
  key fsh_collection     as ProductCollection,
  key fsh_theme          as ProductTheme,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg              as SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg              as DistributionChannel,

      @ObjectModel.foreignKey.association: '_Country'
      land1              as Country,

      @ObjectModel.foreignKey.association: '_Region'
      regio              as Region,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      kdgrp              as CustomerGroup,

      @ObjectModel.foreignKey.association: '_SoldToParty'
      kunnr              as SoldToParty,

      @Semantics.time: true
      sd_dldt_from       as DeliveryStartDate,

      @Semantics.time: true
      sd_dldt_to         as DeliveryEndDate,

      @Semantics.time: true
      sd_ordt_from       as OrderStartDate,

      @Semantics.time: true
      sd_ordt_to         as OrderEndDate,

      @Semantics.user.createdBy: true
      fsh_createuser     as CreatedByUser,

      @Semantics.systemDate.createdAt: true
      fsh_createdate     as CreationDate,

      @Semantics.systemTime.createdAt: true
      fsh_createtime     as CreationTime,

      @Semantics.user.lastChangedBy: true
      fsh_changeuser     as LastChangedByUser,

      @Semantics.systemDate.lastChangedAt: true
      fsh_changedate     as LastChangeDate,

      @Semantics.systemTime.lastChangedAt: true
      fsh_changetime     as LastChangeTime,

      season_guid        as SeasonInternalIdentifier,

      sales_guid         as SeasonSalesPeriodUUID,

      season_period_type as SeasonPeriodType,


      /*Associations */

      _SalesOrganization,
      _CreatedByUser,
      _ChangedByUser,
      _DistributionChannel,
      _SoldToParty,
      _Country,
      _Region,
      _CustomerGroup,

      @ObjectModel.association.type:[#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
      _Season

}
where
  season_period_type = '01'
```
