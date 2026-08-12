---
name: I_MFGBOOSEQUENCECHANGESTATE
description: "Mfgboosequencechangestate"
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
# I_MFGBOOSEQUENCECHANGESTATE

**Mfgboosequencechangestate**

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
| `BOOSqncInternalVersionCounter` | ✓ | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsImplicitlyDeleted` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  | `plfl. ValidityEndDate` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `SequenceText` |  | |  |  |  |  |
| `SequenceCategory` |  | |  | `BillOfOperationsSequenceCat` |  |  |
| `SequenceSchedulingAlignment` |  | |  |  |  |  |
| `BillOfOperationsRefSequence` |  | |  |  |  |  |
| `BOOSqncBranchOpInternalID` |  | |  |  |  |  |
| `BOOSqncReturnOpInternalID` |  | |  |  |  |  |
| `BillOfOperationsUnit` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsRefSequence` | | ✓ | | | | |
| `_BOOOperationsBranchOperation` | | ✓ | | | | |
| `_BOOOperationsReturnOperation` | | ✓ | | | | |
| `_SequenceCategory` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_SequenceSchedulingAlignment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BillOfOperationsRefSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BOOOperationsBranchOperation` | `I_MfgBillOfOperationsOperation` | [0..1] |
| `_BOOOperationsReturnOperation` | `I_MfgBillOfOperationsOperation` | [0..1] |
| `_SequenceCategory` | `I_SequenceCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOSEQNCCHST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'BOOSqncInternalVersionCounter'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProductionRoutingSequence'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Manufacturing Bill of Operations Sequence Change State'

define view I_MfgBOOSequenceChangeState
  as select from I_BOOSequenceChangeState      as plfl

  association [1..1] to I_MfgBillOfOperations          as _BillOfOperations             on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence     on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence
  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsRefSequence  on  $projection.BillOfOperationsType        = _BillOfOperationsRefSequence.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup       = _BillOfOperationsRefSequence.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant     = _BillOfOperationsRefSequence.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsRefSequence = _BillOfOperationsRefSequence.BillOfOperationsSequence

  association [0..1] to I_MfgBillOfOperationsOperation as _BOOOperationsBranchOperation on  $projection.BillOfOperationsType        = _BOOOperationsBranchOperation.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup       = _BOOOperationsBranchOperation.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant     = _BOOOperationsBranchOperation.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsRefSequence = _BOOOperationsBranchOperation.BillOfOperationsSequence
                                                                                        and $projection.BOOSqncBranchOpInternalID   = _BOOOperationsBranchOperation.BOOOperationInternalID
  association [0..1] to I_MfgBillOfOperationsOperation as _BOOOperationsReturnOperation on  $projection.BillOfOperationsType        = _BOOOperationsReturnOperation.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup       = _BOOOperationsReturnOperation.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant     = _BOOOperationsReturnOperation.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsRefSequence = _BOOOperationsReturnOperation.BillOfOperationsSequence
                                                                                        and $projection.BOOSqncReturnOpInternalID   = _BOOOperationsReturnOperation.BOOOperationInternalID
  association [1..1] to I_SequenceCategory             as _SequenceCategory             on  $projection.SequenceCategory = _SequenceCategory.SequenceCategory

{
      // Key
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plfl.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key plfl.BillOfOperationsGroup,
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key plfl.BillOfOperationsVariant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsSequence'
  key plfl.BillOfOperationsSequence,
      @ObjectModel.text.element: 'SequenceText'
  key plfl.BOOSqncInternalVersionCounter,

      // Attributes
      plfl.IsDeleted,
      plfl.IsImplicitlyDeleted,

      // Administrative Data
      @ObjectModel.foreignKey.association: '_ChangeMaster'
      plfl.ChangeNumber,
      @Semantics.businessDate.from: true
      plfl.ValidityStartDate,
      @Semantics.businessDate.to: true
      plfl. ValidityEndDate,
      @Semantics.systemDate.createdAt: true
      plfl.CreationDate,
      plfl.CreatedByUser,
      @Semantics.systemDate.lastChangedAt: true
      plfl.LastChangeDate,
      plfl.LastChangedByUser,

      // Sequence Details
      -- Sequence
      @Semantics.text: true
      plfl.SequenceText,
      @ObjectModel.foreignKey.association: '_SequenceCategory'
      plfl.BillOfOperationsSequenceCat as SequenceCategory,
      @ObjectModel.foreignKey.association: '_SequenceSchedulingAlignment'
      plfl.SequenceSchedulingAlignment,
      -- Reference
      @ObjectModel.foreignKey.association: '_BillOfOperationsRefSequence'
      plfl.BillOfOperationsRefSequence,
      @ObjectModel.foreignKey.association: '_BOOOperationsBranchOperation'
      plfl.BOOSqncBranchOpInternalID,
      @ObjectModel.foreignKey.association: '_BOOOperationsReturnOperation'
      plfl.BOOSqncReturnOpInternalID,
      -- Alternative Sequence
      //as of now the correct UoM cannot be determined in CDS views. Field needs to be kept for compatibility reasons.
      @Consumption.hidden: true
      BillOfOperationsUnit,
      @DefaultAggregation: #MIN
      plfl.MinimumLotSizeQuantity,
      @DefaultAggregation: #MAX      
      plfl.MaximumLotSizeQuantity,

      // Associations
      _BillOfOperations,
      _BillOfOperationsGroup,
      _BillOfOperationsRefSequence,
      _BillOfOperationsSequence,
      _BillOfOperationsType,
      _BOOOperationsBranchOperation,
      _BOOOperationsReturnOperation,
      _ChangeMaster,
      _SequenceCategory,
      _SequenceSchedulingAlignment
}
where plfl.BillOfOperationsType = '2'  // Recipe
   or plfl.BillOfOperationsType = 'N'  // Standard routing
   or plfl.BillOfOperationsType = 'S'; // Reference operation set
```
