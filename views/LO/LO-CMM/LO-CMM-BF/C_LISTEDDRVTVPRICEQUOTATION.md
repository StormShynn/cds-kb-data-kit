---
name: C_LISTEDDRVTVPRICEQUOTATION
description: Listed Derivatives Price Quotation
app_component: LO-CMM-BF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDDRVTVPRICEQUOTATION')/$value
semantic_en: Listed Derivatives Price Quotation
tags:
  - LO
  - component:LO-CMM-BF
  - consumption-view
  - LO-CMM
  - LO-CMM-BF
  - lob:logistics general
  - lob:sourcing & procurement
  - quotation
  - metadata-only
---
# C_LISTEDDRVTVPRICEQUOTATION

**Listed Derivatives Price Quotation**

| Property | Value |
|---|---|
| App Component | `LO-CMM-BF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LISTEDDRVTVPRICEQUOTATION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DerivativeContrSpecification` | `CHAR(20)` | Derivative Contract Specification ID |
| `MarketIdentifierCode` | `CHAR(4)` | Market Identifier Code |
| `PriceQuotationDate` | `DATS(8)` | Date of Price Quotation |
| `PriceQuotationType` | `CHAR(2)` | Type of Price Quotation |
| `MaturityKeyDate` | `DATS(8)` | Maturity Key Date |
| `PriceQuotationTime` | `TIMS(6)` | Time of Price Quotation |
| `ValidityStartUTCDateTime` | `DEC(21)` | Commodity Price Valid From (Date and Time) |
| `TimeToMaturity` | `CHAR(10)` | Time to Maturity |
| `PriceQuotation` | `DF34(31)` | Quotation Price |
| `UnitOfMeasure` | `UNIT(3)` | Quotation Unit of Measure |
| `Currency` | `CUKY(5)` | Quotation Currency |
| `CreatedByUser` | `CHAR(12)` | First Entered By |
