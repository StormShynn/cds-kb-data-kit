---
name: C_POITEMCOUNTFORSUPLRQUERY
description: PO and Item Count for Total Supplier - Query
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POITEMCOUNTFORSUPLRQUERY')/$value
semantic_en: PO and Item Count for Total Supplier - Query
tags:
  - MM
  - bo:purchaseorder
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
  - metadata-only
---
# C_POITEMCOUNTFORSUPLRQUERY

**PO and Item Count for Total Supplier - Query**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POITEMCOUNTFORSUPLRQUERY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `SupplierAccountGroup` | `CHAR(4)` | Supplier Account Group |
| `AuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `NumberOfPurchaseOrders` | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` | `INT4(10)` | Number of Purchase Order Items |
