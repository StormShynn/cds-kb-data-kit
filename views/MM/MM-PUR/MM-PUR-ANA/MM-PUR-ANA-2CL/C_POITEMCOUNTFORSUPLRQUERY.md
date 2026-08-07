---
name: C_POITEMCOUNTFORSUPLRQUERY
description: PO and Item Count for Total Supplier - Query
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POITEMCOUNTFORSUPLRQUERY')/$value
semantic_en: PO and Item Count for Total Supplier - Query
semantic_vi: PO and Item Count for Total Supplier - Query — CDS view tiêu dùng dựa trên C_POItemCountForSuplrCube.
keywords:
  - and
  - item
  - count
  - for
  - total
  - supplier
  - query
  - purchase
  - order
  - account
  - group
  - authorization
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
---
# C_POITEMCOUNTFORSUPLRQUERY

**PO and Item Count for Total Supplier - Query**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POITEMCOUNTFORSUPLRQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  | `CHAR(10)` | Account Number of Supplier |
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `SupplierAccountGroup` |  | |  |  | `CHAR(4)` | Supplier Account Group |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Authorization Group |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` | Number of Purchase Orders |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POITEMCOUNTFORSUPLRQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_POITEMCOUNTFORSUPLRQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CPOITMCNTQRY'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@OData.publish: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.query: true
@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'PO and Item Count for Total Supplier - Query'
define view C_POItemCountForSuplrQuery
  as select from C_POItemCountForSuplrCube
{
@AnalyticsDetails.query.display: #KEY_TEXT
  key Supplier,
  key PurchaseOrder,
  key PurchaseOrderItem,
      SupplierAccountGroup,
      AuthorizationGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,
      @DefaultAggregation: #SUM
      NumberOfPurchaseOrders,
      @DefaultAggregation: #SUM
      NumberOfPurchaseOrderItems

}
```
