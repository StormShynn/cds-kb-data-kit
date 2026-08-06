---
name: I_MFGBOOOPERATIONPRTINTID
description: Mfgboooperationprtintid
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
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
# I_MFGBOOOPERATIONPRTINTID

**Mfgboooperationprtintid**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfOperationsType` | `plfh.BillOfOperationsType` |
| key `BillOfOperationsGroup` | `plfh.BillOfOperationsGroup` |
| key `BillOfOperationsVariant` | `plfh.BillOfOperationsVariant` |
| key `BillOfOperationsSequence` | `plfh.BillOfOperationsSequence` |
| key `BOOOperationInternalID` | `plfh.BOOOperationInternalID` |
| key `BOOOperationPRTInternalID` | `plfh.BOOOperationPRTInternalID` |
| `_BillOfOperations` | *Association* |
| `_BillOfOperationsSequence` | *Association* |
| `_BillOfOperationsOperation` | *Association* |
| `_BillOfOperationsType` | *Association* |
| `_BillOfOperationsGroup` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BillOfOperationsOperation` | `I_MfgBillOfOperationsOperation` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IMFGBOOOPPRTID'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
//@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE,#ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'BOOOperationPRTInternalID'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #M, dataClass: #MASTER}
@VDM.viewType: #BASIC
@EndUserText.label: 'PRT Internal ID of Mfg BOO Operation'

//define view I_MfgBOOOperationPRTIntID
define view entity I_MfgBOOOperationPRTIntID
  as select from I_BOOOperationPRTInternalID as plfh

  -- to root
  association [1..1] to I_MfgBillOfOperations          as _BillOfOperations          on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  -- to parent sequence
  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence  on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence
  -- to parent operation
  association [1..1] to I_MfgBillOfOperationsOperation as _BillOfOperationsOperation on  $projection.BillOfOperationsType     = _BillOfOperationsOperation.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BillOfOperationsOperation.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BillOfOperationsOperation.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BillOfOperationsOperation.BillOfOperationsSequence
                                                                                     and $projection.BOOOperationInternalID   = _BillOfOperationsOperation.BOOOperationInternalID
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plfh.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plfh.BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key plfh.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key plfh.BillOfOperationsSequence,
      @ObjectModel.foreignKey.association: '_BillOfOperationsOperation'
  key plfh.BOOOperationInternalID,
      -- representative key
  key plfh.BOOOperationPRTInternalID,

      -- Associations
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _BillOfOperationsOperation,
      _BillOfOperationsSequence
}
where plfh.BillOfOperationsType = '2'  // Recipe
   or plfh.BillOfOperationsType = 'N'  // Standard routing
   or plfh.BillOfOperationsType = 'S'; // Reference operation set
```
