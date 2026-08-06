---
name: I_SALESORDERBILLOFMATERIALTP_3
description: Sales OrderBill of MaterialTP 3
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - transactional-processing
  - sales-order
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:SalesOrder
  - bo:Material
---
# I_SALESORDERBILLOFMATERIALTP_3

**Sales OrderBill of MaterialTP 3**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterial` | `bom_header.BillOfMaterial` |
| key `BillOfMaterialCategory` | `bom_header.BillOfMaterialCategory` |
| key `BillOfMaterialVariant` | `bom_header.BillOfMaterialVariant` |
| key `BillOfMaterialVersion` | `bom_header.BillOfMaterialVersion` |
| key `EngineeringChangeDocument` | `bom_header.EngineeringChangeDocument` |
| key `Material` | `bom_header.Material` |
| key `Plant` | `bom_header.Plant` |
| `SalesOrder` | `bom_header.SalesOrder` |
| `SalesOrderItem` | `bom_header.SalesOrderItem` |
| `BillOfMaterialHeaderUUID` | `bom_header.BillOfMaterialHeaderUUID` |
| `BillOfMaterialVariantUsage` | `bom_header.BillOfMaterialVariantUsage` |
| `EngineeringChangeDocForEdit` | `bom_header.EngineeringChangeDocForEdit` |
| `IsMultipleBOMAlt` | `bom_header.IsMultipleBOMAlt` |
| `BOMHeaderInternalChangeCount` | `bom_header.BOMHeaderInternalChangeCount` |
| `BOMUsagePriority` | `bom_header.BOMUsagePriority` |
| `BillOfMaterialAuthsnGrp` | `bom_header.BillOfMaterialAuthsnGrp` |
| `BOMVersionStatus` | `bom_header.BOMVersionStatus` |
| `IsVersionBillOfMaterial` | `bom_header.IsVersionBillOfMaterial` |
| `IsLatestBOMVersion` | `bom_header.IsLatestBOMVersion` |
| `IsConfiguredMaterial` | `bom_header.IsConfiguredMaterial` |
| `BOMTechnicalType` | `bom_header.BOMTechnicalType` |
| `BOMGroup` | `bom_header.BOMGroup` |
| `BOMHeaderText` | `bom_header.BOMHeaderText` |
| `BOMAlternativeText` | `bom_header.BOMAlternativeText` |
| `BillOfMaterialStatus` | `bom_header.BillOfMaterialStatus` |
| `ValidityStartDate` | `bom_header.ValidityStartDate` |
| `ValidityEndDate` | `bom_header.ValidityEndDate` |
| `ChgToEngineeringChgDocument` | `bom_header.ChgToEngineeringChgDocument` |
| `IsMarkedForDeletion` | `bom_header.IsMarkedForDeletion` |
| `IsALE` | `bom_header.IsALE` |
| `MatFromLotSizeQuantity` | `bom_header.MatFromLotSizeQuantity` |
| `MaterialToLotSizeQuantity` | `bom_header.MaterialToLotSizeQuantity` |
| `BOMHeaderBaseUnit` | `bom_header.BOMHeaderBaseUnit` |
| `BOMHeaderQuantityInBaseUnit` | `bom_header.BOMHeaderQuantityInBaseUnit` |
| `RecordCreationDate` | `bom_header.RecordCreationDate` |
| `LastChangeDate` | `bom_header.LastChangeDate` |
| `LastChangedByUser` | `bom_header.LastChangedByUser` |
| `CreatedByUser` | `bom_header.CreatedByUser` |
| `BOMIsToBeDeleted` | `bom_header.BOMIsToBeDeleted` |
| `DocumentIsCreatedByCAD` | `bom_header.DocumentIsCreatedByCAD` |
| `LaboratoryOrDesignOffice` | `bom_header.LaboratoryOrDesignOffice` |
| `BOMAssetNtwkHndovrIsRelevant` | `bom_header.BOMAssetNtwkHndovrIsRelevant` |
| `LastChangeDateTime` | `bom_header.LastChangeDateTime` |
| `SoldToParty` | `bom_header.SoldToParty` |
| `PurchaseOrderByCustomer` | `bom_header.PurchaseOrderByCustomer` |
| `IndicatorIsBOMWithDateHistory` | `bom_header.IndicatorIsBOMWithDateHistory` |
| `IndicatorIsBOMChangedWithHist` | `bom_header.IndicatorIsBOMChangedWithHist` |
| `AlternativeUnit` | `bom_header.AlternativeUnit` |
| `BOMExplosionApplication` | `bom_header.BOMExplosionApplication` |
| `DefaultValidFromDate` | `bom_header.DefaultValidFromDate` |
| `BillOfMaterialHdrDetailsText` | `bom_header.BillOfMaterialHdrDetailsText` |
| `ProductDescription` | `bom_header.ProductDescription` |
| `PlantName` | `bom_header.PlantName` |
| `IsAttachmentsEnabled` | `bom_header.IsAttachmentsEnabled` |
| `QuantityInBaseUnitIsHidden` | `bom_header.QuantityInBaseUnitIsHidden` |
| `ProductIsConfigurable` | `bom_header.ProductIsConfigurable` |
| `MaterialType` | `bom_header.MaterialType` |
| `MaterialName` | `bom_header.MaterialName` |
| `MaterialBOMObjectID` | `bom_header.MaterialBOMObjectID` |
| `LongTextLanguage` | `bom_header.LongTextLanguage` |
| `BOMPrioritizedVersion` | `bom_header.BOMPrioritizedVersion` |
| `BOMPredecessorVersion` | `bom_header.BOMPredecessorVersion` |
| `BOMIsConfigurable` | `bom_header.BOMIsConfigurable` |
| `BOMIsArchivedForDeletion` | `bom_header.BOMIsArchivedForDeletion` |
| `_BillOfMaterialUsage` | *Association* |
| `_BillOfMaterialItem` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY 
@EndUserText.label: 'Sales Order Bill of Material - TP'
@ObjectModel.sapObjectNodeType.name: 'SalesBillOfMaterial'
@ObjectModel.usageType: { serviceQuality: #D, sizeCategory:   #XL, dataClass: #TRANSACTIONAL }
@ObjectModel.modelingPattern:#TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE]                 
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define root view entity I_SalesOrderBillOfMaterialTP_3 provider contract transactional_interface 
  as projection on R_SalesOrderBillOfMaterialTP_1 as bom_header
   {
 key bom_header.BillOfMaterial                                      as BillOfMaterial,
  key bom_header.BillOfMaterialCategory                              as BillOfMaterialCategory,
  key bom_header.BillOfMaterialVariant                               as BillOfMaterialVariant,
  key bom_header.BillOfMaterialVersion                               as BillOfMaterialVersion,
  key bom_header.EngineeringChangeDocument                           as EngineeringChangeDocument,
  key bom_header.Material                                            as Material,
  key bom_header.Plant                                               as Plant,
      bom_header.SalesOrder                                          as SalesOrder,
      bom_header.SalesOrderItem                                      as SalesOrderItem,
      bom_header.BillOfMaterialHeaderUUID                            as BillOfMaterialHeaderUUID,
      bom_header.BillOfMaterialVariantUsage                          as BillOfMaterialVariantUsage,
      @ObjectModel.editableFieldFor: 'EngineeringChangeDocument'
      bom_header.EngineeringChangeDocForEdit                           as EngineeringChangeDocForEdit,
      bom_header.IsMultipleBOMAlt                                    as IsMultipleBOMAlt,
      bom_header.BOMHeaderInternalChangeCount                        as BOMHeaderInternalChangeCount,
      bom_header.BOMUsagePriority                                    as BOMUsagePriority,
      bom_header.BillOfMaterialAuthsnGrp                             as BillOfMaterialAuthsnGrp,
      bom_header.BOMVersionStatus                                    as BOMVersionStatus,
      bom_header.IsVersionBillOfMaterial                             as IsVersionBillOfMaterial,
      bom_header.IsLatestBOMVersion                                  as IsLatestBOMVersion,
      bom_header.IsConfiguredMaterial                                as IsConfiguredMaterial, -- MAST-KZKFG
      bom_header.BOMTechnicalType                                    as BOMTechnicalType,
      bom_header.BOMGroup                                            as BOMGroup,
      bom_header.BOMHeaderText                                       as BOMHeaderText,
      bom_header.BOMAlternativeText                                  as BOMAlternativeText,
      bom_header.BillOfMaterialStatus                                as BillOfMaterialStatus,
      bom_header.ValidityStartDate                                   as ValidityStartDate,
      bom_header.ValidityEndDate                                     as ValidityEndDate,
      bom_header.ChgToEngineeringChgDocument                         as ChgToEngineeringChgDocument,
      bom_header.IsMarkedForDeletion                                 as IsMarkedForDeletion,
      bom_header.IsALE                                               as IsALE,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.MatFromLotSizeQuantity                              as MatFromLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.MaterialToLotSizeQuantity                           as MaterialToLotSizeQuantity,
      bom_header.BOMHeaderBaseUnit                                   as BOMHeaderBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.BOMHeaderQuantityInBaseUnit                         as BOMHeaderQuantityInBaseUnit,
      bom_header.RecordCreationDate                                  as RecordCreationDate,
      bom_header.LastChangeDate                                      as LastChangeDate,
      bom_header.LastChangedByUser                                   as LastChangedByUser,
      bom_header.CreatedByUser                                       as CreatedByUser,
      @Semantics.booleanIndicator: true
      bom_header.BOMIsToBeDeleted                                    as BOMIsToBeDeleted,
      bom_header.DocumentIsCreatedByCAD                              as DocumentIsCreatedByCAD,
      bom_header.LaboratoryOrDesignOffice                            as LaboratoryOrDesignOffice,
      bom_header.BOMAssetNtwkHndovrIsRelevant                        as BOMAssetNtwkHndovrIsRelevant,

      bom_header.LastChangeDateTime,
      
      bom_header.SoldToParty                                         as SoldToParty,
      bom_header.PurchaseOrderByCustomer                             as PurchaseOrderByCustomer,
      @Semantics.booleanIndicator
      bom_header.IndicatorIsBOMWithDateHistory                       as IndicatorIsBOMWithDateHistory,
      @Semantics.booleanIndicator: true
      bom_header.IndicatorIsBOMChangedWithHist                       as IndicatorIsBOMChangedWithHist,
      bom_header.AlternativeUnit                                     as AlternativeUnit,
      
      @Consumption.hidden: true
      bom_header.BOMExplosionApplication                             as BOMExplosionApplication,
      @EndUserText.label: 'Default Valid From Date'
      bom_header.DefaultValidFromDate                                as DefaultValidFromDate,
      @EndUserText.label: 'Bill Of Material Hdr Details Text'
      bom_header.BillOfMaterialHdrDetailsText                        as BillOfMaterialHdrDetailsText,
      bom_header.ProductDescription                                  as ProductDescription,
      bom_header.PlantName                                           as PlantName,
      bom_header.IsAttachmentsEnabled                                as IsAttachmentsEnabled,
      bom_header.QuantityInBaseUnitIsHidden                          as QuantityInBaseUnitIsHidden, 
      bom_header.ProductIsConfigurable                               as ProductIsConfigurable,
      bom_header.MaterialType                                        as MaterialType,
      bom_header.MaterialName                                        as MaterialName,
      bom_header.MaterialBOMObjectID                                 as MaterialBOMObjectID,
      bom_header.LongTextLanguage,
      bom_header.BOMPrioritizedVersion,
      bom_header.BOMPredecessorVersion                                   as BOMPredecessorVersion,
      bom_header.BOMIsConfigurable,
      bom_header.BOMIsArchivedForDeletion,
     // _BOMChangeNumbers,
     // _ChangeNumber,
      _BillOfMaterialUsage,
      _BillOfMaterialItem:  redirected to composition child I_SlsOrdBillOfMaterialItemTP_3
}
```
