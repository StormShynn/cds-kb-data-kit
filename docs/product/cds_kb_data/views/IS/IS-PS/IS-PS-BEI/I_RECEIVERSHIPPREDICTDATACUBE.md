---
name: I_RECEIVERSHIPPREDICTDATACUBE
description: "Apply dataset for Receivership - Cube"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVERSHIPPREDICTDATACUBE')/$value
semantic_en: "Apply dataset for Receivership - Cube"
semantic_vi: "Apply dataset for Receivership - Cube — CDS view giao diện dựa trên P_TF_RECEIVERSHIP."
keywords:
  - "apply"
  - "dataset"
  - "for"
  - "receivership"
  - "cube"
  - "business"
  - "partner"
  - "bhvrl"
  - "insgts"
  - "account"
  - "number"
  - "date"
  - "type"
tags:
  - IS
  - component:IS-PS-BEI
  - interface-view
  - IS-PS
  - IS-PS-BEI
---
# I_RECEIVERSHIPPREDICTDATACUBE

**Apply dataset for Receivership - Cube**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVERSHIPPREDICTDATACUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` | ✓ | |  |  | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsSubAccountNumber` | ✓ | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsCalDate` | ✓ | |  |  | `DATN(8)` | Date |
| `BusinessPartnerType` |  | |  |  | `CHAR(4)` | Business Partner Type |
| `BPGroupingCharacter` |  | |  |  | `CHAR(10)` | Grouping Characteristic |
| `NrOfLatePaymentPenalty12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfTaxCorrection12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfInterestDocument12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfTransferPosting12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfCreatedAudit12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfAuditAssessment12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfObjection12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfNoSubmission12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLatePaymentPenalty6Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLatePaymentPenalty2Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission2Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty2Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument2Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfDunning6Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfDunning2Month` |  | |  |  | `INT1(3)` |  |
| `DueAmountInLocalCurrency` |  | |  |  | `DEC(13)` |  |
| `ChgInDueAmtValue` |  | |  |  | `DEC(13)` |  |
| `ExternalEventHasAffected` |  | |  |  | `INT1(3)` |  |
| `BhvrlInsgtsTgtVal` |  | |  |  | `CHAR(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVERSHIPPREDICTDATACUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECEIVERSHIPPREDICTDATACUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IRCVRSHIPPREDC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: ['PREAGGR_BEFORE_JOIN', 'NO_JOIN_THRU_AGGR', 'USE_OLAP_PLAN']
@EndUserText.label: 'Apply dataset for Receivership - Cube'
define view I_ReceivershipPredictDataCube as select from P_TF_RECEIVERSHIP(P_SAPClient : $session.client , P_DatasetType : 'P', P_BalanceFlag: 'X') {
    @EndUserText.label: 'Business Partner'
  key BusinessPartner,
      @EndUserText.label: 'Account Number'
  key BhvrlInsgtsAccountNumber,
      @EndUserText.label: 'Subaccount Number'
  key BhvrlInsgtsSubAccountNumber,
      @EndUserText.label: 'Calendar Date'
  key BhvrlInsgtsCalDate,
  @EndUserText.label: 'Business Partner Type'
      BusinessPartnerType,
      @EndUserText.label: 'Business Partner Group'
      BPGroupingCharacter,
      @EndUserText.label: 'Late Payment Penalties (past 12 mos)'
  NrOfLatePaymentPenalty12Month,
  @EndUserText.label: 'Late Submission Penalties (past 12 mos)'
  NrOfLateSubmsnPenalty12Month,
  @EndUserText.label: 'Late Submissions (past 12 mos)'
  NumberOfLateSubmission12Month,
  @EndUserText.label: 'Tax Corrections (past 12 mos)'
  NumberOfTaxCorrection12Month,
  @EndUserText.label: 'Interest Documents (past 12 mos)'
  NrOfInterestDocument12Month,
  @EndUserText.label: 'No Clearings (past 12 mos)'
  NrOfNoClearingDocument12Month,
  @EndUserText.label: 'Transfer Postings (past 12 mos)'
  NumberOfTransferPosting12Month,
   @EndUserText.label: 'Audits Created (past 12 mos)'
  NumberOfCreatedAudit12Month,
  @EndUserText.label: 'Audits Assessed (past 12 mos)'
  NumberOfAuditAssessment12Month,
  @EndUserText.label: 'Objections (past 12 mos)'
  NumberOfObjection12Month,
  @EndUserText.label: 'No Submissions (past 12 mos)'
  NumberOfNoSubmission12Month,
  @EndUserText.label: 'No Clearings (past 6 mos)'
  NrOfNoClearingDocument6Month,
  @EndUserText.label: 'Late Payment Penalties (past 6 mos)'
  NrOfLatePaymentPenalty6Month,
  @EndUserText.label: 'Late Submissions (past 6 mos)'
  NumberOfLateSubmission6Month,
  @EndUserText.label: 'Late Submission Penalties (past 6 mos)'
  NrOfLateSubmsnPenalty6Month,
  @EndUserText.label: 'Late Payment Penalties (past 2 mos)'
  NrOfLatePaymentPenalty2Month,
  @EndUserText.label: 'Late Submissions (past 2 mos)'
  NumberOfLateSubmission2Month,
  @EndUserText.label: 'Late Submission Penalties (past 2 mos)'
  NrOfLateSubmsnPenalty2Month,
  @EndUserText.label: 'No Clearings (past 2 mos)'
  NrOfNoClearingDocument2Month,
  @EndUserText.label: 'Level 1 Non-Filer Dunning'
  NumberOfLevel01DunningNonFiler,
  @EndUserText.label: 'Level 2 Non-Filer Dunning'
  NumberOfLevel02DunningNonFiler,
  @EndUserText.label: 'Level 3 Non-Filer Dunning'
  NumberOfLevel03DunningNonFiler,
  @EndUserText.label: 'Level 4 Non-Filer Dunning'
  NumberOfLevel04DunningNonFiler,
  @EndUserText.label: 'Level 1 Non-Payer Dunning'
  NumberOfLevel01DunningNonPayer,
  @EndUserText.label: 'Level 2 Non-Payer Dunning'
  NumberOfLevel02DunningNonPayer,
  @EndUserText.label: 'Level 3 Non-Payer Dunning'
  NumberOfLevel03DunningNonPayer,
  @EndUserText.label: 'Level 4 Non-Payer Dunning'
  NumberOfLevel04DunningNonPayer,
  @EndUserText.label: 'Dunnings in 6 months'
  NumberOfDunning6Month,
  @EndUserText.label: 'Dunnings in 2 months'
  NumberOfDunning2Month,
   @EndUserText.label: 'Debt Amount'
  DueAmountInLocalCurrency,
  @EndUserText.label: 'Change in Debt Amount'
  ChgInDueAmtValue,
  @EndUserText.label: 'External Event Occured'
  ExternalEventHasAffected,
  @EndUserText.label: 'Target Variable'
  BhvrlInsgtsTgtVal
}
```
