---
name: C_PURORDSCHEDLINEENHCDDEX
description: "Purordschedlineenhcddex"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURORDSCHEDLINEENHCDDEX

**Purordschedlineenhcddex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `ProcurementHubSourceSystem` | ✓ | |  |  |  |  |
| `ScheduleLineUniqueID` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurgDocHdrCompanyCode` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchaseOrderItemText` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `AnalyticalReportingCurrency` |  | |  |  |  |  |
| `AnalyticalReportingCurrency2` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `AnlytlCrcyExchangeRateStatus` |  | |  |  |  |  |
| `NetPriceInReportingCurrency` |  | |  |  |  |  |
| `NetPriceInReportingCurrency2` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceInCompanyCodeCrcy` |  | |  |  |  |  |
| `NetAmountInReportingCurrency` |  | |  |  |  |  |
| `NetAmountInReportingCurrency2` |  | |  |  |  |  |
| `NetAmount` |  | |  |  |  |  |
| `NetAmountInCoCodeCurrency` |  | |  |  |  |  |
| `OpenAmountInReportingCurrency` |  | |  |  |  |  |
| `OpenAmountInReportingCurrency2` |  | |  |  |  |  |
| `OpenAmountInDocumentCurrency` |  | |  |  |  |  |
| `OpenAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `ScheduleLineOpenQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `IsCompletelyDelivered` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |  |  |
| `PurgDocumentItemDeletionCode` |  | |  |  |  |  |
| `PurchasingCompletenessStatus` |  | |  |  |  |  |
| `PurgDocSchdLnHasNextDelivery` |  | |  |  |  |  |
| `PurchaseOrderCategory` |  | |  |  |  |  |
| `PurchaseOrderType` |  | |  |  |  |  |
| `PurchaseOrderItemCategory` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `PurchasingDocumentOrigin` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `PurchasingProcessingStatus` |  | |  |  |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `PurchasingDocumentIsAged` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `PurchaseOrderQuantityUnit` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `PurOrdItmFirstGRPostingDate` |  | |  |  |  |  |
| `PurOrdItmFinalGRPostingDate` |  | |  |  |  |  |
| `OriglPurOrdItm1stGRPostgDte` |  | |  |  |  |  |
| `OriglPurOrdItmFnlGRPostgDte` |  | |  |  |  |  |
| `POItmFinalScheduleLineIsActive` |  | |  |  |  |  |
| `POPrevSchdLnTotalExpectedQty` |  | |  |  |  |  |
| `POScheduleLineTotalExpectedQty` |  | |  |  |  |  |
| `TimeVarianceInDays` |  | |  |  |  |  |
| `TimeVarianceInPct` |  | |  |  |  |  |
| `TimeVarianceInPctByDelivDate` |  | |  |  |  |  |
| `TimeVarianceScore` |  | |  |  |  |  |
| `TimeVarianceScoreByDelivDate` |  | |  |  |  |  |
| `ScheduleLineDeliveryDate` |  | |  |  |  |  |
| `SchedLineStscDeliveryDate` |  | |  |  |  |  |
| `ScheduleLineOrderDate` |  | |  |  |  |  |
| `OriglPOSchdLnDelivDte` |  | |  |  |  |  |
| `OriglPOSchedLineStstclDelivDte` |  | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `ScheduleLineOrderQuantity` |  | |  |  |  |  |
| `PrevDelivQtyOfScheduleLine` |  | |  |  |  |  |
| `GoodsReceiptQuantity` |  | |  |  |  |  |
| `ScheduleLineIssuedQuantity` |  | |  |  |  |  |
| `ScheduleLineDeliveryTime` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `SourceOfCreation` |  | |  |  |  |  |
| `PurchasingSchdLnNrOfReminders` |  | |  |  |  |  |
| `SchedulingAgreementReleaseType` |  | |  |  |  |  |
| `ScheduleLineCommittedQuantity` |  | |  |  |  |  |
| `ProductAvailabilityDate` |  | |  |  |  |  |
| `ProductAvailabilityTime` |  | |  |  |  |  |
| `LoadingDate` |  | |  |  |  |  |
| `LoadingTime` |  | |  |  |  |  |
| `TransportationPlanningDate` |  | |  |  |  |  |
| `TransportationPlanningTime` |  | |  |  |  |  |
| `GoodsIssueDate` |  | |  |  |  |  |
| `GoodsIssueTime` |  | |  |  |  |  |
| `STOLatestPossibleGRDate` |  | |  |  |  |  |
| `STOLatestPossibleGRTime` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `IsReturnsItem` |  | |  |  |  |  |
| `SupplierConfirmationControlKey` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `MaterialDocumentYear` |  | |  |  |  |  |
| `MaterialDocument` |  | |  |  |  |  |
| `MaterialDocumentItem` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PurOrdItmAnlytsIndIsActv` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName                : 'CMMPOSCENHDEX'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #MANDATORY,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #XL,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                           : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'mmpur_ana_eket', role: #MAIN,
                        viewElement     : ['PurchaseOrder','PurchaseOrderItem','ScheduleLine','ProcurementHubSourceSystem'],
                        tableElement    : ['ebeln','ebelp','etenr','be_source_sys']
                      }
                    ]
        }
    }
}
@EndUserText.label: 'Data Extraction for Purchase Orders Enhanced'
@ObjectModel.sapObjectNodeType.name: 'PurchaseOrder'
define view C_PurOrdSchedLineEnhcdDEX
 as select from I_PurOrdSchedLineEnhcdAPI01

