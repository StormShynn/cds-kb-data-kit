---
name: I_PRODUCTMASTERSTATUS
description: "Productmasterstatus"
app_component: LO-MD-MM-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
