---
name: I_MFGBILLOFOPERATIONSSEQUENCE
description: "Mfgbillofoperationssequence"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_MFGBILLOFOPERATIONSSEQUENCE

**Mfgbillofoperationssequence**

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
| `BillOfOperationsSequence` | ✓ | |  |  |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BOOSequenceChangeState` | | ✓ | | | | |
| `_BillOfOperationsOperation` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BOOSequenceChangeState` | `I_MfgBOOSequenceChangeState` | [1..*] |
| `_BillOfOperationsOperation` | `I_MfgBillOfOperationsOperation` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOSEQUENCE'
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
@ObjectModel.representativeKey: 'BillOfOperationsSequence'
@ObjectModel.semanticKey: ['BillOfOperationsType', 'BillOfOperationsGroup', 'BillOfOperationsVariant', 'BillOfOperationsSequence']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Manufacturing Bill of Operations Sequence'

define view I_MfgBillOfOperationsSequence
  as select distinct from I_BillOfOperationsSequence as plfl

   -- to parent / root
  association [1..1] to I_MfgBillOfOperations         as _BillOfOperations           on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  -- to child
  association [1..*] to I_MfgBOOSequenceChangeState   as _BOOSequenceChangeState     on  $projection.BillOfOperationsType     = _BOOSequenceChangeState.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BOOSequenceChangeState.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BOOSequenceChangeState.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BOOSequenceChangeState.BillOfOperationsSequence
  -- to child
  association [1..*] to I_MfgBillOfOperationsOperation as _BillOfOperationsOperation on  $projection.BillOfOperationsType     = _BillOfOperationsOperation.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BillOfOperationsOperation.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BillOfOperationsOperation.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BillOfOperationsOperation.BillOfOperationsSequence
{
      // Key
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plfl.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plfl.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key plfl.BillOfOperationsVariant,
      // representative key BillOfOperationsSequence
  key plfl.BillOfOperationsSequence,

      // Associations
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _BillOfOperationsOperation,
      _BOOSequenceChangeState
}
where plfl.BillOfOperationsType = '2'  // Recipe
   or plfl.BillOfOperationsType = 'N'  // Standard routing
   or plfl.BillOfOperationsType = 'S'; // Reference operation set
```
