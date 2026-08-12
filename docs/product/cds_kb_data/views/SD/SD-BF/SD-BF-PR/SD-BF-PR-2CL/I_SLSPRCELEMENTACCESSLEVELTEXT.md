---
name: I_SLSPRCELEMENTACCESSLEVELTEXT
description: "Slsprcelementaccessleveltext"
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - text-view
  - text
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_SLSPRCELEMENTACCESSLEVELTEXT

**Slsprcelementaccessleveltext**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  |  |  |
| `ConditionApplication` | ✓ | |  |  |  |  |
| `PriceElementAccessLevel` | ✓ | |  |  |  |  |
| `PriceElementAccessLevelText` |  | |  |  |  |  |
| `_ConditionApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCELMACCLVLTXT'
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@EndUserText.label: 'Price Element Access Level - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.representativeKey: 'PriceElementAccessLevel'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
define view I_SlsPrcElementAccessLevelText
  as select from P_PriceElementAccessLevelText
   association [1..1] to I_ConditionApplication    as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication                                                               
  
{
      @Semantics.language: true
  key Language,
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key ConditionApplication,
  key PriceElementAccessLevel,
      _ConditionApplication,
      @Semantics.text: true
      PriceElementAccessLevelText
      
} where ConditionApplication = 'V'
```
