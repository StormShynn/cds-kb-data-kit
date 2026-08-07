---
name: I_STORESTOCKADHOCCOUNT
description: "Store Stock Ad hoc Count"
app_component: LO-RFM-STO-FIO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADHOCCOUNT')/$value
semantic_en: "Store Stock Ad hoc Count"
tags:
  - LO
  - bo:inventory
  - component:LO-RFM-STO-FIO-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-STO
  - LO-RFM-STO-FIO
  - LO-RFM-STO-FIO-2CL
  - lob:finance
  - lob:logistics general
  - stock
  - metadata-only
---
# I_STORESTOCKADHOCCOUNT

**Store Stock Ad hoc Count**

| Property | Value |
|---|---|
| App Component | `LO-RFM-STO-FIO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STORESTOCKADHOCCOUNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Store` |  | |  |  | `CHAR(4)` | Retail plant |
| `StoreStockAdhocCountUUID` |  | |  |  | `RAW(16)` | Unique identifier for New Store Stock Ad hoc Count |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StoreStockAdhocCntStatus` |  | |  |  | `CHAR(2)` | Store Stock Ad hoc Count processing status |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Creation date and time of stock count |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Who Last Changed the Business Document |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Changed date and time |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date |
