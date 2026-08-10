---
name: I_CNDNDOCSUPLRINVCDLVCOSTCATT
description: "This view provides supported values for condition document supplier invoice delivery cost category. The values and their meanings are: Value Meaning &nbsp; Standard Purchase Order Item X Purchase Order Delivery Cost Item To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCSUPLRINVCDLVCOSTCATT')/$value
semantic_en: "This view provides supported values for condition document supplier invoice delivery cost category. The values and their meanings are: Value Meaning &nbsp; Standard Purchase Order Item X Purchase Order Delivery Cost Item To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:billingdocument
  - component:LO-GT-CHB
  - delivery
  - document
  - interface-view
  - invoice
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
  - order
  - purchase-order
  - supplier
  - metadata-only
---
# I_CNDNDOCSUPLRINVCDLVCOSTCATT

**This view provides supported values for condition document supplier invoice delivery cost category. The values and their meanings are: Value Meaning &nbsp; Standard Purchase Order Item X Purchase Order Delivery Cost Item To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNDOCSUPLRINVCDLVCOSTCATT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnDocSuplrInvcDlvCostCat` |  | |  |  | `CHAR(1)` | Item Category of Supplier Invoice |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `DomainValue` |  | |  |  | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `CndnDocSuplrInvcDlvCostCatName` |  | |  |  | `CHAR(60)` | Item Category of Supplier Invoice Text |
