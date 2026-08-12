---
name: C_HOUSEBANKACCTANLYSQRY
description: "This CDS view retrieves the number of company codes. This CDS view provides the prerequisites for answering the following business question: What is the total number of company codes?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HOUSEBANKACCTANLYSQRY')/$value
semantic_en: "This CDS view retrieves the number of company codes. This CDS view provides the prerequisites for answering the following business question: What is the total number of company codes?"
semantic_vi: "House Bank Account Analysis - Query — CDS view tiêu dùng dựa trên I_HouseBankAccountAnalysisCube."
keywords:
  - "house"
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
  - bo:plant
  - component:FIN-FSCM-CLM-BAM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - lob:finance
  - account
  - bo:bank
---
# C_HOUSEBANKACCTANLYSQRY

**This CDS view retrieves the number of company codes. This CDS view provides the prerequisites for answering the following business question: What is the total number of company codes?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HOUSEBANKACCTANLYSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGroup` |  | |  |  | `CHAR(10)` | Bank Group ID |
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `CreditRating` |  | |  |  | `CHAR(3)` | Rating |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankInBankGroup` |  | |  |  | `CHAR(10)` | Bank In Bank Group |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `HouseBank` |  | |  |  | `CHAR(5)` | House Bank ID |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | House Bank Account |
| `NumberOfCompanyCodes` |  | |  |  | `INT4(10)` | Number of Company Codes |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HOUSEBANKACCTANLYSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HOUSEBANKACCTANLYSQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CHSBKACCTANLYSQ'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@Analytics.query: true
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey:true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'House Bank Account Analysis - Query'
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_HouseBankAcctAnlysQry
  as select from I_HouseBankAccountAnalysisCube
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
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  BankAccountInternalID,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  HouseBank,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY
  HouseBankAccount,
  NumberOfCompanyCodes
}
```
