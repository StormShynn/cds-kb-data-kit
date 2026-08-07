---
name: I_SALESPRICEELEMENTACCESSLEVEL
description: Salespriceelementaccesslevel
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-PR
  - interface-view
  - component:SD-BF-PR-2CL
  - lob:Sales & Distribution
---
# I_SALESPRICEELEMENTACCESSLEVEL

**Salespriceelementaccesslevel**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionApplication` | ✓ | |  |  |  |  |
| `PriceElementAccessLevel` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_ConditionApplication` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsPrcElementAccessLevelText` | [0..*] |
| `_ConditionApplication` | `I_ConditionApplication` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISLSPRCELMACCLVL'
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'PriceElementAccessLevel'
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@EndUserText.label: 'Access Level for Price Elements'
@ObjectModel.sapObjectNodeType.name: 'SalesPriceElementAccessLevel'
define view I_SalesPriceElementAccessLevel
  as select from P_PriceElementAccessLevel
  association [0..*] to I_SlsPrcElementAccessLevelText as _Text on  $projection.PriceElementAccessLevel = _Text.PriceElementAccessLevel
                                                                and $projection.ConditionApplication    = _Text.ConditionApplication
 association [1..1] to I_ConditionApplication    as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication                                                               
{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key ConditionApplication,
  key PriceElementAccessLevel,
      _ConditionApplication,
      _Text
}
where
  ConditionApplication = 'V'
```
