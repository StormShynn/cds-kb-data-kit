---
name: C_MFGORDEREVTBSDWIPVARCQRY
description: "This CDS view is an interface view which provides work in process and variance details of event-based manufacturing orders based on ledger selection. This CDS view provides the data to answer the following business questions: How much work in process was created in the selected period? What variances were created during the production process? What specific factors are the root causes of the overall production variance? (Input quantity, input price, component usage, and so on) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-OBJ-ORD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDEREVTBSDWIPVARCQRY')/$value
semantic_en: "This CDS view is an interface view which provides work in process and variance details of event-based manufacturing orders based on ledger selection. This CDS view provides the data to answer the following business questions: How much work in process was created in the selected period? What variances were created during the production process? What specific factors are the root causes of the overall production variance? (Input quantity, input price, component usage, and so on) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "MfgOrder Event-Based WIP and Variance - Query — CDS view tiêu dùng dựa trên I_MfgOrderEvtBsdWIPVariance."
keywords:
  - "mfgorder"
  - "event"
  - "based"
  - "wip"
  - "and"
  - "variance"
  - "query"
  - "ledger"
  - "company"
  - "code"
  - "order"
  - "item"
  - "type"
tags:
  - CO
  - bo:companycode
  - CO-PC
  - CO-PC-OBJ
  - CO-PC-OBJ-ORD
  - CO-PC-OBJ-ORD-2CL
  - component:CO-PC-OBJ-ORD-2CL
  - consumption-view
  - lob:controlling
  - order
  - product
  - bo:salesorganization
---
# C_MFGORDEREVTBSDWIPVARCQRY

