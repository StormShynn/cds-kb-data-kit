---
name: I_RATOTALOPENREVENUECUBE_2
description: "This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) at end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RATOTALOPENREVENUECUBE_2')/$value
semantic_en: "This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) at end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?"
semantic_vi: "Remaining Performance Obligation - Cube — CDS view giao diện dựa trên P_RATotalOpenAmount."
keywords:
  - "Cube View: Remaining Performance Obligations"
  - "remaining"
  - "performance"
  - "obligation"
  - "cube"
  - "company"
  - "code"
  - "accounting"
  - "principle"
  - "revn"
  - "acctg"
  - "condition"
  - "category"
  - "type"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-RA-2CL
  - document
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
  - transaction
---
# I_RATOTALOPENREVENUECUBE_2

**This CDS views disclose the aggregate amount of the transaction price allocated to the performance obligations that are unsatisfied (or partially unsatisfied) at end of the reporting period. This CDS view provides the prerequisites for answering the following business questions: What is the total open revenue at the end of the reporting period in the document currency? What is the total open revenue of time-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue of event-based performance obligations at the end of the reporting period in the document currency? What is the total open revenue for each account assignment, for example, by profit centre? What is the total open revenue for each performance obligation type?**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RATOTALOPENREVENUECUBE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `AccountingPrinciple` | ✓ | |  |  | `CHAR(4)` | Accounting Principle |
| `PerformanceObligation` | ✓ | |  |  | `CHAR(16)` | Performance Obligation |
| `RevnAcctgConditionCategory` | ✓ | |  |  | `CHAR(1)` | Price or Cost Condition |
| `RAPerformanceObligationType` |  | |  |  | `CHAR(10)` | Revenue Accounting Performance Obligation Type |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `RevenueAccountingContract` |  | |  |  | `CHAR(14)` | Revenue Contract |
| `RevnAcctgContractCreationDate` |  | | `_RevenueAccountingContract` | `RevnAcctgContractCreationDate` | `DATS(8)` | Created On |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `PerfOblgnFulfillmentType` |  | |  | `case PerfOblgnFulfillmentType when 'O' then 'E' else PerfOblgnFulfillmentType end` | `CHAR(1)` | Fulfillment Type |
| `PerfOblgnEventType` |  | |  |  | `CHAR(2)` | Event Type |
| `RevnAcctgSalesOrganization` |  | |  |  | `CHAR(20)` | Sales Organization for Revenue Accounting |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ProfitabilitySegment` |  | |  | `ProfitabilitySegment_2` | `CHAR(10)` | Profitability Segment |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Account assignment Sales Order |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `RevnAcctgPerfOblgnStatus` |  | |  |  | `CHAR(1)` | Performance Obligation Status |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `PerformanceObligationClass` |  | |  |  | `CHAR(30)` | Performance Obligation Name |
| `RAInitialEffectiveDate` |  | |  |  | `DATS(8)` | Initial effect. date when POB is created & becomes effective |
| `IsBusinessPurposeCompleted` |  | |  |  | `CHAR(1)` | Is Blocked |
| `RATotalOpenRevnInSlsDocCrcy` |  | |  |  | `CURR(23)` | Open Revenue up to the Current Period |
| `RATimeBsdOpenRevnInSlsDocCrcy` |  | |  |  | `CURR(23)` | Open Revenue up to the Current Period |
| `RAEventBsdOpenRevnInSlsDocCrcy` |  | |  |  | `CURR(23)` | Open Revenue up to the Current Period |
| `RAOpenCostInCoCodeCrcy` |  | |  |  | `CURR(23)` | Open Revenue up to the Current Period |
| `RATimeBsdOpenCostInSlsDocCrcy` |  | |  |  | `CURR(23)` | Open Revenue up to the Current Period |
| `RAEventBsdOpenCostInSlsDocCrcy` |  | |  |  | `CURR(23)` | Open Revenue up to the Current Period |
| `RAContractIsUniversal` |  | | `_I_RevenueAccountingContract` | `RAContractIsUniversal` | `CHAR(1)` | Universal Revenue Recognition Contract |
| `_FulfillmentType` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_PerfObligationEventType` | | ✓ | | | | |
| `_RAPerfOblgnStatus` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FulfillmentType` | `I_RAPerfOblgnFlfmtType` | [1..1] |
| `_E_RAPerformanceObligation` | `E_RAPerformanceObligation` | [1..1] |
| `_E_RevenueAccountingContract` | `E_RevenueAccountingContract` | [1..1] |
| `_I_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RATOTALOPENREVENUECUBE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RATOTALOPENREVENUECUBE_2')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL

