---
name: C_MFGORDACTLPLNTGTLDGRCOST
description: "This CDS view provides the data to answer the following business questions: How many costs are scheduled for the order (plan costs). How many costs are invested in the order (actual costs). Based on different target cost versions, how many costs are budgeted for the order (target costs). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDACTLPLNTGTLDGRCOST')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: How many costs are scheduled for the order (plan costs). How many costs are invested in the order (actual costs). Based on different target cost versions, how many costs are budgeted for the order (target costs). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Manufacturing Order Actual Plan Target Ledger Specific Cost — CDS view tiêu dùng dựa trên I_MfgOrderActlPlanTgtLdgrCost."
keywords:
  - "manufacturing"
  - "order"
  - "actual"
  - "plan"
  - "target"
  - "ledger"
  - "specific"
  - "cost"
  - "item"
  - "work"
  - "center"
  - "internal"
  - "operation"
tags:
  - CO
  - bo:companycode
  - budget
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-ORD
  - CO-PC-OBJ-ORD-2CL
  - component:CO-PC-OBJ-ORD-2CL
  - consumption-view
  - lob:controlling
  - order
  - plan
---
# C_MFGORDACTLPLNTGTLDGRCOST

**This CDS view provides the data to answer the following business questions: How many costs are scheduled for the order (plan costs). How many costs are invested in the order (actual costs). Based on different target cost versions, how many costs are budgeted for the order (target costs). To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDACTLPLNTGTLDGRCOST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OrderID` | ✓ | |  |  | `CHAR(12)` | Order Number |
| `OrderItem` | ✓ | |  |  | `NUMC(4)` | Number of Order Item |
| `WorkCenterInternalID` | ✓ | |  |  | `NUMC(8)` | Object ID of the resource |
| `WorkCenter` | ✓ | |  |  | `CHAR(8)` | Work Center |
| `OrderOperation` | ✓ | |  |  | `CHAR(4)` | Operation or Phase Number |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `PartnerCostCtrActivityType` | ✓ | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` | ✓ | |  |  | `CHAR(10)` | Partner Cost Center |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `Product` | ✓ | |  |  | `CHAR(40)` | Product |
| `UnitOfMeasure` | ✓ | |  |  | `UNIT(3)` | Cost Source Unit |
| `CurPlanProjSlsOrdValnStrategy` | ✓ | |  |  | `CHAR(1)` | Val. Strat. for Current Plan Price, Sales Order/Proj. Stock |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ProducedProduct` |  | |  |  | `CHAR(40)` | Product |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CreditActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Credit |
| `DebitActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Debit |
| `CrdtActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Credit |
| `DebitActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Debit |
| `ActualQtyInCostSourceUnit` |  | |  | `'ActualQtyInCostSourceUnit * 1' 1` | `INT1(3)` |  |
| `CreditPlanCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Cost Credit |
| `DebitPlanCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Cost Debit |
| `CrdtPlnFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Fixed Cost Credit |
| `DebitPlnFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Plan Fixed Cost Debit |
| `PlanQtyInCostSourceUnit` |  | |  | `'PlanQtyInCostSourceUnit * 1' 1` | `INT1(3)` |  |
| `CrdtTargetCostInDspCrcy` |  | |  |  | `CURR(23)` | Target Cost Credit |
| `DebitTargetCostInDspCrcy` |  | |  |  | `CURR(23)` | Target Cost Debit |
| `TargetQtyInCostSourceUnit` |  | |  | `'TargetQtyInCostSourceUnit * 1' 1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDACTLPLNTGTLDGRCOST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDACTLPLNTGTLDGRCOST')/$value)*

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AbapCatalog.sqlViewName: 'CMFGORDAPT'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.query: true
@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Manufacturing Order Actual Plan Target Ledger Specific Cost'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass:  #MIXED
@ObjectModel.usageType.serviceQuality: #D
@OData.publish: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
define view C_MfgOrdActlPlnTgtLdgrCost
  with parameters
    @EndUserText.label: 'Fiscal Year Period From'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                              }
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @EndUserText.label: 'Fiscal Year Period To'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                              }
    P_ToFiscalYearPeriod   : fins_fyearperiod, 
    @Consumption.valueHelpDefinition: [{ entity:{name: 'I_Ledger', element :'Ledger'} }]
    @Consumption.derivation: {lookupEntity:  'I_Ledger',
                              resultElement: 'Ledger',
                              binding:       [{targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X'}]}       
    P_Ledger               : fins_ledger,
    @Consumption.defaultValue: '10'
    @Consumption.valueHelpDefinition: [{ entity:{name: 'I_CurrencyRole', element :'CurrencyRole'} }]
    P_CurrencyRole         : fac_crcyrole,
    @Consumption.defaultValue: '000'
    P_TargetCostVariant    : fis_awvrs
  as select from I_MfgOrderActlPlanTgtLdgrCost(
                 P_FromFiscalYearPeriod    : $parameters.P_FromFiscalYearPeriod,
                 P_ToFiscalYearPeriod      : $parameters.P_ToFiscalYearPeriod,
                 P_Ledger                  : $parameters.P_Ledger,
                 P_CurrencyRole            : $parameters.P_CurrencyRole,
                 P_TargetCostVariant       : $parameters.P_TargetCostVariant )
{ 
  key OrderID, 
  
  key OrderItem,
  
  key WorkCenterInternalID, 
  
  key WorkCenter,
  
  key OrderOperation, 
  
  key GLAccount, 
  
  key PartnerCostCtrActivityType, 
  
  key PartnerCostCenter, 
  
  key Plant, 
  
  key Product, 
  
      @Semantics.unitOfMeasure:true
  key UnitOfMeasure,
  
  key CurPlanProjSlsOrdValnStrategy, 
  
      Ledger,
      
      ControllingArea, 
      
      CompanyCode, 
      
      ProducedProduct, 
      
      ChartOfAccounts,

      OrderType,

      OrderCategory, 
      
      SalesOrder, 
      
      SalesOrderItem,
      
      WBSElementInternalID,
      
      WBSElementExternalID,

      @Semantics.currencyCode:true
      DisplayCurrency,

      /////////////////////////////////////////////////////////////////
      //Key figures for Actual Costs
      /////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CreditActlCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DebitActlCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CrdtActlFxdCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DebitActlFxdCostInDspCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      @EndUserText.label:'Actual Quantity'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula:
      'ActualQtyInCostSourceUnit * 1'
      1 as ActualQtyInCostSourceUnit,



      /////////////////////////////////////////////////////////////////
      //Key figures for Plant Costs
      /////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CreditPlanCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DebitPlanCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CrdtPlnFxdCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DebitPlnFxdCostInDspCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      @EndUserText.label:'Plan Quantity'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula:
      'PlanQtyInCostSourceUnit * 1'
      1 as PlanQtyInCostSourceUnit,



      /////////////////////////////////////////////////////////////////
      //Key figures for Target Costs
      /////////////////////////////////////////////////////////////////
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CrdtTargetCostInDspCrcy,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      DebitTargetCostInDspCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }
      @EndUserText.label:'Target Quantity'
      @AnalyticsDetails.query.decimals: 3
      @AnalyticsDetails.query.formula:
      'TargetQtyInCostSourceUnit * 1'
      1 as TargetQtyInCostSourceUnit


}
```
