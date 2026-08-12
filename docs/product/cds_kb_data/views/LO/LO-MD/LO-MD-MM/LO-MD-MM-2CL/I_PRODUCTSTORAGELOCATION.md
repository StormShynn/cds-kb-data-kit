---
name: I_PRODUCTSTORAGELOCATION
description: "This CDS view provides the list of Storage locations assigned for a Product and Plant."
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTORAGELOCATION')/$value
semantic_en: "This CDS view provides the list of Storage locations assigned for a Product and Plant."
semantic_vi: "Product Storage Location — CDS view cơ bản dựa trên nsdm_e_mard."
keywords:
  - "Product Storage Location"
  - "product"
  - "storage"
  - "location"
  - "plant"
  - "warehouse"
  - "maintenance"
  - "status"
tags:
  - LO
  - bo:material
  - component:LO-MD-MM-2CL
  - interface-view
  - LO-MD
  - LO-MD-MM
  - LO-MD-MM-2CL
  - lob:logistics general
  - lob:sourcing & procurement
  - plan
  - product
  - bo:inventory
---
# I_PRODUCTSTORAGELOCATION

**This CDS view provides the list of Storage locations assigned for a Product and Plant.**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTORAGELOCATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `StorageLocation` | ✓ | |  | `lgort` | `CHAR(4)` | Storage Location |
| `WarehouseStorageBin` |  | |  | `lgpbe` | `CHAR(10)` | Storage Bin |
| `MaintenanceStatus` |  | |  | `pstat` | `CHAR(15)` | Maintenance Status |
| `IsMarkedForDeletion` |  | |  | `lvorm` | `CHAR(1)` | Flag Material for Deletion at Storage Location Level |
| `PhysicalInventoryBlockInd` |  | |  | `sperr` | `CHAR(1)` | Physical Inventory Blocking Indicator |
| `CreationDate` |  | |  | `ersda` | `DATS(8)` | Created On |
| `DateOfLastPostedCntUnRstrcdStk` |  | |  | `dlinl` | `DATS(8)` | Date of Last Posted Count |
| `InventoryCorrectionFactor` |  | |  | `bskrf` | `FLTP(16)` | Inventory Correction Factor |
| `InvtryRestrictedUseStockInd` |  | |  | `kzile` | `CHAR(3)` | Physical inventory indicator for restricted-use stock |
| `InvtryCurrentYearStockInd` |  | |  | `kzill` | `CHAR(3)` | Physical inventory indicator for whse stock in current year |
| `InvtryQualInspCurrentYrStkInd` |  | |  | `kzilq` | `CHAR(3)` | Phys. inventory ind. f. stock in qual. insp. in current year |
| `InventoryBlockStockInd` |  | |  | `kzils` | `CHAR(3)` | Physical inventory indicator for blocked stock |
| `InvtryRestStockPrevPeriodInd` |  | |  | `kzvle` | `CHAR(3)` | Physical inventory ind. for restricted-use stock, prev.pd |
| `InventoryStockPrevPeriod` |  | |  | `kzvll` | `CHAR(3)` | Physical inventory indicator for stock in previous year |
| `InvtryStockQltyInspPrevPeriod` |  | |  | `kzvlq` | `CHAR(3)` | Phys. inventory ind. f. stock in qual. insp. in prev. period |
| `HasInvtryBlockStockPrevPeriod` |  | |  | `kzvls` | `CHAR(3)` | Phys. inventory indicator for blocked stock in prev. period |
| `FiscalYearCurrentPeriod` |  | |  | `lfgja` | `NUMC(4)` |  |
| `FiscalMonthCurrentPeriod` |  | |  | `lfmon` | `NUMC(2)` |  |
| `FiscalYearCurrentInvtryPeriod` |  | |  | `mdjin` | `NUMC(4)` | Fiscal year of current physical inventory indicator |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` | `CHAR(1)` | Draft - Indicator - Is active document |
| `LeanWrhsManagementPickingArea` |  | |  | `lwmkb` | `CHAR(3)` | Picking area for lean WM |
| `_Product` | | ✓ | | | | |
| `_MaterialStock` | | ✓ | | | | |
| `_Stock` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ActiveExtension` | `E_Productstoragelocation` | [0..1] |
| `_MaterialStock` | `I_MaterialStock_2` | [0..*] |
| `_Stock` | `I_MaterialStock` | [0..*] |
| `_StorageLocation` | `I_StorageLocation` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTORAGELOCATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTORAGELOCATION')/$value)*

