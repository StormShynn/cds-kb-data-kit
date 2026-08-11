---
name: I_CASHLIQUIDITYFORECASTFLOW
description: "This CDS view provides the data to answer the following business questions: What are the cash forecasted amounts per bank account and transaction date in transaction currency? What are the cash forecasted amounts per bank account and transaction date in company code currency? What are the cash forecasted amounts per bank account and transaction date in global currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHLIQUIDITYFORECASTFLOW')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: What are the cash forecasted amounts per bank account and transaction date in transaction currency? What are the cash forecasted amounts per bank account and transaction date in company code currency? What are the cash forecasted amounts per bank account and transaction date in global currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cash Liquidity Forecast Flow for WCI — CDS view giao diện dựa trên P_CashLiquidityForecastFlow."
keywords:
  - "cash"
  - "liquidity"
  - "forecast"
  - "flow"
  - "for"
  - "wci"
  - "valdty"
  - "strt"
  - "company"
  - "code"
  - "transaction"
  - "date"
  - "posting"
tags:
  - FIN
  - account
  - bo:bank
  - component:FIN-FSCM-CLM-FQM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
  - transaction
---
# I_CASHLIQUIDITYFORECASTFLOW

**This CDS view provides the data to answer the following business questions: What are the cash forecasted amounts per bank account and transaction date in transaction currency? What are the cash forecasted amounts per bank account and transaction date in company code currency? What are the cash forecasted amounts per bank account and transaction date in global currency? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHLIQUIDITYFORECASTFLOW')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CashFlowID` | ✓ | |  |  | `NUMC(16)` | Flow ID |
| `CshFlwValdtyStrtDteTmeVal` | ✓ | |  |  | `DEC(21)` | FQM Flow Valid From - Decimal Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TransactionDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount in Company Code Currency |
| `GlobalCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `AmountInGlobalCurrency` |  | |  |  | `CURR(23)` | Amount in Global Currency |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHLIQUIDITYFORECASTFLOW')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHLIQUIDITYFORECASTFLOW')/$value)*

```abap
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #MANDATORY
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.sqlViewName: 'ICSHLQDYFCSTFLW'
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Cash Liquidity Forecast Flow for WCI'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
    usageType.sizeCategory: #XL,
    usageType.dataClass: #MIXED,
    usageType.serviceQuality: #D,
    supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE,
                             #SQL_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_FACT,
    sapObjectNodeType.name: 'CashFlow'
}
@Analytics:{
    dataCategory: #FACT,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                  {
                    table: 'FQM_FLOW',
                    role: #MAIN,
                    viewElement: ['CashFlowID', 'CshFlwValdtyStrtDteTmeVal'],
                    tableElement: ['flow_id', 'valid_from']
                  }
            ]
        }
    }
}
define view I_CashLiquidityForecastFlow
  as select from P_CashLiquidityForecastFlow as flow
{
  key flow.CashFlowID,
  key flow.CshFlwValdtyStrtDteTmeVal,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      flow.CompanyCode,
      @ObjectModel.foreignKey.association: '_CalendarDate'
      flow.TransactionDate,
      flow.PostingDate,

      @Semantics.currencyCode: true
      flow.TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @Aggregation.default: #SUM
      flow.AmountInTransactionCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      flow.CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      flow.AmountInCompanyCodeCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      flow.GlobalCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      @Aggregation.default: #SUM
      flow.AmountInGlobalCurrency,

      @ObjectModel.foreignKey.association: '_BankAccount'
      flow.BankAccountInternalID,

      flow._CompanyCode,
      flow._CompanyCodeCurrency,
      flow._BankAccount,
      flow._CalendarDate,
      flow._GlobalCurrency
}
```
