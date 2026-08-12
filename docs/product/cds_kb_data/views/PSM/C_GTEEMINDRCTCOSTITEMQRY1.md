---
name: C_GTEEMINDRCTCOSTITEMQRY1
description: "Grant Indirect Cost Item - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMINDRCTCOSTITEMQRY1')/$value
semantic_en: "Grant Indirect Cost Item - Query"
semantic_vi: "Grant Indirect Cost Item - Query — CDS view tiêu dùng dựa trên I_GteeMIndrctCostItemCube."
keywords:
  - "grant"
  - "indirect"
  - "cost"
  - "item"
  - "query"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_GTEEMINDRCTCOSTITEMQRY1

**Grant Indirect Cost Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMINDRCTCOSTITEMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Journal Entry Posting View Item |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-from Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to Date |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `IndirectCostAmtInCoCodeCrcy` |  | |  |  | `CURR(23)` | Indirect Cost Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMINDRCTCOSTITEMQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMINDRCTCOSTITEMQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPSMS4CGRIDCQ1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grant Indirect Cost Item - Query'

@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics: {
     query: true,
     internalName: #LOCAL,
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}
@OData.publish: true 

define view C_GteeMIndrctCostItemQry1
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language     : sylangu,
    @Consumption.hidden: true
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE 
    P_KeyDate      : vdm_v_key_date,
    @Consumption.hidden: true
    @Environment.systemField: #USER
    P_BusinessUser : syuname
  as select from I_GteeMIndrctCostItemCube as Cube
{
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
key Ledger,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
key SourceLedger,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
key CompanyCode,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
key FiscalYear,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
key AccountingDocument,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
key LedgerGLLineItem,
AccountingDocumentItem,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
GrantID,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
GranteeMgmtSponsor,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
GrantType,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
GrantLifecycleStatus,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
ValidityStartDate,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #TEXT
ValidityEndDate,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
SponsoredProgram,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
SponsoredClass,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
Fund,
@Semantics.amount.currencyCode: 'CompanyCodeCurrency'
@AnalyticsDetails.query.hidden : true
@DefaultAggregation: #SUM
IndirectCostAmtInCoCodeCrcy,
@Semantics.currencyCode: true
@AnalyticsDetails.query.axis: #FREE
CompanyCodeCurrency,
@AnalyticsDetails.query.axis: #FREE
@AnalyticsDetails.query.display: #KEY_TEXT
GlobalCurrency,
@Semantics.amount.currencyCode: 'GlobalCurrency'
@DefaultAggregation: #SUM
AmountInGlobalCurrency
}
```