**This CDS view is an interface view which provides work in process and variance details of event-based manufacturing orders based on ledger selection. This CDS view provides the data to answer the following business questions: How much work in process was created in the selected period? What variances were created during the production process? What specific factors are the root causes of the overall production variance? (Input quantity, input price, component usage, and so on) To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-OBJ-ORD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDEREVTBSDWIPVARCQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` | ✓ | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `OrderID` | ✓ | |  |  | `CHAR(12)` | Order Number |
| `OrderItem` | ✓ | |  |  | `NUMC(4)` | Order Item |
| `OrderType` | ✓ | |  |  | `CHAR(4)` | Order Type |
| `OrderCategory` | ✓ | |  |  | `NUMC(2)` | Order Category |
| `ResultAnalysisInternalID` | ✓ | |  |  | `CHAR(6)` | Event-Based Processing Key |
| `ChartOfAccounts` | ✓ | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` | ✓ | |  |  | `CHAR(10)` | G/L Account |
| `Plant` | ✓ | |  |  | `CHAR(4)` | Plant |
| `ProducedProduct` | ✓ | |  |  | `CHAR(40)` | Material Number for Order |
| `OriginProduct` | ✓ | |  |  | `CHAR(40)` | Origin Product |
| `OriginCostCenter` | ✓ | |  |  | `CHAR(10)` | Origin Cost Center |
| `OriginCostCtrActivityType` | ✓ | |  |  | `CHAR(6)` | Origin Cost Center Activity Type |
| `SalesOrder` | ✓ | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | ✓ | |  |  | `NUMC(6)` | Sales Order Item |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  | `cast(_WBSElement.WBSElementExternalID as fco_ebpr_wbs_element_ext_id)` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSDescription` |  | | `_WBSElement` | `WBSDescription` | `CHAR(40)` | Work Breakdown Structure Element Name |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `InptPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Price Variance in Display Currency |
| `InptQtyVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Input Quantity Variance |
| `RsceUsgeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Resource Usage Variance |
| `LotSizeVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Lot Size Variance |
| `RmngVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Remaining Variance in Display Currency |
| `CostVarianceInDspCrcy` |  | |  |  | `CURR(23)` | Total Cost Variance in Display Currency |
| `WIPCostInDspCrcy` |  | |  |  | `CURR(23)` | Work In Process |
| `UnrlzdCostRsrvAmtInDspCrcy` |  | |  |  | `CURR(23)` | Reserves for Unrealized Costs |
| `TotalWIPAmountInDspCrcy` |  | |  |  | `CURR(23)` | Total Work in Process Amount in Display Currency |
| `OutpPrVarcAmtInDspCrcy` |  | |  |  | `CURR(23)` | Output Price Variance in Display Currency |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDEREVTBSDWIPVARCQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MFGORDEREVTBSDWIPVARCQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMFGORDEBWIPVRCQ'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.query: true
@Analytics.settings.maxProcessingEffort: #HIGH
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType.sizeCategory: #XL,
                usageType.serviceQuality: #D,
                usageType.dataClass: #MIXED,
                supportedCapabilities: [#ANALYTICAL_QUERY] }
@OData.publish: true
@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'MfgOrder Event-Based WIP and Variance - Query'
define view C_MfgOrderEvtBsdWIPVarcQry
  with parameters
    @Consumption.derivation: {lookupEntity:  'I_Ledger',
                              resultElement: 'Ledger',
                              binding:       [{targetElement: 'IsLeadingLedger', type: #CONSTANT, value: 'X'}]}
    @Consumption.valueHelpDefinition: [{entity: {name: 'I_Ledger', element: 'Ledger'}}]
    P_Ledger               : fins_ledger,
    @EndUserText.label: 'Fiscal Year Period From'
    @Consumption.derivation: { lookupEntity:  'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:       [{targetElement: 'CalendarDate', type: #SYSTEM_FIELD, value: '#SYSTEM_DATE'},
                                               {targetElement: 'FiscalYearVariant', type: #CONSTANT, value: 'K4'}]}
    P_FromFiscalYearPeriod : fins_fyearperiod,
    @EndUserText.label: 'Fiscal Year Period To'
    @Consumption.derivation: { lookupEntity:  'I_FiscalCalendarDate',
                               resultElement: 'FiscalYearPeriod',
                               binding:       [{targetElement: 'CalendarDate', type: #SYSTEM_FIELD, value: '#SYSTEM_DATE'},
                                               {targetElement: 'FiscalYearVariant', type: #CONSTANT, value: 'K4'}]}
    P_ToFiscalYearPeriod   : fins_fyearperiod,
    @Consumption.defaultValue: '10'
    @Consumption.valueHelpDefinition: [{entity: {name: 'I_CurrencyRoleInLedgerCoCodeVH', element :'CurrencyRole'}}]
    P_CurrencyRole         : fac_crcyrole
  as select from I_MfgOrderEvtBsdWIPVariance( P_Ledger               : :P_Ledger,
                                              P_FromFiscalYearPeriod : :P_FromFiscalYearPeriod,
                                              P_ToFiscalYearPeriod   : :P_ToFiscalYearPeriod,
                                              P_CurrencyRole         : :P_CurrencyRole )
{
  key Ledger,
  key CompanyCode,
  key OrderID,
  key OrderItem,
  key OrderType,
  key OrderCategory,
  key ResultAnalysisInternalID,
  key ChartOfAccounts,
  key GLAccount,
  key Plant,
  key ProducedProduct,
  key OriginProduct,
  key OriginCostCenter,
  key OriginCostCtrActivityType,
  key SalesOrder,
  key SalesOrderItem,

      WBSElementInternalID,

      @ObjectModel.text.element: 'WBSDescription'
      cast(_WBSElement.WBSElementExternalID as fco_ebpr_wbs_element_ext_id) as WBSElementExternalID,
      @Semantics.text: true
      _WBSElement.WBSDescription,

      @Semantics.currencyCode:true
      DisplayCurrency,

      /////////////////////////////////////////////////////////////////////////////////////
      // Variances
      /////////////////////////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      InptPrVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      InptQtyVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      RsceUsgeVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      LotSizeVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      RmngVarcAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CostVarianceInDspCrcy,

      /////////////////////////////////////////////////////////////////////////////////////
      // WIP/Reserve
      /////////////////////////////////////////////////////////////////////////////////////
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      WIPCostInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      UnrlzdCostRsrvAmtInDspCrcy,
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      TotalWIPAmountInDspCrcy,

      // Output Price Variance
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      OutpPrVarcAmtInDspCrcy
}
```
