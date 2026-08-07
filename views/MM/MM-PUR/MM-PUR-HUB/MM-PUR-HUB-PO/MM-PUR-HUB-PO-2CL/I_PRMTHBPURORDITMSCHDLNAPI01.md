---
name: I_PRMTHBPURORDITMSCHDLNAPI01
description: Prmthbpurorditmschdlnapi 01
app_component: MM-PUR-HUB-PO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - component:MM-PUR-HUB-PO-2CL
  - lob:Sourcing & Procurement
---
# I_PRMTHBPURORDITMSCHDLNAPI01

**Prmthbpurorditmschdlnapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PrmtHbRpldPurchaseOrder` | ✓ | |  | `PurchaseOrder` |
| `PrmtHbRpldPurchaseOrderItem` | ✓ | |  | `PurchaseOrderItem` |
| `ProcurementHubSourceSystem` | ✓ | |  | `ExtSourceSystem` |
| `PrmtHbRpldPOItmSchdLn` | ✓ | |  | `ScheduleLine` |
| `PrmtHbDelivDateCategory` |  | |  | `DelivDateCategory` |
| `PrmtHbSchedLineDlvDte` |  | |  | `ScheduleLineDeliveryDate` |
| `PrmtHbSchedLineStstcsDlvDte` |  | |  | `SchedLineStscDeliveryDate` |
| `PrmtHbPerfPerdStrtDte` |  | |  | `PerformancePeriodStartDate` |
| `PrmtHbPerfPerdEndDte` |  | |  | `PerformancePeriodEndDate` |
| `PrmtHbSchedLineDelivTme` |  | |  | `ScheduleLineDeliveryTime` |
| `ProcmtHubPurchaseRequisition` |  | |  | `PurchaseRequisition` |
| `ProcmtHubPurRequisitionItem` |  | |  | `PurchaseRequisitionItem` |
| `ProcurementHubSourceOfCreation` |  | |  | `SourceOfCreation` |
| `PrmtHbPrevDelivOfSchdLnQty` |  | |  | `PrevDelivQtyOfScheduleLine` |
| `PrmtHbNmbrOfRemOfSchdLn` |  | |  | `NoOfRemindersOfScheduleLine` |
| `PrmtHbScheduleLineIsFixed` |  | |  | `ScheduleLineIsFixed` |
| `PrmtHbSchdLnCmtdQty` |  | |  | `ScheduleLineCommittedQuantity` |
| `ProcurementHubReservation` |  | |  | `Reservation` |
| `PrmtHbProductAvailabilityDate` |  | |  | `ProductAvailabilityDate` |
| `PrmtHbMaterialStagingTime` |  | |  | `MaterialStagingTime` |
| `PrmtHbTranspPlngDte` |  | |  | `TransportationPlanningDate` |
| `PrmtHbTranspPlngTme` |  | |  | `TransportationPlanningTime` |
| `PrmtHbLoadingDate` |  | |  | `LoadingDate` |
| `PrmtHbLoadingTime` |  | |  | `LoadingTime` |
| `PrmtHbGoodsIssueDate` |  | |  | `GoodsIssueDate` |
| `PrmtHbGoodsIssueTime` |  | |  | `GoodsIssueTime` |
| `PrmtHbSTOLtstPosblGRDte` |  | |  | `STOLatestPossibleGRDate` |
| `PrmtHbSTOLtstPosblGRTme` |  | |  | `STOLatestPossibleGRTime` |
| `PrmtHbGoodsReceiptQuantity` |  | |  | `GoodsReceiptQuantity` |
| `PrmtHbStkTransfDlvrdQty` |  | |  | `StockTransferDeliveredQuantity` |
| `PrmtHbSchedLineIssdQty` |  | |  | `ScheduleLineIssuedQuantity` |
| `ProcmtHubBatch` |  | |  | `Batch` |
| `PrmtHbScheduleLineOrderDate` |  | |  | `ScheduleLineOrderDate` |
| `PrmtHbSchdAgrRelType` |  | |  | `SchedulingAgreementReleaseType` |
| `PrmtHbCommittedDeliveryDate` |  | |  | `CommittedDeliveryDate` |
| `PrmtHbSchedDtaAgingFltrDte` |  | |  | `SchedgLineDataAgingFilterDate` |
| `PrmtHbPurOrdQtyUnt` |  | |  | `PurchaseOrderQuantityUnit` |
| `ProcmtHubDocumentCurrency` |  | |  | `Currency` |
| `PrmtHbSchdLnOpnQty` |  | |  | `ScheduleLineOpenQuantity` |
| `PrmtHbSchdLnOrdQty` |  | |  | `ScheduleLineOrderQuantity` |
| `PrmtHbRoughGoodsReceiptQty` |  | |  | `RoughGoodsReceiptQty` |
| `PrmtHbOpnPurOrdQty` |  | |  | `OpenPurchaseOrderQuantity` |
| `_ProcmtHubPOHeader` | | ✓ | | |
| `_ProcmtHubPOItem` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcmtHubPOHeader` | `I_ProcmtHubPurOrdHdrAPI01` | [1..1] |
| `_ProcmtHubPOItem` | `I_ProcmtHubPurOrdItmAPI01` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRCHBPOSLAPI01'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType : #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Schedule Line of Purchase Order in Procurement Hub'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern : #NONE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true

