---
name: C_BANKGROUPPROFILEQUERY
description: "This CDS view provides the prerequisites for answering the following business questions: What are the bank groups that have most bank accounts? What are the bank groups that are used in most company codes?"
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPPROFILEQUERY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the bank groups that have most bank accounts? What are the bank groups that are used in most company codes?"
semantic_vi: "Bank Group Profile - Query — CDS view tiêu dùng dựa trên I_BankGroupProfile."
keywords:
  - "bank"
  - "group"
  - "profile"
  - "query"
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
# C_BANKGROUPPROFILEQUERY

**This CDS view provides the prerequisites for answering the following business questions: What are the bank groups that have most bank accounts? What are the bank groups that are used in most company codes?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPPROFILEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankGroup` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `NumberOfBankAccounts` |  | |  |  | `INT4(10)` |  |
| `NumberOfCompanyCodes` |  | |  |  | `INT4(10)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPPROFILEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_BANKGROUPPROFILEQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIBNKGPPROFILEQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Bank Group Profile - Query'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics.query: true
@OData.publish: true
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
define view C_BankGroupProfileQuery 
  as select from I_BankGroupProfile
{
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT_KEY
  @EndUserText.label:'Bank Group'
  BankGroup,
  @EndUserText.label:'Number of Bank Accounts'
  NumberOfBankAccounts,
  @EndUserText.label:'Number of Company Codes'
  NumberOfCompanyCodes
}
```
