---
name: C_US_TAXPARTNERTAXDOCITEMQUERY
description: "This CDS view is an analytical query view and contains tax items for the US for parameter P_Language. This CDS view provides the data to answer the following business questions: Which tax items can be used to calculate the tax amount in transaction currency, the tax amount in company code currency, and the tax exemption amount in the US tax partner cube? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-TXL-EXT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_US_TAXPARTNERTAXDOCITEMQUERY')/$value
semantic_en: "This CDS view is an analytical query view and contains tax items for the US for parameter P_Language. This CDS view provides the data to answer the following business questions: Which tax items can be used to calculate the tax amount in transaction currency, the tax amount in company code currency, and the tax exemption amount in the US tax partner cube? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Analytical Query for US Tax Items — CDS view tiêu dùng dựa trên I_US_TaxPartnerTaxDocItemCube."
keywords:
  - "analytical"
  - "query"
  - "for"
  - "tax"
  - "items"
  - "state"
  - "partner"
  - "document"
  - "item"
  - "jurisdiction"
  - "level"
  - "united"
  - "states"
  - "sourcing"
tags:
  - FI
  - bo:companycode
  - component:FI-TXL-EXT-2CL
  - consumption-view
  - FI-TXL
  - FI-TXL-EXT
  - FI-TXL-EXT-2CL
  - lob:finance
  - transaction
---
# C_US_TAXPARTNERTAXDOCITEMQUERY

