---
name: I_RADEFRLITEMFORDSPCRCYCUBE_2
description: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the document currency and display currency? How much revenue is recognized for each period in the document currency and display currency? How much revenue catch-up is calculated this year from contract changes in the document currency and display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFRLITEMFORDSPCRCYCUBE_2')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the document currency and display currency? How much revenue is recognized for each period in the document currency and display currency? How much revenue catch-up is calculated this year from contract changes in the document currency and display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract?"
semantic_vi: "Revenue Schedule Deferral Item - Cube — CDS view giao diện dựa trên I_RevnAcctgDeferralItem."
keywords:
  - "Cube View: Disaggregation of Recognized Revenue"
  - "revenue"
  - "schedule"
  - "deferral"
  - "item"
  - "cube"
  - "performance"
  - "obligation"
  - "revn"
  - "acctg"
  - "reconciliation"
  - "condition"
  - "type"
  - "category"
  - "fiscal"
  - "year"
tags:
  - FI
  - bo:companycode
  - component:FI-RA-2CL
  - contract
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_RADEFRLITEMFORDSPCRCYCUBE_2

**This CDS view provides the prerequisites for answering the following business questions: How much revenue is recognized this year in the document currency and display currency? How much revenue is recognized for each period in the document currency and display currency? How much revenue catch-up is calculated this year from contract changes in the document currency and display currency? What is the growth for year-over-year? What is the top 5 best business partners? What is the proportion of revenue for business units, for example, by profit centre? What is the revenue or revenue catch-up for each performance obligation or contract?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFRLITEMFORDSPCRCYCUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` | ✓ | |  |  | `CHAR(16)` | Performance Obligation |
| `RevnAcctgReconciliationKey` | ✓ | |  |  | `CHAR(14)` | Reconciliation Key for a Contract in a Revenue Acctg. Period |
| `ConditionType` | ✓ | |  |  | `CHAR(4)` | Condition Type |
| `RevnAcctgConditionCategory` |  | |  |  | `CHAR(1)` | Price or Cost Condition |
| `FiscalYear` |  | |  | `cast(RevnAcctgDeferralItem._RevnAcctgReconciliationKey.FiscalYear as fis_gjahr_no_conv preserving type)` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `RevenueAccountingContract` |  | | `_RAPerformanceObligation` | `RevenueAccountingContract` | `CHAR(14)` | Revenue Contract |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingPrinciple` |  | |  |  | `CHAR(4)` | Accounting Principle |
| `BusinessPartner` |  | | `_RAPerformanceObligation` | `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `Customer` |  | | `_RAPerformanceObligation` | `Customer` | `CHAR(10)` | Customer Number |
| `PerfOblgnFulfillmentType` |  | | `_RAPerformanceObligation` | `PerfOblgnFulfillmentType` | `CHAR(1)` | Fulfillment Type |
| `RAPerformanceObligationType` |  | | `_RAPerformanceObligation` | `RAPerformanceObligationType` | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `PerformanceObligationClass` |  | | `_RAPerformanceObligation` | `PerformanceObligationClass` | `CHAR(30)` | Performance Obligation Name |
| `RevnAcctgSalesOrganization` |  | | `_RAPerformanceObligation` | `RevnAcctgSalesOrganization` | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `RevnAcctgPerfOblgnStatus` |  | | `_RAPerformanceObligation` | `RevnAcctgPerfOblgnStatus` | `CHAR(1)` | Performance Obligation Status |
| `ProfitCenter` |  | | `_RAPerformanceObligation` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `Segment` |  | | `_RAPerformanceObligation` | `Segment` | `CHAR(10)` | Segment for Segmental Reporting |
| `CostCenter` |  | | `_RAPerformanceObligation` | `CostCenter` | `CHAR(10)` | Cost Center |
| `FunctionalArea` |  | | `_RAPerformanceObligation` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | | `_RAPerformanceObligation` | `BusinessArea` | `CHAR(4)` | Business Area |
| `OrderID` |  | | `_RAPerformanceObligation` | `OrderID` | `CHAR(12)` | Order Number |
| `SalesOrder` |  | | `_RAPerformanceObligation` | `SalesOrder` | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` |  | | `_RAPerformanceObligation` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ControllingArea` |  | | `_RAPerformanceObligation` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `RAContractIsUniversal` |  | | `_RAPerformanceObligation._RevenueAccountingContract` | `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `DeltaRecognizedAmtInSlsDocCrcy` |  | |  |  | `CURR(23)` | Amount for Posting |
| `RecgdCatchUpAmtInSlsDocCrcy` |  | |  | `cast(RevnAcctgDeferralItem.RecgdCatchUpAmtInSlsDocCrcy as farr_cds_rev_catchup_amt preserving type)` | `CURR(23)` | Amount of Retrospective Revenue Catch-up |
| `_RAPerformanceObligation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RAPerformanceObligation` | `I_RAPerformanceObligation` | [1..1] |
| `_E_RAPerformanceObligation` | `E_RAPerformanceObligation` | [1..1] |
| `_E_RevenueAccountingContract` | `E_RevenueAccountingContract` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFRLITEMFORDSPCRCYCUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RADEFRLITEMFORDSPCRCYCUBE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Aggregation.allowPrecisionLoss: true

@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL
@Analytics.technicalName: 'IRADEFRLITEMCUBE2'

@Consumption.dbHints: [ 'NO_USE_OLAP_PLAN' ]

@EndUserText.label: 'Revenue Schedule Deferral Item - Cube'

