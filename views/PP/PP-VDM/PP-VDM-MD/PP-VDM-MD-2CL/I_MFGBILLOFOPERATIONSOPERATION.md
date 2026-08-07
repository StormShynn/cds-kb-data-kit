---
name: I_MFGBILLOFOPERATIONSOPERATION
description: Mfgbillofoperationsoperation
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
# I_MFGBILLOFOPERATIONSOPERATION

**Mfgbillofoperationsoperation**

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
| `BOOOperationInternalID` | ✓ | |  |  |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BOOOperationChangeState` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BOOOperationChangeState` | `I_MfgBOOOperationChangeState` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOOPERATION'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOOperationInternalID'
@ObjectModel.usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #MASTER}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Manufacturing Bill of Operations Operation'
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingOperation'
define view I_MfgBillOfOperationsOperation
  as select from I_BillOfOperationsOperation as plas

  -- to root
  association [1..1] to I_MfgBillOfOperations          as _BillOfOperations          on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  -- to parent
  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence  on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence
  -- to child
  association [1..*] to I_MfgBOOOperationChangeState   as _BOOOperationChangeState   on  $projection.BillOfOperationsType     = _BOOOperationChangeState.BillOfOperationsType
                                                                                     and $projection.BillOfOperationsGroup    = _BOOOperationChangeState.BillOfOperationsGroup
                                                                                     and $projection.BillOfOperationsVariant  = _BOOOperationChangeState.BillOfOperationsVariant
                                                                                     and $projection.BillOfOperationsSequence = _BOOOperationChangeState.BillOfOperationsSequence
                                                                                     and $projection.BOOOperationInternalID   = _BOOOperationChangeState.BOOOperationInternalID
{
      // Key
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plas.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plas.BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key plas.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key plas.BillOfOperationsSequence,
      // representative key BillOfOperationsOperationInternal
  key plas.BOOOperationInternalID,

      // Associations
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _BillOfOperationsSequence,
      _BOOOperationChangeState
--    _BOOOpBOMItemChangeState,
--    _BOOOpMaterialPRTChangeState,
--    _BOOOpEquipmentPRTChangeState,
--    _BOOOpMiscPRTChangeState,
--    _BOOOpDocumentPRTChangeState
}
where plas.BillOfOperationsType = '2'  // Recipe
   or plas.BillOfOperationsType = 'N'  // Standard routing
   or plas.BillOfOperationsType = 'S'; // Reference operation set
```
