---
name: I_RAPOSTINGITEMCUBE_2
description: "This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?"
semantic_vi: "Posting Item - Cube — CDS view giao diện dựa trên P_RAPostingItemWthRecgdAmt."
keywords:
  - "Cube View: Disaggregation of Revenue"
  - "posting"
  - "item"
  - "cube"
  - "company"
  - "code"
  - "accounting"
  - "principle"
  - "revn"
  - "acctg"
  - "reconciliation"
  - "performance"
  - "obligation"
  - "condition"
  - "type"
tags:
  - FI
  - account
  - bo:plant
  - component:FI-RA-2CL
  - contract
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - bo:purchaseorder
---
# I_RAPOSTINGITEMCUBE_2

**This CDS view provides the prerequisites for answering the following business questions: What amount is transferred for a different posting category in the document currency and company code currency? For example, recognized revenue, contract asset, and contract liability What amount is transferred for each condition type of each performance obligation in both the document currency and the company code currency? What amount is posted for each G/L account? What proportion of the transferred amount is for each business unit?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AccountingPrinciple` | ✓ | |  |  | `CHAR(4)` | Accounting Principle |
| `RevnAcctgReconciliationKey` | ✓ | |  |  | `CHAR(14)` | Reconciliation Key for a Contract in a Revenue Acctg. Period |
| `PerformanceObligation` | ✓ | |  |  | `CHAR(16)` | Performance Obligation |
| `ConditionType` | ✓ | |  |  | `CHAR(4)` | Condition Type |
| `RevnAcctgPostingCategory` | ✓ | |  |  | `CHAR(2)` | Category for Posting Document |
| `DebitCreditCode` | ✓ | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `RevenueAccountingContract` | ✓ | |  |  | `CHAR(14)` | Revenue Contract |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  | `cast(RevenueAccountingPosting.FiscalPeriod as fins_fiscalperiod preserving type)` | `NUMC(3)` | Fiscal Period |
| `FiscalYearVariant` |  | | `_RAFiscalYearVariant` | `FiscalYearVariant` | `CHAR(2)` | Fiscal Year Variant |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgContractCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PerfOblgnFulfillmentType` |  | |  |  | `CHAR(1)` | Fulfillment Type |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `RevnAcctgPostgAmtInCoCodeCrcy` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInCoCodeCrcy * (-1) else cast(0 as abap.curr(23,2)) end as farr_cds_postg_revn_company)` | `CURR(23)` | Posting Revenue in Company Code Currency |
| `RAPostedCostAmountInCoCodeCrcy` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInCoCodeCrcy else cast(0 as abap.curr(23,2)) end as farr_cds_postg_cost_company preserving type)` | `CURR(23)` | Posting Cost in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Local Currency |
| `RevnAcctgPostgAmtInSlsDocCrcy` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInSlsDocCrcy * (-1) else cast(0 as abap.curr(23,2)) end as farr_cds_postg_revn_trans)` | `CURR(23)` | Posting Revenue in Document Currency |
| `RAPostedCostInSlsDocCrcy` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInSlsDocCrcy else cast(0 as abap.curr(23,2)) end as farr_cds_postg_cost_trans preserving type)` | `CURR(23)` | Posting Cost in Document Currency |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RevnAcctgPostgAmtInAddlCrcy1` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy1 * (-1) else cast(0 as abap.curr(23,2)) end as farr_cds_postg_revn_local2)` | `CURR(23)` | Posting Revenue in Local Currency 2 |
| `RAPostedCostAmountInAddlCrcy1` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy1 else cast(0 as abap.curr(23,2)) end as farr_cds_postg_cost_local2 preserving type)` | `CURR(23)` | Posting Cost in Local Currency 2 |
| `AdditionalCurrency1` |  | |  |  | `CUKY(5)` | Currency Key of Second Local Currency |
| `RevnAcctgPostgAmtInAddlCrcy2` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy2 * (-1) else cast(0 as abap.curr(23,2)) end as farr_cds_postg_revn_local3)` | `CURR(23)` | Posting Revenue in Local Currency 3 |
| `RAPostedCostAmountInAddlCrcy2` |  | |  | `cast(case RevenueAccountingPosting.RevnAcctgPostingCategory when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy2 else cast(0 as abap.curr(23,2)) end as farr_cds_postg_cost_local3 preserving type)` | `CURR(23)` | Posting Cost in Local Currency 3 |
| `AdditionalCurrency2` |  | |  |  | `CUKY(5)` | Currency Key of Third Local Currency |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `RevnAcctgRecnclnKeyStatus` |  | |  |  | `CHAR(1)` | Status of Revenue Reconciliation Key |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `RAContractIsUniversal` |  | | `_I_RevenueAccountingContract` | `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
| `_FiscalYearVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FiscalYearVariant` | `I_FiscalYearVariant` | [1..1] |
| `_E_RAPerformanceObligation` | `E_RAPerformanceObligation` | [1..1] |
| `_E_RevenueAccountingContract` | `E_RevenueAccountingContract` | [1..1] |
| `_I_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RAPOSTINGITEMCUBE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Analytics.dataCategory: #CUBE
@Analytics.technicalName: 'IRAPOSTITEMCUBE2'
@Analytics.internalName: #LOCAL