@Metadata.allowExtensions: true // should add this together with authorizationCheck for #CUBE, #DIMENSION and #AGGREGATION_LEVEL
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.usageType: { sizeCategory: #XXL, serviceQuality: #D, dataClass: #MIXED }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_RADefrlItemForDspCrcyCube_2
  as select from I_RevnAcctgDeferralItem as RevnAcctgDeferralItem

  association [1..1] to I_RAPerformanceObligation   as _RAPerformanceObligation     on RevnAcctgDeferralItem.PerformanceObligation = _RAPerformanceObligation.PerformanceObligation

  association [1..1] to E_RAPerformanceObligation   as _E_RAPerformanceObligation   on $projection.PerformanceObligation = _E_RAPerformanceObligation.PerformanceObligation

  association [1..1] to E_RevenueAccountingContract as _E_RevenueAccountingContract on RevnAcctgDeferralItem.RevenueAccountingContract = _E_RevenueAccountingContract.RevenueAccountingContract

{
      /** DIMENSIONS **/
      @ObjectModel.foreignKey.association: '_RAPerformanceObligation'
  key RevnAcctgDeferralItem.PerformanceObligation,

  key RevnAcctgDeferralItem.RevnAcctgReconciliationKey,

  key RevnAcctgDeferralItem.ConditionType,

      @ObjectModel.foreignKey.association: '_RAConditionCategory'
      RevnAcctgDeferralItem.RevnAcctgConditionCategory,

      @Semantics.fiscal.year: true
      cast(RevnAcctgDeferralItem._RevnAcctgReconciliationKey.FiscalYear
           as fis_gjahr_no_conv preserving type)        as FiscalYear,

      @Semantics.fiscal.period: true
      RevnAcctgDeferralItem._RevnAcctgReconciliationKey.FiscalPeriod,

      @ObjectModel.foreignKey.association: '_RevenueAccountingContract'
      _RAPerformanceObligation.RevenueAccountingContract, // to handle combine case, get Contract from POB table

      @ObjectModel.foreignKey.association: '_CompanyCode'
      RevnAcctgDeferralItem.CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      RevnAcctgDeferralItem.AccountingPrinciple,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      _RAPerformanceObligation.BusinessPartner,

      @ObjectModel.foreignKey.association: '_Customer'
      _RAPerformanceObligation.Customer,

      @ObjectModel.foreignKey.association: '_FulfillmentType'
      _RAPerformanceObligation.PerfOblgnFulfillmentType,

      /* no dimension view needed, as the field value is customized by the user and no table stores those values */
      _RAPerformanceObligation.RAPerformanceObligationType,

      _RAPerformanceObligation.PerformanceObligationClass,

      /** no dimension view can be used, as the sales organization of Revenue Accounting is compatible with different components **/
      _RAPerformanceObligation.RevnAcctgSalesOrganization,

      @ObjectModel.foreignKey.association: '_RAPerfOblgnStatus'
      _RAPerformanceObligation.RevnAcctgPerfOblgnStatus,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      _RAPerformanceObligation.ProfitCenter,

      @ObjectModel.foreignKey.association: '_Segment'
      _RAPerformanceObligation.Segment,

      @ObjectModel.foreignKey.association: '_CostCenter'
      _RAPerformanceObligation.CostCenter,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      _RAPerformanceObligation.FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      _RAPerformanceObligation.BusinessArea,

      @ObjectModel.foreignKey.association: '_Order'
      _RAPerformanceObligation.OrderID,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      _RAPerformanceObligation.SalesOrder,

      @ObjectModel.foreignKey.association: '_WBSElement'
      _RAPerformanceObligation.WBSElementExternalID,

      /** Controlling area is used for association for profit center and cost center **/
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _RAPerformanceObligation.ControllingArea,

      _RAPerformanceObligation._RevenueAccountingContract.RAContractIsUniversal,

      RevnAcctgDeferralItem.SalesDocumentCurrency,

      /** Restricted conditions **/
      RevnAcctgDeferralItem.ConditionIsForStatistics,

      /** MEASURES **/
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      RevnAcctgDeferralItem.DeltaRecognizedAmtInSlsDocCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(RevnAcctgDeferralItem.RecgdCatchUpAmtInSlsDocCrcy
           as farr_cds_rev_catchup_amt preserving type) as RecgdCatchUpAmtInSlsDocCrcy,

      /** Associations **/
      _RAPerformanceObligation,
      RevnAcctgDeferralItem._CompanyCode,
      RevnAcctgDeferralItem._AccountingPrinciple,
      RevnAcctgDeferralItem._RAConditionCategory,
      _RAPerformanceObligation._RevenueAccountingContract,
      _RAPerformanceObligation._BusinessPartner,
      _RAPerformanceObligation._Customer,
      _RAPerformanceObligation._FulfillmentType,
      _RAPerformanceObligation._RAPerfOblgnStatus,
      _RAPerformanceObligation._ControllingArea,
      _RAPerformanceObligation._ProfitCenter,
      _RAPerformanceObligation._CurrentProfitCenter,
      _RAPerformanceObligation._CostCenter,
      _RAPerformanceObligation._CurrentCostCenter,
      _RAPerformanceObligation._Segment,
      _RAPerformanceObligation._FunctionalArea,
      _RAPerformanceObligation._BusinessArea,
      _RAPerformanceObligation._Order,
      _RAPerformanceObligation._SalesOrder,
      _RAPerformanceObligation._WBSElement
}
where
  _RAPerformanceObligation._RevenueAccountingContract.RAContractIsUniversal = ''
```
