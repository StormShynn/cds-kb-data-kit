---
name: C_PRODUCTCOSTBYORDERQUERY
description: "The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual output quantity, plan output quantity, variance, and WIP. This CDS view also provides order master data information, such as order number, order category, and order description. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled for the order (plan costs), and how many costs are invested in the order (actual costs)? What is the difference between plan costs and actual costs? How many outputs are scheduled before production process (plan output quantity), and how many outputs are produced in Goods Receipt (actual output quantity)? What is the order master data information (order number, order category, and order description, for example)?"
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTCOSTBYORDERQUERY')/$value
semantic_en: "The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual output quantity, plan output quantity, variance, and WIP. This CDS view also provides order master data information, such as order number, order category, and order description. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled for the order (plan costs), and how many costs are invested in the order (actual costs)? What is the difference between plan costs and actual costs? How many outputs are scheduled before production process (plan output quantity), and how many outputs are produced in Goods Receipt (actual output quantity)? What is the order master data information (order number, order category, and order description, for example)?"
semantic_vi: "Production Cost By Order — CDS view tiêu dùng dựa trên I_ProductCostByOrderCube."
keywords:
  - "production"
  - "cost"
  - "order"
  - "type"
  - "category"
  - "reference"
  - "external"
tags:
  - CO
  - bo:businesspartner
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-ORD
  - CO-PC-OBJ-ORD-2CL
  - component:CO-PC-OBJ-ORD-2CL
  - consumption-view
  - goods-receipt
  - lob:controlling
  - master-data
  - order
  - plan
  - product
  - bo:material
---
# C_PRODUCTCOSTBYORDERQUERY

**The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual output quantity, plan output quantity, variance, and WIP. This CDS view also provides order master data information, such as order number, order category, and order description. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled for the order (plan costs), and how many costs are invested in the order (actual costs)? What is the difference between plan costs and actual costs? How many outputs are scheduled before production process (plan output quantity), and how many outputs are produced in Goods Receipt (actual output quantity)? What is the order master data information (order number, order category, and order description, for example)?**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTCOSTBYORDERQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  |  | `CHAR(12)` | Order Number |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ReferenceOrder` |  | |  |  | `CHAR(12)` | Reference Order Number |
| `ExternalOrder` |  | |  |  | `CHAR(20)` | External Order Number |
| `OrderDescription` |  | |  |  | `CHAR(40)` | Order Description |
| `OrderTypeName` |  | |  |  | `CHAR(40)` | Name of an Order Type |
| `OrderCategoryName` |  | |  |  | `CHAR(60)` | Order Category Name |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `ProductionUnit` |  | |  |  | `UNIT(3)` | Output Unit of Measure |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Company Code Name |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FiscalWeek` |  | |  |  | `NUMC(2)` | Fiscal Week |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `MaterialName` |  | |  |  | `CHAR(40)` | Material Description |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `ScheduledBasicEndDate` |  | |  |  | `DATS(8)` | Scheduled Finish Date |
| `ScheduledReleaseDate` |  | |  |  | `DATS(8)` | Scheduled Release Date |
| `ActualStartDate` |  | |  |  | `DATS(8)` | Actual Start Date |
| `ConfirmedEndDate` |  | |  |  | `DATS(8)` | Manufacturing Order Confirmed End Date |
| `ActualReleasedDate` |  | |  |  | `DATS(8)` | Actual Release Date |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `ActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Total Actual Cost |
| `ActlVarblCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Variable Cost |
| `ActlFixedCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost |
| `PlanCostInDspCrcy` |  | |  |  | `CURR(23)` | Total Plan Cost |
| `PlanFixedCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Fixed Cost |
| `PlanVarblCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Variable Cost |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance |
| `InptRmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Input Variance |
| `MixedPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Mixed-Price Variance |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance |
| `OutpQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Quantity Variance |
| `OutpRmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance |
| `ScrapVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Scrap Variance |
| `CostVarianceInDspCrcy` |  | |  |  | `CURR(23)` | Cost Variance |
| `WIPAmtInDisplayCurrency` |  | |  |  | `CURR(23)` | Work In Process |
| `RsrvAmountInDisplayCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `PlanOutputQuantity` |  | |  |  | `QUAN(23)` | Plan Output Quantity |
| `ActualOutputQuantity` |  | |  |  | `QUAN(23)` | Actual Output Quantity |
| `DebitActlPlnDiffCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Cost Debit/Actual Cost Debit Variance |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTCOSTBYORDERQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODUCTCOSTBYORDERQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIPRODCSTBOQRY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Production Cost By Order'
@VDM.viewType: #CONSUMPTION

