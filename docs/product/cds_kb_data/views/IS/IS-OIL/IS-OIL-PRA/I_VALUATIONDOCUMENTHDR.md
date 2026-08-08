---
name: I_VALUATIONDOCUMENTHDR
description: "Valuation Document Header"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALUATIONDOCUMENTHDR')/$value
semantic_en: "Valuation Document Header"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# I_VALUATIONDOCUMENTHDR

**Valuation Document Header**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALUATIONDOCUMENTHDR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `AllocationFrequency` |  | |  |  | `CHAR(1)` | Frequency |
| `ValuationDocumentStatus` |  | |  |  | `CHAR(2)` | Valuation Document Status |
| `ValuationDocumentType` |  | |  |  | `CHAR(4)` | Valuation Document Type |
| `ProcessingStatus` |  | |  |  | `CHAR(1)` | Valuation Document Processing Status |
| `LastExecutionDate` |  | |  |  | `DATS(8)` | Run Date |
| `LastExecutionTime` |  | |  |  | `TIMS(6)` | Run time |
| `DocumentIsArchived` |  | |  |  | `CHAR(1)` | Indicator: Document Already Archived? |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `NumberOfDocuments` |  | |  |  | `INT4(10)` | Number of Documents |
| `OriginTransaction` |  | |  |  | `CHAR(32)` | Source Transaction ID |
