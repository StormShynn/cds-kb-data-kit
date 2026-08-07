---
name: I_PRODNROUTINGSEQUENCETP_2
description: Prodnroutingsequencetp 2
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
  - transactional-processing
  - routing
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODNROUTINGSEQUENCETP_2

**Prodnroutingsequencetp 2**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionRoutingGroup` | ✓ | |  |  |  |  |
| `ProductionRouting` | ✓ | |  |  |  |  |
| `ProductionRoutingSequence` | ✓ | |  |  |  |  |
| `ProductionRoutingSqncIntVers` | ✓ | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `IsImplicitlyDeleted` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `SequenceCategory` |  | |  |  |  |  |
| `BillOfOperationsRefSequence` |  | |  |  |  |  |
| `BOOSqncBranchOpInternalID` |  | |  |  |  |  |
| `BOOSqncReturnOpInternalID` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `BillOfOperationsUnit` |  | |  |  |  |  |
| `SequenceText` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `_NonSqnc` | | ✓ | | | | |
| `_ProdnRtgTP` | | ✓ | | | | |
| `_Header` | | ✓ | | | | |
| `_Operation` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Sequence - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #L, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProdnRoutingSequenceTP_2
  as projection on R_ProdnRoutingSequenceTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingSequence,
  key ProductionRoutingSqncIntVers,

      IsDeleted,
      IsImplicitlyDeleted,
      ChangeNumber,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      SequenceCategory,
      BillOfOperationsRefSequence,
      BOOSqncBranchOpInternalID,
      BOOSqncReturnOpInternalID,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MaximumLotSizeQuantity,
      BillOfOperationsUnit,
      SequenceText,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      ChangedDateTime,

      /* Associations */
      _NonSqnc    : redirected to parent I_ProdnRtgNonHistoricSqncTP_2,
      _ProdnRtgTP : redirected to I_ProductionRoutingTP_2,
      _Header     : redirected to I_ProductionRoutingHeaderTP_2,
      _Operation  : redirected to I_ProdnRoutingOperationTP_2
}
```
