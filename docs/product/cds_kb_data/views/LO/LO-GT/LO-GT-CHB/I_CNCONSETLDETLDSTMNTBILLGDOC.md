---
name: I_CNCONSETLDETLDSTMNTBILLGDOC
description: "This CDS view is used to see which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTBILLGDOC')/$value
semantic_en: "This CDS view is used to see which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-GT-CHB
  - contract
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - metadata-only
---
# I_CNCONSETLDETLDSTMNTBILLGDOC

**This CDS view is used to see which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTBILLGDOC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` |  | |  |  | `CHAR(10)` | Condition Contract |
| `SettlmtDoc` |  | |  |  | `CHAR(10)` | Settlement Document Number |
| `SettlmtDocItem` |  | |  |  | `NUMC(6)` | Document Item |
| `SetldBusVolDocCategory` |  | |  |  | `CHAR(2)` | Settled Business Volume Document Type |
| `SettledBillgDoc` |  | |  |  | `CHAR(10)` | Billing Document Settled as Business Volume Document |
| `SettledBillgDocItem` |  | |  |  | `NUMC(6)` | Item of a Settled Billing Document |
| `BusVolSelDteForSettlmt` |  | |  |  | `DATS(8)` | Date for Settlement |
| `SettledBusVolQty` |  | |  |  | `QUAN(13)` | Quantity |
| `SettledBusVolQtyUnit` |  | |  |  | `UNIT(3)` | Unit of measure |
| `SettledBusVolAmount1` |  | |  |  | `CURR(13)` | Business Volume 1 |
| `SettledBusVolAmount2` |  | |  |  | `CURR(13)` | Business Volume 2 |
| `SettledBusVolAmount3` |  | |  |  | `CURR(13)` | Business Volume 3 |
| `SettledBusVolAmount4` |  | |  |  | `CURR(13)` | Business Volume 4 |
| `SettledBusVolNetWeight` |  | |  |  | `QUAN(13)` | Net Weight |
| `SettledBusVolGrossWeight` |  | |  |  | `QUAN(13)` | Gross Weight |
| `SettledBusVolWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `SettledBusVolVolume` |  | |  |  | `QUAN(13)` | Volume |
| `SettledBusVolVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `SettledBusVolPointsQty` |  | |  |  | `QUAN(13)` | Number of Points |
| `SettledBusVolPointsQtyUnit` |  | |  |  | `UNIT(3)` | Points Unit |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `BusVolDocCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