@EndUserText.label: 'Posting Item - Cube'

@Metadata.allowExtensions: true // Should add this together with authorizationCheck for #CUBE, #DIMENSION and #AGGREGATION_LEVEL
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #D, sizeCategory: #XXL, dataClass: #MIXED }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_RAPostingItemCube_2
  as select from           P_RAPostingItemWthRecgdAmt as RevenueAccountingPosting

    left outer to one join P_RAAccountingPeriod       as _RAFiscalYearVariant on  RevenueAccountingPosting.CompanyCode         = _RAFiscalYearVariant.CompanyCode
                                                                              and RevenueAccountingPosting.AccountingPrinciple = _RAFiscalYearVariant.AccountingPrinciple
                                                                              and RevenueAccountingPosting.FiscalYearPeriod    = _RAFiscalYearVariant.FiscalYearPeriod

  association [1..1] to I_FiscalYearVariant         as _FiscalYearVariant           on $projection.FiscalYearVariant = _FiscalYearVariant.FiscalYearVariant

  association [1..1] to E_RAPerformanceObligation   as _E_RAPerformanceObligation   on $projection.PerformanceObligation = _E_RAPerformanceObligation.PerformanceObligation

  association [1..1] to E_RevenueAccountingContract as _E_RevenueAccountingContract on RevenueAccountingPosting.RevenueAccountingContract = _E_RevenueAccountingContract.RevenueAccountingContract

  association [1..1] to I_RevenueAccountingContract as _I_RevenueAccountingContract on RevenueAccountingPosting.RevenueAccountingContract = _I_RevenueAccountingContract.RevenueAccountingContract

