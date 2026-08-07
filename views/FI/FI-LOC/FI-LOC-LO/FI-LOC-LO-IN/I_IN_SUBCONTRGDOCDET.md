---
name: I_IN_SUBCONTRGDOCDET
description: This CDS view retrieves data records of reconciliation status and details of the Subcontracting challans for India. This CDS view provides the data to answer the following business questions: Which subcontracting challans are not yet reconciled? Which subcontracting challans are partially reconciled? Which subcontracting challans are fully reconciled? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-LOC-LO-IN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET')/$value
semantic_en: This CDS view retrieves data records of reconciliation status and details of the Subcontracting challans for India. This CDS view provides the data to answer the following business questions: Which subcontracting challans are not yet reconciled? Which subcontracting challans are partially reconciled? Which subcontracting challans are fully reconciled? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FI
  - bo:companycode
  - component:FI-LOC-LO-IN
  - contract
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-IN
  - interface-view
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# I_IN_SUBCONTRGDOCDET

**This CDS view retrieves data records of reconciliation status and details of the Subcontracting challans for India. This CDS view provides the data to answer the following business questions: Which subcontracting challans are not yet reconciled? Which subcontracting challans are partially reconciled? Which subcontracting challans are fully reconciled? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-IN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_IN_SUBCONTRGDOCDET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurgOrgCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Item in Material Document |
| `IN_SequenceNumber` |  | |  |  | `NUMC(4)` | Sequence number |
| `IN_SubcontrgDocNmbr` |  | |  |  | `CHAR(10)` | Challan Number or Invoice Number for Subcontracting |
| `IN_SubcontractingDocumentItem` |  | |  |  | `NUMC(6)` | Challan Item or Invoice Item for Subcontracting |
| `MaterialDocPostgDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `IN_GRItemRemainingQuantity` |  | |  |  | `QUAN(13)` | GR Remaining Quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `Quantity` |  | |  |  | `QUAN(13)` | Quantity |
| `IN_ChallanItemOpenQuantity` |  | |  |  | `QUAN(13)` | Challan Quantity Open for Reconciliation |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `ActiveSupplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `IN_SubcontrgItmRcnldQty` |  | |  |  | `QUAN(13)` | Challan Reconciled Quantity |
| `QuantityUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `IN_ChallanItemStatus` |  | |  |  | `CHAR(1)` | Subcontracting Status |
| `IssgOrRcvgStkIdfgSpclStkType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
