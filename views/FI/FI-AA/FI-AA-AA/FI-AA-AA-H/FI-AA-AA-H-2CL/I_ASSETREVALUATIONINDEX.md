---
name: I_ASSETREVALUATIONINDEX
description: Assetrevaluationindex
app_component: FI-AA-AA-H-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AA
  - FI-AA-AA
  - interface-view
  - data-extraction
  - component:FI-AA-AA-H-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETREVALUATIONINDEX

**Assetrevaluationindex**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-H-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `AssetRevaluationIndex` | ✓ | |  | `index_id` |
| `AssetRevaluationIndexName` |  | |  | `description` |
| `AssetRevalIndexLifecycleStatus` |  | |  | `lifecycle_status` |
| `AssetRevalIdxIsUsingHistCalc` |  | |  | `use_hist_calc` |
| `AssetRevaluationIndexType` |  | |  | `index_type` |
| `Country` |  | |  | `country` |
| `Currency` |  | |  | `currency` |
| `AstRevalIdxValueUnitOfMeasure` |  | |  | `index_value_uom` |
| `AssetRevalIdxDeactivationDate` |  | |  | `deactivation_date` |
| `CreatedByUser` |  | |  | `creation_user` |
| `CreationDateTime` |  | |  | `creation_datetime` |
| `LastChangedByUser` |  | |  | `lastchange_user` |
| `LastChangeDateTime` |  | |  | `lastchange_datetime` |
| `LocalLastChangeDateTime` |  | |  | `draft_lastchange_datetime` |
| `_AssetRevaluationIndexItem` | | ✓ | | |
| `_AssetRevaluationIndexLfcycSts` | | ✓ | | |
| `_AssetRevaluationIndexType` | | ✓ | | |
| `_AstRevalIdxValUnitOfMeasure` | | ✓ | | |
| `_AssetRevalIndexWhereUsed` | | ✓ | | |
| `_Country` | | ✓ | | |
| `_Currency` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AssetRevaluationIndexItem` | `I_AssetRevaluationIndexItem` | [0..*] |
| `_AssetRevaluationIndexLfcycSts` | `I_AssetRevalIdxLifecycleStatus` | [0..1] |
| `_AssetRevaluationIndexType` | `I_AssetRevaluationIndexType` | [0..1] |
| `_AstRevalIdxValUnitOfMeasure` | `I_AstRevalIdxValUnitOfMeasure` | [0..1] |
| `_AssetRevalIndexWhereUsed` | `I_AssetRevalIndexWhereUsed` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Asset Revaluation Index'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'AssetRevaluationIndex'
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MASTER
}
@ObjectModel:{
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE ]
}

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

define view entity I_AssetRevaluationIndex
  as select from faat_rv_indx
  association [0..*] to I_AssetRevaluationIndexItem    as _AssetRevaluationIndexItem     on $projection.AssetRevaluationIndex = _AssetRevaluationIndexItem.AssetRevaluationIndex
  association [0..1] to I_AssetRevalIdxLifecycleStatus as _AssetRevaluationIndexLfcycSts on $projection.AssetRevalIndexLifecycleStatus = _AssetRevaluationIndexLfcycSts.AssetRevalIndexLifecycleStatus
  association [0..1] to I_AssetRevaluationIndexType    as _AssetRevaluationIndexType     on $projection.AssetRevaluationIndexType = _AssetRevaluationIndexType.AssetRevaluationIndexType
  association [0..1] to I_AstRevalIdxValUnitOfMeasure  as _AstRevalIdxValUnitOfMeasure   on $projection.AstRevalIdxValueUnitOfMeasure = _AstRevalIdxValUnitOfMeasure.AstRevalIdxValueUnitOfMeasure
  association [0..*] to I_AssetRevalIndexWhereUsed     as _AssetRevalIndexWhereUsed      on $projection.AssetRevaluationIndex = _AssetRevalIndexWhereUsed.AssetRevaluationIndex
  association [0..1] to I_Country                      as _Country                       on $projection.Country = _Country.Country
  association [0..1] to I_Currency                     as _Currency                      on $projection.Currency = _Currency.Currency
{
      @ObjectModel.text.element: ['AssetRevaluationIndexName']
  key index_id                  as AssetRevaluationIndex,

      @Semantics.text: true
      description               as AssetRevaluationIndexName,

      @ObjectModel.foreignKey.association: '_AssetRevaluationIndexLfcycSts'
      lifecycle_status          as AssetRevalIndexLifecycleStatus,

      @Semantics.booleanIndicator: true
      use_hist_calc             as AssetRevalIdxIsUsingHistCalc,

      @ObjectModel.foreignKey.association: '_AssetRevaluationIndexType'
      index_type                as AssetRevaluationIndexType,

      @ObjectModel.foreignKey.association: '_Country'
      country                   as Country,

      @ObjectModel.foreignKey.association: '_Currency'
      currency                  as Currency,
      
      @ObjectModel.foreignKey.association: '_AstRevalIdxValUnitOfMeasure'
      index_value_uom           as AstRevalIdxValueUnitOfMeasure,

      deactivation_date         as AssetRevalIdxDeactivationDate,

      creation_user             as CreatedByUser,

      creation_datetime         as CreationDateTime,

      lastchange_user           as LastChangedByUser,

      lastchange_datetime       as LastChangeDateTime,

      draft_lastchange_datetime as LocalLastChangeDateTime,

      /* Associations */
      _AssetRevaluationIndexItem,
      _AssetRevaluationIndexLfcycSts,
      _AssetRevaluationIndexType,
      _AstRevalIdxValUnitOfMeasure,
      _Country,
      _Currency,
      _AssetRevalIndexWhereUsed
}
```