{
      /** DIMENSIONS **/
      @ObjectModel.foreignKey.association: '_CompanyCode'
  key RevenueAccountingPosting.CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
  key RevenueAccountingPosting.AccountingPrinciple,

      // @ObjectModel.foreignKey.association: '_RevnAcctgReconciliationKey'
  key RevenueAccountingPosting.RevnAcctgReconciliationKey,

      @ObjectModel.foreignKey.association: '_RAPerformanceObligation'
  key RevenueAccountingPosting.PerformanceObligation,

      /** Cannot define ConditionType view for RA, as there exists self-defined type in RA **/
  key RevenueAccountingPosting.ConditionType,

      @ObjectModel.foreignKey.association: '_RAPostingCategory'
  key RevenueAccountingPosting.RevnAcctgPostingCategory,

      @ObjectModel.foreignKey.association: '_DebitCreditCode'
  key RevenueAccountingPosting.DebitCreditCode,

      @ObjectModel.foreignKey.association: '_RevenueAccountingContract'
  key RevenueAccountingPosting.RevenueAccountingContract,

      @ObjectModel.foreignKey.association: '_FiscalYear'
      RevenueAccountingPosting.FiscalYear,

      @Semantics.fiscal.period: true
      cast(RevenueAccountingPosting.FiscalPeriod as fins_fiscalperiod preserving type) as FiscalPeriod,

      @ObjectModel.foreignKey.association: '_FiscalYearVariant'
      _RAFiscalYearVariant.FiscalYearVariant,

      RevenueAccountingPosting.FiscalYearPeriod,

      @ObjectModel.foreignKey.association: '_Segment'
      RevenueAccountingPosting.Segment,

      @ObjectModel.foreignKey.association: '_GLAccountInCompanyCode'
      RevenueAccountingPosting.GLAccount,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      RevenueAccountingPosting.FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      RevenueAccountingPosting.BusinessArea,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      RevenueAccountingPosting.ProfitCenter,

      @ObjectModel.foreignKey.association: '_CostCenter'
      RevenueAccountingPosting.CostCenter,

      @ObjectModel.foreignKey.association: '_Order'
      RevenueAccountingPosting.OrderID,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      RevenueAccountingPosting.SalesOrder,

      @ObjectModel.foreignKey.association: '_WBSElement'
      RevenueAccountingPosting.WBSElementExternalID,

      RevenueAccountingPosting._RevenueAccountingContract.RevnAcctgContractCreationDate,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      RevenueAccountingPosting._RAPerformanceObligation.BusinessPartner,

      @ObjectModel.foreignKey.association: '_Customer'
      RevenueAccountingPosting._RAPerformanceObligation.Customer,

      @ObjectModel.foreignKey.association: '_FulfillmentType'
      RevenueAccountingPosting._RAPerformanceObligation.PerfOblgnFulfillmentType,

      RevenueAccountingPosting._RAPerformanceObligation.RAPerformanceObligationType,

      RevenueAccountingPosting._RAPerformanceObligation.RevnAcctgSalesOrganization,

      /** MEASURES **/
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInCoCodeCrcy * (-1)
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_revn_company)                                         as RevnAcctgPostgAmtInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInCoCodeCrcy
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_cost_company preserving type)                         as RAPostedCostAmountInCoCodeCrcy,

      RevenueAccountingPosting.CompanyCodeCurrency,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInSlsDocCrcy * (-1)
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_revn_trans)                                           as RevnAcctgPostgAmtInSlsDocCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInSlsDocCrcy
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_cost_trans preserving type)                           as RAPostedCostInSlsDocCrcy,

      RevenueAccountingPosting.SalesDocumentCurrency,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy1 * (-1)
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_revn_local2)                                          as RevnAcctgPostgAmtInAddlCrcy1,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency1'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy1
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_cost_local2 preserving type)                          as RAPostedCostAmountInAddlCrcy1,

      RevenueAccountingPosting.AdditionalCurrency1,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'RV' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy2 * (-1)
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_revn_local3)                                          as RevnAcctgPostgAmtInAddlCrcy2,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'AdditionalCurrency2'
      cast(case RevenueAccountingPosting.RevnAcctgPostingCategory
             when 'CO' then RevenueAccountingPosting.RevnAcctgPostgAmtInAddlCrcy2
             else cast(0 as abap.curr(23,2))
           end as farr_cds_postg_cost_local3 preserving type)                          as RAPostedCostAmountInAddlCrcy2,

      RevenueAccountingPosting.AdditionalCurrency2,

      RevenueAccountingPosting.ConditionIsForStatistics,

      @ObjectModel.foreignKey.association: '_RAReconciliationKeyStatus'
      RevenueAccountingPosting.RevnAcctgRecnclnKeyStatus,

      /** Controlling area is used for association for profit center and cost center **/
      @ObjectModel.foreignKey.association: '_ControllingArea'
      RevenueAccountingPosting.ControllingArea,

      _I_RevenueAccountingContract.RAContractIsUniversal,


      RevenueAccountingPosting._CompanyCode,
      RevenueAccountingPosting._AccountingPrinciple,
      RevenueAccountingPosting._RevenueAccountingContract,
      RevenueAccountingPosting._ProfitCenter,
      RevenueAccountingPosting._CurrentProfitCenter,
      RevenueAccountingPosting._ControllingArea,
      RevenueAccountingPosting._Segment,
      RevenueAccountingPosting._CostCenter,
      RevenueAccountingPosting._CurrentCostCenter,
      RevenueAccountingPosting._WBSElement,
      RevenueAccountingPosting._Currency,
      RevenueAccountingPosting._CompanyCodeCurrency,
      RevenueAccountingPosting._RevnAcctgReconciliationKey,
      RevenueAccountingPosting._RAPerformanceObligation,
      RevenueAccountingPosting._FiscalYear,
      RevenueAccountingPosting._GLAccountInCompanyCode,
      RevenueAccountingPosting._BusinessArea,
      RevenueAccountingPosting._FunctionalArea,
      RevenueAccountingPosting._Order,
      RevenueAccountingPosting._SalesOrder,
      RevenueAccountingPosting._RAPostingCategory,
      RevenueAccountingPosting._DebitCreditCode,
      RevenueAccountingPosting._RAReconciliationKeyStatus,
      _FiscalYearVariant,

      RevenueAccountingPosting._RAPerformanceObligation._BusinessPartner,
      RevenueAccountingPosting._RAPerformanceObligation._Customer,
      RevenueAccountingPosting._RAPerformanceObligation._FulfillmentType

}
where
  _I_RevenueAccountingContract.RAContractIsUniversal = ''
```
