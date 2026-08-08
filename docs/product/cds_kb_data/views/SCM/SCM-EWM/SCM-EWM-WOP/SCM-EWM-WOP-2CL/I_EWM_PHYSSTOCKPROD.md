---
name: I_EWM_PHYSSTOCKPROD
description: "Ewm Physstockprod"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
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
# I_EWM_PHYSSTOCKPROD

**Ewm Physstockprod**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ParentHandlingUnitUUID` | ✓ | |  |  |  |  |
| `StockItemUUID` | ✓ | |  |  |  |  |
| `EWMWarehouse` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `EWMStockType` |  | |  |  |  |  |
| `EWMStockOwner` |  | |  |  |  |  |
| `EntitledToDisposeParty` |  | |  |  |  |  |
| `EWMStockUsage` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `StockDocumentCategory` |  | |  |  |  |  |
| `ExternalStockDocumentNumber` |  | |  | `( case StockDocumentCategory when 'SOS' then cast( ltrim( StockDocumentNumber, '0' ) as /scwm/de_stock_docno preserving type ) when 'PJS' then _WBSElement.WBSElementExternalID else '' end )` |  |  |
| `StockItemNumber` |  | |  |  |  |  |
| `EWMWorkInProcess` |  | |  |  |  |  |
| `EWMStockReferenceDocCategory` |  | |  |  |  |  |
| `EWMStockReferenceDocument` |  | |  | `case EWMStockReferenceDocCategory when 'PDI' then cast(_WarehouseRequestInbHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'PDO' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'SPC' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'WMR' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) when 'PWR' then cast(_WhseReqProdnMatlReqHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type ) end` |  |  |
| `EWMStockReferenceDocumentItem` |  | |  | `case EWMStockReferenceDocCategory when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type ) when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) when 'PWR' then cast(_WhseReqProdnMatlReqItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type ) end` |  |  |
| `StockIdentificationNumber` |  | |  |  |  |  |
| `WhseQualityInspectionType` |  | |  |  |  |  |
| `QualityInspectionDocument` |  | | `_QualityInspection` | `QualityInspectionDocument` |  |  |
| `EWMStorageBin` |  | |  |  |  |  |
| `HandlingUnitNumber` |  | |  |  |  |  |
| `EWMResource` |  | |  |  |  |  |
| `TranspUnitInternalNumber` |  | |  |  |  |  |
| `EWMStockIndexCode` |  | |  |  |  |  |
| `ProductUUID` |  | |  |  |  |  |
| `BatchUUID` |  | |  |  |  |  |
| `EWMDocumentCategory` |  | |  |  |  |  |
| `StockDocumentNumber` |  | |  |  |  |  |
| `EWMStockQuantityInBaseUnit` |  | |  |  |  |  |
| `EWMStockQuantityBaseUnit` |  | |  |  |  |  |
| `EWMStockQtyBaseUnitISOCode` |  | |  |  |  |  |
| `EWMStockQtyBaseUnitSAPCode` |  | |  |  |  |  |
| `EWMStockQuantityAltvUnit` |  | |  |  |  |  |
| `EWMStockQtyAltvUnitISOCode` |  | |  |  |  |  |
| `EWMStockQtyAltvUnitSAPCode` |  | |  |  |  |  |
| `EWMLoadingOrNetWeight` |  | |  |  |  |  |
| `EWMLoadingOrNetWeightUnit` |  | |  |  |  |  |
| `EWMLoadgOrNetWgtUntISOCode` |  | |  |  |  |  |
| `EWMLoadgOrNetWgtUntSAPCode` |  | |  |  |  |  |
| `EWMLoadingOrNetVolume` |  | |  |  |  |  |
| `EWMLoadingOrNetVolumeUnit` |  | |  |  |  |  |
| `EWMLoadgOrNetVolUntISOCode` |  | |  |  |  |  |
| `EWMLoadgOrNetVolUntSAPCode` |  | |  |  |  |  |
| `EWMStorageBinCapConsumptionVal` |  | |  |  |  |  |
| `ShelfLifeExpirationDate` |  | |  |  |  |  |
| `CountryOfOrigin` |  | |  |  |  |  |
| `EWMBatchIsInRestrictedUseStock` |  | |  |  |  |  |
| `StockSegment` |  | |  |  |  |  |
| `QualityInspectionDocUUID` |  | |  |  |  |  |
| `InspectionPartialLot` |  | | `_QualityInspection` | `InspectionPartialLot` |  |  |
| `EWMStockRefDocumentUUID` |  | |  |  |  |  |
| `EWMStockRefDocItemUUID` |  | |  |  |  |  |
| `EWMValuationQuantity` |  | |  |  |  |  |
| `EWMValuationQuantityUnit` |  | |  |  |  |  |
| `EWMValuationQtyUnitISOCode` |  | |  |  |  |  |
| `EWMValuationQtyUnitSAPCode` |  | |  |  |  |  |
| `EWMValuationQuantityStatus` |  | |  |  |  |  |
| `EWMStockIsBlockedForInventory` |  | |  |  |  |  |
| `EWMConsolidationGroup` |  | |  |  |  |  |
| `SerialNumberRequiredLevel` |  | |  |  |  |  |
| `EWMGoodsReceiptDateTime` |  | |  |  |  |  |
| `WarehouseTimeZone` |  | |  |  |  |  |
| `EWMStorageType` |  | |  |  |  |  |
| `EWMStorageSection` |  | | `_StorageBin` | `EWMStorageSection` |  |  |
| `EWMStorBinIsBlockedForPutaway` |  | |  | `cast( _StorageBin.EWMStorBinIsBlockedForPutaway as ewm_de_binblockedforputaway preserving type )` |  |  |
| `EWMStorBinIsBlockedForRemoval` |  | |  | `cast( _StorageBin.EWMStorBinIsBlockedForRemoval as ewm_de_binblockedforremoval preserving type )` |  |  |
| `EWMStorBinIsBlockedDueToPInv` |  | |  | `cast( _StorageBin.EWMStorBinIsBlockedDueToPInv as ewm_de_storbinisblkdduetopinv preserving type )` |  |  |
| `EWMHghstLvlHandlingUnitNumber` |  | |  |  |  |  |
| `EWMLocationType` |  | |  |  |  |  |
| `EWMParentLocationIndexCode` |  | |  |  |  |  |
| `_StorageSectionText` | | ✓ | | | | |
| `_LocationTypeText` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |
| `_EWMDocumentCategoryText` | | ✓ | | | | |
| `_EWMEntitledToDisposePartyText` | | ✓ | | | | |
| `_EWMStockOwnerText` | | ✓ | | | | |
| `_EWMStockRefDocCategoryText` | | ✓ | | | | |
| `_EWMStockTypeText` | | ✓ | | | | |
| `_EWMStockUsageText` | | ✓ | | | | |
| `_EWMValuationQtyStatusText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_SerialNumberRequiredLevelText` | | ✓ | | | | |
| `_StockDocCategoryText` | | ✓ | | | | |
| `_UnitOfMeasureAlternativeUnit` | | ✓ | | | | |
| `_UnitOfMeasureBaseUnit` | | ✓ | | | | |
| `_UnitOfMeasureNetVolumeUoM` | | ✓ | | | | |
| `_UnitOfMeasureNetWeightUoM` | | ✓ | | | | |
| `_UnitOfMeasureValnQtyUnit` | | ✓ | | | | |
| `_WarehouseText` | | ✓ | | | | |
| `_WhseQualityInspectionTypeText` | | ✓ | | | | |
| `_StorageTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StorageSectionText` | `I_EWM_StorageSectionText_2` | [0..*] |
| `_LocationTypeText` | `I_EWM_LocationTypeText` | [0..*] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_WarehouseRequestInbHdr` | `I_EWM_WarehouseRequestInbHdr` | [0..1] |
| `_WarehouseRequestOutHdr` | `I_EWM_WarehouseRequestOutHdr` | [0..1] |
| `_WhseReqProdnMatlReqHdr` | `I_EWM_WhseReqProdnMatlReqHdr` | [0..1] |
| `_InbDeliveryItem` | `I_EWM_InbDeliveryItemBasic` | [0..1] |
| `_WarehouseRequestOutItem` | `I_EWM_WarehouseRequestOutItem` | [0..1] |
| `_WhseReqProdnMatlReqItem` | `I_EWM_WhseReqProdnMatlReqItem` | [0..1] |
| `_QualityInspection` | `I_EWM_QltyInspDocUUID` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Physical Stock for Products'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY ]

