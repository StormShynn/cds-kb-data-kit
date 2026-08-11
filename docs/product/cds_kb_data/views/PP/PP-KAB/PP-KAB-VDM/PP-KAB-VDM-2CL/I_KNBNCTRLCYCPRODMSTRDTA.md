---
name: I_KNBNCTRLCYCPRODMSTRDTA
description: "Product Master Data for Kanban Control Cycle"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value
semantic_en: "Product Master Data for Kanban Control Cycle"
semantic_vi: "Product Master Data for Kanban Control Cycle — CDS view giao diện dựa trên I_KanbanControlCycle."
keywords:
  - "product"
  - "master"
  - "data"
  - "for"
  - "kanban"
  - "control"
  - "cycle"
  - "plant"
  - "storage"
  - "location"
  - "source"
tags:
  - PP
  - bo:businesspartner
  - component:PP-KAB-VDM-2CL
  - interface-view
  - lob:manufacturing
  - master-data
  - PP-KAB
  - PP-KAB-VDM
  - PP-KAB-VDM-2CL
  - product
---
# I_KNBNCTRLCYCPRODMSTRDTA

**Product Master Data for Kanban Control Cycle**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KanbanControlCycle` | ✓ | |  |  | `CHAR(7)` | Kanban Control Cycle |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | | `_ProductionSupplyArea` | `StorageLocation` | `CHAR(4)` | Storage Location |
| `SourceStorageLocation` |  | |  | `cast(StorageLocation as vdm_source_storage_location preserving type)` | `CHAR(4)` | Source Storage Location |
| `SupplySourcePlant` |  | |  | `cast( case when SupplySourcePlant is null or SupplySourcePlant = '' then Plant else SupplySourcePlant end as vdm_pkumw)` | `CHAR(4)` | Plant of Supply Source |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `_ProductPlant` | | ✓ | | | | |
| `_ProductStorageLocation` | | ✓ | | | | |
| `_SupplySourceProductPlant` | | ✓ | | | | |
| `_SourceProductStorageLocation` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductPlant` | `I_ProductPlant` | [0..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |
| `_SupplySourceProductPlant` | `I_ProductPlant` | [0..1] |
| `_SourceProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_KNBNCTRLCYCPRODMSTRDTA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPPKNBNCCPRODMD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #COMPOSITE

@ObjectModel.representativeKey: 'KanbanControlCycle'
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #MIXED}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Product Master Data for Kanban Control Cycle'

define view I_KnbnCtrlCycProdMstrDta
  as select from I_KanbanControlCycle
  association [0..1] to I_ProductPlant           as _ProductPlant                 on  $projection.Product = _ProductPlant.Product
                                                                                  and $projection.Plant   = _ProductPlant.Plant
  association [0..1] to I_ProductStorageLocation as _ProductStorageLocation       on  $projection.Product         = _ProductStorageLocation.Product
                                                                                  and $projection.Plant           = _ProductStorageLocation.Plant
                                                                                  and $projection.StorageLocation = _ProductStorageLocation.StorageLocation
  association [0..1] to I_ProductPlant           as _SupplySourceProductPlant     on  $projection.Product           = _SupplySourceProductPlant.Product
                                                                                  and $projection.SupplySourcePlant = _SupplySourceProductPlant.Plant
  association [0..1] to I_ProductStorageLocation as _SourceProductStorageLocation on  $projection.Product               = _SourceProductStorageLocation.Product
                                                                                  and $projection.SupplySourcePlant     = _SourceProductStorageLocation.Plant
                                                                                  and $projection.SourceStorageLocation = _SourceProductStorageLocation.StorageLocation
{
  key KanbanControlCycle,
      Product,
      Plant,
      _ProductionSupplyArea.StorageLocation                                as StorageLocation,
      cast(StorageLocation as vdm_source_storage_location preserving type) as SourceStorageLocation,
      cast(
        case when SupplySourcePlant is null or SupplySourcePlant = '' then Plant
             else SupplySourcePlant
      end as vdm_pkumw)                                                    as SupplySourcePlant,
      @Consumption.hidden: true
      Supplier,

      _ProductPlant,
      _ProductStorageLocation,
      _SupplySourceProductPlant,
      _SourceProductStorageLocation,

      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant
}
```
