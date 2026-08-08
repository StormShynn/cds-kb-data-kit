---
name: I_CADUNNINGHEADER
description: "Contract Accounting Dunning"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGHEADER')/$value
semantic_en: "Contract Accounting Dunning"
keywords:
  - "Contract Accounting Dunning Header"
tags:
  - FI
  - account
  - component:FI-CA-2CL
  - contract
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
  - metadata-only
---
# I_CADUNNINGHEADER

**Contract Accounting Dunning**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADUNNINGHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAMassRunDate` |  | |  |  | `DATS(8)` | Date ID |
| `CAMassRunID` |  | |  |  | `CHAR(6)` | Additional Identification Characteristic |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ContractAccount` |  | |  |  | `CHAR(12)` | Contract Account Number |
| `CADunningCounter` |  | |  |  | `NUMC(6)` | Counter for Several Dunning Notices to a Business Partner |
| `CACompanyCodeGroup` |  | |  |  | `CHAR(4)` | Company Code Group |
| `CAStandardCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `CAContract` |  | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `CASubApplication` |  | |  |  | `CHAR(1)` | Subapplication in Contract Accounts Receivable and Payable |
| `CALeadingContractAccount` |  | |  |  | `CHAR(12)` | Leading Contract Account in Dunning |
| `CAAlternativeDunningRecipient` |  | |  |  | `CHAR(10)` | Alternative Dunning Recipient |
| `CADunningProcedure` |  | |  |  | `CHAR(2)` | Dunning Procedure |
| `CADunningNoticeGroup` |  | |  |  | `CHAR(2)` | Grouping for Dunning Notices |
| `CADunningLevel` |  | |  |  | `NUMC(2)` | Dunning Level |
| `CADunningLevelCategory` |  | |  |  | `CHAR(2)` | Dunning Level Category |
| `CAContrAcctGroupForCollMgmt` |  | |  |  | `CHAR(12)` | Collection Management: Contract Account Group |
| `CAContractGroupForCollMgmt` |  | |  |  | `CHAR(20)` | Collection Management: Contract Group |
| `CAClosedItemGroupForCollMgmt` |  | |  |  | `DEC(15)` | Closed Item Group for Dunning |
| `CAClosedItemGroupOfLastDunning` |  | |  |  | `DEC(15)` | Item Group in Last Dunning Notice |
| `CAGroupingFieldForCollMgmt` |  | |  |  | `CHAR(12)` | Grouping Field for Dunning |
| `CAGroupingFieldOfLastDunning` |  | |  |  | `CHAR(12)` | Grouping Field in Last Dunning Notice |
| `CACollectionStrategy` |  | |  |  | `CHAR(2)` | Collection Strategy |
| `CACollectionStep` |  | |  |  | `CHAR(4)` | Collection Step |
| `CACollectionStepOfLastDunning` |  | |  |  | `CHAR(4)` | Collection Step of Last Dunning |
| `CAReplacedCollectionStep` |  | |  |  | `CHAR(4)` | Replaced Collection Step (Capacity Restriction) |
| `CAReplacedCollectionStrategy` |  | |  |  | `CHAR(2)` | Champion Collection Strategy |
| `CACollectionTestSeries` |  | |  |  | `CHAR(10)` | Collection Management: Test Series for Collection Strategies |
| `CACapForDunActyIsRestricted` |  | |  |  | `CHAR(1)` | Capacity for Dunning Activity Restricted |
| `CADunningNoticeMustBeReleased` |  | |  |  | `CHAR(1)` | Release Dunning |
| `CALatestReleaseDate` |  | |  |  | `DATS(8)` | Latest Release Date |
| `CAReleaseGroup` |  | |  |  | `CHAR(4)` | Release Group |
| `CANextDunningDate` |  | |  |  | `DATS(8)` | Date of Next Dunning |
| `CAIssueDate` |  | |  |  | `DATS(8)` | Date of Issue |
| `DunningIssueDate` |  | |  |  | `DATS(8)` | Date of Issue |
| `CADunningActivityRunDate` |  | |  |  | `DATS(8)` | Execution Date of Dunning Notice |
| `CAPaymentTargetDate` |  | |  |  | `DATS(8)` | Payment Target in Dunning Notice |
| `CAKeyDateForConsideredPayts` |  | |  |  | `DATS(8)` | Date Up to Which Payments Were Considered (Dunning) |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CADunningBalance` |  | |  |  | `CURR(13)` | Dunning Balance |
| `CADunningReductionAmount` |  | |  |  | `CURR(13)` | Total of Dunning Reductions |
| `CADunningChargesSchema` |  | |  |  | `CHAR(2)` | Charges Schedule |
| `CAAmountForDunningCharge1` |  | |  |  | `CURR(13)` | Dun. charge 1 |
| `CADocumentForDunningCharge1` |  | |  |  | `CHAR(12)` | Doc no. for charge 1 |
| `CATypeForDunningCharge1` |  | |  |  | `CHAR(2)` | Charge type f. charge 1 |
| `CAPostingCodeForDunningCharge1` |  | |  |  | `CHAR(1)` | Posting Key for Charges |
| `CAAmountForDunningCharge2` |  | |  |  | `CURR(13)` | Dun.charge 2 |
| `CADocumentForDunningCharge2` |  | |  |  | `CHAR(12)` | Doc number for charge 2 |
| `CATypeForDunningCharge2` |  | |  |  | `CHAR(2)` | Charge type f. charge 2 |
| `CAPostingCodeForDunningCharge2` |  | |  |  | `CHAR(1)` | Posting Key for Charges |
| `CAAmountForDunningCharge3` |  | |  |  | `CURR(13)` | Dun.charge 3 |
| `CADocumentForDunningCharge3` |  | |  |  | `CHAR(12)` | Doc number for charge 3 |
| `CATypeForDunningCharge3` |  | |  |  | `CHAR(2)` | Charge type f. charge 3 |
| `CAPostingCodeForDunningCharge3` |  | |  |  | `CHAR(1)` | Posting Key for Charges |
| `CADunningChargeAmount` |  | |  |  | `CURR(15)` |  |
| `CADunningInterestAmount` |  | |  |  | `CURR(13)` | Dunning interest in transaction currency |
| `CADocumentForDunningInterest` |  | |  |  | `CHAR(12)` | Doc no. of interest posting |
| `CACreditWorthinessBeforeDun` |  | |  |  | `NUMC(4)` | Creditworthiness Before Dunning |
| `CADunningNoticeIsReversed` |  | |  |  | `CHAR(1)` | Dunning Notice Reversed |
| `CAPaymentFormNumber` |  | |  |  | `CHAR(12)` | Payment Form Number |
| `CADunningNoticeIsInfoOnly` |  | |  |  | `CHAR(1)` | Group Not Due For Dunning/Information Only |
| `CorrespondenceKey` |  | |  |  | `CHAR(36)` | Correspondence Key |
| `CAIsSubmittedToCollAgency` |  | |  |  | `CHAR(1)` | Release for Submission to Collection Agency |
| `CAPaymentFormExternalNumber` |  | |  |  | `CHAR(30)` | External key payment form |
| `CAStatisticalItemCode` |  | |  |  | `CHAR(1)` | Type of Statistical Line Item |
| `CASubstituteDocumentCategory` |  | |  |  | `CHAR(1)` | Category of substitute document in FI-CA |
| `CASubstituteDocumentNumber` |  | |  |  | `CHAR(12)` | Number of the Substitute FI-CA Document |
| `CASuccessPercentage` |  | |  |  | `DEC(5)` | Success Percentage Rate Determined for Dunning |
| `CAMaximumDeferralDate` |  | |  |  | `DATS(8)` | Maximum Deferral Date for Related Items |
| `CADunningValuationRunDate` |  | |  |  | `DATS(8)` | Date of Success Valuation |
| `CADunningValuationStatus` |  | |  |  | `CHAR(1)` | Status of Success Valuation |
