---
name: I_ALLOCATIONTABLEITEMCATEGORY
description: This CDS view provides the details to extract data of allocation table item categories. This CDS view provides the data to answer the following business questions: How many item categories for allocation tables are available? How many goods recipient of supplier purchase order is available for allocation table item category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-RFM-PUR-AL-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONTABLEITEMCATEGORY')/$value
semantic_en: This CDS view provides the details to extract data of allocation table item categories. This CDS view provides the data to answer the following business questions: How many item categories for allocation tables are available? How many goods recipient of supplier purchase order is available for allocation table item category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-PUR-AL-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-PUR
  - LO-RFM-PUR-AL
  - LO-RFM-PUR-AL-2CL
  - lob:logistics general
  - order
  - purchase-order
  - supplier
  - metadata-only
---
# I_ALLOCATIONTABLEITEMCATEGORY

**This CDS view provides the details to extract data of allocation table item categories. This CDS view provides the data to answer the following business questions: How many item categories for allocation tables are available? How many goods recipient of supplier purchase order is available for allocation table item category? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-RFM-PUR-AL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ALLOCATIONTABLEITEMCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AllocTableItemCategoryName` |  | |  |  | `CHAR(4)` | Item category of allocation table |
| `AllocTblItmPurOrdGdsRcpnt` |  | |  |  | `CHAR(1)` | Goods Recipient of Supplier Purchase Order |
| `AllocTblItmStkTransfDocCat` |  | |  |  | `CHAR(1)` | Stock Transfer From DC to Recipients |
