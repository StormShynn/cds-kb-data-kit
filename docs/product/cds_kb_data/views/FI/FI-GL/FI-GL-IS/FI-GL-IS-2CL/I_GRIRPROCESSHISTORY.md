---
name: I_GRIRPROCESSHISTORY
description: "This CDS view allows you to access historical GR/IR process information for business process evaluations to gain operational insights. This CDS view provides access to all processing data of the GR/IR (Goods Receipt/Invoice Receipt) account reconciliation process which is performed using the Reconcile GR/IR Accounts app. In the GR/IR processing history table the following is recorded: root cause, status, processor and more for purchasing document items, such as purchase orders, where amounts and/or quantities between goods receipts and invoice receipts do not match. This CDS view allows you to retrospectively review all activities on a purchasing document item level in relation to a business situation at a point in time. This CDS view provides the data to answer the following business questions: Which business situation (amount deviations) did cause a write-off? Which department/processor did perform the clarification of a purchasing document item? What was the root cause of the issue that occurred? Which business situation has led to which process decision?"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRIRPROCESSHISTORY')/$value
semantic_en: "This CDS view allows you to access historical GR/IR process information for business process evaluations to gain operational insights. This CDS view provides access to all processing data of the GR/IR (Goods Receipt/Invoice Receipt) account reconciliation process which is performed using the Reconcile GR/IR Accounts app. In the GR/IR processing history table the following is recorded: root cause, status, processor and more for purchasing document items, such as purchase orders, where amounts and/or quantities between goods receipts and invoice receipts do not match. This CDS view allows you to retrospectively review all activities on a purchasing document item level in relation to a business situation at a point in time. This CDS view provides the data to answer the following business questions: Which business situation (amount deviations) did cause a write-off? Which department/processor did perform the clarification of a purchasing document item? What was the root cause of the issue that occurred? Which business situation has led to which process decision?"
semantic_vi: "GRIR Process History — CDS view giao diện dựa trên P_GRIRProcessHistory."
keywords:
  - "grir"
  - "process"
  - "history"
  - "company"
  - "code"
  - "purchasing"
  - "document"
  - "item"
  - "last"
  - "change"
  - "date"
  - "time"
  - "changed"
  - "user"
tags:
  - FI
  - account
  - bo:billingdocument
  - component:FI-GL-IS-2CL
  - document
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - goods-receipt
  - interface-view
  - invoice
  - lob:finance
  - order
  - purchase-order
---
# I_GRIRPROCESSHISTORY

