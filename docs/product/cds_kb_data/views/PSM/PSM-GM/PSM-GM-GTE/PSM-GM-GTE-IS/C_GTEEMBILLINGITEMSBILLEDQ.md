---
name: C_GTEEMBILLINGITEMSBILLEDQ
description: "Grantee Mgmt Billg Items Billed - Query"
app_component: PSM-GM-GTE-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLINGITEMSBILLEDQ')/$value
semantic_en: "Grantee Mgmt Billg Items Billed - Query"
semantic_vi: "Grantee Mgmt Billg Items Billed - Query — CDS view tiêu dùng dựa trên I_GteeMBillingItemsBilledC."
keywords:
  - "grantee"
  - "mgmt"
  - "billg"
  - "items"
  - "billed"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "line"
  - "item"
tags:
  - PSM
  - bo:billingdocument
  - component:PSM-GM-GTE-IS
  - consumption-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-IS
---
# C_GTEEMBILLINGITEMSBILLEDQ

**Grantee Mgmt Billg Items Billed - Query**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLINGITEMSBILLEDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GteeMBillgElmntEntrItmUUID` | ✓ | |  |  | `RAW(16)` | Grantee Mgmt: Billing Element Entry UUID |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Document Type |
| `ReferenceDocument` |  | |  |  | `CHAR(10)` | Reference Doc. Number |
| `GteeMBillingExternalReference` |  | |  |  | `CHAR(40)` | Grants Billing: External Reference |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GranteeMgmtBillingRule` |  | |  |  | `NUMC(4)` | Rule Used as a Basis for Billing |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Billing Document Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | GM Billing: Global Currency |
| `NotBilledAmtInDocCrcy` |  | |  |  | `CURR(23)` | Unbilled Amount in Document Currency |
| `NotPaidRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed Not Paid Revenue Amount |
| `PaidRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Paid Revenue |
| `NotBilledAmtInGlobCurrency` |  | |  |  | `CURR(23)` | Unbilled Amount in Global Currency |
| `NotPaidRevenueAmtInGCrcy` |  | |  |  | `CURR(23)` | Billed Not Paid Revenue Amount in Global Currency |
| `PaidRevenueAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Paid Revenue in Global Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLINGITEMSBILLEDQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_GTEEMBILLINGITEMSBILLEDQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CGMGBITMBQ'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@OData.publish: true
@VDM: {
    viewType: #CONSUMPTION
}
@Analytics: {
    query: true,
    internalName: #LOCAL,
     settings: {
         maxProcessingEffort: #HIGH
     }
}
@Metadata: {
    allowExtensions: true,
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [#ANALYTICAL_QUERY],
     modelingPattern: #ANALYTICAL_QUERY
}

@EndUserText.label: 'Grantee Mgmt Billg Items Billed - Query'
define view C_GteeMBillingItemsBilledQ
  as select from I_GteeMBillingItemsBilledC as Main
{
      @Consumption.hidden: true
  key Main.Ledger,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
  key Main.CompanyCode,
      @AnalyticsDetails.query.axis: #FREE
  key Main.FiscalYear,
      @AnalyticsDetails.query.axis: #FREE
  key Main.AccountingDocument,
      @AnalyticsDetails.query.axis: #FREE
  key Main.LedgerGLLineItem,
      // Added for planned items but generic option for all entries
      @Consumption.hidden: true
  key Main.GteeMBillgElmntEntrItmUUID,
      Main.ReferenceDocumentType,
      Main.ReferenceDocument,
      Main.GteeMBillingExternalReference,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Main.GrantID,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Main.GranteeMgmtSponsor,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Main.SponsoredProgram,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Main.SponsoredClass,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Main.FinancialManagementArea,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Main.Fund,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      Main.GranteeMgmtBillingRule,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #KEY_TEXT
      Main.PubSecBudgetCnsmpnType,
      @AnalyticsDetails.query.axis: #FREE
      @AnalyticsDetails.query.display: #TEXT
      Main.PubSecBudgetCnsmpnDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @AnalyticsDetails.query.axis: #FREE
      Main.DocumentCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @AnalyticsDetails.query.axis: #FREE
      Main.GlobalCurrency,
      
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @Aggregation.default: #SUM
      @EndUserText.label: 'Outstanding Billables'
      Main.NotBilledAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @Aggregation.default: #SUM
      @EndUserText.label: 'Billed not Paid'
      Main.NotPaidRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @Aggregation.default: #SUM
      @EndUserText.label: 'Billed Paid'
      Main.PaidRevenueAmtInDocCrcy,

      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @Aggregation.default: #SUM
      @EndUserText.label: 'Outstanding Billables in Global Currency'
      Main.NotBilledAmtInGlobCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @Aggregation.default: #SUM
      @EndUserText.label: 'Billed not Paid in Global Currency'
      Main.NotPaidRevenueAmtInGCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @AnalyticsDetails.query.axis: #COLUMNS
      @Aggregation.default: #SUM
      @EndUserText.label: 'Billed Paid in Global Currency'
      Main.PaidRevenueAmtInGlobalCrcy,

      /* Associations */
      @Consumption.hidden: true
      Main._CompanyCode,
      @Consumption.hidden: true
      Main._DocumentCurrency,
      @Consumption.hidden: true
      Main._FiscalYear,
      @Consumption.hidden: true
      Main._Grant,
      @Consumption.hidden: true
      Main._JournalEntry,
      @Consumption.hidden: true
      Main._Ledger,
      @Consumption.hidden: true
      Main._PubSecBdgtCnsmpnType,
      @Consumption.hidden: true
      Main._BillingRule,
      @Consumption.hidden: true
      Main._SponsoredProgram,
      @Consumption.hidden: true
      Main._SponsoredClass,
      @Consumption.hidden: true
      Main._FinancialManagementArea,
      @Consumption.hidden: true
      Main._Fund
}
```
