---
name: C_BANKACCTANALYSISQUERY
description: "This CDS view retrieves the number of rated banks and the number of bank accounts of certain bank groups. This CDS view provides the prerequisites for answering the following business questions: What is the total number of rated banks? What is the total number of bank accounts in a certain bank group?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKACCTANALYSISQUERY')/$value
semantic_en: "This CDS view retrieves the number of rated banks and the number of bank accounts of certain bank groups. This CDS view provides the prerequisites for answering the following business questions: What is the total number of rated banks? What is the total number of bank accounts in a certain bank group?"
semantic_vi: "Bank Account Analysis - Query — CDS view tiêu dùng dựa trên I_BankAccountAnalysisCube."
keywords:
  - "bank"
  - "account"
  - "analysis"
  - "query"
  - "group"
  - "country"
  - "credit"
  - "rating"
  - "company"
  - "code"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
---
# C_BANKACCTANALYSISQUERY

**This CDS view retrieves the number of rated banks and the number of bank accounts of certain bank groups. This CDS view provides the prerequisites for answering the following business questions: What is the total number of rated banks? What is the total number of bank accounts in a certain bank group?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKACCTANALYSISQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Key |
| `CreditRating` |  | |  |  | `CHAR(3)` | Rating |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankInBankGroup` |  | |  |  | `CHAR(10)` | Bank In Bank Group |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `NumberOfBankAccounts` |  | |  |  | `INT4(10)` | Number of Bank Accounts |
| `NrOfBanksRated` |  | |  | `cast(1 as fclm_bam_bank_count)` | `INT4(10)` | Number of Banks |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKACCTANALYSISQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKACCTANALYSISQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CBKACCTANLYSQ'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #D
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@Analytics.query: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Bank Account Analysis - Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_BankAcctAnalysisQuery
  as select from I_BankAccountAnalysisCube
{
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #TEXT_KEY
  BankGroup,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #TEXT_KEY
  BankCountry,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #TEXT_KEY
  Bank,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #TEXT_KEY
  CreditRating,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  CompanyCode,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  BankInBankGroup,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  @AnalyticsDetails.query.display: #KEY
  BankAccountInternalID,
  NumberOfBankAccounts,
  @DefaultAggregation: #FORMULA
  @AnalyticsDetails: {
    exceptionAggregationSteps: [{
      exceptionAggregationBehavior: #SUM,
      exceptionAggregationElements: ['BankCountry', 'Bank' ] }]
  }
  cast(1 as  fclm_bam_bank_count) as NrOfBanksRated
}
```
