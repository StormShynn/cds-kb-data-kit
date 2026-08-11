---
name: I_CADOCUMENTBPITEMCUBE
description: "This CDS view represents the business partner item data of a subledger document in Contract Accounting. This CDS view provides the data to answer the following business questions: What is the volume of open receivables? How many open receivables are overdue? What is the volume of open credits? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTBPITEMCUBE')/$value
semantic_en: "This CDS view represents the business partner item data of a subledger document in Contract Accounting. This CDS view provides the data to answer the following business questions: What is the volume of open receivables? How many open receivables are overdue? What is the volume of open credits? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Document Business Partner Item - Cube — CDS view giao diện (transactional data) dựa trên I_CADocumentBPItem."
keywords:
  - "document"
  - "business"
  - "partner"
  - "item"
  - "cube"
  - "number"
  - "repetition"
  - "company"
  - "code"
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
---
# I_CADOCUMENTBPITEMCUBE

**This CDS view represents the business partner item data of a subledger document in Contract Accounting. This CDS view provides the data to answer the following business questions: What is the volume of open receivables? How many open receivables are overdue? What is the volume of open credits? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTBPITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentNumber` | ✓ | |  |  | `CHAR(12)` | Number of a FI-CA Document |
| `CARepetitionItemNumber` | ✓ | |  |  | `NUMC(3)` | Repetition Item in FI-CA Document |
| `CABPItemNumber` | ✓ | |  |  | `NUMC(4)` | Item Number in FI-CA Document |
| `CASubItemNumber` | ✓ | |  |  | `NUMC(3)` | Subitem for a Partial Clearing in Document |
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
| `CAAccountAssignment` |  | |  |  | `CHAR(50)` | Account Assgt String for Application-Specific Account Assgts |
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
| `CAWorkflowCheckProcess` |  | |  |  | `CHAR(1)` | Editing Process to Be Confirmed |
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
| `CAEligibleAmountForCshDiscount` |  | |  |  | `CURR(13)` | Amount Eligible for Cash Discount in Document Currency |
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
| `PlanningLevel` |  | |  |  | `CHAR(2)` | Planning Level |
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
| `_AcctAssgmtCat` |  | |  | `_CAAccountAssignmentCategory` |  |  |
| `_AltvBPForPayment` |  | |  | `_PaytAltvBusinessPartner` |  |  |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_CAHeaderCollvBills` |  | |  | `_CollvBillsAltvContractAccount` |  |  |
| `_CAHeaderFinalRec` |  | |  | `_RevnDistrFnlRcpntContrAccount` |  |  |
| `_ProviderContract` |  | |  | `_CAProviderContract` |  |  |
| `_CAHeader` |  | |  | `_ContractAccount` |  |  |
| `_CAPartner` |  | |  | `_ContractAccountPartner` |  |  |
| `_ClearingReason` |  | |  | `_CAClearingReason` |  |  |
| `_ClrgRstrcnCode` |  | |  | `_CAClearingRestrictionCode` |  |  |
| `_CompCode` |  | |  | `_CompanyCode` |  |  |
| `_CompCodeCashFlow` |  | |  | `_CashFlowCompanyCode` |  |  |
| `_CompCodePayt` |  | |  | `_PaymentCompanyCode` |  |  |
| `_Currency` |  | |  | `_TransactionCurrency` |  |  |
| `_DocType` |  | |  | `_CADocumentType` |  |  |
| `_DunningProcedure` |  | |  | `_CADunningProcedure` |  |  |
| `_InterestCode` |  | |  | `_CAInterestCode` |  |  |
| `_MainTransaction` |  | |  | `_CAMainTransaction` |  |  |
| `_PeriodCode` |  | |  | `_CAPeriodCode` |  |  |
| `_SubTransaction` |  | |  | `_CASubTransaction` |  |  |
| `_WorkflowCheckProcess` |  | |  | `_CAWorkflowCheckProcess` |  |  |
| `_WorkflowCheckReason` |  | |  | `_CAWorkflowCheckReason` |  |  |
| `_DocHeader` | | ✓ | | | | |
| `_SubstitDocHeader` | | ✓ | | | | |
| `_ClearingDocHeader` | | ✓ | | | | |
| `_OriginDocHeader` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_ClearingCurrency` | | ✓ | | | | |
| `_CAClearingDocument` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_GLPostingCurrency` | | ✓ | | | | |
| `_CAOriginDocument` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_ReceivingCountry` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_CASubstituteDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DocHeader` | `I_CADocumentHeader` | [1..1] |
| `_SubstitDocHeader` | `I_CADocumentHeader` | [0..1] |
| `_ClearingDocHeader` | `I_CADocumentHeader` | [0..1] |
| `_OriginDocHeader` | `I_CADocumentHeader` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTBPITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTBPITEMCUBE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]

