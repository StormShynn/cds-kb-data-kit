---
name: I_LATEPAYMENTPREDICTDATACUBE
description: "Apply dataset for Late Payment - Cube"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LATEPAYMENTPREDICTDATACUBE')/$value
semantic_en: "Apply dataset for Late Payment - Cube"
semantic_vi: "Apply dataset for Late Payment - Cube — CDS view giao diện dựa trên P_TF_LATE_PAYMENT."
keywords:
  - "apply"
  - "dataset"
  - "for"
  - "late"
  - "payment"
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
  - payment
---
# I_LATEPAYMENTPREDICTDATACUBE

**Apply dataset for Late Payment - Cube**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LATEPAYMENTPREDICTDATACUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` | ✓ | |  |  | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsSubAccountNumber` | ✓ | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsCalDate` | ✓ | |  |  | `DATN(8)` | Date |
| `BusinessPartnerType` |  | |  |  | `CHAR(4)` | Business Partner Type |
| `BPGroupingCharacter` |  | |  |  | `CHAR(10)` | Grouping Characteristic |
| `NrOfLatePaymentPenalty3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfCreatedAudit3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfAuditAssessment3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfObjection3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmission3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoSubmission3Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoSubmission6Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfNoSubmission12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `DueAmountInLocalCurrency` |  | |  |  | `DEC(31)` |  |
| `NrOfMonthWithAuthority` |  | |  |  | `INT4(10)` |  |
| `NumberOfBankruptcies` |  | |  |  | `INT1(3)` |  |
| `FilgAmtChgCurAndPrevMonthValue` |  | |  |  | `DEC(31)` |  |
| `FilgAmtChgCurAndPrevYearValue` |  | |  |  | `DEC(31)` |  |
| `NumberOfMonthDebtAmountOverdue` |  | |  |  | `INT1(3)` |  |
| `ScaledDebtAmountValue` |  | |  |  | `DEC(31)` |  |
| `NrOfMonthSincePayer` |  | |  |  | `INT1(3)` |  |
| `BusinessPartnerStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `DeviationInFilingAmount` |  | |  |  | `DEC(31)` |  |
| `AvgNrOfOverdueDay` |  | |  |  | `DEC(31)` |  |
| `ExternalEventHasAffected` |  | |  |  | `INT1(3)` |  |
| `BhvrlInsgtsTgtVal` |  | |  |  | `CHAR(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LATEPAYMENTPREDICTDATACUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LATEPAYMENTPREDICTDATACUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ILATEPAYTPREDC'
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
@EndUserText.label: 'Apply dataset for Late Payment - Cube'
define view I_LatePaymentPredictDataCube
  as select from P_TF_LATE_PAYMENT(P_SAPClient : $session.client , P_DatasetType : 'P', P_BalanceFlag : 'X')
{
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
      @EndUserText.label: 'Late Payment Penalties (past 3 mos)'
      NrOfLatePaymentPenalty3Month,
      @EndUserText.label: 'Late Submission Penalties (past 3 mos)'
      NrOfLateSubmsnPenalty3Month,
      @EndUserText.label: 'Audits Created (past 3 mos)'
      NrOfCreatedAudit3Month,
      @EndUserText.label: 'Audits Assessed (past 3 mos)'
      NrOfAuditAssessment3Month,
      @EndUserText.label: 'Objections (past 3 mos)'
      NrOfObjection3Month,
      @EndUserText.label: 'Late Submissions (past 3 mos)'
      NrOfLateSubmission3Month,
      @EndUserText.label: 'No Submissions (past 3 mos)'
      NrOfNoSubmission3Month,
      @EndUserText.label: 'Late Submissions (past 6 mos)'
      NumberOfLateSubmission6Month,
      @EndUserText.label: 'No Submissions (past 6 mos)'
      NrOfNoSubmission6Month,
      @EndUserText.label: 'Late Submissions (past 12 mos)'
      NumberOfLateSubmission12Month,
      @EndUserText.label: 'No Submissions (past 12 mos)'
      NumberOfNoSubmission12Month,
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
      @EndUserText.label: 'Debt Amount'
      DueAmountInLocalCurrency,
      @EndUserText.label: 'Months with Authority'
      NrOfMonthWithAuthority,
      @EndUserText.label: 'Number of Bankruptcies'
      NumberOfBankruptcies,
      @EndUserText.label: 'Change in Filing Amt. (1 month)'
      FilgAmtChgCurAndPrevMonthValue,
      @EndUserText.label: 'Change in Filing Amt. (1 year)'
      FilgAmtChgCurAndPrevYearValue,
      @EndUserText.label: 'Months Debt Amount is overdue'
      NumberOfMonthDebtAmountOverdue,
      @EndUserText.label: 'Scaled Debt Amount'
      ScaledDebtAmountValue,
      @EndUserText.label: 'Months since on-time payer'
      NrOfMonthSincePayer,
      @EndUserText.label: 'Business Partner Status'
      BusinessPartnerStatusName,
      @EndUserText.label: 'Deviation in Filing Amount'
      DeviationInFilingAmount,
      @EndUserText.label: 'Average days filing overdue'
      AvgNrOfOverdueDay,
      @EndUserText.label: 'External Event Occured'
      ExternalEventHasAffected,
      @EndUserText.label: 'Target Variable'
      BhvrlInsgtsTgtVal
}
```
