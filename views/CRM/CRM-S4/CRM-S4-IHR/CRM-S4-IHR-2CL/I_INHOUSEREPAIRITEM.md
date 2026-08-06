---
name: I_INHOUSEREPAIRITEM
description: In-House Service Item
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIRITEM')/$value
semantic_en: In-House Service Item
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
  - metadata-only
---
# I_INHOUSEREPAIRITEM

**In-House Service Item**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIRITEM')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CustMgmtObjectType` | `CHAR(10)` | Business Trans. Cat. |
| `InHouseRepair` | `CHAR(10)` | In-House Repair ID |
| `InHouseRepairItem` | `NUMC(6)` | Repair Object |
| `InHouseRepairItemUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `InHouseRepairItemCharUUID` | `CHAR(32)` | Object GUID in Character Format |
| `CreationDateTime` | `DEC(15)` | Created At |
| `CreatedByUser` | `CHAR(12)` | User that Created the Transaction |
| `LastChangeDateTime` | `DEC(15)` | Changed At |
| `LastChangedByUser` | `CHAR(12)` | Transaction Last Changed By |
| `InhRepairItemObjectType` | `CHAR(10)` | CRM Item Object Type |
| `InHouseRepairUUID` | `RAW(16)` | GUID of a CRM Order Object |
| `ProductUUID` | `RAW(16)` | Internal Unique ID of Product |
| `OriginallyRequestedProduct` | `CHAR(54)` | Product Name Entered |
| `Product` | `CHAR(40)` | Product |
| `InhRepairItemCategory` | `CHAR(4)` | Item Category |
| `InhRepairItemStatus` | `CHAR(4)` | Repair Object Status |
| `InhRepairItemSuplmntyStatus` | `CHAR(4)` | Additional Status |
| `InhRepairItemDeliveryStatus` | `CHAR(1)` | Delivery Status |
| `InhRepairItemAvailyStatus` | `CHAR(5)` | Availability of Repair Object at Repair Center |
| `InhRepairItemHasError` | `CHAR(1)` | Error Status |
| `InhRepairItemIsOpen` | `CHAR(1)` | Status "Open" |
| `InhRepairReferenceEquipment` | `CHAR(18)` | Equipment Number |
| `SerialNumber` | `CHAR(18)` | Serial Number of Equipment |
| `InhRepairType` | `CHAR(4)` | Business Transaction Type |
| `PostingDate` | `DATS(8)` | Posting Date for a Business Transaction |
| `ReferenceCustomerReturnItem` | `NUMC(6)` | Item number of the SD document |
| `RefRetsMgmtProcessItem` | `NUMC(6)` | Item Number |
| `RefRetsMgmtProcItmQtySplit` | `NUMC(3)` | Split Identification Number |
