---
name: C_LISTEDDRVTVPRICEQUOTATION
description: "Listed Derivatives Price Quotation"
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDDRVTVPRICEQUOTATION')/$value
semantic_en: "Listed Derivatives Price Quotation"
semantic_vi: "Listed Derivatives Price Quotation — CDS view tiêu dùng dựa trên I_ListedDrvtvPriceQuotation."
keywords:
  - "listed"
  - "derivatives"
  - "price"
  - "quotation"
  - "derivative"
  - "contr"
  - "specification"
  - "market"
  - "identifier"
  - "code"
  - "date"
  - "type"
  - "maturity"
tags:
  - LO
  - component:LO-CMM-BF
  - consumption-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - quotation
---
# C_LISTEDDRVTVPRICEQUOTATION

**Listed Derivatives Price Quotation**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDDRVTVPRICEQUOTATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DerivativeContrSpecification` |  | |  |  | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` |  | |  |  | `CHAR(4)` | Market Identifier Code |
| `PriceQuotationDate` |  | |  |  | `DATS(8)` | Date of Price Quotation |
| `PriceQuotationType` |  | |  |  | `CHAR(2)` | Type of Price Quotation |
| `MaturityKeyDate` |  | |  |  | `DATS(8)` | Maturity Key Date |
| `PriceQuotationTime` |  | |  |  | `TIMS(6)` | Time of Price Quotation |
| `ValidityStartUTCDateTime` |  | |  |  | `DEC(21)` | Commodity Price Valid From (Date and Time) |
| `TimeToMaturity` |  | |  |  | `CHAR(10)` | Time to Maturity |
| `PriceQuotation` |  | |  |  | `DF34(31)` | Quotation Price |
| `UnitOfMeasure` |  | |  |  | `UNIT(3)` | Quotation Unit of Measure |
| `Currency` |  | |  |  | `CUKY(5)` | Quotation Currency |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | First Entered By |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDDRVTVPRICEQUOTATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDDRVTVPRICEQUOTATION')/$value)*

```abap
@EndUserText.label: 'Listed Derivatives Price Quotation'  
@Analytics.query: true
//@OData.publish: true //optional
@VDM.viewType: #CONSUMPTION  
@AbapCatalog.sqlViewName: 'CLOFPRICEQUOT'  
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]

define view C_ListedDrvtvPriceQuotation  
   as select from I_ListedDrvtvPriceQuotation
{

   @Consumption.filter.multipleSelections: true
   @AnalyticsDetails.query.variableSequence:  1
   @AnalyticsDetails.query.axis: #ROWS
   DerivativeContrSpecification,
   @Consumption.filter.multipleSelections: true
   @AnalyticsDetails.query.variableSequence:  2
   @AnalyticsDetails.query.axis: #ROWS
   MarketIdentifierCode,
   @Consumption.filter.multipleSelections: true
   @AnalyticsDetails.query.variableSequence:  4
   @AnalyticsDetails.query.axis: #ROWS
   PriceQuotationDate,
   @Consumption.filter.multipleSelections: true
   @AnalyticsDetails.query.variableSequence:  3
   @AnalyticsDetails.query.axis: #ROWS
   PriceQuotationType,
   @Consumption.filter.multipleSelections: true
   @AnalyticsDetails.query.variableSequence:  6
   @AnalyticsDetails.query.axis: #ROWS
   MaturityKeyDate,
   @Consumption.filter.multipleSelections: true
   @AnalyticsDetails.query.variableSequence:  5
//   @AnalyticsDetails.query.axis: #ROWS
   PriceQuotationTime,
   ValidityStartUTCDateTime,
       TimeToMaturity,

       @AnalyticsDetails.query.axis: #COLUMNS
//       @Semantics.amount.currencyCode: 'Currency'
       @DefaultAggregation:#SUM
       PriceQuotation,
       @AnalyticsDetails.query.axis: #ROWS
       @Semantics.unitOfMeasure: true
       UnitOfMeasure,
       @AnalyticsDetails.query.axis: #ROWS
       @Semantics.currencyCode: true
       Currency,
       CreatedByUser

}
```
