---
name: I_GRIRPROCESSHISTORY
description: This CDS view allows you to access historical GR/IR process information for business process evaluations to gain operational insights. This CDS view provides access to all processing data of the GR/IR (Goods Receipt/Invoice Receipt) account reconciliation process which is performed using the Reconcile GR/IR Accounts app. In the GR/IR processing history table the following is recorded: root cause, status, processor and more for purchasing document items, such as purchase orders, where amounts and/or quantities between goods receipts and invoice receipts do not match. This CDS view allows you to retrospectively review all activities on a purchasing document item level in relation to a business situation at a point in time. This CDS view provides the data to answer the following business questions: Which business situation (amount deviations) did cause a write-off? Which department/processor did perform the clarification of a purchasing document item? What was the root cause of the issue that occurred? Which business situation has led to which process decision?
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRIRPROCESSHISTORY')/$value
semantic_en: This CDS view allows you to access historical GR/IR process information for business process evaluations to gain operational insights. This CDS view provides access to all processing data of the GR/IR (Goods Receipt/Invoice Receipt) account reconciliation process which is performed using the Reconcile GR/IR Accounts app. In the GR/IR processing history table the following is recorded: root cause, status, processor and more for purchasing document items, such as purchase orders, where amounts and/or quantities between goods receipts and invoice receipts do not match. This CDS view allows you to retrospectively review all activities on a purchasing document item level in relation to a business situation at a point in time. This CDS view provides the data to answer the following business questions: Which business situation (amount deviations) did cause a write-off? Which department/processor did perform the clarification of a purchasing document item? What was the root cause of the issue that occurred? Which business situation has led to which process decision?
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
  - metadata-only
---
# I_GRIRPROCESSHISTORY