@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
              delta.changeDataCapture: { mapping:[ { table        : 'dfkkop',role: #MAIN,
                                                     viewElement  : ['CADocumentNumber','CARepetitionItemNumber', 'CABPItemNumber' , 'CASubItemNumber'],
                                                     tableElement : ['opbel','opupw','opupk' ,'opupz' ] } ] } } }

@EndUserText.label: 'Document Business Partner Item - Cube'

@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations: true }

@ObjectModel: { modelingPattern:#ANALYTICAL_CUBE,
                sapObjectNodeType.name: 'ContrAcctgDocumentBusPartItem',
                supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType:{ serviceQuality: #C,
                            sizeCategory: #XXL,
                            dataClass: #TRANSACTIONAL } }

@VDM.viewType: #COMPOSITE

define view entity I_CADocumentBPItemCube
  as select from I_CADocumentBPItem

  /* deprecated associations */
  association [1..1] to I_CADocumentHeader as _DocHeader         on $projection.CADocumentNumber = _DocHeader.CADocumentNumber
  association [0..1] to I_CADocumentHeader as _SubstitDocHeader  on $projection.CASubstituteDocumentNumber = _SubstitDocHeader.CADocumentNumber
  association [0..1] to I_CADocumentHeader as _ClearingDocHeader on $projection.CAClearingDocumentNumber = _ClearingDocHeader.CADocumentNumber
  association [0..1] to I_CADocumentHeader as _OriginDocHeader   on $projection.CADocumentNumberOfOriginItem = _OriginDocHeader.CADocumentNumber
  /* end deprecated associations */

{
  key CADocumentNumber,
  key CARepetitionItemNumber,
  key CABPItemNumber,
  key CASubItemNumber,
      @ObjectModel.foreignKey.association: '_CompCode'
      CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,
      BusinessPlace,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      ProfitCenter,
      @ObjectModel.foreignKey.association: '_Division'
      Division,
      PersonnelNumber,
      @ObjectModel.foreignKey.association: '_PartnerCompany'
      PartnerCompany,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,
      CAContract,
      CAProviderContractItemNumber,
      CAAdditionalContract,
      @ObjectModel.foreignKey.association: '_CAHeader'
      ContractAccount,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      CASubApplication,
      @ObjectModel.foreignKey.association: '_CAHeaderCollvBills'
      AltvContractAcctForCollvBills,
      CAReconciliationAccount,
      @ObjectModel.foreignKey.association: '_ApplArea'
      CAApplicationArea,
      @ObjectModel.foreignKey.association: '_MainTransaction'
      CAMainTransaction,
      @ObjectModel.foreignKey.association: '_SubTransaction'
      CASubTransaction,
      CAAccountDeterminationCode,
      CADoubtfulOrValueAdjmtCode,
      @ObjectModel.foreignKey.association: '_AcctAssgmtCat'
      CAAccountAssignmentCategory,
      CAAccountAssignment,
      @ObjectModel.foreignKey.association: '_DocType'
      CADocumentType,
      CAIsDownPaymentRequest,
      @Semantics.booleanIndicator
      CAItemIsOnlyForSettlement,
      CAStatisticalItemCode,
      CABPItemText,
      CANumberOfRepetitionItems,
      CARepetitionGroup,
      CAStartDateOfBillingPeriod,
      CAEndDateOfBillingPeriod,
      CAGroupingCodeForBPItems,
      @ObjectModel.foreignKey.association: '_PeriodCode'
      CAPeriodCode,
      CAChangeIsForbidden,
      @ObjectModel.foreignKey.association: '_InterestCode'
      CAInterestCode,
      CARoundingItemCode,
      @ObjectModel.foreignKey.association: '_ReceivingCountry'
      CAReceivingCountry,
      CAInternalPostingReasonCode,
      @ObjectModel.foreignKey.association: '_WorkflowCheckReason'
      CAWorkflowCheckReason,
      @ObjectModel.foreignKey.association: '_WorkflowCheckProcess'
      CAWorkflowCheckProcess,
      CANegativePostingControlCode,
      CAPartnerSettlementStatus,
      @Semantics.booleanIndicator
      CAIsPartOfJointLiability,
      CADocumentOriginCode,
      @ObjectModel.foreignKey.association: '_SubstitDocHeader'
      CASubstituteDocumentNumber,
      CASubstituteDocumentCategory,
      CAStatisticalCodeOfOriginItem,
      @ObjectModel.foreignKey.association: '_OriginDocHeader'
      CADocumentNumberOfOriginItem,
      CAReferenceDocument,
      DocumentDate,
      CAPostingDate,
      CANetDueDate,
      CADeferralDate,
      @ObjectModel.foreignKey.association: '_Currency'
      TransactionCurrency,
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      CompanyCodeCurrency,
      CAExchangeRate,
      ExchRateIsIndirectQuotation,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CAAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CAAmountInTransactionCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CAAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CAAmountInThirdCurrency,
      CACashDiscountDueDate,
      CACashDiscountRate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'

      CAEligibleAmountForCshDiscount,
      TaxCode,
      CASupplementaryTaxCode,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CATaxAmountInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CATaxAmountInTransCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CATaxAmountInSecondCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CATaxAmountInThirdCurrency,
      CADownPaymentTaxAccount,
      CADownPaymentOffsetTaxAccount,
      TaxJurisdiction,
      CATaxDate,
      WithholdingTaxCode,
      CAWithholdingTaxSupplement,
      CAWithholdingTaxCategory,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CABaseAmountForWithholdingTax,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CAWithholdingTaxAmount,
      CAWithholdingTaxPercentage,
      WithholdingTaxCertificate,
      CAOtherTaxCode,
      CAGroupingCodeForTaxItems,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      CATaxPortionInLocalCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CATaxPortionInTransCurrency,
      CATaxIsCalculatedExternally,
      CATaxAmountIsSetFromExternal,
      CAPaymentMethod,
      @ObjectModel.foreignKey.association: '_CompCodePayt'
      CAPaymentCompanyCode,
      CAGroupingForPayment,
      CAPaymentSpecificationCategory,
      CAClearingStatus,
      CAClearingDate,
      @ObjectModel.foreignKey.association: '_ClearingDocHeader'
      CAClearingDocumentNumber,
      CAPostingDateOfClearingDoc,
      @ObjectModel.foreignKey.association: '_ClearingReason'
      CAClearingReason,
      @ObjectModel.foreignKey.association: '_ClearingCurrency'
      CAClearingCurrency,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      CAClearingAmountInClearingCrcy,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      CATaxAmountInClearingCrcy,
      @Semantics.amount.currencyCode: 'CAClearingCurrency'
      CACashDiscAmountInClearingCrcy,
      CAValueDateForClearing,
      @ObjectModel.foreignKey.association: '_ClrgRstrcnCode'
      CAClearingRestrictionCode,
      CAClearingPostingIsReset,
      CAItemIsWithdrawn,
      CAItemIsExcludedFromDunning,
      @ObjectModel.foreignKey.association: '_DunningProcedure'
      CADunningProcedure,
      CAGrpgCodeForTransfToCollAgcy,
      CAIsIncludedInCollectionCase,
      CashPlanningGroup,
      PlanningLevel,
      CAAdditionalDaysForCashMgmt,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PlannedAmtInTransactionCrcy,
      @ObjectModel.foreignKey.association: '_AltvBPForPayment'
      CAAltvBPForPayment,
      CABankOfAltvBPForPayment,
      CAAddressOfAltvBPForPayment,
      CACardOfAltvBPForPayment,
      SEPAMandateCAInternalID,
      CAGLPostingCurrency,
      @Semantics.amount.currencyCode: 'CAGLPostingCurrency'
      CAGLPostingAmount,
      @Semantics.amount.currencyCode: 'CAGLPostingCurrency'
      CAGLPostingTaxAmount,
      CAIsSeparateLineItemInGL,
      CAIsCashFlowItem,
      CACashFlowAccount,
      @ObjectModel.foreignKey.association: '_CompCodeCashFlow'
      CACashFlowCompanyCode,
      CAPaymentPreNotificationCode,
      CASEPAPreNotificationNumber,
      CASEPAPreNotifOriginCode,
      CASEPAPreNotifExecutionDate,
      CASEPAPreNotificationRqmtCode,
      @ObjectModel.foreignKey.association: '_CAHeaderFinalRec'
      CARevenueDistrFinalRecipient,
      CARevenueDistrCurrentStatus,
      CARevenueDistrLastStatus,
      CACurrentFactoringStatusOfRbl,
      CAFactoringCheckStsForClrgInfo,
      CAFactoringItem,

      /* Associations */
      _CAAccountAssignmentCategory   as _AcctAssgmtCat,
      _PaytAltvBusinessPartner       as _AltvBPForPayment,
      _CAApplicationArea             as _ApplArea,
      _BusinessArea,
      _BusinessPartner,
      _CollvBillsAltvContractAccount as _CAHeaderCollvBills,
      _RevnDistrFnlRcpntContrAccount as _CAHeaderFinalRec,
      _CAProviderContract            as _ProviderContract,
      _ContractAccount               as _CAHeader,
      _ContractAccountPartner        as _CAPartner,
      _CASubApplication,
      _ClearingCurrency,
      _CAClearingDocument,
      _CAClearingReason              as _ClearingReason,
      _CAClearingRestrictionCode     as _ClrgRstrcnCode,
      _CompanyCodeCurrency,
      _CompanyCode                   as _CompCode,
      _CashFlowCompanyCode           as _CompCodeCashFlow,
      _PaymentCompanyCode            as _CompCodePayt,
      _TransactionCurrency           as _Currency,
      _Division,
      _CADocument,
      _CADocumentType                as _DocType,
      _CADunningProcedure            as _DunningProcedure,
      _GLPostingCurrency,
      _CAInterestCode                as _InterestCode,
      _CAMainTransaction             as _MainTransaction,
      _CAOriginDocument,
      _PartnerCompany,
      _CAPeriodCode                  as _PeriodCode,
      _ReceivingCountry,
      _Segment,
      _CASubstituteDocument,
      _CASubTransaction              as _SubTransaction,
      _CAWorkflowCheckProcess        as _WorkflowCheckProcess,
      _CAWorkflowCheckReason         as _WorkflowCheckReason,

      /* deprecated fields */
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocument'
      _DocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CASubstituteDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CASubstituteDocument'
      _SubstitDocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAClearingDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAClearingDocument'
      _ClearingDocHeader,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CAOriginDocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CAOriginDocument'
      _OriginDocHeader
}
```
