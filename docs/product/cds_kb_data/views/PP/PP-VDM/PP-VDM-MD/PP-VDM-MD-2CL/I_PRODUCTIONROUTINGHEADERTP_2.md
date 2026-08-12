---
name: I_PRODUCTIONROUTINGHEADERTP_2
description: "Productionroutingheadertp 2"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - transactional-processing
  - product
  - routing
  - header-level
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONROUTINGHEADERTP_2

**Productionroutingheadertp 2**

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
| `ProductionRoutingInternalVers` | ✓ | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `BillOfOperationsDesc` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `BillOfOperationsUsage` |  | |  |  |  |  |
| `BillOfOperationsStatus` |  | |  |  |  |  |
| `ResponsiblePlannerGroup` |  | |  |  |  |  |
| `MinimumLotSizeQuantity` |  | |  |  |  |  |
| `MaximumLotSizeQuantity` |  | |  |  |  |  |
| `BillOfOperationsUnit` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `ChangeNumber` |  | |  |  |  |  |
| `ChangedDateTime` |  | |  |  |  |  |
| `PlainLongText` |  | |  |  |  |  |
| `PlanningWorkCenter` |  | |  |  |  |  |
| `ReplacedBillOfOperations` |  | |  |  |  |  |
| `_ProdnRtgTP` | | ✓ | | | | |
| `_MatlAssgmt` | | ✓ | | | | |
| `_Sequence` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Interface for BO ProductionRouting Header - TP'
@ObjectModel.sapObjectNodeType.name: 'ProductionRouting'
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #M, dataClass: #MASTER }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #MANDATORY
define view entity I_ProductionRoutingHeaderTP_2
  as projection on R_ProductionRoutingHeaderTP_2
{
  key ProductionRoutingGroup,
  key ProductionRouting,
  key ProductionRoutingInternalVers,
      IsMarkedForDeletion,
      @Semantics.text: true
      BillOfOperationsDesc,
      Plant,
      BillOfOperationsUsage,
      BillOfOperationsStatus,
      ResponsiblePlannerGroup,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MinimumLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BillOfOperationsUnit'
      MaximumLotSizeQuantity,
      BillOfOperationsUnit,
      CreationDate,
      CreatedByUser,
      LastChangeDate,
      LastChangedByUser,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      ChangeNumber,
      ChangedDateTime,
      @Semantics.text: true
      PlainLongText,
      PlanningWorkCenter,
      ReplacedBillOfOperations,

      /* Associations */
      _ProdnRtgTP : redirected to parent I_ProductionRoutingTP_2,
      _MatlAssgmt : redirected to I_ProdnRoutingMatlAssgmtTP_2,
      _Sequence   : redirected to I_ProdnRoutingSequenceTP_2
}
```