@EndUserText.label: 'Remaining Performance Obligation - Cube'

@Metadata.allowExtensions: true // should add this together with authorizationCheck for #CUBE, #DIMENSION and #AGGREGATION_LEVEL
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER ]
@ObjectModel.usageType: { sizeCategory: #XXL, serviceQuality: #D, dataClass: #MIXED }

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE

define view entity I_RATotalOpenRevenueCube_2
  with parameters
    P_FiscalYear   : fis_gjahr,
    P_FiscalPeriod : fins_fiscalperiod

  as select from P_RATotalOpenAmount(
                   P_FiscalYear   : $parameters.P_FiscalYear,
                   P_FiscalPeriod : $parameters.P_FiscalPeriod) as TotalOpenRevenue

  association [1..1] to I_RAPerfOblgnFlfmtType      as _FulfillmentType             on $projection.PerfOblgnFulfillmentType = _FulfillmentType.PerfOblgnFulfillmentType

  association [1..1] to E_RAPerformanceObligation   as _E_RAPerformanceObligation   on TotalOpenRevenue.PerformanceObligation = _E_RAPerformanceObligation.PerformanceObligation

  association [1..1] to E_RevenueAccountingContract as _E_RevenueAccountingContract on TotalOpenRevenue.RevenueAccountingContract = _E_RevenueAccountingContract.RevenueAccountingContract

  association [1..1] to I_RevenueAccountingContract as _I_RevenueAccountingContract on TotalOpenRevenue.RevenueAccountingContract = _I_RevenueAccountingContract.RevenueAccountingContract

{
      /**** Dimensions ****/

      @ObjectModel.foreignKey.association: '_CompanyCode'
  key CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
  key AccountingPrinciple,

      @ObjectModel.text.element: [ 'PerformanceObligationClass' ]
  key PerformanceObligation,

  key RevnAcctgConditionCategory,

      RAPerformanceObligationType,

      SalesDocumentCurrency,

      TotalOpenRevenue.RevenueAccountingContract,

      _RevenueAccountingContract.RevnAcctgContractCreationDate,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      BusinessPartner,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      @ObjectModel.foreignKey.association: '_FulfillmentType'
      case PerfOblgnFulfillmentType
        when 'O' then 'E'
        else PerfOblgnFulfillmentType
      end                    as PerfOblgnFulfillmentType,

      @ObjectModel.foreignKey.association: '_PerfObligationEventType'
      PerfOblgnEventType,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      RevnAcctgSalesOrganization,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,

      @ObjectModel.foreignKey.association: '_Segment'
      Segment,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,

      ProfitabilitySegment_2 as ProfitabilitySegment,

      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,

      @ObjectModel.foreignKey.association: '_Order'
      OrderID,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      SalesOrder,

      @ObjectModel.foreignKey.association: '_WBSElement'
      WBSElementExternalID,

      @ObjectModel.foreignKey.association: '_RAPerfOblgnStatus'
      RevnAcctgPerfOblgnStatus,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      @Semantics.text: true
      PerformanceObligationClass,

      RAInitialEffectiveDate,

      TotalOpenRevenue._RevenueAccountingContract.IsBusinessPurposeCompleted,

      /**** Open Revenues in Sales Document Currency ****/
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      TotalOpenRevenue.RATotalOpenRevnInSlsDocCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      TotalOpenRevenue.RATimeBsdOpenRevnInSlsDocCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      TotalOpenRevenue.RAEventBsdOpenRevnInSlsDocCrcy,

      /**** Open Cost in Sales Document Currency ****/
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      TotalOpenRevenue.RAOpenCostInCoCodeCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      TotalOpenRevenue.RATimeBsdOpenCostInSlsDocCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      TotalOpenRevenue.RAEventBsdOpenCostInSlsDocCrcy,

      _I_RevenueAccountingContract.RAContractIsUniversal,

      /**** Others ****/

      _AccountingPrinciple,
      _BusinessArea,
      _BusinessPartner,
      _CompanyCode,
      _Customer,
      _FulfillmentType,
      _FunctionalArea,
      _Order,
      _PerfObligationEventType,
      _RAPerfOblgnStatus,
      _SalesOrder,
      _Segment,
      _WBSElement,
      _CostCenter,
      _ProfitCenter,
      _SalesOrganization,
      _ControllingArea
}
where
  _I_RevenueAccountingContract.RAContractIsUniversal = ''
```
