---
name: I_PRODUCTMASTERSTATUS
description: "Productmasterstatus"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - status
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTMASTERSTATUS

**Productmasterstatus**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `matnr` |  |  |
| `ProductMasterMaintenanceStatus` | ✓ | |  | `statm` |  |  |
| `ProdMasterStatusSequenceNumber` | ✓ | |  | `zhler` |  |  |
| `CreationDate` |  | |  | `ersda` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `LastChangeDate` |  | |  | `laeda` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `StorageLocation` |  | |  | `lgort` |  |  |
| `Warehouse` |  | |  | `lgnum` |  |  |
| `StorageType` |  | |  | `lgtyp` |  |  |
| `ProductSalesOrganization` |  | |  | `vkorg` |  |  |
| `ProductDistributionChannel` |  | |  | `vtweg` |  |  |
| `ValuationArea` |  | |  | `bwkey` |  |  |
| `ValuationType` |  | |  | `bwtar` |  |  |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Master Status'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #XL,
  dataClass: #MASTER
}
@ObjectModel.modelingPattern:#NONE
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE
                                      
]
@Feature: 'SW:CMD_PM_PRODMASTER_STATUS'
@VDM.viewType: #BASIC 
@ObjectModel.sapObjectNodeType.name: 'Product'

define view entity I_ProductMasterStatus as select from msta 

association [1..1] to  I_Product         as _Product       on  $projection.Product = _Product.Product

 {
  
  key matnr as Product,
  key statm as ProductMasterMaintenanceStatus,
  key zhler as ProdMasterStatusSequenceNumber,
  ersda as CreationDate,
  ernam as CreatedByUser,
  laeda as LastChangeDate,
  aenam as LastChangedByUser,
  werks as Plant,
  lgort as StorageLocation,
  lgnum as Warehouse,
  lgtyp as StorageType,
  vkorg as ProductSalesOrganization,
  vtweg as ProductDistributionChannel,
  bwkey as ValuationArea,
  bwtar as ValuationType, 
  _Product
}
```