@Analytics.query: true
@Analytics.settings.maxProcessingEffort: #HIGH

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

@OData.publish: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
define view C_ProductCostByOrderQuery
  with parameters
    @EndUserText.label: 'Fiscal Year Period From'
    P_FromFiscalYearPeriod  : fins_fyearperiod,
    @EndUserText.label: 'Fiscal Year Period To'
    P_ToFiscalYearPeriod    : fins_fyearperiod,
    @Consumption.defaultValue: '000'
    P_PlanVersion           : fis_kkb_plvrs,
    @Consumption.defaultValue: '000'
    P_TargetCostVariant     : fis_awvrs,
    @Consumption.defaultValue: '000'
    P_ResultAnalysisVersion : versn_abgr,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language              : sylangu,
    //'20' represents controlling area currency, and '70' represents object currency
    P_CurrencyRole          : fac_crcyrole

  as select from I_ProductCostByOrderCube(
                   P_FromFiscalYearPeriod    : $parameters.P_FromFiscalYearPeriod,
                   P_ToFiscalYearPeriod      : $parameters.P_ToFiscalYearPeriod,
                   P_PlanVersion             : $parameters.P_PlanVersion,
                   P_TargetCostVariant       : $parameters.P_TargetCostVariant,
                   P_ResultAnalysisVersion   : $parameters.P_ResultAnalysisVersion,
                   P_Language                : $parameters.P_Language,
                   P_CurrencyRole            : $parameters.P_CurrencyRole
                 ) _CostByOrder
{
  key OrderID,

      //      ObjectInternalID,

      OrderType,
      OrderCategory,
      ReferenceOrder,
      ExternalOrder,
      

      @Semantics.text:true
      OrderDescription,
      @Semantics.text:true
      OrderTypeName,
      @Semantics.text:true
      OrderCategoryName,


      Plant,
      PlantName,
      @Semantics.unitOfMeasure:true
      ProductionUnit,


      //assignment
      ControllingArea,
      ControllingAreaName,
      CompanyCode,
      CompanyCodeName,
      BusinessArea,
      ProfitCenter,
      CreationDate,
      
      //Fiscal year, period, week
      FiscalYear,
      FiscalPeriod,
      FiscalWeek,


      //Order Item
      Material,
      MaterialName,
      StorageLocation,

      //Order Header PPS Orders
      ScheduledBasicEndDate,
      ScheduledReleaseDate,
      ActualStartDate,
      ConfirmedEndDate,
      ActualReleasedDate,

      // Currencies
      @Semantics.currencyCode: true
      DisplayCurrency,


      // Actual costs
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      ActlCostInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      ActlVarblCostInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      ActlFixedCostInDspCrcy,

      // Plan costs
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      PlanCostInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      PlanFixedCostInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      PlanVarblCostInDspCrcy,
      
      // Variance
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      InptPrVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      InptQtyVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      RsceUsgeVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      InptRmngVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      MixedPrVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      OutpPrVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      LotSizeVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      OutpQtyVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      OutpRmngVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      ScrapVarcAmtInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      CostVarianceInDspCrcy,
      
      // WIP and Reserve
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      WIPAmtInDisplayCurrency,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      RsrvAmountInDisplayCrcy,
      

      /////////////////////////////////////////////////////////////////////////////////////
      // Output Quantities
      /////////////////////////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ProductionUnit'} }
      PlanOutputQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ProductionUnit'} }
      ActualOutputQuantity,

      /////////////////////////////////////////////////////////////////////////////////////
      // Calculates deviations
      /////////////////////////////////////////////////////////////////////////////////////
      //Actual - Plan deviation
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
      DebitActlPlnDiffCostInDspCrcy
}
```