define view I_PrmtHbPurOrdItmSchdLnAPI01
  as select from I_CntrlPurOrderScheduleLine
  association [1..1] to I_ProcmtHubPurOrdHdrAPI01 as _ProcmtHubPOHeader on  _ProcmtHubPOHeader.PurchaseOrder   = $projection.PrmtHbRpldPurchaseOrder
                                                                        and _ProcmtHubPOHeader.ExtSourceSystem = $projection.ProcurementHubSourceSystem

  association [1..1] to I_ProcmtHubPurOrdItmAPI01 as _ProcmtHubPOItem   on  _ProcmtHubPOItem.PurchaseOrder     = $projection.PrmtHbRpldPurchaseOrder
                                                                        and _ProcmtHubPOItem.PurchaseOrderItem = $projection.PrmtHbRpldPurchaseOrderItem
                                                                        and _ProcmtHubPOItem.ExtSourceSystem   = $projection.ProcurementHubSourceSystem
{
  key  PurchaseOrder as PrmtHbRpldPurchaseOrder,
  key  PurchaseOrderItem as PrmtHbRpldPurchaseOrderItem,
  key  ExtSourceSystem as ProcurementHubSourceSystem,
  key  ScheduleLine as PrmtHbRpldPOItmSchdLn,  
       DelivDateCategory as PrmtHbDelivDateCategory,
       ScheduleLineDeliveryDate as PrmtHbSchedLineDlvDte,
       SchedLineStscDeliveryDate as PrmtHbSchedLineStstcsDlvDte,
       PerformancePeriodStartDate as PrmtHbPerfPerdStrtDte,
       PerformancePeriodEndDate as PrmtHbPerfPerdEndDte,
       ScheduleLineDeliveryTime as PrmtHbSchedLineDelivTme,

       PurchaseRequisition as ProcmtHubPurchaseRequisition,
       PurchaseRequisitionItem as ProcmtHubPurRequisitionItem,
       SourceOfCreation as ProcurementHubSourceOfCreation,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       PrevDelivQtyOfScheduleLine as PrmtHbPrevDelivOfSchdLnQty,
       NoOfRemindersOfScheduleLine as PrmtHbNmbrOfRemOfSchdLn,
       ScheduleLineIsFixed as PrmtHbScheduleLineIsFixed,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       ScheduleLineCommittedQuantity as PrmtHbSchdLnCmtdQty,
       Reservation as ProcurementHubReservation,
       ProductAvailabilityDate as PrmtHbProductAvailabilityDate,
       MaterialStagingTime as PrmtHbMaterialStagingTime,
       TransportationPlanningDate as PrmtHbTranspPlngDte,
       TransportationPlanningTime as PrmtHbTranspPlngTme,
       LoadingDate as PrmtHbLoadingDate,
       LoadingTime as PrmtHbLoadingTime,
       GoodsIssueDate as PrmtHbGoodsIssueDate,
       GoodsIssueTime as PrmtHbGoodsIssueTime,
       STOLatestPossibleGRDate as PrmtHbSTOLtstPosblGRDte,
       STOLatestPossibleGRTime as PrmtHbSTOLtstPosblGRTme,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       GoodsReceiptQuantity as PrmtHbGoodsReceiptQuantity,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       StockTransferDeliveredQuantity as PrmtHbStkTransfDlvrdQty,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       ScheduleLineIssuedQuantity as PrmtHbSchedLineIssdQty,
       Batch as ProcmtHubBatch,
       ScheduleLineOrderDate as PrmtHbScheduleLineOrderDate,
       SchedulingAgreementReleaseType as PrmtHbSchdAgrRelType,
       CommittedDeliveryDate as PrmtHbCommittedDeliveryDate,

//       SchedLinePrevDelivDate,
       SchedgLineDataAgingFilterDate as PrmtHbSchedDtaAgingFltrDte,

       PurchaseOrderQuantityUnit as PrmtHbPurOrdQtyUnt,
       Currency as ProcmtHubDocumentCurrency,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       ScheduleLineOpenQuantity as PrmtHbSchdLnOpnQty,

       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       ScheduleLineOrderQuantity as PrmtHbSchdLnOrdQty,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       RoughGoodsReceiptQty as PrmtHbRoughGoodsReceiptQty,
       @Semantics.quantity.unitOfMeasure: 'PrmtHbPurOrdQtyUnt'
       OpenPurchaseOrderQuantity as PrmtHbOpnPurOrdQty,

       //Root association
       _ProcmtHubPOHeader,

       //Header association
       _ProcmtHubPOItem

}
```
