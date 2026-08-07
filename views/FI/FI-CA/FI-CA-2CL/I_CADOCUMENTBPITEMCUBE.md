---
name: I_CADOCUMENTBPITEMCUBE
description: This CDS view represents the business partner item data of a subledger document in Contract Accounting. This CDS view provides the data to answer the following business questions: What is the volume of open receivables? How many open receivables are overdue? What is the volume of open credits? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTBPITEMCUBE')/$value
semantic_en: This CDS view represents the business partner item data of a subledger document in Contract Accounting. This CDS view provides the data to answer the following business questions: What is the volume of open receivables? How many open receivables are overdue? What is the volume of open credits? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - account
  - bo:businesspartner
  - component:FI-CA-2CL
  - contract
  - document
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CADOCUMENTBPITEMCUBE

**This CDS view represents the business partner item data of a subledger document in Contract Accounting. This CDS view provides the data to answer the following business questions: What is the volume of open receivables? How many open receivables are overdue? What is the volume of open credits? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTBPITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentNumber` |  | |  |  | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` |  | |  |  | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` |  | |  |  | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` |  | |  |  | `NUMC(3)` | Subitem for a Partial Clearing in Document |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `BusinessPlace` |  | |  |  | `CHAR(4)` | Business Place |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CAProviderContractItemNumber` |  | |  |  | `NUMC(6)` | Contract: Item Number |
| `CAAdditionalContract` |  | |  |  | `CHAR(20)` | Additional Reference Information |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CASubApplication` |  | |  |  | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `AltvContractAcctForCollvBills` |  | |  |  | `CHAR(12)` | Alternative Contract Account for Collective Bills |
| `CAReconciliationAccount` |  | |  |  | `CHAR(10)` | General ledger account |
| `CAApplicationArea` |  | |  |  | `CHAR(1)` | Application Area |
| `CAMainTransaction` |  | |  |  | `CHAR(4)` | Main Transaction for Line Item |
| `CASubTransaction` |  | |  |  | `CHAR(4)` | Subtransaction for Document Item |
| `CAAccountDeterminationCode` |  | |  |  | `CHAR(2)` | Account Determination ID |
| `CADoubtfulOrValueAdjmtCode` |  | |  |  | `NUMC(3)` | Doubtful Entry / Individual Value Adjustment |
| `CAAccountAssignmentCategory` |  | |  |  | `CHAR(2)` | Account Assignment Category |
| `CAAccountAssignment` |  | |  |  | `CHAR(50)` | Acct assnmnt string for industry-specific account assngments |
| `CADocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `CAIsDownPaymentRequest` |  | |  |  | `CHAR(1)` | Item is a Down Payment/Down Payment Request |
| `CAItemIsOnlyForSettlement` |  | |  |  | `CHAR(1)` | Item Can Only Be Cleared |
| `CAStatisticalItemCode` |  | |  |  | `CHAR(1)` | Type of Statistical Line Item |
| `CABPItemText` |  | |  |  | `CHAR(50)` | Item text |
| `CANumberOfRepetitionItems` |  | |  |  | `NUMC(3)` | Number of repetition items |
| `CARepetitionGroup` |  | |  |  | `NUMC(3)` | Repetition group |
| `CAStartDateOfBillingPeriod` |  | |  |  | `DATS(8)` | Lower Limit of Billing Period |
| `CAEndDateOfBillingPeriod` |  | |  |  | `DATS(8)` | Upper Limit of the Billing Period |
| `CAGroupingCodeForBPItems` |  | |  |  | `CHAR(3)` | Grouping Key for Displaying Open Items |
| `CAPeriodCode` |  | |  |  | `CHAR(4)` | Key for Period Assignment |
| `CAChangeIsForbidden` |  | |  |  | `CHAR(1)` | Printing - No Changes Possible |
| `CAInterestCode` |  | |  |  | `CHAR(2)` | Interest Key |
| `CARoundingItemCode` |  | |  |  | `CHAR(1)` | Type of Rounding Item |
| `CAReceivingCountry` |  | |  |  | `CHAR(3)` | Destination Country/Region (for Tax Reports) |
| `CAInternalPostingReasonCode` |  | |  |  | `CHAR(1)` | Reason for Automatic Creation of Posting |
| `CAWorkflowCheckReason` |  | |  |  | `CHAR(2)` | Check Reason for Workflows Acc. to Dual Control Principle |
| `CAWorkflowCheckProcess` |  | |  |  | `CHAR(1)` | Editing Process To Be Confirmed |
| `CANegativePostingControlCode` |  | |  |  | `NUMC(1)` | Control Field for Negative Posting |
| `CAPartnerSettlementStatus` |  | |  |  | `CHAR(1)` | Status of Partner Settlement Using Billable Items |
| `CAIsPartOfJointLiability` |  | |  |  | `CHAR(1)` | Item Is Part of a Collaborative Liability |
| `CADocumentOriginCode` |  | |  |  | `CHAR(2)` | Document Origin Key |
| `CASubstituteDocumentNumber` |  | |  |  | `CHAR(12)` | Number of the Substitute FI-CA Document |
| `CASubstituteDocumentCategory` |  | |  |  | `CHAR(1)` | Category of substitute document in FI-CA |
| `CAStatisticalCodeOfOriginItem` |  | |  |  | `CHAR(1)` | Statistical Key of the Triggering Item |
| `CADocumentNumberOfOriginItem` |  | |  |  | `CHAR(12)` | Number of Triggering Document |
| `CAReferenceDocument` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `CAPostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CANetDueDate` |  | |  |  | `DATS(8)` | Due date for net payment |
| `CADeferralDate` |  | |  |  | `DATS(8)` | Deferral To |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CAExchangeRate` |  | |  |  | `DEC(9)` | Absolute Exchange Rate |
| `ExchRateIsIndirectQuotation` |  | |  |  | `CHAR(1)` | Exchange Rate Is Indirect Quotation |
| `CAAmountInLocalCurrency` |  | |  |  | `CURR(13)` | Amount In Local Currency With +/- Signs |
| `CAAmountInTransactionCurrency` |  | |  |  | `CURR(13)` | Amount in Transaction Currency with +/- Sign |
| `CAAmountInSecondCurrency` |  | |  |  | `CURR(13)` | Amount in second parallel currency with +/- sign |
| `CAAmountInThirdCurrency` |  | |  |  | `CURR(13)` | Amount in third parallel currency with +/- sign |
| `CACashDiscountDueDate` |  | |  |  | `DATS(8)` | Due Date for Cash Discount |
| `CACashDiscountRate` |  | |  |  | `DEC(5)` | Cash Discount Percentage Rate |
| `CAEligibleAmountForCshDiscount` |  | |  |  | `CURR(13)` | Amount eligible for cash discount in document currency |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `CASupplementaryTaxCode` |  | |  |  | `CHAR(2)` | Supplementary Tax |
| `CATaxAmountInLocalCurrency` |  | |  |  | `CURR(13)` | Tax Amount in Local Currency With +/- Sign |
| `CATaxAmountInTransCurrency` |  | |  |  | `CURR(13)` | Tax Amount in Transaction Currency with +/- Sign |
| `CATaxAmountInSecondCurrency` |  | |  |  | `CURR(13)` | Tax Amount in Second Parallel Currency |
| `CATaxAmountInThirdCurrency` |  | |  |  | `CURR(13)` | Tax amount in third parallel currency |
| `CADownPaymentTaxAccount` |  | |  |  | `CHAR(10)` | Account for Posting Sales / Purchase Tax for Down Payments |
| `CADownPaymentOffsetTaxAccount` |  | |  |  | `CHAR(10)` | Account for Offsetting Tax Posting in Down Payments |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `CATaxDate` |  | |  |  | `DATS(8)` | Decisive Date for Calculating Taxes |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `CAWithholdingTaxSupplement` |  | |  |  | `CHAR(2)` | Withholding Tax Supplement |
| `CAWithholdingTaxCategory` |  | |  |  | `CHAR(1)` | Line Item Category From Withholding Tax View |
| `CABaseAmountForWithholdingTax` |  | |  |  | `CURR(13)` | Tax Base Amount |
| `CAWithholdingTaxAmount` |  | |  |  | `CURR(13)` | Withholding Tax Amount (in Document Currency) |
| `CAWithholdingTaxPercentage` |  | |  |  | `NUMC(6)` | Withholding Tax Percentage |
| `WithholdingTaxCertificate` |  | |  |  | `CHAR(10)` | Certificate Number of the Withholding Tax Exemption |
| `CAOtherTaxCode` |  | |  |  | `CHAR(2)` | Tax Code for Other Taxes |
| `CAGroupingCodeForTaxItems` |  | |  |  | `CHAR(6)` | Grouping Key for Tax Items |
| `CATaxPortionInLocalCurrency` |  | |  |  | `CURR(13)` | Tax Portion in FI-CA Local Currency |
| `CATaxPortionInTransCurrency` |  | |  |  | `CURR(13)` | Tax Portion in Document Currency |
| `CATaxIsCalculatedExternally` |  | |  |  | `CHAR(1)` | Tax on Sales/Purchases Was Calculated by Document |
| `CATaxAmountIsSetFromExternal` |  | |  |  | `CHAR(1)` | Internal Tax Characteristic for Tax Handling |
| `CAPaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CAPaymentCompanyCode` |  | |  |  | `CHAR(4)` | Company Code for Automatic Payment Transactions |
| `CAGroupingForPayment` |  | |  |  | `CHAR(10)` | Grouping field for automatic payments |
| `CAPaymentSpecificationCategory` |  | |  |  | `CHAR(1)` | Category of Payment Specification |
| `CAClearingStatus` |  | |  |  | `CHAR(1)` | Clearing Status |
| `CAClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `CAClearingDocumentNumber` |  | |  |  | `CHAR(12)` | Clearing Document or Printed Document |
| `CAPostingDateOfClearingDoc` |  | |  |  | `DATS(8)` | Clearing Document Posting Date |
| `CAClearingReason` |  | |  |  | `CHAR(2)` | Clearing Reason |
| `CAClearingCurrency` |  | |  |  | `CUKY(5)` | Clearing Currency |
| `CAClearingAmountInClearingCrcy` |  | |  |  | `CURR(13)` | Clearing Amount in Clearing Currency |
| `CATaxAmountInClearingCrcy` |  | |  |  | `CURR(13)` | Tax Amount in Clearing Currency |
| `CACashDiscAmountInClearingCrcy` |  | |  |  | `CURR(13)` | Cash Discount Granted/Surcharge Levied in Clearing Currency |
| `CAValueDateForClearing` |  | |  |  | `DATS(8)` | Clearing Value Date |
| `CAClearingRestrictionCode` |  | |  |  | `CHAR(1)` | Clearing restriction |
| `CAClearingPostingIsReset` |  | |  |  | `CHAR(1)` | Clearing posting reversed |
| `CAItemIsWithdrawn` |  | |  |  | `CHAR(1)` | Item Canceled |
| `CAItemIsExcludedFromDunning` |  | |  |  | `CHAR(1)` | Exclude Item from Dunning Run |
| `CADunningProcedure` |  | |  |  | `CHAR(2)` | Dunning Procedure |
| `CAGrpgCodeForTransfToCollAgcy` |  | |  |  | `NUMC(3)` | Collection Item |
| `CAIsIncludedInCollectionCase` |  | |  |  | `CHAR(1)` | Item Is Included in Collection Case |
| `CashPlanningGroup` |  | |  |  | `CHAR(10)` | Planning Group |
| `PlanningLevel` |  | |  |  | `CHAR(2)` | Planning level |
| `CAAdditionalDaysForCashMgmt` |  | |  |  | `NUMC(2)` | Cash Management Extra Days |
| `PlannedAmtInTransactionCrcy` |  | |  |  | `CURR(23)` | Planned Amount in Transaction Currency |
| `CAAltvBPForPayment` |  | |  |  | `CHAR(10)` | Alternative Business Partner for Payments |
| `CABankOfAltvBPForPayment` |  | |  |  | `CHAR(4)` | Bank Details ID of Payee |
| `CAAddressOfAltvBPForPayment` |  | |  |  | `CHAR(10)` | Address Number |
| `CACardOfAltvBPForPayment` |  | |  |  | `CHAR(6)` | Alternative Payment Card ID in Document |
| `SEPAMandateCAInternalID` |  | |  |  | `NUMC(6)` | Mandate Identifier |
| `CAGLPostingCurrency` |  | |  |  | `CUKY(5)` | Update Currency for General Ledger Transaction Figures |
| `CAGLPostingAmount` |  | |  |  | `CURR(13)` | Amount for Updating in General Ledger |
| `CAGLPostingTaxAmount` |  | |  |  | `CURR(13)` | Tax Amount for Update in General Ledger |
| `CAIsSeparateLineItemInGL` |  | |  |  | `CHAR(1)` | Create Line Item in General Ledger |
| `CAIsCashFlowItem` |  | |  |  | `CHAR(1)` | Document Contains Assignments from Cash Flows |
| `CACashFlowAccount` |  | |  |  | `CHAR(10)` | Originating Account in Cash Flow Anlaysis |
| `CACashFlowCompanyCode` |  | |  |  | `CHAR(4)` | Partner Company Code for Cash Flow Analysis |
| `CAPaymentPreNotificationCode` |  | |  |  | `CHAR(1)` | Item Included in a Payment Order |
| `CASEPAPreNotificationNumber` |  | |  |  | `CHAR(16)` | Number of Debit Memo Notification |
| `CASEPAPreNotifOriginCode` |  | |  |  | `CHAR(2)` | Origin of Direct Debit Pre-Notification |
| `CASEPAPreNotifExecutionDate` |  | |  |  | `DATS(8)` | Date of Execution of Direct Debit Pre-Notifcation |
| `CASEPAPreNotificationRqmtCode` |  | |  |  | `CHAR(1)` | Necessity of a Notification |
| `CARevenueDistrFinalRecipient` |  | |  |  | `CHAR(12)` | Contract Account of Final Recipient |
| `CARevenueDistrCurrentStatus` |  | |  |  | `CHAR(1)` | Current Distribution Status |
| `CARevenueDistrLastStatus` |  | |  |  | `CHAR(1)` | Last Distribution Status Reported |
| `CACurrentFactoringStatusOfRbl` |  | |  |  | `CHAR(1)` | Factoring: Current Status of Receivable |
| `CAFactoringCheckStsForClrgInfo` |  | |  |  | `CHAR(1)` | Factoring: Check Status for Clearing Information |
| `CAFactoringItem` |  | |  |  | `NUMC(3)` | Subitems in Factoring |