**This CDS view allows you to access historical GR/IR process information for business process evaluations to gain operational insights. This CDS view provides access to all processing data of the GR/IR (Goods Receipt/Invoice Receipt) account reconciliation process which is performed using the Reconcile GR/IR Accounts app. In the GR/IR processing history table the following is recorded: root cause, status, processor and more for purchasing document items, such as purchase orders, where amounts and/or quantities between goods receipts and invoice receipts do not match. This CDS view allows you to retrospectively review all activities on a purchasing document item level in relation to a business situation at a point in time. This CDS view provides the data to answer the following business questions: Which business situation (amount deviations) did cause a write-off? Which department/processor did perform the clarification of a purchasing document item? What was the root cause of the issue that occurred? Which business situation has led to which process decision?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRIRPROCESSHISTORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `PurchasingDocument` | ✓ | |  |  | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | ✓ | |  |  | `NUMC(5)` | Purchasing Document Item |
| `LastChangeDateTime` | ✓ | |  |  | `DEC(15)` | GR/IR Clearing Process Last Change Date Time |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User of Last Change in GR/IR Clearing Process |
| `ResponsibleDepartment` |  | |  |  | `CHAR(30)` | Processing Department of GR/IR Clearing Process |
| `ResponsiblePerson` |  | |  |  | `CHAR(12)` | Processor of GR/IR Clearing Process |
| `GRIRClearingProcessStatus` |  | |  |  | `CHAR(2)` | GR/IR Clearing Process Status |
| `GRIRClearingProcessPriority` |  | |  |  | `CHAR(2)` | Priority of GR/IR Clearing Process |
| `HasNote` |  | |  |  | `CHAR(1)` | Notes Included in GR/IR Clearing Process |
| `Note` |  | |  |  |  |  |
| `SystemMessageIdentification` |  | |  |  | `CHAR(20)` | Message identification |
| `SystemMessageType` |  | |  |  | `CHAR(1)` | Message Type |
| `SystemMessageNumber` |  | |  |  | `CHAR(3)` | Message number |
| `AccountAssignmentCategory` |  | |  |  | `CHAR(1)` | Account Assignment Category |
| `BalAmtInCompanyCodeCrcy` |  | |  |  | `CURR(23)` | Total Balance Amount in Company Code Currency |
| `BalanceQuantity` |  | |  |  | `QUAN(23)` | Balance Quantity in Reference Quantity Unit |
| `IsFinallyInvoiced` |  | |  |  | `CHAR(1)` | Final Invoice Indicator |
| `LatestOpenItemPostingDate` |  | |  |  | `DATS(8)` | Posting Date of Latest Open Item |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `NumberOfGoodsReceipts` |  | |  |  | `INT4(10)` | Number of Goods Receipts |
| `NumberOfInvoiceReceipts` |  | |  |  | `INT4(10)` | Number of Invoice Receipts |
| `OldestOpenItemPostingDate` |  | |  |  | `DATS(8)` | Posting Date of Oldest Open Item |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SystemMessageVariable1` |  | |  |  | `CHAR(50)` | Message Variable 1 |
| `SystemMessageVariable2` |  | |  |  | `CHAR(50)` | Message Variable 2 |
| `SystemMessageVariable3` |  | |  |  | `CHAR(50)` | Message Variable 3 |
| `SystemMessageVariable4` |  | |  |  | `CHAR(50)` | Message Variable 4 |
| `SystemMessageText` |  | |  |  | `CHAR(73)` | Message Text |
| `DueDays` |  | |  |  | `INT2(5)` | GR/IR Due Days |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PurgDocOrderQuantityUnit` |  | |  |  | `UNIT(3)` | Purchasing Document Order Quantity Unit |
| `PrpsdResponsibleDepartment` |  | |  |  | `CHAR(30)` | Proposed Processing Department of GR/IR Clearing Process |
| `ProposedResponsiblePerson` |  | |  |  | `CHAR(12)` | Proposed Processor of GR/IR Clearing Process |
| `GRIRClrgProcessPrpsdStatus` |  | |  |  | `CHAR(2)` | Proposed Status of GR/IR Clearing Process |
| `GRIRClrgProcPrpsdPriority` |  | |  |  | `CHAR(2)` | Proposed Priority of GR/IR Clearing Process |
| `GRIRClearingProcessRootCause` |  | |  |  | `CHAR(3)` | Root Cause for GR/IR Clearing Process |
| `GRIRClrgProcessPrpsdRootCause` |  | |  |  | `CHAR(3)` | Proposed Root Cause of GR/IR Clearing Process |
| `PrpsdRespDeptMaxClProbability` |  | |  |  | `DEC(8)` | Processing Department Proposal Confidence |
| `PrpsdRespPersonMaxClassProblty` |  | |  |  | `DEC(8)` | Processor Proposal Confidence |
| `GRIRProposedStatusMaxClProblty` |  | |  |  | `DEC(8)` | Status Proposal Confidence |
| `GRIRProposedPrioMaxClProblty` |  | |  |  | `DEC(8)` | Priority Proposal Confidence |
| `GRIRPrpsdRootCauseMaxClProblty` |  | |  |  | `DEC(8)` | Root Cause Proposal Confidence |
| `GoodsReceiptGoodsAmtInCCCrcy` |  | |  |  | `CURR(23)` | Goods Receipt Amount in Company Code Currency (Goods) |
| `InvoiceRcptGoodsAmtInCCCrcy` |  | |  |  | `CURR(23)` | Invoice Receipt Amount in Company Code Currency (Goods) |
| `GdsRcptDelivCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Goods Receipt Amount in Company Code Currency (Delivery Cost |
| `InvcRcptDelivCostAmtInCCCrcy` |  | |  |  | `CURR(23)` | Invoice Receipt Amount in Company Code Crcy (Delivery Costs) |
| `GoodsReceiptGoodsQuantity` |  | |  |  | `QUAN(23)` | Goods Receipt Quantity (Goods) in Reference Quantity Unit |
| `InvoiceReceiptGoodsQuantity` |  | |  |  | `QUAN(23)` | Invoice Receipt Quantity (Goods) in Reference Quantity Unit |
| `GoodsReceiptDeliveryCostQty` |  | |  |  | `QUAN(23)` | Goods Receipt Quantity (Delivery Costs) in Reference Quantit |
| `InvoiceRcptDeliveryCostQty` |  | |  |  | `QUAN(23)` | Invoice Quantity (Delivery Costs) in Reference Quantity Unit |
| `GoodsBalanceAmountInCCCrcy` |  | |  |  | `CURR(24)` |  |
| `GoodsBalanceQuantity` |  | |  |  | `QUAN(24)` |  |
| `DeliveryCostBalAmtInCCCrcy` |  | |  |  | `CURR(24)` |  |
| `DeliveryCostBalanceQuantity` |  | |  |  | `QUAN(24)` |  |
| `GoodsReceiptAmountInCoCodeCrcy` |  | |  |  | `CURR(24)` |  |
| `GoodsReceiptQty` |  | |  |  | `QUAN(24)` |  |
| `InvoiceRcptAmtInCoCodeCrcy` |  | |  |  | `CURR(24)` |  |
| `InvoiceReceiptQty` |  | |  |  | `QUAN(24)` |  |
| `IsGoodsRcptGoodsAmtSurplus` |  | |  | `case when P_GRIRProcessHistory.GoodsBalanceAmountInCCCrcy < 0 then cast('X' as fis_grir_gds_amt_gr_surplus preserving type) else cast('' as fis_grir_gds_amt_gr_surplus preserving type) end` | `CHAR(1)` | There is goods amount surplus in goods receipts. |
| `IsInvoiceGoodsAmountSurplus` |  | |  | `case when P_GRIRProcessHistory.GoodsBalanceAmountInCCCrcy > 0 then cast('X' as fis_grir_gds_amt_ir_surplus preserving type) else cast('' as fis_grir_gds_amt_ir_surplus preserving type) end` | `CHAR(1)` | There is goods amount surplus in invoices. |
| `IsGdsRcptDelivCostAmtSurplus` |  | |  | `case when P_GRIRProcessHistory.DeliveryCostBalAmtInCCCrcy < 0 then cast('X' as fis_grir_frt_amt_gr_surplus preserving type) else cast('' as fis_grir_frt_amt_gr_surplus preserving type) end` | `CHAR(1)` | There is delivery cost amount surplus in goods receipts. |
| `IsInvoiceDelivCostAmtSurplus` |  | |  | `case when P_GRIRProcessHistory.DeliveryCostBalAmtInCCCrcy > 0 then cast('X' as fis_grir_frt_amt_ir_surplus preserving type) else cast('' as fis_grir_frt_amt_ir_surplus preserving type) end` | `CHAR(1)` | There is delivery cost amount surplus in invoices. |
| `IsGoodsRcptGoodsQtySurplus` |  | |  | `case when P_GRIRProcessHistory.GoodsBalanceQuantity < 0 then cast('X' as fis_grir_gds_qty_gr_surplus preserving type) else cast('' as fis_grir_gds_qty_gr_surplus preserving type) end` | `CHAR(1)` | There is goods quantity surplus in goods receipts. |
| `IsInvoiceGoodsQtySurplus` |  | |  | `case when P_GRIRProcessHistory.GoodsBalanceQuantity > 0 then cast('X' as fis_grir_gds_qty_ir_surplus preserving type) else cast('' as fis_grir_gds_qty_ir_surplus preserving type) end` | `CHAR(1)` | There is goods quantity surplus in invoices. |
| `IsGdsRcptDelivCostQtySurplus` |  | |  | `case when P_GRIRProcessHistory.DeliveryCostBalanceQuantity < 0 then cast('X' as fis_grir_frt_qty_gr_surplus preserving type) else cast('' as fis_grir_frt_qty_gr_surplus preserving type) end` | `CHAR(1)` | There is delivery cost quantity surplus in goods receipts. |
| `IsInvoiceDelivCostQtySurplus` |  | |  | `case when P_GRIRProcessHistory.DeliveryCostBalanceQuantity > 0 then cast('X' as fis_grir_frt_qty_ir_surplus preserving type) else cast('' as fis_grir_frt_qty_ir_surplus preserving type) end` | `CHAR(1)` | There is delivery cost quantity surplus in invoices. |
| `_LastChangedByUser` | | ✓ | | | | |
| `_ResponsiblePerson` | | ✓ | | | | |
| `_GRIRProcessStatusText` | | ✓ | | | | |
| `_GRIRClrgProcPrpsdStatusText` | | ✓ | | | | |
| `_GRIRProcessPriorityText` | | ✓ | | | | |
| `_GRIRClrgProcPrpsdPriorityText` | | ✓ | | | | |
| `_GRIRProcessRootCauseText` | | ✓ | | | | |
| `_GRIRProcessPrpsdRootCauseText` | | ✓ | | | | |
| `_PurgDocOrderQuantityUnit` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LastChangedByUser` | `I_UserContactCard` | [0..1] |
| `_ResponsiblePerson` | `I_UserContactCard` | [0..1] |
| `_GRIRProcessStatusText` | `I_GRIRProcessStatusText` | [0..*] |
| `_GRIRClrgProcPrpsdStatusText` | `I_GRIRProcessStatusText` | [0..*] |
| `_GRIRProcessPriorityText` | `I_GRIRProcessPriorityText` | [0..*] |
| `_GRIRClrgProcPrpsdPriorityText` | `I_GRIRProcessPriorityText` | [0..*] |
| `_GRIRProcessRootCauseText` | `I_GRIRProcessRootCauseText` | [0..*] |
| `_GRIRProcessPrpsdRootCauseText` | `I_GRIRProcessRootCauseText` | [0..*] |
| `_PurgDocOrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRIRPROCESSHISTORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRIRPROCESSHISTORY')/$value)*

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'GRIR Process History'
@VDM.viewType: #BASIC
//@ObjectModel.representativeKey: 'LastChangeDateTime'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass:  #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@AccessControl.privilegedAssociations:  ['_LastChangedByUser','_ResponsiblePerson' ]
@UI.textArrangement: #TEXT_LAST
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
define view entity I_GRIRProcessHistory
  as select from P_GRIRProcessHistory

  association [0..1] to I_UserContactCard          as _LastChangedByUser             on $projection.LastChangedByUser = _LastChangedByUser.ContactCardID
  association [0..1] to I_UserContactCard          as _ResponsiblePerson             on $projection.ResponsiblePerson = _ResponsiblePerson.ContactCardID

  //Text Associations
  association [0..*] to I_GRIRProcessStatusText    as _GRIRProcessStatusText         on $projection.GRIRClearingProcessStatus = _GRIRProcessStatusText.GRIRClearingProcessStatus
  association [0..*] to I_GRIRProcessStatusText    as _GRIRClrgProcPrpsdStatusText   on $projection.GRIRClrgProcessPrpsdStatus = _GRIRClrgProcPrpsdStatusText.GRIRClearingProcessStatus
  association [0..*] to I_GRIRProcessPriorityText  as _GRIRProcessPriorityText       on $projection.GRIRClearingProcessPriority = _GRIRProcessPriorityText.GRIRClearingProcessPriority
  association [0..*] to I_GRIRProcessPriorityText  as _GRIRClrgProcPrpsdPriorityText on $projection.GRIRClrgProcPrpsdPriority = _GRIRClrgProcPrpsdPriorityText.GRIRClearingProcessPriority
  association [0..*] to I_GRIRProcessRootCauseText as _GRIRProcessRootCauseText      on $projection.GRIRClearingProcessRootCause = _GRIRProcessRootCauseText.GRIRClearingProcessRootCause
  association [0..*] to I_GRIRProcessRootCauseText as _GRIRProcessPrpsdRootCauseText on $projection.GRIRClrgProcessPrpsdRootCause = _GRIRProcessPrpsdRootCauseText.GRIRClearingProcessRootCause

  association [0..1] to I_UnitOfMeasure            as _PurgDocOrderQuantityUnit      on  $projection.PurgDocOrderQuantityUnit = _PurgDocOrderQuantityUnit.UnitOfMeasure
  association [1..1] to I_Currency                 as _CompanyCodeCurrency           on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency

  association [0..1] to I_Supplier                 as _Supplier                      on  $projection.Supplier = _Supplier.Supplier

{

      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key P_GRIRProcessHistory.CompanyCode,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PurchasingDocumentStdVH',
                     element: 'PurchasingDocument' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_PurchasingDocument'
  key P_GRIRProcessHistory.PurchasingDocument,
      //--[ GENERATED:012:29JlHNUf7jY4ip0dSlCN8W
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PurchasingDocumentItemStdVH',
                     element: 'PurchasingDocumentItem' },
          additionalBinding: [{ localElement: 'PurchasingDocument',
                                element: 'PurchasingDocument' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
  key P_GRIRProcessHistory.PurchasingDocumentItem,
  key P_GRIRProcessHistory.LastChangeDateTime,
      P_GRIRProcessHistory.LastChangedByUser,
      P_GRIRProcessHistory.ResponsibleDepartment,
      P_GRIRProcessHistory.ResponsiblePerson,

      @ObjectModel.text.association: '_GRIRProcessStatusText'
      @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN    
      P_GRIRProcessHistory.GRIRClearingProcessStatus,

      @ObjectModel.text.association: '_GRIRProcessPriorityText'
      @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN    
      P_GRIRProcessHistory.GRIRClearingProcessPriority,
      P_GRIRProcessHistory.HasNote,
      P_GRIRProcessHistory.Note,
      P_GRIRProcessHistory.SystemMessageIdentification,
      P_GRIRProcessHistory.SystemMessageType,
      P_GRIRProcessHistory.SystemMessageNumber,
      P_GRIRProcessHistory.AccountAssignmentCategory,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.BalAmtInCompanyCodeCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.BalanceQuantity,
      P_GRIRProcessHistory.IsFinallyInvoiced,
      P_GRIRProcessHistory.LatestOpenItemPostingDate,
      P_GRIRProcessHistory.MaterialGroup,
      P_GRIRProcessHistory.NumberOfGoodsReceipts,
      P_GRIRProcessHistory.NumberOfInvoiceReceipts,
      P_GRIRProcessHistory.OldestOpenItemPostingDate,
      P_GRIRProcessHistory.Plant,
      P_GRIRProcessHistory.PurchasingGroup,
      P_GRIRProcessHistory.PurchasingOrganization,
      P_GRIRProcessHistory.Supplier,
      P_GRIRProcessHistory.SystemMessageVariable1,
      P_GRIRProcessHistory.SystemMessageVariable2,
      P_GRIRProcessHistory.SystemMessageVariable3,
      P_GRIRProcessHistory.SystemMessageVariable4,
      P_GRIRProcessHistory.SystemMessageText,
      P_GRIRProcessHistory.DueDays,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      P_GRIRProcessHistory.CompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_PurgDocOrderQuantityUnit'
      P_GRIRProcessHistory.PurgDocOrderQuantityUnit,
      P_GRIRProcessHistory.PrpsdResponsibleDepartment,
      P_GRIRProcessHistory.ProposedResponsiblePerson,

      @ObjectModel.text.association: '_GRIRClrgProcPrpsdStatusText'
      @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN    
      P_GRIRProcessHistory.GRIRClrgProcessPrpsdStatus,

      @ObjectModel.text.association: '_GRIRClrgProcPrpsdPriorityText'
      @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN    
      P_GRIRProcessHistory.GRIRClrgProcPrpsdPriority,

      @ObjectModel.text.association: '_GRIRProcessRootCauseText'
      @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN    
      P_GRIRProcessHistory.GRIRClearingProcessRootCause,

      @ObjectModel.text.association: '_GRIRProcessPrpsdRootCauseText'
      @ObjectModel.text.control: #ASSOCIATED_TEXT_UI_HIDDEN    
      P_GRIRProcessHistory.GRIRClrgProcessPrpsdRootCause,

      P_GRIRProcessHistory.PrpsdRespDeptMaxClProbability,
      P_GRIRProcessHistory.PrpsdRespPersonMaxClassProblty,
      P_GRIRProcessHistory.GRIRProposedStatusMaxClProblty,
      P_GRIRProcessHistory.GRIRProposedPrioMaxClProblty,
      P_GRIRProcessHistory.GRIRPrpsdRootCauseMaxClProblty,

      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.GoodsReceiptGoodsAmtInCCCrcy,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.InvoiceRcptGoodsAmtInCCCrcy,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.GdsRcptDelivCostAmtInCCCrcy,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.InvcRcptDelivCostAmtInCCCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.GoodsReceiptGoodsQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.InvoiceReceiptGoodsQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.GoodsReceiptDeliveryCostQty,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.InvoiceRcptDeliveryCostQty,

      //Balances Goods
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.GoodsBalanceAmountInCCCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.GoodsBalanceQuantity,

      //Balance Delivery Cost
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.DeliveryCostBalAmtInCCCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.DeliveryCostBalanceQuantity,

      //Balance Good Receipts
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.GoodsReceiptAmountInCoCodeCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.GoodsReceiptQty,

      //Balance Invoice Receipts
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      P_GRIRProcessHistory.InvoiceRcptAmtInCoCodeCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'PurgDocOrderQuantityUnit'} }
      P_GRIRProcessHistory.InvoiceReceiptQty,


      case when P_GRIRProcessHistory.GoodsBalanceAmountInCCCrcy < 0
        then cast('X' as fis_grir_gds_amt_gr_surplus preserving type)
        else cast(''  as fis_grir_gds_amt_gr_surplus preserving type)
      end as IsGoodsRcptGoodsAmtSurplus,

      case when P_GRIRProcessHistory.GoodsBalanceAmountInCCCrcy > 0
        then cast('X' as fis_grir_gds_amt_ir_surplus preserving type)
        else cast(''  as fis_grir_gds_amt_ir_surplus preserving type)
      end as IsInvoiceGoodsAmountSurplus,

      case when P_GRIRProcessHistory.DeliveryCostBalAmtInCCCrcy < 0
        then cast('X' as fis_grir_frt_amt_gr_surplus preserving type)
        else cast(''  as fis_grir_frt_amt_gr_surplus preserving type)
      end as IsGdsRcptDelivCostAmtSurplus,

      case when P_GRIRProcessHistory.DeliveryCostBalAmtInCCCrcy > 0
        then cast('X' as fis_grir_frt_amt_ir_surplus preserving type)
        else cast(''  as fis_grir_frt_amt_ir_surplus preserving type)
      end as IsInvoiceDelivCostAmtSurplus,


      case when P_GRIRProcessHistory.GoodsBalanceQuantity < 0
        then cast('X' as fis_grir_gds_qty_gr_surplus preserving type)
        else cast(''  as fis_grir_gds_qty_gr_surplus preserving type)
      end as IsGoodsRcptGoodsQtySurplus,

      case when P_GRIRProcessHistory.GoodsBalanceQuantity > 0
        then cast('X' as fis_grir_gds_qty_ir_surplus preserving type)
        else cast(''  as fis_grir_gds_qty_ir_surplus preserving type)
      end as IsInvoiceGoodsQtySurplus,

      case when P_GRIRProcessHistory.DeliveryCostBalanceQuantity < 0
        then cast('X' as fis_grir_frt_qty_gr_surplus preserving type)
        else cast(''  as fis_grir_frt_qty_gr_surplus preserving type)
      end as IsGdsRcptDelivCostQtySurplus,

      case when P_GRIRProcessHistory.DeliveryCostBalanceQuantity > 0
        then cast('X' as fis_grir_frt_qty_ir_surplus preserving type)
        else cast(''  as fis_grir_frt_qty_ir_surplus preserving type)
      end as IsInvoiceDelivCostQtySurplus,


      P_GRIRProcessHistory._CompanyCode,
      P_GRIRProcessHistory._PurchasingDocument,
      P_GRIRProcessHistory._PurchasingDocumentItem,

      /* Associations */
      _LastChangedByUser,
      _ResponsiblePerson,
      _GRIRProcessStatusText,
      _GRIRProcessPriorityText,
      _GRIRProcessRootCauseText,
      _GRIRClrgProcPrpsdStatusText,
      _GRIRClrgProcPrpsdPriorityText,
      _GRIRProcessPrpsdRootCauseText,
      _CompanyCodeCurrency,
      _PurgDocOrderQuantityUnit,
      _Supplier

}
```
