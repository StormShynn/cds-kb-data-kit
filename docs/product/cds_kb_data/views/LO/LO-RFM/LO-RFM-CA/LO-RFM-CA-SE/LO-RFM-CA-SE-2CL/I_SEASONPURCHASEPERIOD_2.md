---
name: I_SEASONPURCHASEPERIOD_2
description: "Season Purchase Period"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPURCHASEPERIOD_2')/$value
semantic_en: "Season Purchase Period"
semantic_vi: "Season Purchase Period — CDS view cơ bản dựa trên fsh_mm_periods."
keywords:
  - "season"
  - "purchase"
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
# I_SEASONPURCHASEPERIOD_2

**Season Purchase Period**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPURCHASEPERIOD_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionRecord` | ✓ | |  | `fsh_crsd` | `CHAR(10)` | Condition Record Number for Seasons |
| `ProductSeasonYear` | ✓ | |  | `fsh_season_year` | `CHAR(4)` | Season Year |
| `ProductSeason` | ✓ | |  | `fsh_season` | `CHAR(10)` | Season |
| `ProductCollection` | ✓ | |  | `fsh_collection` | `CHAR(10)` | Fashion Collection |
| `ProductTheme` | ✓ | |  | `fsh_theme` | `CHAR(10)` | Fashion Theme |
| `PurchasingOrganization` |  | |  | `ekorg` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  | `ekgrp` | `CHAR(3)` | Purchasing Group |
| `Supplier` |  | |  | `lifnr` | `CHAR(10)` | Supplier's Account Number |
| `DeliveryStartDate` |  | |  | `pp_dldt_from` | `DATS(8)` | Delivery Date From |
| `DeliveryEndDate` |  | |  | `pp_dldt_to` | `DATS(8)` | Delivery Date To |
| `OrderStartDate` |  | |  | `pp_ordt_from` | `DATS(8)` | Order Date From |
| `OrderEndDate` |  | |  | `pp_ordt_to` | `DATS(8)` | Order Date To |
| `CreatedByUser` |  | |  | `fsh_createuser` | `CHAR(12)` | User Who Created the Object |
| `CreationDate` |  | |  | `fsh_createdate` | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` |  | |  | `fsh_createtime` | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` |  | |  | `fsh_changeuser` | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` |  | |  | `fsh_changedate` | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` |  | |  | `fsh_changetime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_Season` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_Season` | `I_Season` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPURCHASEPERIOD_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONPURCHASEPERIOD_2')/$value)*

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

@ObjectModel.sapObjectNodeType.name: 'SeasonPurchasePeriod'

@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Season Purchase Period'

define view entity I_SeasonPurchasePeriod_2
  as select from fsh_mm_periods
  association [0..1] to I_User                   as _CreatedByUser          on  $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User                   as _ChangedByUser          on  $projection.LastChangedByUser = _ChangedByUser.UserID
  association [1..1] to I_Season                 as _Season                 on  $projection.ProductSeasonYear = _Season.ProductSeasonYear
                                                                            and $projection.ProductSeason     = _Season.ProductSeason
                                                                            and $projection.ProductCollection = _Season.ProductCollection
                                                                            and $projection.ProductTheme      = _Season.ProductTheme
  association [0..1] to I_Supplier               as _Supplier               on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_PurchasingOrganization as _PurchasingOrganization on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [0..1] to I_PurchasingGroup        as _PurchasingGroup        on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
{
  key fsh_crsd        as ConditionRecord,
  key fsh_season_year as ProductSeasonYear,
  key fsh_season      as ProductSeason,
  key fsh_collection  as ProductCollection,
  key fsh_theme       as ProductTheme,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      ekorg           as PurchasingOrganization,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      ekgrp           as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_Supplier'
      lifnr           as Supplier,

      @Semantics.time: true
      pp_dldt_from    as DeliveryStartDate,

      @Semantics.time: true
      pp_dldt_to      as DeliveryEndDate,

      @Semantics.time: true
      pp_ordt_from    as OrderStartDate,

      @Semantics.time: true
      pp_ordt_to      as OrderEndDate,

      @Semantics.user.createdBy: true
      fsh_createuser  as CreatedByUser,

      @Semantics.systemDate.createdAt: true
      fsh_createdate  as CreationDate,

      @Semantics.systemTime.createdAt: true
      fsh_createtime  as CreationTime,

      @Semantics.user.lastChangedBy: true
      fsh_changeuser  as LastChangedByUser,

      @Semantics.systemDate.lastChangedAt: true
      fsh_changedate  as LastChangeDate,

      @Semantics.systemTime.lastChangedAt: true
      fsh_changetime  as LastChangeTime,

      /*Associations */

      @ObjectModel.association.type:[#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
      _Season,
      _ChangedByUser,
      _CreatedByUser,
      _Supplier,
      _PurchasingOrganization,
      _PurchasingGroup
}
```
