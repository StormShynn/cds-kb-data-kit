---
name: C_POITEMCOUNTFORSUPLRCUBE
description: "Poitemcountforsuplrcube"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - analytical
  - item-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_POITEMCOUNTFORSUPLRCUBE

**Poitemcountforsuplrcube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Supplier` | ✓ | |  |  |  |  |
| `PurchaseOrder` | ✓ | | `_PurchaseOrder` | `PurchaseOrder` |  |  |
| `PurchaseOrderItem` | ✓ | | `_PurchaseOrderItem` | `PurchaseOrderItem` |  |  |
| `SupplierAccountGroup` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `Region` |  | |  |  |  |  |
| `NumberOfPurchaseOrders` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurords )` |  |  |
| `NumberOfPurchaseOrderItems` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `_Country` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [1..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CPOITMCNTCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'PO and Item Count for Total Supplier - Cube'
define view C_POItemCountForSuplrCube
  as select from P_TotalNumberOfSuppliers as AvailableSupplier

  inner join I_PurchaseOrder as _PurchaseOrder  on  AvailableSupplier.Supplier                          = _PurchaseOrder.Supplier
                                                           and _PurchaseOrder.PurchasingDocumentDeletionCode = ''
                                                           
  inner join I_PurchaseOrderItem as _PurchaseOrderItem  on  _PurchaseOrder.PurchaseOrder                          = _PurchaseOrderItem.PurchaseOrder
                                                           and _PurchaseOrderItem.PurchasingDocumentDeletionCode = ''                                                        

  association [1..1] to I_Country       as _Country        on  $projection.Country = _Country.Country

  association [0..1] to I_Region        as _SupplierRegion on  $projection.Region  = _SupplierRegion.Region
                                                           and $projection.Country = _SupplierRegion.Country

  association [1..1] to I_Supplier      as _Supplier       on  $projection.Supplier = _Supplier.Supplier

{
      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
  key AvailableSupplier.Supplier as Supplier,
  key _PurchaseOrder.PurchaseOrder as PurchaseOrder,
  key _PurchaseOrderItem.PurchaseOrderItem,
      
      SupplierAccountGroup,
      AuthorizationGroup,

      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      Country,

      @ObjectModel.foreignKey.association: '_SupplierRegion'
      @Analytics.internalName:#LOCAL
      Region,
      
      @Aggregation.referenceElement: ['PurchaseOrder']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurords )    as NumberOfPurchaseOrders,

      @DefaultAggregation: #SUM
      cast( 1 as mm_pur_ana_numbrofpurorditms ) as NumberOfPurchaseOrderItems,

      _Supplier,
      _Country,
      _SupplierRegion
}
```
