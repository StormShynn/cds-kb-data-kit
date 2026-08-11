---
name: I_FUNDACCTGBALANCEITEMC
description: "Fund Accounting Balance Item - Cube"
app_component: PSM-FM-IS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGBALANCEITEMC')/$value
semantic_en: "Fund Accounting Balance Item - Cube"
semantic_vi: "Fund Accounting Balance Item - Cube — CDS view giao diện dựa trên I_GLAccountLineItemSemTag."
keywords:
  - "fund"
  - "accounting"
  - "balance"
  - "item"
  - "cube"
  - "ledger"
  - "source"
  - "company"
  - "code"
  - "fiscal"
  - "year"
  - "document"
tags:
  - PSM
  - account
  - component:PSM-FM-IS
  - interface-view
  - PSM-FM
  - PSM-FM-IS
---
# I_FUNDACCTGBALANCEITEMC

**Fund Accounting Balance Item - Cube**

| Property | Value |
|---|---|
| App Component | `PSM-FM-IS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGBALANCEITEMC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `SourceLedger` | ✓ | |  |  | `CHAR(2)` | Source Ledger |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` | ✓ | |  |  | `CHAR(10)` | Journal Entry |
| `LedgerGLLineItem` | ✓ | |  |  | `CHAR(6)` | General Ledger Journal Entry Line Item |
| `GLAccountHierarchy` | ✓ | |  |  | `CHAR(42)` | Financial Statement Version |
| `SemanticTag` | ✓ | |  | `case when BalItm.FiscalYear = $parameters.P_ComparisonFiscalYear then case BalItm.SemanticTag when 'PL_RESULT' then cast ( 'C_CMP_PL' as fins_sem_tag ) when 'FUND_BAL' then cast ( 'C_CMP_FB' as fins_sem_tag ) when 'CSH_CSHEQV' then cast ( 'C_CMP_CEQV' as fins_sem_tag ) else BalItm.SemanticTag end else case BalItm.SemanticTag when 'PL_RESULT' then cast ( 'C_PL' as fins_sem_tag ) else BalItm.SemanticTag end end` | `CHAR(10)` | Semantic Tag of a Hierarchy Node |
| `ValidityStartDate` | ✓ | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `AmtInCoCodeCrcyPerFiscalYear` |  | |  | `case when ( I_FiscalYearPeriod.FiscalPeriod = $parameters.P_ToFiscalPeriod and I_FiscalYearPeriod.FiscalYear = $parameters.P_FiscalYear ) then AmountInCompanyCodeCurrency else cast( 0 as abap.dec(23,2)) end` | `CURR(23)` | Amount in Company Code Currency |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `FundType` |  | | `_Fund` | `FundType` | `CHAR(6)` | Fund Type |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `GrantType` |  | | `_Grant._GrantType` | `GrantType` | `CHAR(2)` | Grant Type |
| `AccountAssignmentType` |  | |  |  | `CHAR(2)` | Account Assignment Type |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ValuationArea` |  | |  |  | `CHAR(4)` | Valuation Area |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `GrantIsNotRelevantGrant` |  | | `_Grant` | `GrantIsNotRelevantGrant` | `CHAR(1)` | Identify the Not Relevant Grant |
| `GrantLifecycleStatus` |  | | `_Grant` | `GrantLifecycleStatus` | `CHAR(5)` | Lifecycle Status |
| `GrantAuthznGrp` |  | | `_Grant` | `GrantAuthznGrp` | `CHAR(10)` | Grants Management: Authorization Groups |
| `GranteeMgmtSponsor` |  | | `_Grant` | `GranteeMgmtSponsor` | `CHAR(10)` | Grant Sponsor |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `ServiceDocument` |  | |  |  | `CHAR(10)` | Service Document ID |
| `ServiceDocumentType` |  | |  |  | `CHAR(4)` | Service Document Type |
| `SalesDocument` |  | |  |  | `CHAR(10)` | Sales Document |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Journal Entry Type |
| `_FundType` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |
| `_GrantType` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_WBSElementExternalID` | | ✓ | | | | |
| `_Fund` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_ServiceDocument` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_AccountingDocumentType` | | ✓ | | | | |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FundType` | `I_FundType` | [0..1] |
| `_Grant` | `I_Grant` | [0..1] |
| `_GrantType` | `I_GrantType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGBALANCEITEMC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FUNDACCTGBALANCEITEMC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFABALANCEITEMC'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@EndUserText.label: 'Fund Accounting Balance Item - Cube'
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
//Here from the first select of Union opertaion, we are fetching the cumulative balances for Fund Balance(FUND_BAL + PL_RESULT)
//and Cash Balance(CSH_CSHEQV). Whereas for profit and loss amount(PL_RESULT), Revenue(GROSS_REV) and Expense(TOTAL_EXP), 
//it is the Non-cumulative amount. Data is fetched for both reporting fiscal year and comparison fiscal year till the end period
//provided and total balance/amount information is fetched for reporting fiscal year along with the required period wise information
define view I_FundAcctgBalanceItemC
  with parameters
    P_FinancialStatementVersion : hryid,
    P_CompanyCode               : bukrs,
    P_Ledger                    : fins_ledger,
    P_FiscalYear                : fis_gjahr_no_conv,
    P_ToFiscalPeriod            : fis_period_to,
    P_ComparisonFiscalYear      : fis_gjahr_cmp_no_conv,
    P_ToComparisonFiscalPeriod  : fis_period_to_cmp
  as select from I_GLAccountLineItemSemTag as BalItm
    inner join   I_FiscalYearPeriod        as I_FiscalYearPeriod on  BalItm.FiscalYearVariant =  I_FiscalYearPeriod.FiscalYearVariant
                                                                 and BalItm.FiscalYear        =  I_FiscalYearPeriod.FiscalYear
                                                                 and BalItm.FiscalYearPeriod  <= I_FiscalYearPeriod.FiscalYearPeriod
  association [0..1] to I_FundType  as _FundType  on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                 and $projection.fundtype                = _FundType.FundType
  association [0..1] to I_Grant     as _Grant     on $projection.GrantID = _Grant.GrantID
  association [0..1] to I_GrantType as _GrantType on $projection.granttype = _GrantType.GrantType
{
  key  BalItm.Ledger,
  key  BalItm.SourceLedger,
  key  BalItm.CompanyCode,
  key  BalItm.FiscalYear,
  key  BalItm.AccountingDocument,
  key  BalItm.LedgerGLLineItem,
  key  BalItm.GLAccountHierarchy,
  key  case when BalItm.FiscalYear = $parameters.P_ComparisonFiscalYear
            then case BalItm.SemanticTag when 'PL_RESULT'  then cast ( 'C_CMP_PL' as fins_sem_tag )
                                  when 'FUND_BAL'   then cast ( 'C_CMP_FB' as fins_sem_tag )
                                  when 'CSH_CSHEQV' then cast ( 'C_CMP_CEQV' as fins_sem_tag )
                                  else BalItm.SemanticTag
                 end
            else case BalItm.SemanticTag when 'PL_RESULT' then cast ( 'C_PL' as fins_sem_tag )
                 else BalItm.SemanticTag
                 end
             end                           as SemanticTag,
       @Semantics.businessDate.from: true
  key  BalItm.ValidityStartDate,
       @Semantics.businessDate.to: true
  key  BalItm.ValidityEndDate,
  key  I_FiscalYearPeriod.FiscalPeriod,
//       I_FiscalYearPeriod.FiscalPeriodEndDate,      
       BalItm.FiscalYearVariant,
       PostingDate,
       @Semantics.currencyCode:true
       CompanyCodeCurrency,
       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       AmountInCompanyCodeCurrency,
       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
       case when ( I_FiscalYearPeriod.FiscalPeriod = $parameters.P_ToFiscalPeriod
       and I_FiscalYearPeriod.FiscalYear = $parameters.P_FiscalYear )
       then AmountInCompanyCodeCurrency
       else cast( 0 as abap.dec(23,2)) end as AmtInCoCodeCrcyPerFiscalYear,
       @ObjectModel.foreignKey.association: '_FinancialManagementArea'
       FinancialManagementArea,
       @ObjectModel.foreignKey.association: '_FunctionalArea'
       FunctionalArea,
       @ObjectModel.foreignKey.association: '_Fund'
       Fund,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_FundType'
       _Fund.FundType,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_Grant'
       GrantID,
       @Analytics.internalName: #LOCAL
       @ObjectModel.foreignKey.association: '_GrantType'
       _Grant._GrantType.GrantType,
   //    _CompanyCode.CompanyCodeName        as CompanyCodeName,
       BalItm.AccountAssignmentType,
       @ObjectModel.foreignKey.association: '_WBSElementExternalID'
       WBSElementExternalID,
       @ObjectModel.foreignKey.association: '_CostCenter'
       CostCenter,
       GLAccount,
       @ObjectModel.foreignKey.association: '_ProfitCenter'
       ProfitCenter,
       BusinessArea,
       @ObjectModel.foreignKey.association: '_Segment'
       Segment,
       @ObjectModel.foreignKey.association: '_ControllingArea'
       ControllingArea,
       ValuationArea,
//       ServiceDocumentType,
//       SalesOrganization,
//       Plant,
//       OrganizationDivision,
       FinancialAccountType,
      _Grant.GrantIsNotRelevantGrant,
      _Grant.GrantLifecycleStatus,
      _Grant.GrantAuthznGrp,
      _Grant.GranteeMgmtSponsor,
//       DistributionChannel,
//       AssetClass,
//       Supplier,
//       ServiceDocument,
//       SalesDocument,
//       OrderID,
//       Customer,
//       AccountingDocumentType,
       _CostCenter,
       _ControllingArea,
       _WBSElementExternalID,
       _Fund,
       _FundType,
       _Grant,
       _Grant._Sponsor,
       _GrantType,
       _GLAccountInCompanyCode,
       
       AssetClass,
       SalesOrganization,
       DistributionChannel,
       OrganizationDivision,
       Supplier,
       ServiceDocument,
       ServiceDocumentType,
       SalesDocument,
       OrderID,
       Customer,
       AccountingDocumentType,
       _Supplier,
       _ServiceDocument,
       _SalesDocument,
       _Order,
       _Customer,
       _CurrentProfitCenter,
       _CurrentCostCenter,
       _AccountingDocumentType,

       _FinancialManagementArea,
       _ProfitCenter,
       _Segment,
       _FunctionalArea
}
where
          GLAccountHierarchy              = $parameters.P_FinancialStatementVersion
  and     BalItm.CompanyCode              = $parameters.P_CompanyCode
  and     BalItm.Ledger                   = $parameters.P_Ledger
  and(
          SemanticTag                     = 'FUND_BAL'
    or    SemanticTag                     = 'CSH_CSHEQV'
    or    SemanticTag                     = 'PL_RESULT'
  )
    and(
    (
          I_FiscalYearPeriod.FiscalYear   = $parameters.P_FiscalYear
      and I_FiscalYearPeriod.FiscalPeriod <= $parameters.P_ToFiscalPeriod
    )
    or(
          I_FiscalYearPeriod.FiscalYear   = $parameters.P_ComparisonFiscalYear
      and I_FiscalYearPeriod.FiscalPeriod <= $parameters.P_ToComparisonFiscalPeriod
    )
  )