**This CDS view is an analytical query view and contains tax items for the US for parameter P_Language. This CDS view provides the data to answer the following business questions: Which tax items can be used to calculate the tax amount in transaction currency, the tax amount in company code currency, and the tax exemption amount in the US tax partner cube? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_US_TAXPARTNERTAXDOCITEMQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `US_TaxState` |  | |  |  | `CHAR(2)` | External Tax State |
| `US_TaxPartnerTaxDocument` |  | |  |  | `CHAR(12)` | External-tax Document Number |
| `US_TaxPartnerTaxDocumentItem` |  | |  |  | `NUMC(6)` | External-tax Document Item Number |
| `TaxJurisdictionLevel` |  | |  |  | `CHAR(1)` | Tax jurisdiction code level |
| `UnitedStatesTaxSourcing` |  | |  |  | `CHAR(1)` | Tax Sourcing |
| `TaxJurisdiction` |  | |  |  | `CHAR(15)` | Tax Jurisdiction |
| `TaxJurisdictionText` |  | |  |  | `CHAR(200)` | Tax Jurisdiction Code Description |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `TaxCalculationProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `PurchasingDocument` |  | |  |  | `CHAR(10)` | Purchasing Document Number |
| `SDDocument` |  | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `UnitedStatesTaxCategory` |  | |  |  | `CHAR(1)` | Tax Category for US Taxes |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Journal Entry |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `TaxBaseAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Transaction Currency |
| `TaxAmountInTransCrcy` |  | |  |  | `CURR(23)` | Tax Amount in Transaction Currency |
| `TaxExemptionAmount` |  | |  |  | `CURR(23)` | Tax-Exempt Revaluation Amount |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `TaxBaseAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Tax Base Amount in Company Code Currency |
| `TaxAmountInCoCodeCrcy` |  | |  |  | `CURR(23)` | Signed Tax Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `DocumentDate` |  | |  |  | `DATS(8)` | Journal Entry Date |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `US_TaxPartnerReceivedTaxDate` |  | |  |  | `DATS(8)` | Tax Date as Sent to Partner |
| `TaxCalculationDate` |  | |  |  | `DATS(8)` | The date used for external tax calculation |
| `US_TaxFreeDefinedValue1` |  | |  |  | `CHAR(100)` | Extension Field 001 |
| `US_TaxFreeDefinedValue2` |  | |  |  | `CHAR(100)` | Extension Field 002 |
| `US_TaxFreeDefinedValue3` |  | |  |  | `CHAR(100)` | Extension Field 003 |
| `US_TaxFreeDefinedValue4` |  | |  |  | `CHAR(100)` | Extension Field 004 |
| `US_TaxFreeDefinedValue5` |  | |  |  | `CHAR(100)` | Extension Field 005 |
| `US_TaxFreeDefinedValue6` |  | |  |  | `CHAR(100)` | Extension Field 006 |
| `US_TaxFreeDefinedValue7` |  | |  |  | `CHAR(100)` | Extension Field 007 |
| `US_TaxFreeDefinedValue8` |  | |  |  | `CHAR(100)` | Extension Field 008 |
| `US_TaxFreeDefinedValue9` |  | |  |  | `CHAR(100)` | Extension Field 009 |
| `US_TaxFreeDefinedValue10` |  | |  |  | `CHAR(100)` | Extension Field 010 |
| `US_TaxFreeDefinedValue11` |  | |  |  | `CHAR(100)` | Extension Field 011 |
| `US_TaxFreeDefinedValue12` |  | |  |  | `CHAR(100)` | Extension Field 012 |
| `US_TaxFreeDefinedValue13` |  | |  |  | `CHAR(100)` | Extension Field 013 |
| `US_TaxFreeDefinedValue14` |  | |  |  | `CHAR(100)` | Extension Field 014 |
| `US_TaxFreeDefinedValue15` |  | |  |  | `CHAR(100)` | Extension Field 015 |
| `US_TaxFreeDefinedValue16` |  | |  |  | `CHAR(100)` | Extension Field 016 |
| `US_TaxFreeDefinedValue17` |  | |  |  | `CHAR(100)` | Extension Field 017 |
| `US_TaxFreeDefinedValue18` |  | |  |  | `CHAR(100)` | Extension Field 018 |
| `US_TaxFreeDefinedValue19` |  | |  |  | `CHAR(100)` | Extension Field 019 |
| `US_TaxFreeDefinedValue20` |  | |  |  | `CHAR(100)` | Extension Field 020 |
| `US_TaxFreeDefinedValue21` |  | |  |  | `CHAR(100)` | Extension Field 021 |
| `US_TaxFreeDefinedValue22` |  | |  |  | `CHAR(100)` | Extension Field 022 |
| `US_TaxFreeDefinedValue23` |  | |  |  | `CHAR(100)` | Extension Field 023 |
| `US_TaxFreeDefinedValue24` |  | |  |  | `CHAR(100)` | Extension Field 024 |
| `US_TaxFreeDefinedValue25` |  | |  |  | `CHAR(100)` | Extension Field 025 |
| `US_TaxFreeDefinedValue26` |  | |  |  | `CHAR(100)` | Extension Field 026 |
| `US_TaxFreeDefinedValue27` |  | |  |  | `CHAR(100)` | Extension Field 027 |
| `US_TaxFreeDefinedValue28` |  | |  |  | `CHAR(100)` | Extension Field 028 |
| `US_TaxFreeDefinedValue29` |  | |  |  | `CHAR(100)` | Extension Field 029 |
| `US_TaxFreeDefinedValue30` |  | |  |  | `CHAR(100)` | Extension Field 030 |
| `US_TaxFreeDefinedValue31` |  | |  |  | `CHAR(100)` | Extension Field 031 |
| `US_TaxFreeDefinedValue32` |  | |  |  | `CHAR(100)` | Extension Field 032 |
| `US_TaxFreeDefinedValue33` |  | |  |  | `CHAR(100)` | Extension Field 033 |
| `US_TaxFreeDefinedValue34` |  | |  |  | `CHAR(100)` | Extension Field 034 |
| `US_TaxFreeDefinedValue35` |  | |  |  | `CHAR(100)` | Extension Field 035 |
| `US_TaxFreeDefinedValue36` |  | |  |  | `CHAR(100)` | Extension Field 036 |
| `US_TaxFreeDefinedValue37` |  | |  |  | `CHAR(100)` | Extension Field 037 |
| `US_TaxFreeDefinedValue38` |  | |  |  | `CHAR(100)` | Extension Field 038 |
| `US_TaxFreeDefinedValue39` |  | |  |  | `CHAR(100)` | Extension Field 039 |
| `US_TaxFreeDefinedValue40` |  | |  |  | `CHAR(100)` | Extension Field 040 |
| `US_TaxFreeDefinedValue41` |  | |  |  | `CHAR(100)` | Extension Field 041 |
| `US_TaxFreeDefinedValue42` |  | |  |  | `CHAR(100)` | Extension Field 042 |
| `US_TaxFreeDefinedValue43` |  | |  |  | `CHAR(100)` | Extension Field 043 |
| `US_TaxFreeDefinedValue44` |  | |  |  | `CHAR(100)` | Extension Field 044 |
| `US_TaxFreeDefinedValue45` |  | |  |  | `CHAR(100)` | Extension Field 045 |
| `US_TaxFreeDefinedValue46` |  | |  |  | `CHAR(100)` | Extension Field 046 |
| `US_TaxFreeDefinedValue47` |  | |  |  | `CHAR(100)` | Extension Field 047 |
| `US_TaxFreeDefinedValue48` |  | |  |  | `CHAR(100)` | Extension Field 048 |
| `US_TaxFreeDefinedValue49` |  | |  |  | `CHAR(100)` | Extension Field 049 |
| `US_TaxFreeDefinedValue50` |  | |  |  | `CHAR(100)` | Extension Field 050 |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_US_TAXPARTNERTAXDOCITEMQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_US_TAXPARTNERTAXDOCITEMQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CUSTXPTDITMQUERY'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Analytical Query for US Tax Items'
@VDM.viewType: #CONSUMPTION

@Analytics.query: true
//@OData.publish: true
@Analytics.settings.maxProcessingEffort: #HIGH

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities: #ANALYTICAL_QUERY
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view C_US_TaxPartnerTaxDocItemQuery
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu
  as select from I_US_TaxPartnerTaxDocItemCube as TaxDocItemCube
{
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 10
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.totals: #SHOW
  @AnalyticsDetails.query.display: #KEY_TEXT
  US_TaxState,
  
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 20
  @AnalyticsDetails.query.axis: #ROWS
  US_TaxPartnerTaxDocument,
  
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false }
  @AnalyticsDetails.query.variableSequence : 30
  @AnalyticsDetails.query.axis: #ROWS
  US_TaxPartnerTaxDocumentItem,
  
  @AnalyticsDetails.query.axis: #FREE
  TaxJurisdictionLevel,

  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  UnitedStatesTaxSourcing,
  
  @AnalyticsDetails.query.axis: #FREE
  TaxJurisdiction,
  
  @AnalyticsDetails.query.axis: #FREE
  TaxJurisdictionText,
  
  @AnalyticsDetails.query.axis: #FREE
  Product,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  MaterialGroup,
  
  @AnalyticsDetails.query.axis: #FREE
  TaxCalculationProcedure,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  TaxCode,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  PurchasingDocument,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  SDDocument,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  UnitedStatesTaxCategory,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: true }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  AccountingDocument,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  FiscalYear,
  
  @Consumption.filter: { selectionType: #SINGLE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #MAX
  TaxBaseAmountInTransCrcy,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  TaxAmountInTransCrcy,
  
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #MAX
  TaxExemptionAmount,
  
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  TransactionCurrency,
  
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #MAX
  TaxBaseAmountInCoCodeCrcy,
  
  @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
  @AnalyticsDetails.query.axis: #COLUMNS
  @DefaultAggregation: #SUM
  TaxAmountInCoCodeCrcy,
  
  @Semantics.currencyCode: true
  @AnalyticsDetails.query.axis: #FREE
  CompanyCodeCurrency,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  PostingDate,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  DocumentDate,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  ServicesRenderedDate,
  
  @AnalyticsDetails.query.axis: #FREE
  US_TaxPartnerReceivedTaxDate,
  
  @Consumption.filter: { selectionType: #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.axis: #FREE
  TaxCalculationDate,

  /* Free defined values */
  US_TaxFreeDefinedValue1,
  US_TaxFreeDefinedValue2,
  US_TaxFreeDefinedValue3,
  US_TaxFreeDefinedValue4,
  US_TaxFreeDefinedValue5,
  US_TaxFreeDefinedValue6,
  US_TaxFreeDefinedValue7,
  US_TaxFreeDefinedValue8,
  US_TaxFreeDefinedValue9,
  US_TaxFreeDefinedValue10,
  US_TaxFreeDefinedValue11,
  US_TaxFreeDefinedValue12,
  US_TaxFreeDefinedValue13,
  US_TaxFreeDefinedValue14,
  US_TaxFreeDefinedValue15,
  US_TaxFreeDefinedValue16,
  US_TaxFreeDefinedValue17,
  US_TaxFreeDefinedValue18,
  US_TaxFreeDefinedValue19,
  US_TaxFreeDefinedValue20,
  US_TaxFreeDefinedValue21,
  US_TaxFreeDefinedValue22,
  US_TaxFreeDefinedValue23,
  US_TaxFreeDefinedValue24,
  US_TaxFreeDefinedValue25,
  US_TaxFreeDefinedValue26,
  US_TaxFreeDefinedValue27,
  US_TaxFreeDefinedValue28,
  US_TaxFreeDefinedValue29,
  US_TaxFreeDefinedValue30,
  US_TaxFreeDefinedValue31,
  US_TaxFreeDefinedValue32,
  US_TaxFreeDefinedValue33,
  US_TaxFreeDefinedValue34,
  US_TaxFreeDefinedValue35,
  US_TaxFreeDefinedValue36,
  US_TaxFreeDefinedValue37,
  US_TaxFreeDefinedValue38,
  US_TaxFreeDefinedValue39,
  US_TaxFreeDefinedValue40,
  US_TaxFreeDefinedValue41,
  US_TaxFreeDefinedValue42,
  US_TaxFreeDefinedValue43,
  US_TaxFreeDefinedValue44,
  US_TaxFreeDefinedValue45,
  US_TaxFreeDefinedValue46,
  US_TaxFreeDefinedValue47,
  US_TaxFreeDefinedValue48,
  US_TaxFreeDefinedValue49,
  US_TaxFreeDefinedValue50
}
```
