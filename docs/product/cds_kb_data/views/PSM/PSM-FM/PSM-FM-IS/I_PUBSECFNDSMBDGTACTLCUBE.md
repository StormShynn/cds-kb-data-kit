---
name: I_PUBSECFNDSMBDGTACTLCUBE
description: "Fund Budget Cmtmt and Actuals - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFNDSMBDGTACTLCUBE')/$value
semantic_en: "Fund Budget Cmtmt and Actuals - Cube"
semantic_vi: "Fund Budget Cmtmt and Actuals - Cube — CDS view giao diện dựa trên I_PubSecBdgtActlItemBasic."
keywords:
  - "fund"
  - "budget"
  - "cmtmt"
  - "and"
  - "actuals"
  - "cube"
  - "source"
  - "ledger"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
tags:
  - PSM
  - budget
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECFNDSMBDGTACTLCUBE

**Fund Budget Cmtmt and Actuals - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFNDSMBDGTACTLCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `FinancialPlanningReqTransSqnc` | ✓ | |  |  | `NUMC(23)` | Financial Planning Request Transaction Sequence Number |
| `FinancialPlanningDataPacket` | ✓ | |  |  | `NUMC(6)` | Financial Planning Data Packet Number |
| `ActualPlanJournalEntryItem` | ✓ | |  |  | `CHAR(12)` | Actual Plan Journal Entry Item |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `PubSecBudgetAccountCoCode` |  | |  |  | `CHAR(4)` | Budget Account Company Code |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `LedgerGLLineItem` |  | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `FinancialPlanningEntryItem` |  | |  |  | `INT4(10)` | Financial Planning Entry Item |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `_PubSecBudgetCnsmpnTypeGroup` |  | |  |  |  |  |
| `_FundType` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnDate` | | ✓ | | | | |
| `_PubSecBudgetAccountCoCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FundType` | `I_FundType` | [0..1] |
| `_PubSecBudgetCnsmpnDate` | `I_FiscCalendarDateForCompCode` | [0..1] |
| `_PubSecBudgetAccountCoCode` | `I_CompanyCode` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFNDSMBDGTACTLCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECFNDSMBDGTACTLCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CFMBDACTNC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #NOT_ALLOWED
@EndUserText.label: 'Fund Budget Cmtmt and Actuals - Cube'

@VDM.viewType: #COMPOSITE
@Analytics: { dataCategory: #CUBE }
@Analytics.internalName: #LOCAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     usageType: {
         dataClass: #MIXED,
         serviceQuality: #D,
         sizeCategory: #XXL
     },
     supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
}

define view I_PubSecFndsMBdgtActlCube
  as select from I_PubSecBdgtActlItemBasic as AcItem
  association [0..1] to I_FundType as _FundType on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                and $projection.FundType                = _FundType.FundType
  association [0..1] to I_FiscCalendarDateForCompCode as _PubSecBudgetCnsmpnDate  on  $projection.PubSecBudgetCnsmpnDate    = _PubSecBudgetCnsmpnDate.CalendarDate
                                                                                 and $projection.PubSecBudgetAccountCoCode = _PubSecBudgetCnsmpnDate.CompanyCode                                               
  association [0..1] to I_CompanyCode                 as _PubSecBudgetAccountCoCode  on  $projection.PubSecBudgetAccountCoCode = _PubSecBudgetAccountCoCode.CompanyCode
 
{
      @ObjectModel.foreignKey.association: '_SourceLedger'
  key AcItem.SourceLedger,
      @ObjectModel.foreignKey.association: '_Ledger'
  key AcItem.Ledger,
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key AcItem.CompanyCode,
      @ObjectModel.foreignKey.association: '_FiscalYear'
  key AcItem.FiscalYear,
      @ObjectModel.foreignKey.association: '_JournalEntry'
  key AcItem.AccountingDocument,
  key AcItem.FinancialPlanningReqTransSqnc,
  key AcItem.FinancialPlanningDataPacket,
  key AcItem.ActualPlanJournalEntryItem,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      AcItem.ControllingArea,
      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      AcItem.GLAccount,
      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      AcItem.ChartOfAccounts,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      AcItem.FinancialManagementArea,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_CostCenter'
      AcItem.CostCenter,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      AcItem.WBSElementExternalID,
      AcItem.FunctionalArea,
      @Semantics.fiscal.period: true
      AcItem.FiscalPeriod,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Fund'
      AcItem.Fund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      AcItem.GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundType'
      AcItem._Fund.FundType                      as FundType,
      AcItem._Fund._FundType.GranteeMgmtFundType as GranteeMgmtFundType,

      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      @Semantics.currencyCode:true
      AcItem.CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AcItem.AmountInCompanyCodeCurrency,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetAccountCoCode'
      AcItem.PubSecBudgetAccountCoCode,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnTypeGroup'
      AcItem._PubSecBdgtCnsmpnType.PubSecBudgetCnsmpnTypeGroup as PubSecBudgetCnsmpnTypeGroup,
      @Analytics.internalName: #LOCAL
      AcItem.PubSecBudgetCnsmpnDate,
      
      AcItem.LedgerGLLineItem,
      AcItem.FinancialPlanningEntryItem,
      AcItem.BusinessArea,
      AcItem.ProfitCenter,
      AcItem.Segment,
      AcItem.PlanningCategory,
      AcItem.Plant,
      AcItem.OrderID,
      AcItem.AccountingDocumentType,
      AcItem.FinancialAccountType,
      AcItem.PostingDate,
      AcItem.ValuationArea,
      AcItem.Customer,
      AcItem.Supplier,
      AcItem.SalesDocument,
      AcItem.ServiceDocument,
      AcItem.ServiceDocumentType,
      AcItem.SalesOrganization,
      AcItem.DistributionChannel,
      AcItem.OrganizationDivision,

      // Fields added for Authorization issue
      AcItem.AssetClass,

      // Associations
      AcItem._GLAccountInCompanyCode,
      AcItem._GLAccountInChartOfAccounts,
      AcItem._ChartOfAccounts,
      AcItem._CompanyCode,
      AcItem._CompanyCodeCurrency,
      AcItem._ControllingArea,
      AcItem._CostCenter,
      AcItem._FinancialManagementArea,
      AcItem._FiscalYear,
      AcItem._Fund,
      _FundType,
      AcItem._Grant,
      AcItem._JournalEntry,
      AcItem._Ledger,
      AcItem._ProfitCenter,
      AcItem._SourceLedger,
      AcItem._WBSElementExternalID,
      AcItem._PubSecBdgtCnsmpnType._PubSecBudgetCnsmpnTypeGroup as _PubSecBudgetCnsmpnTypeGroup,
      _PubSecBudgetCnsmpnDate,
      _PubSecBudgetAccountCoCode,
      
      /* Associations for authorization */
      @Consumption.hidden: true
      AcItem._Supplier,
      @Consumption.hidden: true
      AcItem._ServiceDocument,
      @Consumption.hidden: true
      AcItem._SalesDocument,
      @Consumption.hidden: true
      AcItem._Order,
      @Consumption.hidden: true
      AcItem._CurrentCostCenter,
      @Consumption.hidden: true
      AcItem._AccountingDocumentType,
      @Consumption.hidden: true
      AcItem._Customer,
      @Consumption.hidden: true
      AcItem._CurrentProfitCenter
}
where
  (
           AcItem.ActualPlanCode                      =  'A'
    and // Actual data only budget relevant
           AcItem.PubSecBudgetIsRelevant              =  'X'
  )
  and(
    (
      (
           AcItem._Grant.GrantIsNotRelevantGrant      =  'X'
        or AcItem.GrantID                             =  ''
      )
    )
    or(
           AcItem._Grant.GrantIsNotRelevantGrant      <> 'X'
      and(
           AcItem._Fund._FundType.GranteeMgmtFundType =  'I'
        or AcItem._Fund._FundType.GranteeMgmtFundType =  ''
        or AcItem._Fund._FundType.GranteeMgmtFundType is null
      )
    )
    or(
           AcItem._Grant.GrantIsNotRelevantGrant      <> 'X'
      and  AcItem._Fund._FundType.GranteeMgmtFundType =  'E'
    )
  )
```