union all select from I_GLAccountLineItemSemTag as BalItm
  inner join          I_FiscalYearPeriod on  I_FiscalYearPeriod.FiscalYearVariant = BalItm.FiscalYearVariant
                                         and I_FiscalYearPeriod.FiscalYear        = BalItm.FiscalYear
                                         and I_FiscalYearPeriod.FiscalPeriod      = BalItm.FiscalPeriod
association [0..1] to I_FundType               as _FundType               on  $projection.FinancialManagementArea = _FundType.FinancialManagementArea
                                                                          and $projection.fundtype                = _FundType.FundType
association [0..1] to I_Grant                  as _Grant                  on  $projection.GrantID = _Grant.GrantID
association [0..1] to I_GrantType              as _GrantType              on  $projection.granttype = _GrantType.GrantType
{
  key BalItm.Ledger,
  key SourceLedger,
  key BalItm.CompanyCode,
  key BalItm.FiscalYear,
  key AccountingDocument,
  key LedgerGLLineItem,
  key GLAccountHierarchy,
  key case when BalItm.FiscalYear = $parameters.P_ComparisonFiscalYear
           then case when SemanticTag = 'GROSS_REV' then cast ( 'CMP_REV' as fins_sem_tag )
                     when SemanticTag = 'TOTAL_EXP' then cast ( 'CMP_EXP' as fins_sem_tag )
                     when SemanticTag = 'PL_RESULT' then cast ( 'CMP_PL'  as fins_sem_tag )
                     else SemanticTag
                end
                else case SemanticTag when 'TOTAL_EXP' then cast ( 'OPEREXP' as fins_sem_tag )
                     else SemanticTag
                end
       end as SemanticTag,
           //else SemanticTag end                as SemanticTag,
      @Semantics.businessDate.from: true
  key ValidityStartDate,
      @Semantics.businessDate.to: true
  key ValidityEndDate,
  key BalItm.FiscalPeriod,
//      I_FiscalYearPeriod.FiscalPeriodEndDate,
      BalItm.FiscalYearVariant,
      PostingDate,
      @Semantics.currencyCode:true
      CompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      AmountInCompanyCodeCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }    
      case when BalItm.FiscalYear = $parameters.P_FiscalYear
           then AmountInCompanyCodeCurrency
           else cast( 0 as abap.dec(23,2)) end as AmtInCoCodeCrcyPerFiscalYear,
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
      FinancialManagementArea,
      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,
      @ObjectModel.foreignKey.association: '_Fund'
      Fund,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_FundType'
      _Fund.FundType,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_Grant'
      GrantID,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_GrantType'
      _Grant._GrantType.GrantType,
  //    _CompanyCode.CompanyCodeName             as CompanyCodeName,
      BalItm.AccountAssignmentType,
      @ObjectModel.foreignKey.association: '_WBSElementExternalID'
      WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,
      GLAccount,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,
      BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      Segment,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,
      ValuationArea,