//!!! ATTENTION !!!
//This view requires that silent data migration /SCWM/CL_SDM_HUHDR_GUID_HU_TOP that was introduced in CE 2208 / OP 2022 has finished after upgrade
//The view will not return any data otherwise. Note that SDM runs after upgrade and business users can already work in the system.
//If you want to use this view you must check that silent data migration has finished in your code (error message).
//Special attention must be paid if you use this view within an existing application.
//You must ensure that your application is working with the old logic without this view until SDM has finished.

@Consumption.dbHints: ['USE_HEX_PLAN']
define view entity I_EWM_PhysStockProd
  as select from P_EWM_PhysStockProd03
  association [0..*] to I_EWM_StorageSectionText_2    as _StorageSectionText      on  $projection.EWMWarehouse      = _StorageSectionText.EWMWarehouse
                                                                                  and $projection.EWMStorageType    = _StorageSectionText.EWMStorageType
                                                                                  and $projection.EWMStorageSection = _StorageSectionText.EWMStorageSection
  association [0..*] to I_EWM_LocationTypeText        as _LocationTypeText        on  $projection.EWMLocationType = _LocationTypeText.EWMLocationType
  association [0..1] to I_WBSElementBasicData         as _WBSElement              on  $projection.StockDocumentNumber   = _WBSElement.WBSElementInternalID
                                                                                  and $projection.StockDocumentCategory = 'PJS'
  //associations for Reference Document
  association [0..1] to I_EWM_WarehouseRequestInbHdr  as _WarehouseRequestInbHdr  on  $projection.EWMStockRefDocumentUUID = _WarehouseRequestInbHdr.EWMWarehouseRequestUUID
  association [0..1] to I_EWM_WarehouseRequestOutHdr  as _WarehouseRequestOutHdr  on  $projection.EWMStockRefDocumentUUID = _WarehouseRequestOutHdr.EWMWarehouseRequestUUID
  association [0..1] to I_EWM_WhseReqProdnMatlReqHdr  as _WhseReqProdnMatlReqHdr  on  $projection.EWMStockRefDocumentUUID = _WhseReqProdnMatlReqHdr.EWMWarehouseRequestUUID

  //associations for Reference Document Item
  association [0..1] to I_EWM_InbDeliveryItemBasic    as _InbDeliveryItem         on  $projection.EWMStockRefDocumentUUID = _InbDeliveryItem.InboundDeliveryUUID
                                                                                  and $projection.EWMStockRefDocItemUUID  = _InbDeliveryItem.InboundDeliveryItemUUID
  association [0..1] to I_EWM_WarehouseRequestOutItem as _WarehouseRequestOutItem on  $projection.EWMStockRefDocumentUUID = _WarehouseRequestOutItem.EWMWarehouseRequestUUID
                                                                                  and $projection.EWMStockRefDocItemUUID  = _WarehouseRequestOutItem.EWMWarehouseRequestItemUUID
  association [0..1] to I_EWM_WhseReqProdnMatlReqItem as _WhseReqProdnMatlReqItem on  $projection.EWMStockRefDocumentUUID = _WhseReqProdnMatlReqItem.EWMWarehouseRequestUUID
                                                                                  and $projection.EWMStockRefDocItemUUID  = _WhseReqProdnMatlReqItem.EWMWarehouseRequestItemUUID

  //Quality Inspection
  association [0..1] to I_EWM_QltyInspDocUUID         as _QualityInspection       on  $projection.QualityInspectionDocUUID = _QualityInspection.QualityInspectionDocUUID

