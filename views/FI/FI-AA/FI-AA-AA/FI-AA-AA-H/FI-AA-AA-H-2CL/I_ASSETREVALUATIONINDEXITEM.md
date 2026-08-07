---
name: I_ASSETREVALUATIONINDEXITEM
description: Assetrevaluationindexitem
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
  - item-level
  - component:FI-AA-AA-H-2CL
  - lob:Finance
  - bo:Asset
---
# I_ASSETREVALUATIONINDEXITEM

**Assetrevaluationindexitem**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-H-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetRevaluationIndex` | ✓ | |  | `index_id` |  |  |
| `ValidityEndDate` | ✓ | |  | `valid_to_date` |  |  |
| `ValidityStartDate` |  | |  | `valid_from_date` |  |  |
| `AssetRevaluationIndexValue` |  | |  | `index_point` |  |  |
| `_AssetRevaluationIndex` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AssetRevaluationIndex` | `I_AssetRevaluationIndex` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Asset Revaluation Index Item'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MASTER
}
@ObjectModel:{
    modelingPattern: #NONE,
    supportedCapabilities: [ #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET ]
}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API

define view entity I_AssetRevaluationIndexItem
  as select from faat_rv_indx_itm
  association [1..1] to I_AssetRevaluationIndex as _AssetRevaluationIndex on $projection.AssetRevaluationIndex = _AssetRevaluationIndex.AssetRevaluationIndex
{
      @ObjectModel.foreignKey.association: '_AssetRevaluationIndex'
  key index_id        as AssetRevaluationIndex,
  
      @Semantics.businessDate.to: true
  key valid_to_date   as ValidityEndDate,
  
      @Semantics.businessDate.from: true
      valid_from_date as ValidityStartDate,
      
      index_point     as AssetRevaluationIndexValue,
      
      /* Associations */
      _AssetRevaluationIndex
}
```