```abap
// Product Storage Location (active)
@AbapCatalog.sqlViewName: 'IPRDSTORAGELOC'
@VDM:{
  viewType: #BASIC,
  lifecycle: {
    status: #DEPRECATED,
    successor: 'I_ProductStorageLocationBasic'
  }
}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Storage Location'
// performance related
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MIXED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET
                                    ]

define view I_ProductStorageLocation
  as select from nsdm_e_mard as StorageLocation

  association [1..1] to I_Product                as _Product         on  $projection.Product = _Product.Product
  association [0..1] to E_Productstoragelocation as _ActiveExtension on  $projection.Product         = _ActiveExtension.Product
                                                                     and $projection.Plant           = _ActiveExtension.Plant
                                                                     and $projection.StorageLocation = _ActiveExtension.StorageLocation
  association [0..*] to I_MaterialStock_2        as _MaterialStock   on  $projection.Product         = _MaterialStock.Material
                                                                     and $projection.Plant           = _MaterialStock.Plant
 
  association [0..*] to I_MaterialStock          as _Stock           on  $projection.Product         = _Stock.Material
                                                                     and $projection.Plant           = _Stock.Plant
                                                                     and $projection.StorageLocation = _Stock.StorageLocation
  //Start: enterprise search help (ESH) related associations------------------------------------------------------------------------------------
  //These associations are required in I_ProductStorageLocation as N_ProductStorageLocation has these associations
  //There can be no associations in N_ProductStorageLocation which are not present in I_ProductStorageLocation
  association [1..1] to I_StorageLocation        as _StorageLocation on  $projection.Plant           = _StorageLocation.Plant
                                                                     and $projection.StorageLocation = _StorageLocation.StorageLocation
  //End of ESH related associations-------------------------------------------------------------------------------------------------------------

{

  key StorageLocation.matnr                           as Product,
  key StorageLocation.werks                           as Plant,
  key StorageLocation.lgort                           as StorageLocation,
      StorageLocation.lgpbe                           as WarehouseStorageBin,
      StorageLocation.pstat                           as MaintenanceStatus,
      StorageLocation.lvorm                           as IsMarkedForDeletion,
      StorageLocation.sperr                           as PhysicalInventoryBlockInd,
      StorageLocation.ersda                           as CreationDate,
      StorageLocation.dlinl                           as DateOfLastPostedCntUnRstrcdStk,
      StorageLocation.bskrf                           as InventoryCorrectionFactor,
      StorageLocation.kzile                           as InvtryRestrictedUseStockInd,
      StorageLocation.kzill                           as InvtryCurrentYearStockInd,
      StorageLocation.kzilq                           as InvtryQualInspCurrentYrStkInd,
      StorageLocation.kzils                           as InventoryBlockStockInd,
      StorageLocation.kzvle                           as InvtryRestStockPrevPeriodInd,
      StorageLocation.kzvll                           as InventoryStockPrevPeriod,
      StorageLocation.kzvlq                           as InvtryStockQltyInspPrevPeriod,
      StorageLocation.kzvls                           as HasInvtryBlockStockPrevPeriod,
      StorageLocation.lfgja                           as FiscalYearCurrentPeriod,
      StorageLocation.lfmon                           as FiscalMonthCurrentPeriod,
      StorageLocation.mdjin                           as FiscalYearCurrentInvtryPeriod,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0
      //            StorageLocation.labst                     as VltdUnrestrictedUseStkQty -- deprecated field ATC error 26.4.16

      // New fields from MDG model, as part of unified API development
      StorageLocation.lwmkb                           as LeanWrhsManagementPickingArea,

      _Product,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_MaterialStock' 
      _Stock,

      //Start of ESH related associations---------------------------
      _StorageLocation,
      //End of ESH related associations------------------------------
      _MaterialStock
}
```
