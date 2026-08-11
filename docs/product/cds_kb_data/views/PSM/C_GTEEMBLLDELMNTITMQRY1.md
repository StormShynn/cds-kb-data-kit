---
name: C_GTEEMBLLDELMNTITMQRY1
description: "Grantee Mgmt Billed Element Item - Query"
app_component: PSM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBLLDELMNTITMQRY1')/$value
semantic_en: "Grantee Mgmt Billed Element Item - Query"
semantic_vi: "Grantee Mgmt Billed Element Item - Query — CDS view tiêu dùng (transactional data) dựa trên I_GteeMBlldElmntItmCube."
keywords:
  - "grantee"
  - "mgmt"
  - "billed"
  - "element"
  - "item"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "line"
tags:
  - PSM
  - component:PSM
  - consumption-view
---
# C_GTEEMBLLDELMNTITMQRY1

**Grantee Mgmt Billed Element Item - Query**

| Property | Value |
|---|---|
| App Component | `PSM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBLLDELMNTITMQRY1')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `ClearingAccountingDocument` |  | |  |  | `CHAR(10)` | Clearing Journal Entry |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `ClearingDate` |  | |  |  | `DATS(8)` | Clearing Date |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `OnTimePaidAmtInDocCrcy` |  | |  |  | `CURR(23)` | On Time Paid Revenue Amount |
| `LatePaidAmtInDocCrcy` |  | |  |  | `CURR(23)` | Late Paid Revenue |
| `BilledNotDueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed and Not Due Revenue |
| `BilledOverdueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed and Overdue Revenue |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `OnTimePaidAmtInGCrcy` |  | |  |  | `CURR(23)` | On Time Paid Revenue in Global Currency |
| `LatePaidAmtInGCrcy` |  | |  |  | `CURR(23)` | Late Paid Revenue Amount in Global Crrency |
| `BilledNotDueAmtInGCrcy` |  | |  |  | `CURR(23)` | Billed and Not Due Revenue Amount in Global Currency |
| `BilledOverdueAmtInGCrcy` |  | |  |  | `CURR(23)` | Billed and Overdue Amount in Global Currency |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `_Grant` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBLLDELMNTITMQRY1')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBLLDELMNTITMQRY1')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGMBLDELMITMQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText.label: 'Grantee Mgmt Billed Element Item - Query'
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
         dataClass: #TRANSACTIONAL,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_QUERY ]
}
@OData.publish: true
define view C_GteeMBlldElmntItmQry1
  as select from I_GteeMBlldElmntItmCube
{
      @AnalyticsDetails.query.hidden : true
      @AnalyticsDetails.query.axis: #FREE
  key Ledger,
      @AnalyticsDetails.query.hidden : true
      @AnalyticsDetails.query.axis: #FREE
  key CompanyCode,
      @AnalyticsDetails.query.hidden : true
      @AnalyticsDetails.query.axis: #FREE
  key FiscalYear,
      @AnalyticsDetails.query.hidden : true
      @AnalyticsDetails.query.axis: #FREE
  key AccountingDocument,
      @AnalyticsDetails.query.hidden : true
      @AnalyticsDetails.query.axis: #FREE
  key LedgerGLLineItem,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GrantID,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      ClearingAccountingDocument,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      FinancialAccountType,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      ClearingDate,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      NetDueDate,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Customer,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      SponsoredProgram,
      @Semantics.currencyCode:true
      DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      OnTimePaidAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      LatePaidAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      BilledNotDueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.hidden : true
      BilledOverdueAmtInDocCrcy,
      @Semantics.currencyCode:true
      GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.hidden : true
      @EndUserText.label: 'On Time Paid Amount in Global Currency'
      OnTimePaidAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.hidden : true
      @EndUserText.label: 'Late Paid Amount in Global Currency'
      LatePaidAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.hidden : true
      @EndUserText.label: 'Billed and Not Due Amount in Global Currency'
      BilledNotDueAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.hidden : true
      @EndUserText.label: 'Billed and Overdue Amount in Global Currency'
      BilledOverdueAmtInGCrcy,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      GranteeMgmtSponsor,
      /* Associations */
      _Grant
}
```
