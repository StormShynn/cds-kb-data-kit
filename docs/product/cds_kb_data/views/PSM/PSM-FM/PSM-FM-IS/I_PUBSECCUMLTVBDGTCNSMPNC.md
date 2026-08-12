---
name: I_PUBSECCUMLTVBDGTCNSMPNC
description: "Cumulative bdgt cnsmpn values - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCUMLTVBDGTCNSMPNC')/$value
semantic_en: "Cumulative bdgt cnsmpn values - Cube"
semantic_vi: "Cumulative bdgt cnsmpn values - Cube — CDS view giao diện dựa trên I_PubSecBdgtActlItemCube."
keywords:
  - "cumulative"
  - "bdgt"
  - "cnsmpn"
  - "values"
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
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_PUBSECCUMLTVBDGTCNSMPNC

**Cumulative bdgt cnsmpn values - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCUMLTVBDGTCNSMPNC')/$value) |

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
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Fiscal Period |
| `BudgetPeriod` |  | |  |  | `CHAR(10)` | Budget Period |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `ActualPlanCode` |  | |  |  | `CHAR(1)` | Actual Plan Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | |  |  | `CHAR(6)` | Fund Type |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `BudgetingType` |  | |  |  | `CHAR(8)` | Budget Type (Subcategory) |
| `GranteeMgmtFundType` |  | |  |  | `CHAR(1)` | Fund Type for Grants Management |
| `GrantType` |  | |  |  | `CHAR(2)` | Grant Type |
| `GranteeMgmtSponsor` |  | |  |  | `CHAR(10)` | Grant Sponsor |
| `SponsoredClass` |  | |  |  | `CHAR(20)` | Sponsored Class |
| `SponsoredProgram` |  | |  |  | `CHAR(20)` | Sponsored Program |
| `GrantLifecycleStatus` |  | |  |  | `CHAR(5)` | Lifecycle Status |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `PlanningCategory` |  | |  |  | `CHAR(10)` | Plan Category |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PubSecBudgetCnsmpnDate` |  | |  |  | `DATS(8)` | Budget Consumption Date |
| `PubSecBdgtAcctRevnExpnCode` |  | |  |  | `CHAR(1)` | Expense or Revenue on Budget Account |
| `PubSecBudgetAccount` |  | |  |  | `CHAR(10)` | Budget Account |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | WBS Element External ID |
| `PartnerWBSElementExternalID` |  | |  |  | `CHAR(24)` | Partner WBS Element External ID |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BudgetAmountInCompanyCodeCrcy` |  | |  | `case when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then AcItem.AmountInCompanyCodeCurrency else cast(0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `ConsumedAmountInCCCrcy` |  | |  | `case when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then AcItem.AmountInCompanyCodeCurrency else cast(0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `AvailableAmountInCCCrcy` |  | |  | `case when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then AcItem.AmountInCompanyCodeCurrency when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then -AcItem.AmountInCompanyCodeCurrency else cast(0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `BdgtConsumableAmtInGlobalCrcy` |  | |  | `case when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then AcItem.AmountInGlobalCurrency else cast(0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `BdgtConsumedAmtInGlobalCrcy` |  | |  | `case when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then AcItem.AmountInGlobalCurrency else cast(0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `BdgtAvailableAmtInGlobalCrcy` |  | |  | `case when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then AcItem.AmountInGlobalCurrency when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod then -AcItem.AmountInGlobalCurrency else cast(0 as fins_vhcur12) end` | `CURR(23)` | Amount in Company Code Currency |
| `PubSecBudgetIsRelevant` |  | |  |  | `CHAR(1)` | Budget-Relevant Indicator |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  |  | `CHAR(2)` | Budget Consumption Type Group |
| `_SponsoredClass` | | ✓ | | | | |
| `_SponsoredProgram` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_GrantLifecycleStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SponsoredClass` | `I_SponsoredClassCore` | [0..1] |
| `_SponsoredProgram` | `I_SponsoredProgramCore` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_GrantLifecycleStatus` | `I_GrantStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCUMLTVBDGTCNSMPNC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECCUMLTVBDGTCNSMPNC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSCUMBDGTCNSMPN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Cumulative bdgt cnsmpn values - Cube'
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations:true

@Consumption.dbHints: ['PREAGGR_BEFORE_JOIN', 'NO_JOIN_THRU_AGGR', 'USE_OLAP_PLAN']

define view I_PubSecCumltvBdgtCnsmpnC
  as select from I_PubSecBdgtActlItemCube as AcItem
    inner join   I_FiscalYearPeriod       as I_FiscalYearPeriod on  AcItem.FiscalYearVariant           =  I_FiscalYearPeriod.FiscalYearVariant
                                                                and AcItem.FiscalYear                  <= I_FiscalYearPeriod.FiscalYear
                                                                and I_FiscalYearPeriod.IsSpecialPeriod != 'X'
  association [0..1] to I_SponsoredClassCore   as _SponsoredClass       on $projection.SponsoredClass = _SponsoredClass.SponsoredClass
  association [0..1] to I_SponsoredProgramCore as _SponsoredProgram     on $projection.SponsoredProgram = _SponsoredProgram.SponsoredProgram
  association [0..1] to I_Grant                as _Grant                on $projection.GrantID = _Grant.GrantID
  association [0..1] to I_GrantStatus          as _GrantLifecycleStatus on $projection.grantlifecyclestatus = _GrantLifecycleStatus.SystemStatus
{
  key  AcItem.SourceLedger,
  key  AcItem.Ledger,
       @ObjectModel.foreignKey.association: '_CompanyCode'
  key  AcItem.CompanyCode,
       @ObjectModel.foreignKey.association: '_FiscalYear'
  key  AcItem.FiscalYear,
  key  AcItem.AccountingDocument,
  key  AcItem.FinancialPlanningReqTransSqnc,
  key  AcItem.FinancialPlanningDataPacket,
  key  AcItem.ActualPlanJournalEntryItem,
  key  I_FiscalYearPeriod.FiscalPeriod,
       I_FiscalYearPeriod.FiscalPeriodEndDate,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_BudgetPeriod'
       AcItem.BudgetPeriod,
       @Semantics.currencyCode:true
       AcItem.CompanyCodeCurrency,
       @Semantics.currencyCode:true
       AcItem.GlobalCurrency,
       AcItem.ActualPlanCode,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_CostCenter'
       AcItem.CostCenter,
       @ObjectModel.foreignKey.association: '_ControllingArea'
       AcItem.ControllingArea,
       @Consumption.valueHelpDefinition: [
               { entity:  { name:    'I_ProfitCenterStdVH',
                            element: 'ProfitCenter' },
                 additionalBinding: [{ localElement: 'ControllingArea',
                                       element: 'ControllingArea' }]
               }]
       @ObjectModel.foreignKey.association: '_ProfitCenter'
       AcItem.ProfitCenter,
       AcItem.GLAccount,
       AcItem.BusinessArea,
       @ObjectModel.foreignKey.association: '_Segment'
       AcItem.Segment,
       AcItem.FinancialAccountType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_Fund'
       AcItem.Fund,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_FundType'
       AcItem.FundType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_Grant'
       AcItem.GrantID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_BudgetingType'
       AcItem.BudgetingType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_GranteeMgmtFundType'
       AcItem.GranteeMgmtFundType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_GrantType'
       AcItem._Grant.GrantType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_Sponsor'
       AcItem.GranteeMgmtSponsor,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_SponsoredClass'
       AcItem.SponsoredClass,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_SponsoredProgram'
       AcItem.SponsoredProgram,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_GrantLifecycleStatus'
       AcItem._Grant.GrantLifecycleStatus,

       AcItem.Plant,
       AcItem.ValuationArea,
       AcItem.PlanningCategory,
       @ObjectModel.foreignKey.association: '_FinancialManagementArea'
       AcItem.FinancialManagementArea,
       @Semantics.fiscal.yearPeriod: true
       AcItem.FiscalYearPeriod,
       @Semantics.fiscal.yearVariant: true
       AcItem.FiscalYearVariant,
       @Analytics.internalName: #LOCAL
       AcItem.PubSecBudgetCnsmpnDate,
       AcItem.PubSecBdgtAcctRevnExpnCode,
       @Analytics.internalName: #LOCAL
       //MS: Switch to _BudgetAccountInChtAccts to provide the hierarchy
       @ObjectModel.foreignKey.association: '_BudgetAccountInChtAccts'
       //MS: @ObjectModel.foreignKey.association: '_PubSecBudgetAccount'
       AcItem.PubSecBudgetAccount,
       @ObjectModel.foreignKey.association: '_ChartOfAccounts'
       AcItem.ChartOfAccounts,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_WBSElementExternalID'
       AcItem.WBSElementExternalID,
       @AnalyticsDetails.query.axis: #FREE
       AcItem.PartnerWBSElementExternalID,
       @Consumption.hidden: true
       @ObjectModel.foreignKey.association: '_Supplier'
       AcItem.Supplier,
       AcItem.ServiceDocument,
       AcItem.ServiceDocumentType,
       AcItem.OrderID,
       @ObjectModel.foreignKey.association: '_FunctionalArea'
       AcItem.FunctionalArea,
       AcItem.SalesDocument,
       AcItem.SalesOrganization,
       AcItem.DistributionChannel,
       AcItem.OrganizationDivision,
       AcItem.AssetClass,
       AcItem.AccountingDocumentType,
       AcItem.Customer,

       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AcItem.AmountInCompanyCodeCurrency,
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       AcItem.AmountInGlobalCurrency,

       @AnalyticsDetails.query.axis: #FREE
       @Aggregation.default: #SUM
       @EndUserText: { label:  'Budget Amount'}
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
       when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then AcItem.AmountInCompanyCodeCurrency
       else cast(0 as fins_vhcur12)
       end as BudgetAmountInCompanyCodeCrcy,

       @EndUserText: { label:  'Consumed Amount'}
       @AnalyticsDetails.query.axis: #FREE
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
       when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then AcItem.AmountInCompanyCodeCurrency
       else cast(0 as fins_vhcur12)
       end as ConsumedAmountInCCCrcy,

       @EndUserText: { label:  'Available Amount'}
       @AnalyticsDetails.query.axis: #FREE
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case
       when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then AcItem.AmountInCompanyCodeCurrency
       when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then -AcItem.AmountInCompanyCodeCurrency
       else cast(0 as fins_vhcur12)
       end as AvailableAmountInCCCrcy,

       @AnalyticsDetails.query.axis: #FREE
       @Aggregation.default: #SUM
       @EndUserText: { label:  'Budget Amount in Global Currency'}
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
       when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then AcItem.AmountInGlobalCurrency
       else cast(0 as fins_vhcur12)
       end as BdgtConsumableAmtInGlobalCrcy,

       @EndUserText: { label:  'Consumed Amount in Global Currency'}
       @AnalyticsDetails.query.axis: #FREE
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
       when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then AcItem.AmountInGlobalCurrency
       else cast(0 as fins_vhcur12)
       end as BdgtConsumedAmtInGlobalCrcy,

       @EndUserText: { label:  'Available Amount in Global Currency'}
       @AnalyticsDetails.query.axis: #FREE
       @Aggregation.default: #SUM
       @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
       case
       when AcItem.ActualPlanCode = 'P' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then AcItem.AmountInGlobalCurrency
       when AcItem.ActualPlanCode = 'A' and AcItem.FiscalYearPeriod <= I_FiscalYearPeriod.FiscalYearPeriod
       then -AcItem.AmountInGlobalCurrency
       else cast(0 as fins_vhcur12)
       end as BdgtAvailableAmtInGlobalCrcy,
       AcItem.PubSecBudgetIsRelevant,
       @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnTypeGroup'
       AcItem.PubSecBudgetCnsmpnTypeGroup,

       AcItem._Fund,
       AcItem._FunctionalArea,
       AcItem._CostCenter,
       _Grant,
       AcItem._ControllingArea,
       AcItem._WBSElementExternalID,
       AcItem._BudgetAccountInChtAccts,
       AcItem._ChartOfAccounts,
       AcItem._PartnerWBSElementExternalID,
       AcItem._Sponsor,
       AcItem._BudgetingType,
       AcItem._GranteeMgmtFundType,
       AcItem._Grant._GrantType,
       _SponsoredProgram,
       _SponsoredClass,
       AcItem._FiscalYear,
       AcItem._Segment,
       AcItem._CompanyCode,
       _GrantLifecycleStatus,
       AcItem._FinancialManagementArea,
       AcItem._GLAccountInCompanyCode,
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
       AcItem._CurrentProfitCenter,
       AcItem._GlobalCurrency,
       AcItem._FundType,
       AcItem._ProfitCenter,
       AcItem._BudgetPeriod,
       AcItem._PubSecBudgetCnsmpnTypeGroup
}
where
  AcItem.FiscalYear = substring (I_FiscalYearPeriod.FiscalPeriodEndDate,1,4)
```