//      ServiceDocumentType,
//      SalesOrganization,
//      Plant,
//      OrganizationDivision,
      FinancialAccountType,
      _Grant.GrantIsNotRelevantGrant,
      _Grant.GrantLifecycleStatus,
      _Grant.GrantAuthznGrp,
      _Grant.GranteeMgmtSponsor,
//      DistributionChannel,
//      AssetClass,
//      Supplier,
//      ServiceDocument,
//      SalesDocument,
//      OrderID,
//      Customer,
//      AccountingDocumentType,
      _CostCenter,
      _ControllingArea,
      _WBSElementExternalID,
      _Fund,
      _FundType,
      _Grant,
      _Grant._Sponsor,
      _GrantType,
      _GLAccountInCompanyCode,
//      _Supplier,
//      _ServiceDocument,
//      _SalesDocument,
//      _Order,
//      _Customer,
//      _CurrentProfitCenter,
//      _CurrentCostCenter,
//      _AccountingDocumentType,

       AssetClass,
       SalesOrganization,
       DistributionChannel,
       OrganizationDivision,
       Supplier,
       ServiceDocument,
       ServiceDocumentType,
       SalesDocument,
       OrderID,
       Customer,
       AccountingDocumentType,
       _Supplier,
       _ServiceDocument,
       _SalesDocument,
       _Order,
       _Customer,
       _CurrentProfitCenter,
       _CurrentCostCenter,
       _AccountingDocumentType,

      _FinancialManagementArea,
      _ProfitCenter,
      _Segment,
      _FunctionalArea
}
where
          GLAccountHierarchy              = $parameters.P_FinancialStatementVersion
  and     BalItm.CompanyCode              = $parameters.P_CompanyCode
  and     BalItm.Ledger                   = $parameters.P_Ledger
  and(
    (
          I_FiscalYearPeriod.FiscalYear   = $parameters.P_FiscalYear
      and I_FiscalYearPeriod.FiscalPeriod <= $parameters.P_ToFiscalPeriod
    )
    or (
          I_FiscalYearPeriod.FiscalYear   = $parameters.P_ComparisonFiscalYear
      and I_FiscalYearPeriod.FiscalPeriod <= $parameters.P_ToComparisonFiscalPeriod
    )
  )
  and(
          BalItm.SemanticTag              = 'GROSS_REV'
    or    BalItm.SemanticTag              = 'TOTAL_EXP'
    or    BalItm.SemanticTag              = 'PL_RESULT'
  )
```
