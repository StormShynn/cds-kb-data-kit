---
name: C_VALUATIONDOCUMENTHDRQRY
description: Valuation Document Header Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_VALUATIONDOCUMENTHDRQRY')/$value
semantic_en: Valuation Document Header Query
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - document
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_VALUATIONDOCUMENTHDRQRY

**Valuation Document Header Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_VALUATIONDOCUMENTHDRQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentNumber` |  | |  |  | `CHAR(20)` | Val. document number |
| `ValuationDocumentYear` |  | |  |  | `NUMC(4)` | Document year |
| `ValuationDocumentStatus` |  | |  |  | `CHAR(2)` | Valuation Document Status |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `DeliveryNetworkHier` |  | |  |  | `CHAR(15)` | Delivery Network Hierarchy Group |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `AllocationFrequency` |  | |  |  | `CHAR(1)` | Frequency |
| `ValuationDocumentType` |  | |  |  | `CHAR(4)` | Valuation Document Type |
| `ProcessingStatus` |  | |  |  | `CHAR(1)` | Valuation Document Processing Status |
| `LastExecutionDate` |  | |  |  | `DATS(8)` | Run Date |
| `LastExecutionTime` |  | |  |  | `TIMS(6)` | Run time |
| `NumberOfDocuments` |  | |  |  | `INT4(10)` | Number of Documents |
