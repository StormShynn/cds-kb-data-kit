---
name: C_WORKCENTERPRODCOSTQUERY
description: "The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual input quantity, plan input quantity, and actual-plan input quantity difference. This CDS view also provides order master data information, such as order number, order category, work center, and operation. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled on work center/operation of orders (plan costs), and how many costs are invested on work center/operation of orders (actual costs)? What is the difference between plan costs and actual costs? How much material is scheduled before production process (plan input quantity), and how much material is invested in Goods Issue (actual input quantity)? What is the difference between plan input quantity and actual input quantity? What is the order master data information (order number, order category, work center, and operation, for example)"
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WORKCENTERPRODCOSTQUERY')/$value
semantic_en: "The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual input quantity, plan input quantity, and actual-plan input quantity difference. This CDS view also provides order master data information, such as order number, order category, work center, and operation. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled on work center/operation of orders (plan costs), and how many costs are invested on work center/operation of orders (actual costs)? What is the difference between plan costs and actual costs? How much material is scheduled before production process (plan input quantity), and how much material is invested in Goods Issue (actual input quantity)? What is the difference between plan input quantity and actual input quantity? What is the order master data information (order number, order category, work center, and operation, for example)"
semantic_vi: "Production Cost By Work Center — CDS view tiêu dùng dựa trên I_WorkCenterProdCostCube."
keywords:
  - "production"
  - "cost"
  - "work"
  - "center"
  - "internal"
  - "order"
  - "operation"
  - "account"
  - "material"
tags:
  - CO
  - bo:businesspartner
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-ORD
  - CO-PC-OBJ-ORD-2CL
  - component:CO-PC-OBJ-ORD-2CL
  - consumption-view
  - goods-issue
  - lob:controlling
  - master-data
  - material
  - order
  - plan
  - product
  - bo:material
---
# C_WORKCENTERPRODCOSTQUERY

**The production costs in this CDS view include actual costs, plan costs, actual-plan costs difference, actual input quantity, plan input quantity, and actual-plan input quantity difference. This CDS view also provides order master data information, such as order number, order category, work center, and operation. This CDS view provides the prerequisites for answering the following business questions: How many costs are scheduled on work center/operation of orders (plan costs), and how many costs are invested on work center/operation of orders (actual costs)? What is the difference between plan costs and actual costs? How much material is scheduled before production process (plan input quantity), and how much material is invested in Goods Issue (actual input quantity)? What is the difference between plan input quantity and actual input quantity? What is the order master data information (order number, order category, work center, and operation, for example)**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WORKCENTERPRODCOSTQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WorkCenterInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` | ✓ | |  |  | `CHAR(4)` | Operation |
| `OrderID` | ✓ | |  |  | `CHAR(12)` | Order |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | General Ledger Account |
| `Material` | ✓ | |  |  | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `PartnerCostCenter` | ✓ | |  |  | `CHAR(10)` | Partner Cost Center |
| `PartnerCostCtrActivityType` | ✓ | |  |  | `CHAR(6)` | Activity Type |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterText` |  | |  |  | `CHAR(40)` | Work Center Text |
| `MaterialName` |  | |  |  | `CHAR(40)` | Material Description |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingAreaName` |  | |  |  | `CHAR(25)` | Controlling Area Name |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | |  |  | `CHAR(25)` | Company Code Name |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OrderDescription` |  | |  |  | `CHAR(40)` | Order Description |
| `OrderTypeName` |  | |  |  | `CHAR(40)` | Name of an Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `DebitPlanCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Cost Debit |
| `DebitPlnFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Fixed Cost Debit |
| `DebitPlnVarblCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Variable Cost Debit |
| `DebitActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Debit |
| `DebitActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Debit |
| `DebitActlVarblCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Variable Cost Debit |
| `DebitActlPlnDiffCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Cost Debit/Actual Cost Debit Variance |
| `ActualQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Actual Quantity |
| `PlanQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Plan Quantity |
| `ActlPlanDiffQuantity` |  | |  |  | `QUAN(23)` | Plan/Actual Quantity Variance |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WORKCENTERPRODCOSTQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WORKCENTERPRODCOSTQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CFIWCPRODCSTQRY'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Production Cost By Work Center'
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
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_QUERY ]


define view C_WorkCenterProdCostQuery
  with parameters
    @EndUserText.label: 'Fiscal Year Period From'
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @EndUserText.label: 'Fiscal Year Period To'
    P_ToFiscalYearPeriod   : fins_fyearperiod,
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language             : sylangu,
    P_CurrencyRole         : fac_crcyrole

  as select from I_WorkCenterProdCostCube (
                     P_FromFiscalYearPeriod    : $parameters.P_FromFiscalYearPeriod,
                     P_ToFiscalYearPeriod      : $parameters.P_ToFiscalYearPeriod,
                     P_Language                : $parameters.P_Language,
                     P_CurrencyRole            : $parameters.P_CurrencyRole
                     )
{
  key  WorkCenterInternalID,
  key  OrderOperation,
  key  OrderID,
  key  GLAccount,
  key  Material,
  key  Plant,
  key  PartnerCostCenter,
  key  PartnerCostCtrActivityType,

       WorkCenter,
       WorkCenterText,

       MaterialName,
       PlantName,

       ControllingArea,
       ControllingAreaName,
       CompanyCode,
       CompanyCodeName,
       BusinessArea,
       ProfitCenter,
       ChartOfAccounts,

       @Semantics.text:true
       OrderDescription,
       @Semantics.text:true
       OrderTypeName,
       OrderCategory,
       OrderType,

       @Semantics.unitOfMeasure:true
       UnitOfMeasure,

       // Currencies
       @Semantics.currencyCode: true
       DisplayCurrency,

       // plan costs
       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
       DebitPlanCostInDspCrcy,

       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
       DebitPlnFxdCostInDspCrcy,

       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
       DebitPlnVarblCostInDspCrcy,

       // actual costs
       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
       DebitActlCostInDspCrcy,

       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
       DebitActlFxdCostInDspCrcy,

       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
       DebitActlVarblCostInDspCrcy,

       // Actual - Plan Deviation
       @DefaultAggregation: #SUM
       @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }
       DebitActlPlnDiffCostInDspCrcy,


       //Quantity
       @DefaultAggregation: #SUM
       @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
       ActualQtyInCostSourceUnit,
       @DefaultAggregation: #SUM
       @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
       PlanQtyInCostSourceUnit,
       @DefaultAggregation: #SUM
       @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
       ActlPlanDiffQuantity

}
```