{
  key PurchaseOrder,
  key PurchaseOrderItem,
  key ScheduleLine,
  key ProcurementHubSourceSystem,
      ScheduleLineUniqueID,
      PurchasingOrganization,
      PurchasingGroup,
      CompanyCode,
      PurgDocHdrCompanyCode,
      Supplier,
      Plant,
      Material,
      MaterialGroup,

      PurchaseOrderItemText,

      ServicePerformer,

      @Semantics.currencyCode: true
      DocumentCurrency,
      @Semantics.currencyCode: true
      AnalyticalReportingCurrency,
      @Semantics.currencyCode: true
      AnalyticalReportingCurrency2,
      @Semantics.currencyCode: true
      CompanyCodeCurrency,

      AnlytlCrcyExchangeRateStatus,


      @Semantics.amount.currencyCode: 'AnalyticalReportingCurrency'
      NetPriceInReportingCurrency,
      @Semantics.amount.currencyCode: 'AnalyticalReportingCurrency2'
      NetPriceInReportingCurrency2,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      NetPriceInCompanyCodeCrcy,

      

      @Semantics.amount.currencyCode: 'AnalyticalReportingCurrency'
      NetAmountInReportingCurrency,
      @Semantics.amount.currencyCode: 'AnalyticalReportingCurrency2'
      NetAmountInReportingCurrency2,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetAmount,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      NetAmountInCoCodeCurrency,
      @Semantics.amount.currencyCode: 'AnalyticalReportingCurrency'
      OpenAmountInReportingCurrency,
      @Semantics.amount.currencyCode: 'AnalyticalReportingCurrency2'
      OpenAmountInReportingCurrency2,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      OpenAmountInDocumentCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      OpenAmountInCompanyCodeCrcy,

      //MMPUR_S_ANA_OTHER_ATTRIBUTES

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOpenQuantity,
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,
      IsCompletelyDelivered,
      GoodsReceiptIsExpected,
      PurchasingDocumentDeletionCode,
      PurgDocumentItemDeletionCode,
      PurchasingCompletenessStatus,
      PurgDocSchdLnHasNextDelivery,
      PurchaseOrderCategory,
      PurchaseOrderType,
      PurchaseOrderItemCategory,
      AccountAssignmentCategory,
      CreationDate,
      PurchasingDocumentOrigin,
      CreatedByUser,
      LastChangeDateTime,
      PurchasingProcessingStatus,
      PurchaseOrderDate,
      PurchasingDocumentIsAged,
      ProductTypeCode,
      ReleaseIsNotCompleted,
      
      @Semantics.unitOfMeasure: true
      PurchaseOrderQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      OrderQuantity,
            

      //Time Variance Data

      PurOrdItmFirstGRPostingDate,
      PurOrdItmFinalGRPostingDate,
      OriglPurOrdItm1stGRPostgDte,
      OriglPurOrdItmFnlGRPostgDte,
      POItmFinalScheduleLineIsActive,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      POPrevSchdLnTotalExpectedQty,
      @Semantics.quantity.unitOfMeasure: 'PurchaseOrderQuantityUnit'
      POScheduleLineTotalExpectedQty,

      TimeVarianceInDays,
      TimeVarianceInPct,
      TimeVarianceInPctByDelivDate,
      TimeVarianceScore,
      TimeVarianceScoreByDelivDate,

      // MMPUR_ANA_EKETDATA

      ScheduleLineDeliveryDate,
      SchedLineStscDeliveryDate,
      ScheduleLineOrderDate,
      OriglPOSchdLnDelivDte,
      OriglPOSchedLineStstclDelivDte,

      DelivDateCategory,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineOrderQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      PrevDelivQtyOfScheduleLine,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      GoodsReceiptQuantity,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineIssuedQuantity,

      ScheduleLineDeliveryTime,
      PurchaseRequisition,
      PurchaseRequisitionItem,

      SourceOfCreation,
      PurchasingSchdLnNrOfReminders,
      SchedulingAgreementReleaseType,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      ScheduleLineCommittedQuantity,
      ProductAvailabilityDate,
      ProductAvailabilityTime,
      LoadingDate,
      LoadingTime,
      TransportationPlanningDate,
      TransportationPlanningTime,
      GoodsIssueDate,
      GoodsIssueTime,
      STOLatestPossibleGRDate,
      STOLatestPossibleGRTime,
      PurchaseContractItem,
      PurchaseContract,
      MultipleAcctAssgmtDistribution,
      IsReturnsItem,
      SupplierConfirmationControlKey,
      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      NetPriceQuantity,
      OrderItemQtyToBaseQtyNmrtr,
      OrderItemQtyToBaseQtyDnmntr,
      BaseUnit,
      @Semantics.unitOfMeasure: true
      OrderPriceUnit,
      SupplyingPlant,
      MaterialDocumentYear,
      MaterialDocument,
      MaterialDocumentItem,
      PostingDate,
      PurOrdItmAnlytsIndIsActv
}
```