**This CDS view allows you to access historical GR/IR process information for business process evaluations to gain operational insights. This CDS view provides access to all processing data of the GR/IR (Goods Receipt/Invoice Receipt) account reconciliation process which is performed using the Reconcile GR/IR Accounts app. In the GR/IR processing history table the following is recorded: root cause, status, processor and more for purchasing document items, such as purchase orders, where amounts and/or quantities between goods receipts and invoice receipts do not match. This CDS view allows you to retrospectively review all activities on a purchasing document item level in relation to a business situation at a point in time. This CDS view provides the data to answer the following business questions: Which business situation (amount deviations) did cause a write-off? Which department/processor did perform the clarification of a purchasing document item? What was the root cause of the issue that occurred? Which business situation has led to which process decision?**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GRIRPROCESSHISTORY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `PurchasingDocument` | `CHAR(10)` | Purchasing Document |
| `PurchasingDocumentItem` | `NUMC(5)` | Purchasing Document Item |
| `LastChangeDateTime` | `DEC(15)` | GR/IR Clearing Process Last Change Date Time |
| `LastChangedByUser` | `CHAR(12)` | User of Last Change in GR/IR Clearing Process |
| `ResponsibleDepartment` | `CHAR(30)` | Processing Department of GR/IR Clearing Process |
| `ResponsiblePerson` | `CHAR(12)` | Processor of GR/IR Clearing Process |
| `GRIRClearingProcessStatus` | `CHAR(2)` | GR/IR Clearing Process Status |
| `GRIRClearingProcessPriority` | `CHAR(2)` | Priority of GR/IR Clearing Process |
| `HasNote` | `CHAR(1)` | Notes Included in GR/IR Clearing Process |
| `SystemMessageIdentification` | `CHAR(20)` | Message identification |
| `SystemMessageType` | `CHAR(1)` | Message Type |
| `SystemMessageNumber` | `CHAR(3)` | Message number |
| `AccountAssignmentCategory` | `CHAR(1)` | Account Assignment Category |
| `BalAmtInCompanyCodeCrcy` | `CURR(23)` | Total Balance Amount in Company Code Currency |
| `BalanceQuantity` | `QUAN(23)` | Balance Quantity in Reference Quantity Unit |
| `IsFinallyInvoiced` | `CHAR(1)` | Final Invoice Indicator |
| `LatestOpenItemPostingDate` | `DATS(8)` | Posting Date of Latest Open Item |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `NumberOfGoodsReceipts` | `INT4(10)` | Number of Goods Receipts |
| `NumberOfInvoiceReceipts` | `INT4(10)` | Number of Invoice Receipts |
| `OldestOpenItemPostingDate` | `DATS(8)` | Posting Date of Oldest Open Item |
| `Plant` | `CHAR(4)` | Plant |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `SystemMessageVariable1` | `CHAR(50)` | Message Variable 1 |
| `SystemMessageVariable2` | `CHAR(50)` | Message Variable 2 |
| `SystemMessageVariable3` | `CHAR(50)` | Message Variable 3 |
| `SystemMessageVariable4` | `CHAR(50)` | Message Variable 4 |
| `SystemMessageText` | `CHAR(73)` | Message Text |
| `DueDays` | `INT2(5)` | GR/IR Due Days |
| `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `PurgDocOrderQuantityUnit` | `UNIT(3)` | Purchasing Document Order Quantity Unit |
| `PrpsdResponsibleDepartment` | `CHAR(30)` | Proposed Processing Department of GR/IR Clearing Process |
| `ProposedResponsiblePerson` | `CHAR(12)` | Proposed Processor of GR/IR Clearing Process |
| `GRIRClrgProcessPrpsdStatus` | `CHAR(2)` | Proposed Status of GR/IR Clearing Process |
| `GRIRClrgProcPrpsdPriority` | `CHAR(2)` | Proposed Priority of GR/IR Clearing Process |
| `GRIRClearingProcessRootCause` | `CHAR(3)` | Root Cause for GR/IR Clearing Process |
| `GRIRClrgProcessPrpsdRootCause` | `CHAR(3)` | Proposed Root Cause of GR/IR Clearing Process |
| `PrpsdRespDeptMaxClProbability` | `DEC(8)` | Processing Department Proposal Confidence |
| `PrpsdRespPersonMaxClassProblty` | `DEC(8)` | Processor Proposal Confidence |
| `GRIRProposedStatusMaxClProblty` | `DEC(8)` | Status Proposal Confidence |
| `GRIRProposedPrioMaxClProblty` | `DEC(8)` | Priority Proposal Confidence |
| `GRIRPrpsdRootCauseMaxClProblty` | `DEC(8)` | Root Cause Proposal Confidence |
| `GoodsReceiptGoodsAmtInCCCrcy` | `CURR(23)` | Goods Receipt Amount in Company Code Currency (Goods) |
| `InvoiceRcptGoodsAmtInCCCrcy` | `CURR(23)` | Invoice Receipt Amount in Company Code Currency (Goods) |
| `GdsRcptDelivCostAmtInCCCrcy` | `CURR(23)` | Goods Receipt Amount in Company Code Currency (Delivery Cost |
| `InvcRcptDelivCostAmtInCCCrcy` | `CURR(23)` | Invoice Receipt Amount in Company Code Crcy (Delivery Costs) |
| `GoodsReceiptGoodsQuantity` | `QUAN(23)` | Goods Receipt Quantity (Goods) in Reference Quantity Unit |
| `InvoiceReceiptGoodsQuantity` | `QUAN(23)` | Invoice Receipt Quantity (Goods) in Reference Quantity Unit |
| `GoodsReceiptDeliveryCostQty` | `QUAN(23)` | Goods Receipt Quantity (Delivery Costs) in Reference Quantit |
| `InvoiceRcptDeliveryCostQty` | `QUAN(23)` | Invoice Quantity (Delivery Costs) in Reference Quantity Unit |
| `GoodsBalanceAmountInCCCrcy` | `CURR(24)` |  |
| `GoodsBalanceQuantity` | `QUAN(24)` |  |
| `DeliveryCostBalAmtInCCCrcy` | `CURR(24)` |  |
| `DeliveryCostBalanceQuantity` | `QUAN(24)` |  |
| `GoodsReceiptAmountInCoCodeCrcy` | `CURR(24)` |  |
| `GoodsReceiptQty` | `QUAN(24)` |  |
| `InvoiceRcptAmtInCoCodeCrcy` | `CURR(24)` |  |
| `InvoiceReceiptQty` | `QUAN(24)` |  |
| `IsGoodsRcptGoodsAmtSurplus` | `CHAR(1)` | There is goods amount surplus in goods receipts. |
| `IsInvoiceGoodsAmountSurplus` | `CHAR(1)` | There is goods amount surplus in invoices. |
| `IsGdsRcptDelivCostAmtSurplus` | `CHAR(1)` | There is delivery cost amount surplus in goods receipts. |
| `IsInvoiceDelivCostAmtSurplus` | `CHAR(1)` | There is delivery cost amount surplus in invoices. |
| `IsGoodsRcptGoodsQtySurplus` | `CHAR(1)` | There is goods quantity surplus in goods receipts. |
| `IsInvoiceGoodsQtySurplus` | `CHAR(1)` | There is goods quantity surplus in invoices. |
| `IsGdsRcptDelivCostQtySurplus` | `CHAR(1)` | There is delivery cost quantity surplus in goods receipts. |
| `IsInvoiceDelivCostQtySurplus` | `CHAR(1)` | There is delivery cost quantity surplus in invoices. |
