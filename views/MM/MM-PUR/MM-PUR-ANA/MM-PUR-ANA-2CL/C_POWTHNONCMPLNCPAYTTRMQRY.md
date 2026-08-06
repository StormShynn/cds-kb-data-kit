---
name: C_POWTHNONCMPLNCPAYTTRMQRY
description: PO having Non compliant Payment Terms
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POWTHNONCMPLNCPAYTTRMQRY')/$value
semantic_en: PO having Non compliant Payment Terms
tags:
  - MM
  - bo:purchaseorder
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - payment
  - metadata-only
---
# C_POWTHNONCMPLNCPAYTTRMQRY

**PO having Non compliant Payment Terms**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POWTHNONCMPLNCPAYTTRMQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PurchaseOrder` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | `NUMC(5)` | Item Number of Purchase Order |
| `Supplier` | `CHAR(10)` | Supplier |
| `PurchasingOrganization` | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` | `CHAR(3)` | Purchasing Group |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `Plant` | `CHAR(4)` | Plant |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `PaymentTerms` | `CHAR(4)` | Terms of Payment Key |
| `PaymentTermsDescription` | `CHAR(1024)` | Payment Terms Description |
| `PurchaseOrderDate` | `DATS(8)` | Purchase Order Date |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `PurOrdNetAmountInDisplayCrcy` | `CURR(21)` | Purchase Order Net Amount |
| `NrOfPOInNonCompliantPaytTrms` | `INT4(10)` | Number of PO with non compliant payment terms |
| `NumberOfPurchaseOrders` | `INT4(10)` | Number of Purchase Orders |
| `MinNrOfPOWithNonCompPaytTrm` | `INT4(10)` | Number of PO with non compliant payment terms |
| `NrOfPOWithNonCompliantPaytTrm` | `INT4(10)` | Number of PO with non compliant payment terms |
| `POWithNonCompliantPaytTrmPct` | `DEC(15)` | Percentage of PO with non compliant payment terms |
