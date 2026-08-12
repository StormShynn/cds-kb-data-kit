---
name: C_LATEPAYMENTTRAINDATA
description: "Risk of Late Payment Training dataset"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEPAYMENTTRAINDATA')/$value
semantic_en: "Risk of Late Payment Training dataset"
semantic_vi: "Risk of Late Payment Training dataset — CDS view tiêu dùng dựa trên P_TF_LATE_PAYMENT."
keywords:
  - "risk"
  - "late"
  - "payment"
  - "training"
  - "dataset"
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
  - consumption-view
  - IS-PS
  - IS-PS-BEI
  - payment
---
# C_LATEPAYMENTTRAINDATA

**Risk of Late Payment Training dataset**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEPAYMENTTRAINDATA')/$value) |

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
| `NrOfPromiseToPayCreated12Month` |  | |  |  | `INT4(10)` |  |
| `NrOfPrms2PUnfulfilled` |  | |  |  | `INT4(10)` |  |
| `NrOfPrms2PFulfilled` |  | |  |  | `INT4(10)` |  |
| `NrOfInstlmntPlnCrted12Mnth` |  | |  |  | `INT4(10)` |  |
| `NrOfInstlmntPlnUnfulfilled` |  | |  |  | `INT4(10)` |  |
| `NrOfInstlmntPlnFulfilled` |  | |  |  | `INT4(10)` |  |
| `NrOfPaytsAft60DaysFrmDueDay` |  | |  |  | `INT4(10)` |  |
| `NrOfPaytsWthn15DaysFrmDueDay` |  | |  |  | `INT4(10)` |  |
| `BusinessPartnerIndustrySector` |  | |  |  | `CHAR(10)` |  |
| `BhvrlInsgtsTgtVal` |  | |  |  | `CHAR(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEPAYMENTTRAINDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEPAYMENTTRAINDATA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLATEPAYTTRAIN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE]
@EndUserText.label: 'Risk of Late Payment Training dataset'
define view C_LatePaymentTrainData as select from P_TF_LATE_PAYMENT(P_SAPClient : $session.client , P_DatasetType : 'T', P_BalanceFlag : 'X') {
  
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
      @EndUserText.label: 'Promises to Pay created '
      NrOfPromiseToPayCreated12Month,
      @EndUserText.label: 'Promises to Pay unfulfilled'
      NrOfPrms2PUnfulfilled,
      @EndUserText.label: 'Promises to Pay fulfilled'      
      NrOfPrms2PFulfilled,
      @EndUserText.label: 'Installment Plans Created'
      NrOfInstlmntPlnCrted12Mnth,
      @EndUserText.label: 'Installment Plans unfulfilled'      
      NrOfInstlmntPlnUnfulfilled,
      @EndUserText.label: 'Installment Plans fulfilled'            
      NrOfInstlmntPlnFulfilled,
      @EndUserText.label: 'Number of payments after 60 days'            
      NrOfPaytsAft60DaysFrmDueDay,
      @EndUserText.label: 'Number of payments within 15 days'                  
      NrOfPaytsWthn15DaysFrmDueDay,
      @EndUserText.label: 'Industry Sector Details'                        
      BusinessPartnerIndustrySector,
      @EndUserText.label: 'Target Variable'
      BhvrlInsgtsTgtVal
}
```
