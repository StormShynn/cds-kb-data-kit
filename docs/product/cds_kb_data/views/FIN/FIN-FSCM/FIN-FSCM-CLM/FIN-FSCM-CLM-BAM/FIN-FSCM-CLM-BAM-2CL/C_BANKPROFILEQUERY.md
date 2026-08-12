---
name: C_BANKPROFILEQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: How many banks are there in the system for each bank rating? What are the top banks with most bank accounts? What are the top banks used in most company codes?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPROFILEQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How many banks are there in the system for each bank rating? What are the top banks with most bank accounts? What are the top banks used in most company codes?"
semantic_vi: "Bank Profile - Query — CDS view tiêu dùng dựa trên I_BankProfile."
keywords:
  - "bank"
  - "profile"
  - "query"
  - "country"
  - "credit"
  - "rating"
  - "number"
  - "accounts"
  - "company"
  - "codes"
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
  - bo:companycode
---
# C_BANKPROFILEQUERY

**This CDS view provides the prerequisites for answering the following business questions: How many banks are there in the system for each bank rating? What are the top banks with most bank accounts? What are the top banks used in most company codes?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPROFILEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankCountry` |  | |  |  | `CHAR(3)` | Bank Country/Region Key |
| `Bank` |  | |  |  | `CHAR(15)` | Bank Keys |
| `CreditRating` |  | |  |  | `CHAR(3)` | Rating |
| `NumberOfBankAccounts` |  | |  |  | `INT4(10)` |  |
| `NumberOfCompanyCodes` |  | |  |  | `INT4(10)` |  |
| `NrOfBanksRated` |  | |  |  | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPROFILEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKPROFILEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIBANKPROFILEQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Bank Profile - Query'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics.query: true
@OData.publish: true
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_BankProfileQuery as select from I_BankProfile
{
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT_KEY
  BankCountry,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT_KEY
  Bank,
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT_KEY
  CreditRating,
  @EndUserText.label:'Number of Bank Accounts'
  NumberOfBankAccounts,
  @EndUserText.label:'Number of Company Codes'
  NumberOfCompanyCodes,
  @DefaultAggregation: #SUM
  @EndUserText.label:'Number of Banks'
  NrOfBanksRated
}
```
