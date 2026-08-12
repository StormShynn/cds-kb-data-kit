---
name: I_GTEEMBILLINGITEMSBILLEDC
description: "Grantee Mgmt Billing Items Billed - Cube"
app_component: PSM-GM-GTE-GM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLINGITEMSBILLEDC')/$value
semantic_en: "Grantee Mgmt Billing Items Billed - Cube"
semantic_vi: "Grantee Mgmt Billing Items Billed - Cube — CDS view tổng hợp dựa trên P_GteeMBillingItemsBilled."
keywords:
  - "grantee"
  - "mgmt"
  - "billing"
  - "items"
  - "billed"
  - "cube"
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
  - billing
  - bo:billingdocument
  - component:PSM-GM-GTE-GM
  - interface-view
  - PSM-GM
  - PSM-GM-GTE
  - PSM-GM-GTE-GM
---
# I_GTEEMBILLINGITEMSBILLEDC

**Grantee Mgmt Billing Items Billed - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-GM-GTE-GM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLINGITEMSBILLEDC')/$value) |

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
| `ReferenceDocumentItem` |  | |  |  | `NUMC(6)` | Reference Document Item |
| `GteeMBillingExternalReference` |  | |  | `cast( case when Main.GteeMBillingPlanItemUUID is null then concat( concat( concat( concat(Main.ReferenceDocument, '/' ), Main.ReferenceDocumentItem ), '/' ), Main.GteeMBillingSourceReference) else concat( concat( concat( concat( ltrim(Main.GrantID, '0'), '/' ), Main.SponsoredProgram ), '/' ), Main.LedgerGLLineItem) end as gmb_external_reference )` | `CHAR(40)` | Grants Billing: External Reference |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `PubSecBudgetCnsmpnType` |  | |  |  | `CHAR(2)` | Budget Consumption Type |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `GranteeMgmtBillingRule` |  | |  |  | `NUMC(4)` | Rule Used as a Basis for Billing |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Billing Document Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | GM Billing: Global Currency |
| `BillableRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billable Revenue Amount |
| `NotBilledAmtInDocCrcy` |  | |  |  | `CURR(23)` | Unbilled Amount in Document Currency |
| `BilledRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Document Currency |
| `NotPaidRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Billed Not Paid Revenue Amount |
| `PaidRevenueAmtInDocCrcy` |  | |  |  | `CURR(23)` | Paid Revenue |
| `BillableRevenueAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Billable Revenue Amount in Global Currency |
| `NotBilledAmtInGlobCurrency` |  | |  |  | `CURR(23)` | Unbilled Amount in Global Currency |
| `BilledRevenueAmtInGlobCrcy` |  | |  |  | `CURR(23)` | Billed Revenue Amount in Global Currency |
| `NotPaidRevenueAmtInGCrcy` |  | |  |  | `CURR(23)` | Billed Not Paid Revenue Amount in Global Currency |
| `PaidRevenueAmtInGlobalCrcy` |  | |  |  | `CURR(23)` | Paid Revenue in Global Currency |
| `_Ledger` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnType` | | ✓ | | | | |
| `_ReferenceDocumentType` | | ✓ | | | | |
| `_SponsoredClass` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Ledger` | `I_Ledger` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_PubSecBdgtCnsmpnType` | `I_PubSecBdgtCnsmpnType` | [0..1] |
| `_ReferenceDocumentType` | `I_ReferenceDocumentType` | [0..1] |
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_FinancialManagementArea` | `I_FinancialManagementArea` | [0..1] |
| `_Fund` | `I_Fund` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [0..1] |
| `_GlobalCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLINGITEMSBILLEDC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GTEEMBILLINGITEMSBILLEDC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IGMGBITMBC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Grantee Mgmt Billing Items Billed - Cube'

@VDM: {
    viewType: #COMPOSITE
}
@Analytics: {
    dataCategory: #CUBE,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: false
    }
}
@Metadata: {
    allowExtensions: true,
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #X,
         sizeCategory: #XL
     },
     supportedCapabilities: [#ANALYTICAL_PROVIDER],
     modelingPattern: #ANALYTICAL_CUBE
}
define view I_GteeMBillingItemsBilledC
  as select from P_GteeMBillingItemsBilled as Main
  association [1..1] to I_Ledger                   as _Ledger                  on  $projection.Ledger = _Ledger.Ledger
  association [1..1] to I_CompanyCode              as _CompanyCode             on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode as _FiscalYear              on  $projection.FiscalYear  = _FiscalYear.FiscalYear
                                                                               and $projection.CompanyCode = _FiscalYear.CompanyCode
  association [0..1] to I_JournalEntry             as _JournalEntry            on  $projection.CompanyCode        = _JournalEntry.CompanyCode
                                                                               and $projection.FiscalYear         = _JournalEntry.FiscalYear
                                                                               and $projection.AccountingDocument = _JournalEntry.AccountingDocument
  association [0..1] to I_PubSecBdgtCnsmpnType     as _PubSecBdgtCnsmpnType    on  $projection.PubSecBudgetCnsmpnType = _PubSecBdgtCnsmpnType.PubSecBudgetCnsmpnType
  association [0..1] to I_ReferenceDocumentType    as _ReferenceDocumentType   on  $projection.ReferenceDocumentType = _ReferenceDocumentType.ReferenceDocumentType
  association [0..1] to I_SponsoredClassCore       as _SponsoredClass          on  $projection.SponsoredClass = _SponsoredClass.SponsoredClass
  association [0..1] to I_FinancialManagementArea  as _FinancialManagementArea on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea
  association [0..1] to I_Fund                     as _Fund                    on  $projection.FinancialManagementArea = _Fund.FinancialManagementArea
                                                                               and $projection.Fund                    = _Fund.Fund
  association [0..1] to I_Currency                 as _DocumentCurrency        on  $projection.DocumentCurrency = _DocumentCurrency.Currency
  association [0..1] to I_Currency                 as _GlobalCurrency          on  $projection.GlobalCurrency = _GlobalCurrency.Currency

{
      @ObjectModel.foreignKey.association: '_Ledger'
  key Main.Ledger,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key Main.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key Main.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key Main.AccountingDocument,
  key Main.LedgerGLLineItem,
  key Main.GteeMBillgElmntEntrItmUUID,
      @ObjectModel.foreignKey.association: '_ReferenceDocumentType'
      Main.ReferenceDocumentType,
      Main.ReferenceDocument,
      Main.ReferenceDocumentItem,
      
      cast( 
        case when Main.GteeMBillingPlanItemUUID is null  
             then concat(
                    concat(
                      concat(
                        concat(Main.ReferenceDocument, '/' ),
                             Main.ReferenceDocumentItem ), '/' ),
                           Main.GteeMBillingSourceReference)
             else concat(
                    concat(
                      concat( 
                        concat( ltrim(Main.GrantID, '0'), '/' ),
                           Main.SponsoredProgram ), '/' ),
                         Main.LedgerGLLineItem)
        end as gmb_external_reference 
      ) as GteeMBillingExternalReference,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      Main.GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Sponsor'
      Main._Grant.GranteeMgmtSponsor,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredProgram'
      Main.SponsoredProgram,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SponsoredClass'
      Main.SponsoredClass,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      Main.FinancialManagementArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Fund'
      Main.Fund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnType'
      Main.PubSecBudgetCnsmpnType,
      @Analytics.internalName: #LOCAL
      Main.PubSecBudgetCnsmpnDate,
      @Analytics.internalName: #LOCAL
      Main.CreationDate,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BillingRule'
      Main._Grant.GranteeMgmtBillingRule,
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      @Semantics.currencyCode:true
      Main.DocumentCurrency,
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      @Semantics.currencyCode:true
      Main.GlobalCurrency,
      
      // Amounts in Document Currency
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
      Main.BillableRevenueAmtInDocCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
      Main.NotBilledAmtInDocCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
      Main.BilledRevenueAmtInDocCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
      Main.NotPaidRevenueAmtInDocCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DocumentCurrency'} }
      Main.PaidRevenueAmtInDocCrcy,

      // Amounts in Global Currency
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      Main.BillableRevenueAmtInGlobalCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      Main.NotBilledAmtInGlobCurrency,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      Main.BilledRevenueAmtInGlobCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      Main.NotPaidRevenueAmtInGCrcy,
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
      Main.PaidRevenueAmtInGlobalCrcy,

      // Associations
      _Ledger,
      _CompanyCode,
      _FiscalYear,
      Main._Grant,
      Main._Grant._Sponsor,
      _JournalEntry,
      _ReferenceDocumentType,
      _PubSecBdgtCnsmpnType,
      Main._Grant._BillingRule,
      _DocumentCurrency,
      _GlobalCurrency,
      Main._SponsoredProgram,
      _SponsoredClass,
      _FinancialManagementArea,
      _Fund
}
```
