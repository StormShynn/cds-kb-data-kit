---
name: I_MANUFACTURINGORDERIMPORTANCE
description: Manufacturingorderimportance
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MANUFACTURINGORDERIMPORTANCE

**Manufacturingorderimportance**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ManufacturingOrderCategory` | ✓ | |  |  |  |  |
| `ManufacturingOrderImportance` | ✓ | |  |  |  |  |
| `_MfgOrderCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MfgOrderCategory` | `I_MfgOrderCategory` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMFGORDIMP'
@Analytics.internalName: #LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ManufacturingOrderImportance'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'ManufacturingOrderImportance'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Manufacturing Order Importance Code'
// There are neither domain values nor a value table, hence a select distinct view

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_ManufacturingOrderImportance
  as select distinct from I_MfgOrderBasic
  
  association [1..1] to I_MfgOrderCategory as _MfgOrderCategory on $projection.ManufacturingOrderCategory = _MfgOrderCategory.ManufacturingOrderCategory
{
      @ObjectModel.foreignKey.association: '_MfgOrderCategory'
  key ManufacturingOrderCategory,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}  
  key ManufacturingOrderImportance,
      // Association
      _MfgOrderCategory
}
where ManufacturingOrderImportance <> '';
```