{
  key   ParentHandlingUnitUUID,
  key   StockItemUUID,

        EWMWarehouse,
        @ObjectModel.text.association: '_ProductText'
        Product,
        EWMStockType,
        EWMStockOwner,
        EntitledToDisposeParty,
        EWMStockUsage,
        Batch,
        StockDocumentCategory,
        ( case StockDocumentCategory
          when 'SOS' then cast( ltrim( StockDocumentNumber, '0' ) as /scwm/de_stock_docno preserving type )
          when 'PJS' then _WBSElement.WBSElementExternalID
          else '' end )                                                                                    as ExternalStockDocumentNumber,
        //end ) as ExternalStockDocumentNumber,
        StockItemNumber,
        //      EWMWorkInProcess is not supported in cloud
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        EWMWorkInProcess,
        EWMStockReferenceDocCategory,
        case EWMStockReferenceDocCategory
          when 'PDI' then cast(_WarehouseRequestInbHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
          when 'PDO' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
          when 'SPC' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
          when 'WMR' then cast(_WarehouseRequestOutHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
          when 'PWR' then cast(_WhseReqProdnMatlReqHdr.EWMWarehouseRequest as ewm_de_referencedocument preserving type )
          end                                                                                              as EWMStockReferenceDocument,
        case EWMStockReferenceDocCategory
          when 'PDI' then cast(_InbDeliveryItem.EWMInboundDeliveryItem as ewm_de_referencedocumentitem preserving type )
          when 'PDO' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
          when 'SPC' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
          when 'WMR' then cast(_WarehouseRequestOutItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
          when 'PWR' then cast(_WhseReqProdnMatlReqItem.EWMWarehouseRequestItem as ewm_de_referencedocumentitem preserving type )
          end                                                                                              as EWMStockReferenceDocumentItem,
        StockIdentificationNumber,
        WhseQualityInspectionType,
        _QualityInspection.QualityInspectionDocument                                                       as QualityInspectionDocument,
        EWMStorageBin,
        HandlingUnitNumber,
        EWMResource,
        //      TranspUnitInternalNumber is not supported in the cloud
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        TranspUnitInternalNumber,
        @UI.hidden: true
        EWMStockIndexCode,
        @UI.hidden: true
        ProductUUID,
        @UI.hidden: true
        BatchUUID,
        EWMDocumentCategory,
        @UI.hidden: true
        StockDocumentNumber,
        @Semantics.quantity.unitOfMeasure: 'EWMStockQuantityBaseUnit'
        EWMStockQuantityInBaseUnit,
        @ObjectModel.foreignKey.association: '_UnitOfMeasureBaseUnit'
        EWMStockQuantityBaseUnit,
        EWMStockQtyBaseUnitISOCode,
        EWMStockQtyBaseUnitSAPCode,
        @ObjectModel.foreignKey.association: '_UnitOfMeasureAlternativeUnit'
        EWMStockQuantityAltvUnit,
        EWMStockQtyAltvUnitISOCode,
        EWMStockQtyAltvUnitSAPCode,
        @Semantics.quantity.unitOfMeasure: 'EWMLoadingOrNetWeightUnit'
        EWMLoadingOrNetWeight,
        @ObjectModel.foreignKey.association: '_UnitOfMeasureNetWeightUoM'
        EWMLoadingOrNetWeightUnit,
        EWMLoadgOrNetWgtUntISOCode,
        EWMLoadgOrNetWgtUntSAPCode,
        @Semantics.quantity.unitOfMeasure: 'EWMLoadingOrNetVolumeUnit'
        EWMLoadingOrNetVolume,
        @ObjectModel.foreignKey.association: '_UnitOfMeasureNetVolumeUoM'
        EWMLoadingOrNetVolumeUnit,
        EWMLoadgOrNetVolUntISOCode,
        EWMLoadgOrNetVolUntSAPCode,
        EWMStorageBinCapConsumptionVal,
        ShelfLifeExpirationDate,
        CountryOfOrigin,
        EWMBatchIsInRestrictedUseStock,
        //      StockSegment is not supported in the cloud
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        P_EWM_PhysStockProd03.StockSegment,
        @UI.hidden: true
        QualityInspectionDocUUID,
        _QualityInspection.InspectionPartialLot                                                            as InspectionPartialLot,
        @UI.hidden: true
        EWMStockRefDocumentUUID,
        @UI.hidden: true
        EWMStockRefDocItemUUID,
        //      EWMValuationQuantity is not supported in the cloud
        @Semantics.quantity.unitOfMeasure: 'EWMValuationQuantityUnit'
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        EWMValuationQuantity,
        //      EWMValuationQuantityUnit is not supported in the cloud
        @ObjectModel.foreignKey.association: '_UnitOfMeasureValnQtyUnit'
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        EWMValuationQuantityUnit,
        //      EWMValuationQtyUnitISOCode is not supported in the cloud
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        EWMValuationQtyUnitISOCode,
        //      EWMValuationQtyUnitSAPCode is not supported in the cloud
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        EWMValuationQtyUnitSAPCode,
        //      EWMValuationQuantityStatus is not supported in the cloud
        @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
        EWMValuationQuantityStatus,
        EWMStockIsBlockedForInventory,
        EWMConsolidationGroup,
        SerialNumberRequiredLevel,
        EWMGoodsReceiptDateTime,
        WarehouseTimeZone,
        EWMStorageType,
        _StorageBin.EWMStorageSection                                                                      as EWMStorageSection,
        cast( _StorageBin.EWMStorBinIsBlockedForPutaway as ewm_de_binblockedforputaway preserving type )   as EWMStorBinIsBlockedForPutaway,
        cast( _StorageBin.EWMStorBinIsBlockedForRemoval as ewm_de_binblockedforremoval preserving type )   as EWMStorBinIsBlockedForRemoval,
        cast( _StorageBin.EWMStorBinIsBlockedDueToPInv  as ewm_de_storbinisblkdduetopinv preserving type ) as EWMStorBinIsBlockedDueToPInv,
        // This field is filled by silent data migration (SDMI). Special rules apply on data that was changed by SDMI.
        // See comment on top of this view about the usage.
        EWMHghstLvlHandlingUnitNumber,
        EWMLocationType,
        @UI.hidden: true
        EWMParentLocationIndexCode,

        /* Associations */
        _CountryText,
        _EWMDocumentCategoryText,
        _EWMEntitledToDisposePartyText,
        _EWMStockOwnerText,
        _EWMStockRefDocCategoryText,
        _EWMStockTypeText,
        _EWMStockUsageText,
        _EWMValuationQtyStatusText,
        _ProductText,
        _SerialNumberRequiredLevelText,
        _StockDocCategoryText,
        _UnitOfMeasureAlternativeUnit,
        _UnitOfMeasureBaseUnit,
        _UnitOfMeasureNetVolumeUoM,
        _UnitOfMeasureNetWeightUoM,
        _UnitOfMeasureValnQtyUnit,
        _WarehouseText,
        _WhseQualityInspectionTypeText,
        _StorageTypeText,
        _StorageSectionText,
        _LocationTypeText

}
```
