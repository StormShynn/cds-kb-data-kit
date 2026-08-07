---
name: I_MATLPROCMTTYPETOCATEGORY
description: "Matlprocmttypetocategory"
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
# I_MATLPROCMTTYPETOCATEGORY

**Matlprocmttypetocategory**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialProcurementCategory` | ✓ | |  | `cast(q.beskz as pph_beskz preserving type)` |  |  |
| `MaterialProcurementType` | ✓ | |  | `cast(q.sobes as pph_sobes preserving type)` |  |  |
| `_MaterialProcurementCategory` | | ✓ | | | | |
| `_MaterialProcurementType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialProcurementCategory` | `I_MatlProcurementCategory` | [1..1] |
| `_MaterialProcurementType` | `I_MatlProcurementType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMATLPROCMTYPCAT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #FACT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Material Procurement Type To Category'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MatlProcmtTypeToCategory
  as select from t460q as q
  association [1..1] to I_MatlProcurementCategory as _MaterialProcurementCategory on $projection.MaterialProcurementCategory = _MaterialProcurementCategory.MaterialProcurementCategory
  association [1..1] to I_MatlProcurementType     as _MaterialProcurementType     on $projection.MaterialProcurementType = _MaterialProcurementType.MaterialProcurementType
{
      // Key
      @ObjectModel.foreignKey.association: '_MaterialProcurementCategory'
  key cast(q.beskz as pph_beskz preserving type) as MaterialProcurementCategory,
      @ObjectModel.foreignKey.association: '_MaterialProcurementType'
  key cast(q.sobes as pph_sobes preserving type) as MaterialProcurementType,

      // Associations
      _MaterialProcurementCategory,
      _MaterialProcurementType
};
```
