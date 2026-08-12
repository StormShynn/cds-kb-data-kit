---
name: I_EWM_AVAILABLESTOCK
description: "Ewm Availablestock"
app_component: SCM-EWM-WOP-2CL
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
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_AVAILABLESTOCK

**Ewm Availablestock**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
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
| `ParentHandlingUnitUUID` | ✓ | |  | `guid_parent` |  |  |
| `StockItemUUID` | ✓ | |  | `guid_stock` |  |  |
| `EWMWarehouse` |  | |  | `lgnum` |  |  |
| `ProductUUID` |  | |  | `cast(matid as raw16 preserving type)` |  |  |
| `StockDocumentCategory` |  | |  | `stock_doccat` |  |  |
| `StockDocumentNumber` |  | |  | `stock_docno` |  |  |
| `StockItemNumber` |  | |  | `stock_itmno` |  |  |
| `StockSegment` |  | |  | `stk_seg_long` |  |  |
| `CounterForStockSeparation` |  | |  | `stock_cnt` |  |  |
| `EWMDocumentCategory` |  | |  | `doccat` |  |  |
| `BatchUUID` |  | |  | `batchid` |  |  |
| `Batch` |  | |  | `charg` |  |  |
| `EWMBatchIsInRestrictedUseStock` |  | |  | `brestr` |  |  |
| `CountryOfOrigin` |  | |  | `coo` |  |  |
| `EWMStockType` |  | |  | `cat` |  |  |
| `HandlingUnitNumber` |  | |  | `cast(huident as ewm_de_huident preserving type)` |  |  |
| `HandlingUnitOpenTaskInd` |  | |  | `flgmove` |  |  |
| `HandlingUnitLogicalPosition` |  | |  | `logpos` |  |  |
| `EWMStorageType` |  | |  | `lgtyp` |  |  |
| `EWMStorageBin` |  | |  | `lgpla` |  |  |
| `EWMResource` |  | |  | `rsrc` |  |  |
| `EWMStockOwner` |  | |  | `cast( owner as ewm_de_stockowner preserving type )` |  |  |
| `StockOwnerPartnerRole` |  | |  | `owner_role` |  |  |
| `EntitledToDisposeParty` |  | |  | `entitled` |  |  |
| `EntitledToDisposePartnerRole` |  | |  | `entitled_role` |  |  |
| `EWMStockUsage` |  | |  | `stock_usage` |  |  |
| `AvailableEWMStockQty` |  | |  | `quan` |  |  |
| `EWMStockQuantityBaseUnit` |  | |  | `unit` |  |  |
| `StockKeepingAlternativeUoM` |  | |  | `altme` |  |  |
| `GoodsReceiptUTCDateTime` |  | |  | `cast ( wdatu as /scwm/lvs_wdatu_noconv preserving type )` |  |  |
| `ShelfLifeExpirationDate` |  | |  | `vfdat` |  |  |
| `EWMStockIsBlockedForInventory` |  | |  | `skzsi` |  |  |
| `TranspUnitInternalNumber` |  | |  | `tu_num` |  |  |
| `WhseQualityInspectionType` |  | |  | `insptyp` |  |  |
| `QualityInspectionDocUUID` |  | |  | `inspid` |  |  |
| `EWMStorageBinImprovable` |  | |  | `outcon` |  |  |
| `EWMQuantityIsRead` |  | |  | `read_quants` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Available Stock'
@Metadata.ignorePropagatedAnnotations: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #L
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
define view entity I_EWM_AvailableStock
  as select from /scwm/aqua
{
  key guid_parent                                              as ParentHandlingUnitUUID,
  key guid_stock                                               as StockItemUUID,
      lgnum                                                    as EWMWarehouse,
      @EndUserText.label: 'Product UUID'
      cast(matid as raw16 preserving type)                     as ProductUUID,
      stock_doccat                                             as StockDocumentCategory,
      stock_docno                                              as StockDocumentNumber,
      stock_itmno                                              as StockItemNumber,
//    StockSegment is not supported in the cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'      
      stk_seg_long                                             as StockSegment,
      stock_cnt                                                as CounterForStockSeparation,
      doccat                                                   as EWMDocumentCategory,
      batchid                                                  as BatchUUID,
      charg                                                    as Batch,
      brestr                                                   as EWMBatchIsInRestrictedUseStock,
      coo                                                      as CountryOfOrigin,
      cat                                                      as EWMStockType,
      cast(huident as ewm_de_huident preserving type)          as HandlingUnitNumber,
      flgmove                                                  as HandlingUnitOpenTaskInd,
      logpos                                                   as HandlingUnitLogicalPosition,
      lgtyp                                                    as EWMStorageType,
      lgpla                                                    as EWMStorageBin,
      rsrc                                                     as EWMResource,
      cast( owner  as ewm_de_stockowner preserving type )      as EWMStockOwner,
      owner_role                                               as StockOwnerPartnerRole,
      entitled                                                 as EntitledToDisposeParty,
      entitled_role                                            as EntitledToDisposePartnerRole,
      stock_usage                                              as EWMStockUsage,
      @Semantics.quantity.unitOfMeasure: 'EWMSTOCKQUANTITYBASEUNIT'
      quan                                                     as AvailableEWMStockQty,
      unit                                                     as EWMStockQuantityBaseUnit,
      altme                                                    as StockKeepingAlternativeUoM,
      cast ( wdatu as /scwm/lvs_wdatu_noconv preserving type ) as GoodsReceiptUTCDateTime,
      vfdat                                                    as ShelfLifeExpirationDate,
      skzsi                                                    as EWMStockIsBlockedForInventory,
//    TranspUnitInternalNumber is not supported in the cloud
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      tu_num                                                   as TranspUnitInternalNumber,
      insptyp                                                  as WhseQualityInspectionType,
      inspid                                                   as QualityInspectionDocUUID,
      outcon                                                   as EWMStorageBinImprovable,  
      read_quants                                              as EWMQuantityIsRead            
}
```
