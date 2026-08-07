---
name: I_JVAVALUATIONAREACOSTOBJECT
description: Jvavaluationareacostobject
app_component: CA-JVA
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-JVA
  - interface-view
  - component:CA-JVA
  - lob:Cross-Application Components
---
# I_JVAVALUATIONAREACOSTOBJECT

**Jvavaluationareacostobject**

| Property | Value |
|---|---|
| App Component | `CA-JVA` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ValuationArea` | ✓ | |  | `bwkey` |
| `ValuationType` | ✓ | |  | `bwtar` |
| `CostCenter` |  | |  | `kostl` |
| `WBSElementInternalID` |  | |  | `pspnr` |
| `OrderID` |  | |  | `aufnr` |
| `JointVentureConditionKey` |  | |  | `condcod` |
| `_ValuationArea` | | ✓ | | |
| `_JVAValuationType` | | ✓ | | |
| `_InventoryValuationType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationArea` | `I_JVAValuationArea` | [0..1] |
| `_JVAValuationType` | `I_JVAValuationType` | [0..1] |
| `_InventoryValuationType` | `I_InventoryValuationType` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Cost Object from Valuation Area or Type'
@AbapCatalog.sqlViewName: 'IT8JD'
@AbapCatalog.compiler.compareFilter: true

@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 2
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MIXED 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'ValuationArea'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_JVAValuationAreaCostObject

  as select from t8jd
  association [0..1] to I_JVAValuationArea as _ValuationArea    on $projection.ValuationArea = _ValuationArea.ValuationArea
  association [0..1] to I_JVAValuationType as _JVAValuationType on $projection.ValuationType = _JVAValuationType.InventoryValuationType
  association [0..1] to I_InventoryValuationType as _InventoryValuationType on $projection.ValuationType = _InventoryValuationType.InventoryValuationType

{
      @ObjectModel.foreignKey.association: '_ValuationArea'
  key bwkey   as ValuationArea,
      @ObjectModel.foreignKey.association: '_JVAValuationType'
  key bwtar   as ValuationType,

      kostl   as CostCenter,
      pspnr   as WBSElementInternalID,
      aufnr   as OrderID,
      condcod as JointVentureConditionKey,

      _ValuationArea,
      _JVAValuationType,
      _InventoryValuationType

}
```
