---
name: C_PCCEVTBSDWIPVARCQRY
description: "This CDS view retrieves event-based work in process (WIP) values and variances of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: How many event-based product cost collectors are there for my specified company codes or plants? What are their IDs? What products are posted with the product cost collectors? What are the following values for a product cost collector? WIP Total variance Variance per category, such as input quantity variance, input price variance, resource usage variance, and remaining variance What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-OBJ-PER-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCEVTBSDWIPVARCQRY')/$value
semantic_en: "This CDS view retrieves event-based work in process (WIP) values and variances of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: How many event-based product cost collectors are there for my specified company codes or plants? What are their IDs? What products are posted with the product cost collectors? What are the following values for a product cost collector? WIP Total variance Variance per category, such as input quantity variance, input price variance, resource usage variance, and remaining variance What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "WIP and Variance for Event-Based PCC - Query — CDS view tiêu dùng dựa trên WIP and Variance for Event-Based PCC - Query."
keywords:
  - "wip"
  - "and"
  - "variance"
  - "for"
  - "event"
  - "based"
  - "pcc"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "order"
  - "type"
  - "category"
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
  - bo:salesorganization
---
# C_PCCEVTBSDWIPVARCQRY

**This CDS view retrieves event-based work in process (WIP) values and variances of product cost collectors (order category 05) in your specified ledger, fiscal year periods, and currency. This CDS view provides the data to answer the following business questions: How many event-based product cost collectors are there for my specified company codes or plants? What are their IDs? What products are posted with the product cost collectors? What are the following values for a product cost collector? WIP Total variance Variance per category, such as input quantity variance, input price variance, resource usage variance, and remaining variance What are the G/L accounts used for posting the values? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-PER-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCEVTBSDWIPVARCQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `OrderType` |  | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ProducedProduct` |  | |  |  | `CHAR(40)` | Material Number for Order |
| `OriginProduct` |  | |  |  | `CHAR(40)` | Origin Product |
| `OriginCostCenter` |  | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` |  | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `cuky` |  | |  | `virtual DisplayCurrency : abap.cuky` |  |  |
| `InptPrVarcAmtInDspCrcy` |  | |  | `curr_to_decfloat_amount(InptPrVarcAmtInDspCrcy)` | `DECF(34)` |  |
| `InptQtyVarcAmtInDspCrcy` |  | |  | `curr_to_decfloat_amount(InptQtyVarcAmtInDspCrcy)` | `DECF(34)` |  |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  | `curr_to_decfloat_amount(RsceUsgeVarcAmtInDspCrcy)` | `DECF(34)` |  |
| `RmngVarcAmtInDspCrcy` |  | |  | `curr_to_decfloat_amount(RmngVarcAmtInDspCrcy)` | `DECF(34)` |  |
| `CostVarianceInDspCrcy` |  | |  | `curr_to_decfloat_amount(CostVarianceInDspCrcy)` | `DECF(34)` |  |
| `WIPCostInDspCrcy` |  | |  | `curr_to_decfloat_amount(WIPCostInDspCrcy)` | `DECF(34)` |  |
| `OutpPrVarcAmtInDspCrcy` |  | |  | `curr_to_decfloat_amount(OutpPrVarcAmtInDspCrcy)` | `DECF(34)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCEVTBSDWIPVARCQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PCCEVTBSDWIPVARCQRY')/$value)*

```abap
@Analytics.technicalName: 'CPCCEBWIPVRCQ'
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
@EndUserText.label: 'WIP and Variance for Event-Based PCC - Query'
define transient view entity C_PCCEvtBsdWIPVarcQry  
  provider contract analytical_query
  with parameters
    @Consumption.derivation: {lookupEntity:  'I_Ledger',
                              resultElement: 'Ledger',
                              binding:       [{targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X'}]}
    @Consumption.valueHelpDefinition: [{entity: {name: 'I_Ledger', element: 'Ledger'}}]
    P_Ledger               : fins_ledger,
    @EndUserText.label: 'From Fiscal Year Period'
    @Consumption.derivation: { lookupEntity:  'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:       [{targetElement: 'CalendarDate', type: #SYSTEM_FIELD, value: '#SYSTEM_DATE'},
                                               {targetElement: 'FiscalYearVariant', type: #CONSTANT, value: 'K4'}]}
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @EndUserText.label: 'To Fiscal Year Period'
    @Consumption.derivation: { lookupEntity:  'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:       [{targetElement: 'CalendarDate', type: #SYSTEM_FIELD, value: '#SYSTEM_DATE'},
                                               {targetElement: 'FiscalYearVariant', type: #CONSTANT, value: 'K4'}]}
    P_ToFiscalYearPeriod   : fins_fyearperiod,
    @Consumption.defaultValue: '10'
    @Consumption.valueHelpDefinition: [{entity: {name: 'I_CurrencyRoleInLedgerCoCodeVH', element :'CurrencyRole'}}]
    P_CurrencyRole         : fac_crcyrole
    as projection on I_PCCEvtBsdWIPVarianceCube
          ( P_Ledger               : $parameters.P_Ledger,
            P_FromFiscalYearPeriod : $parameters.P_FromFiscalYearPeriod,
            P_ToFiscalYearPeriod   : $parameters.P_ToFiscalYearPeriod,
            P_CurrencyRole         : $parameters.P_CurrencyRole )
{
      Ledger,
      CompanyCode,
      OrderID,
      OrderType,
      OrderCategory,
      ChartOfAccounts,
      GLAccount,
      Plant,
      ProducedProduct,
      OriginProduct,
      OriginCostCenter,
      OriginCostCtrActivityType,
      
      @EndUserText.label: 'Currency Key'
      virtual DisplayCurrency : abap.cuky,
      
      /////////////////////////////////////////////////////////////////////////////////////
      // Variances
      /////////////////////////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Input Price Variance'
      curr_to_decfloat_amount(InptPrVarcAmtInDspCrcy) as InptPrVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Input Quantity Variance'
      curr_to_decfloat_amount(InptQtyVarcAmtInDspCrcy) as InptQtyVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Resource Usage Variance'
      curr_to_decfloat_amount(RsceUsgeVarcAmtInDspCrcy) as RsceUsgeVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Remaining Variance'
      curr_to_decfloat_amount(RmngVarcAmtInDspCrcy) as RmngVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Total Cost Variance'
      curr_to_decfloat_amount(CostVarianceInDspCrcy) as CostVarianceInDspCrcy,

      /////////////////////////////////////////////////////////////////////////////////////
      // WIP
      /////////////////////////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Work In Process'
      curr_to_decfloat_amount(WIPCostInDspCrcy) as WIPCostInDspCrcy,    
      
      // Output Price Variance
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @EndUserText.label: 'Output Price Variance'
      curr_to_decfloat_amount(OutpPrVarcAmtInDspCrcy) as OutpPrVarcAmtInDspCrcy
       
}
```
