---
name: I_FINTRANSCONTRACTACTIVITY
description: "This CDS view provides access to data of financial transaction contract activity. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: When was the financial transaction contract activity concluded? Which exhange rate was aggreed on?"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONTRACTACTIVITY')/$value
semantic_en: "This CDS view provides access to data of financial transaction contract activity. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: When was the financial transaction contract activity concluded? Which exhange rate was aggreed on?"
semantic_vi: "Financial Transaction Contract Activity — CDS view giao diện dựa trên I_FinTransActivity."
keywords:
  - "financial"
  - "transaction"
  - "contract"
  - "activity"
  - "company"
  - "code"
  - "instrument"
  - "trans"
  - "acty"
  - "conclusion"
  - "date"
  - "time"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - contract
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_FINTRANSCONTRACTACTIVITY

**This CDS view provides access to data of financial transaction contract activity. You can therefore use the data to analyze financial transactions by these attributes. This CDS view provides the prerequisites for answering the following business questions: When was the financial transaction contract activity concluded? Which exhange rate was aggreed on?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONTRACTACTIVITY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FinancialTransaction` | ✓ | |  |  | `CHAR(13)` | Financial Transaction |
| `FinancialInstrumentActivity` | ✓ | |  |  | `NUMC(5)` | Transaction Activity |
| `FinTransActyConclusionDate` |  | |  |  | `DATS(8)` | Conclusion Date of a Financial Transaction Activity |
| `FinTransActyConclusionTime` |  | |  |  | `TIMS(6)` | Time of Contract Conclusion |
| `FinTransActyConclusionTimeZone` |  | |  |  | `CHAR(6)` | Time Zone of Contract Date and Time |
| `ExchangeRate` |  | |  |  | `DEC(13)` | Rate of Foreign Exchange Transaction |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONTRACTACTIVITY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FINTRANSCONTRACTACTIVITY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFTRCONTRACTACT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Financial Transaction Contract Activity'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions:false
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
@VDM.viewType: #COMPOSITE
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
define view I_FinTransContractActivity 
// restrict selection from I_FinTransActivity to contract activity (contract activity number is provided by private view)
  as select from I_FinTransActivity as Activity
  inner join R_FinTransContractActivity as Contract on  Activity.CompanyCode                 = Contract.CompanyCode
                                                    and Activity.FinancialTransaction        = Contract.FinancialTransaction
                                                    and Activity.FinancialInstrumentActivity = Contract.FinancialInstrumentActivity

{
// exposed fields
  @ObjectModel.foreignKey.association: '_CompanyCode'
  key Activity.CompanyCode,
  @ObjectModel.foreignKey.association: '_FinTrans'
  key Activity.FinancialTransaction,
  key Activity.FinancialInstrumentActivity,
  Activity.FinTransActyConclusionDate,
  Activity.FinTransActyConclusionTime,
  @ObjectModel.foreignKey.association: '_TimeZone'
  Activity.FinTransActyConclusionTimeZone,
  Activity.ExchangeRate,
// exposed dimensions
  Activity._CompanyCode,
  Activity._FinTrans,
  Activity._TimeZone
}
```
