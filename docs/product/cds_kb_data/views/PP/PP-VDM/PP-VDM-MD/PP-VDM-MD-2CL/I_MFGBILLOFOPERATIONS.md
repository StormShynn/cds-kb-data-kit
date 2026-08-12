---
name: I_MFGBILLOFOPERATIONS
description: "Mfgbillofoperations"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_MFGBILLOFOPERATIONS

**Mfgbillofoperations**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  |  |  |
| `BillOfOperationsGroup` | ✓ | |  |  |  |  |
| `BillOfOperationsVariant` | ✓ | |  |  |  |  |
| `BillOfOperationsVersionType` |  | |  |  |  |  |
| `LastUsageDate` |  | |  |  |  |  |
| `NumberOfUsages` |  | |  |  |  |  |
| `HasChangeNumber` |  | |  |  |  |  |
| `HasParameterEffectivity` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `_BillOfOperationsChangeState` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BOOMaterialAssignment` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsVersionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsChangeState` | `I_MfgBillOfOperationsChgSt` | [1..*] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..*] |
| `_BOOMaterialAssignment` | `I_MfgBOOMaterialAssignment` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBILLOFOPER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'BillOfOperationsVariant'
@ObjectModel.semanticKey: ['BillOfOperationsType', 'BillOfOperationsGroup', 'BillOfOperationsVariant']
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Manufacturing Bill of Operations'

define view I_MfgBillOfOperations
  as select from I_BillOfOperations as plkz

  -- to child: Change State of Root
  association [1..*] to I_MfgBillOfOperationsChgSt    as _BillOfOperationsChangeState on  $projection.BillOfOperationsType    = _BillOfOperationsChangeState.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BillOfOperationsChangeState.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BillOfOperationsChangeState.BillOfOperationsVariant
  -- to child: Sequences
  association [1..*] to I_MfgBillOfOperationsSequence as _BillOfOperationsSequence    on  $projection.BillOfOperationsType    = _BillOfOperationsSequence.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BillOfOperationsSequence.BillOfOperationsVariant
  -- to child: Material to BOO assignment
  association [1..*] to I_MfgBOOMaterialAssignment    as _BOOMaterialAssignment       on  $projection.BillOfOperationsType    = _BOOMaterialAssignment.BillOfOperationsType
                                                                                      and $projection.BillOfOperationsGroup   = _BOOMaterialAssignment.BillOfOperationsGroup
                                                                                      and $projection.BillOfOperationsVariant = _BOOMaterialAssignment.BillOfOperationsVariant
{
      // Key
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plkz.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plkz.BillOfOperationsGroup,
      -- representative key
  key plkz.BillOfOperationsVariant,

      @ObjectModel.foreignKey.association: '_BillOfOperationsVersionType'
      plkz.BillOfOperationsVersionType,

      // Attributes
      plkz.LastUsageDate,
      plkz.NumberOfUsages,
      plkz.HasChangeNumber,
      plkz.HasParameterEffectivity,

      // Administrative Data
      @Semantics.systemDate.lastChangedAt: true
      plkz.LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      plkz.LastChangeTime,
      @Semantics.user.lastChangedBy: true
      plkz.LastChangedByUser,

      // Associations
      _BillOfOperationsChangeState,
      _BillOfOperationsGroup,
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _BOOMaterialAssignment,
      _BillOfOperationsVersionType
}
where
     plkz.BillOfOperationsType = '2'  // Recipe
  or plkz.BillOfOperationsType = 'N'  // Standard routing
  or plkz.BillOfOperationsType = 'S'; // Reference operation set
```
