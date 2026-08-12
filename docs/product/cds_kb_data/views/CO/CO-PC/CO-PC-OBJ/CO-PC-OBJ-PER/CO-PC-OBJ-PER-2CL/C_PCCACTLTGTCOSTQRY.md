---
name: C_PCCACTLTGTCOSTQRY
description: "This CDS view retrieves actual and target cost details of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: What are the event-based product cost collectors for my specified periods? What are the products and plants for the product cost collectors? What are the following values for each product cost collector? Target cost (credit and debit) Actual cost (credit and debit) Actual input quantity and output quantity What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-OBJ-PER-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value
semantic_en: "This CDS view retrieves actual and target cost details of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: What are the event-based product cost collectors for my specified periods? What are the products and plants for the product cost collectors? What are the following values for each product cost collector? Target cost (credit and debit) Actual cost (credit and debit) Actual input quantity and output quantity What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Actual and Target Costs for PCC - Query — CDS view tiêu dùng dựa trên Actual and Target Costs for PCC - Query."
keywords:
  - "actual"
  - "and"
  - "target"
  - "costs"
  - "for"
  - "pcc"
  - "query"
  - "ledger"
  - "order"
  - "company"
  - "code"
  - "controlling"
  - "area"
  - "work"
  - "center"
tags:
  - CO
  - account
  - bo:companycode
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-PER
  - CO-PC-OBJ-PER-2CL
  - component:CO-PC-OBJ-PER-2CL
  - consumption-view
  - lob:controlling
  - order
  - plan
  - product
---
# C_PCCACTLTGTCOSTQRY

**This CDS view retrieves actual and target cost details of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: What are the event-based product cost collectors for my specified periods? What are the products and plants for the product cost collectors? What are the following values for each product cost collector? Target cost (credit and debit) Actual cost (credit and debit) Actual input quantity and output quantity What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-PER-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of the resource |
| `OrderOperation` |  | |  |  | `CHAR(4)` | Order Operation |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `PartnerCostCtrActivityType` |  | |  |  | `CHAR(6)` | Partner Cost Center Activity Type |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Partner Cost Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Cost Source Unit |
| `ProducedProduct` |  | |  |  | `CHAR(40)` | Product |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CreditActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Credit |
| `DebitActlCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Cost Debit |
| `CrdtActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Credit |
| `DebitActlFxdCostInDspCrcy` |  | |  |  | `CURR(23)` | Actual Fixed Cost Debit |
| `ActualQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Actual Quantity |
| `CrdtTargetCostInDspCrcy` |  | |  |  | `CURR(23)` | Target Cost Credit |
| `DebitTargetCostInDspCrcy` |  | |  |  | `CURR(23)` | Target Cost Debit |
| `TargetQtyInCostSourceUnit` |  | |  |  | `QUAN(23)` | Target Quantity |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCACTLTGTCOSTQRY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_ALLOWED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.settings.maxProcessingEffort: #HIGH
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType.sizeCategory: #XL,
                usageType.serviceQuality: #D,
                usageType.dataClass: #MIXED,
                supportedCapabilities: [#ANALYTICAL_QUERY],
                modelingPattern:#ANALYTICAL_QUERY }  
@OData.publish: true                
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Actual and Target Costs for PCC - Query'
define transient view entity C_PCCActlTgtCostQry
  provider contract analytical_query
  with parameters 
    @EndUserText.label: 'From Fiscal Year Period'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                             }
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @EndUserText.label: 'To Fiscal Year Period'
    @Consumption.derivation: { lookupEntity: 'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:      [ { targetElement : 'CalendarDate'      , type : #SYSTEM_FIELD,  value : '#SYSTEM_DATE' } ,
                                               { targetElement : 'FiscalYearVariant' , type : #CONSTANT  ,  value : 'K4'     } ]
                             }
    P_ToFiscalYearPeriod   : fins_fyearperiod,
    @Consumption: { valueHelpDefinition: [{ entity:{name: 'I_Ledger', element :'Ledger'} }],
                    derivation: { lookupEntity: 'I_Ledger',
                                  resultElement: 'Ledger',
                                  binding: [ { targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X'  } ]
                                }
                  }
    P_Ledger               : fins_ledger,
    @Consumption.defaultValue: '10'
    @Consumption.valueHelpDefinition: [{ entity:{name: 'I_CurrencyRole', element :'CurrencyRole'} }]
    P_CurrencyRole         : fac_crcyrole,
    @Consumption.defaultValue: '000'
    P_TargetCostVariant    : fis_awvrs   
    as projection on I_PCCActlTgtCostCube( P_FromFiscalYearPeriod : $parameters.P_FromFiscalYearPeriod,
                                           P_ToFiscalYearPeriod   : $parameters.P_ToFiscalYearPeriod,
                                           P_Ledger               : $parameters.P_Ledger,
                                           P_CurrencyRole         : $parameters.P_CurrencyRole,
                                           P_TargetCostVariant    : $parameters.P_TargetCostVariant )  
{
      Ledger,
      OrderID,
      CompanyCode,  
      ControllingArea,
      WorkCenterInternalID,
      OrderOperation,
      GLAccount,
      PartnerCostCtrActivityType,
      PartnerCostCenter,
      Plant,
      Product,  
      UnitOfMeasure,                     
      ProducedProduct,
      WorkCenter,
      ChartOfAccounts,
      OrderType,
      OrderCategory,      
      DisplayCurrency,
      
      /////////////////////////////////////////////////////////////////
      //Key figures for Actual Costs
      /////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }      
      CreditActlCostInDspCrcy,   
      @Aggregation.default: #SUM        
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }      
      DebitActlCostInDspCrcy,  
      @Aggregation.default: #SUM     
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }      
      CrdtActlFxdCostInDspCrcy,
      @Aggregation.default: #SUM       
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }      
      DebitActlFxdCostInDspCrcy, 
      @Aggregation.default: #SUM      
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }       
      ActualQtyInCostSourceUnit,         
      
      /////////////////////////////////////////////////////////////////
      //Key figures for Target Costs
      /////////////////////////////////////////////////////////////////  
      @Aggregation.default: #SUM
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }        
      CrdtTargetCostInDspCrcy, 
      @Aggregation.default: #SUM           
      @Semantics: { amount : {currencyCode: 'DisplayCurrency'} }      
      DebitTargetCostInDspCrcy,  
      @Aggregation.default: #SUM     
      @Semantics: { quantity : {unitOfMeasure: 'UnitOfMeasure'} }         
      TargetQtyInCostSourceUnit
}
```
