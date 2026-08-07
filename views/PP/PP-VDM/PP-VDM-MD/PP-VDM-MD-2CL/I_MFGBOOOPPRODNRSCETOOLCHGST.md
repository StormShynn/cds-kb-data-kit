---
name: I_MFGBOOOPPRODNRSCETOOLCHGST
description: "Mfgbooopprodnrscetoolchgst"
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
# I_MFGBOOOPPRODNRSCETOOLCHGST

**Mfgbooopprodnrscetoolchgst**

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
| `BOOOperationPRTInternalID` | ✓ | |  |  |  |  |
| `BOOOperationPRTIntVersCounter` | ✓ | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsImplicitlyDeleted` |  | |  |  |  |  |
| `ProductionResourceType` |  | |  |  |  |  |
| `ProductionResourceInternalID` |  | |  |  |  |  |
| `ProdnRsceToolItemNumber` |  | |  |  |  |  |
| `ProdnRsceToolControlProfile` |  | |  |  |  |  |
| `ProdnRsceToolStandardTextCode` |  | |  |  |  |  |
| `ProdnRsceToolText` |  | |  |  |  |  |
| `ProdnRsceToolStdWorkQtyUnit` |  | |  |  |  |  |
| `ProdnRsceToolStandardWorkQty` |  | |  |  |  |  |
| `ProdnRsceToolTotQtyCalcFormula` |  | |  |  |  |  |
| `ProdnRsceToolUsageQuantityUnit` |  | |  |  |  |  |
| `ProdnRsceToolUsageQuantity` |  | |  |  |  |  |
| `ProdnRsceToolUsageQtyCalcFmla` |  | |  |  |  |  |
| `StartDateOffsetReferenceCode` |  | |  |  |  |  |
| `StartDateOffsetDurationUnit` |  | |  |  |  |  |
| `StartDateOffsetDuration` |  | |  |  |  |  |
| `EndDateOffsetReferenceCode` |  | |  |  |  |  |
| `EndDateOffsetDurationUnit` |  | |  |  |  |  |
| `EndDateOffsetDuration` |  | |  |  |  |  |
| `_BillOfOperations` | | ✓ | | | | |
| `_BillOfOperationsSequence` | | ✓ | | | | |
| `_BillOfOperationsOperation` | | ✓ | | | | |
| `_BillOfOperationsOperationPRT` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |
| `_BOOOperationPRTInternalID` | | ✓ | | | | |
| `_ChangeMaster` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ProductionResourceType` | | ✓ | | | | |
| `_ProdnRsceToolMasterData` | | ✓ | | | | |
| `_ProdnRsceToolControlProfile` | | ✓ | | | | |
| `_ProdnRsceToolTotQtyCalcFmla` | | ✓ | | | | |
| `_ProdnRsceToolUsageQtyCalcFmla` | | ✓ | | | | |
| `_ProdnRsceToolStandardText` | | ✓ | | | | |
| `_ProductionResourceToolUnit` | | ✓ | | | | |
| `_ProdnResourceToolUsageUnit` | | ✓ | | | | |
| `_EndDateOffsetReferenceCode` | | ✓ | | | | |
| `_EndDateOffsetDurationUnit` | | ✓ | | | | |
| `_StartDateOffsetReferenceCode` | | ✓ | | | | |
| `_StartDateOffsetDurationUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BillOfOperationsSequence` | `I_MfgBillOfOperationsSequence` | [1..1] |
| `_BillOfOperationsOperation` | `I_MfgBillOfOperationsOperation` | [1..1] |
| `_BillOfOperationsOperationPRT` | `I_MfgBOOOperationPRTIntID` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOOPPRTCHST'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_CreatedByUser', '_LastChangedByUser']
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOOperationPRTIntVersCounter'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Mfg BOO Op Prodn Rsce Tool Change State'
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProdnRtgPRTAssgmtChgState'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_MfgBOOOpProdnRsceToolChgSt
  as select from I_BOOOperationPRTChangeState as plfh

  association [1..1] to I_MfgBillOfOperations          as _BillOfOperations             on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant

  association [1..1] to I_MfgBillOfOperationsSequence  as _BillOfOperationsSequence     on  $projection.BillOfOperationsType     = _BillOfOperationsSequence.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsSequence.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant  = _BillOfOperationsSequence.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence = _BillOfOperationsSequence.BillOfOperationsSequence

  association [1..1] to I_MfgBillOfOperationsOperation as _BillOfOperationsOperation    on  $projection.BillOfOperationsType     = _BillOfOperationsOperation.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup    = _BillOfOperationsOperation.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant  = _BillOfOperationsOperation.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence = _BillOfOperationsOperation.BillOfOperationsSequence
                                                                                        and $projection.BOOOperationInternalID   = _BillOfOperationsOperation.BOOOperationInternalID

  association [1..1] to I_MfgBOOOperationPRTIntID      as _BillOfOperationsOperationPRT on  $projection.BillOfOperationsType      = _BillOfOperationsOperationPRT.BillOfOperationsType
                                                                                        and $projection.BillOfOperationsGroup     = _BillOfOperationsOperationPRT.BillOfOperationsGroup
                                                                                        and $projection.BillOfOperationsVariant   = _BillOfOperationsOperationPRT.BillOfOperationsVariant
                                                                                        and $projection.BillOfOperationsSequence  = _BillOfOperationsOperationPRT.BillOfOperationsSequence
                                                                                        and $projection.BOOOperationInternalID    = _BillOfOperationsOperationPRT.BOOOperationInternalID
                                                                                        and $projection.BOOOperationPRTInternalID = _BillOfOperationsOperationPRT.BOOOperationPRTInternalID
{
        // Key
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
        @ObjectModel.foreignKey.association: '_BillOfOperationsOperationPRT'
    key plfh.BOOOperationPRTInternalID,
        // representative key
    key plfh.BOOOperationPRTIntVersCounter,

        // Administrative Data
        @Semantics.systemDate.createdAt: true
        plfh.CreationDate,
        @Semantics.user.createdBy: true
        plfh.CreatedByUser,
        @Semantics.systemDate.lastChangedAt: true
        plfh.LastChangeDate,
        @Semantics.user.lastChangedBy: true
        plfh.LastChangedByUser,
        @Semantics.businessDate.from: true
        plfh.ValidityStartDate,
        @Semantics.businessDate.to: true
        plfh.ValidityEndDate,
        @ObjectModel.foreignKey.association: '_ChangeMaster'
        plfh.ChangeNumber,
           
        // Attributes
        plfh.IsDeleted,
        plfh.IsImplicitlyDeleted,

        // PRT Data
        @ObjectModel.foreignKey.association: '_ProductionResourceType'
        plfh.ProductionResourceType,
        @ObjectModel.foreignKey.association: '_ProdnRsceToolMasterData'
        plfh.ProductionResourceInternalID,
        @ObjectModel.text.element: ['ProdnRsceToolText']
        plfh.ProdnRsceToolItemNumber,
        @ObjectModel.foreignKey.association: '_ProdnRsceToolControlProfile'
        plfh.ProdnRsceToolControlProfile,
        @ObjectModel.foreignKey.association: '_ProdnRsceToolStandardText'
        plfh.ProdnRsceToolStandardTextCode,
        @Semantics.text: true
        plfh.ProdnRsceToolText,

        // Usage Quantities and UoM
        @ObjectModel.foreignKey.association: '_ProductionResourceToolUnit'
        @Semantics.unitOfMeasure: true
        plfh.ProdnRsceToolStdWorkQtyUnit,
        @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolStdWorkQtyUnit'
        @DefaultAggregation: #SUM
        plfh.ProdnRsceToolStandardWorkQty,
        @ObjectModel.foreignKey.association: '_ProdnRsceToolTotQtyCalcFmla'
        plfh.ProdnRsceToolTotQtyCalcFormula,

        @ObjectModel.foreignKey.association: '_ProdnResourceToolUsageUnit'
        @Semantics.unitOfMeasure: true
        plfh.ProdnRsceToolUsageQuantityUnit,
        @Semantics.quantity.unitOfMeasure: 'ProdnRsceToolUsageQuantityUnit'
        @DefaultAggregation: #SUM
        plfh.ProdnRsceToolUsageQuantity,
        @ObjectModel.foreignKey.association: '_ProdnRsceToolUsageQtyCalcFmla'
        plfh.ProdnRsceToolUsageQtyCalcFmla,

        // Offset
        @ObjectModel.foreignKey.association: '_StartDateOffsetReferenceCode'
        plfh.StartDateOffsetReferenceCode,
        @ObjectModel.foreignKey.association: '_StartDateOffsetDurationUnit'
        @Semantics.unitOfMeasure: true
        plfh.StartDateOffsetDurationUnit,
        @Semantics.quantity.unitOfMeasure: 'StartDateOffsetDurationUnit'
        @DefaultAggregation: #SUM
        plfh.StartDateOffsetDuration,

        @ObjectModel.foreignKey.association: '_EndDateOffsetReferenceCode'
        plfh.EndDateOffsetReferenceCode,
        @ObjectModel.foreignKey.association: '_EndDateOffsetDurationUnit'
        @Semantics.unitOfMeasure: true
        plfh.EndDateOffsetDurationUnit,
        @Semantics.quantity.unitOfMeasure: 'EndDateOffsetDurationUnit'
        @DefaultAggregation: #SUM
        plfh.EndDateOffsetDuration,

        // Associations
        _BillOfOperationsType,
        _BillOfOperationsGroup,
        _BillOfOperations,
        @Consumption.hidden: true
        _BOOOperationInternalID,
        _BillOfOperationsOperation,
        _BillOfOperationsSequence,
        _BillOfOperationsOperationPRT,
        @Consumption.hidden: true
        _BOOOperationPRTInternalID,
        _ChangeMaster,
        _CreatedByUser,
        _LastChangedByUser,
        _ProductionResourceType,
        _ProdnRsceToolMasterData,
        _ProdnRsceToolControlProfile,
        _ProdnRsceToolTotQtyCalcFmla,
        _ProdnRsceToolUsageQtyCalcFmla,
        _ProdnRsceToolStandardText,
        _ProductionResourceToolUnit,
        _ProdnResourceToolUsageUnit,
        _EndDateOffsetReferenceCode,
        _EndDateOffsetDurationUnit,
        _StartDateOffsetReferenceCode,
        _StartDateOffsetDurationUnit
}
where plfh.BillOfOperationsType = '2'  // Recipe
   or plfh.BillOfOperationsType = 'N'  // Standard routing
   or plfh.BillOfOperationsType = 'S'; // Reference operation set
```
