---
name: I_SALESORDERBILLOFMATERIALTP_2
description: Sales OrderBill of MaterialTP 2
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
# I_SALESORDERBILLOFMATERIALTP_2

**Sales OrderBill of MaterialTP 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillOfMaterialCategory` | `bom_header.BillOfMaterialCategory` |
| key `BillOfMaterial` | `bom_header.BillOfMaterial` |
| key `BillOfMaterialVariant` | `bom_header.BillOfMaterialVariant` |
| key `EngineeringChangeDocument` | `bom_header.EngineeringChangeDocument` |
| key `Material` | `bom_header.Material` |
| key `Plant` | `bom_header.Plant` |
| `SalesOrder` | `bom_header.SalesOrder` |
| `SalesOrderItem` | `bom_header.SalesOrderItem` |
| `LastChangeDateTime` | `bom_header.LastChangeDateTime` |
| `EngineeringChangeDocForEdit` | `bom_header.EngineeringChangeDocForEdit` |
| `BillOfMaterialHeaderUUID` | `bom_header.BillOfMaterialHeaderUUID` |
| `BillOfMaterialVariantUsage` | `bom_header.BillOfMaterialVariantUsage` |
| `ValidityStartDate` | `bom_header.ValidityStartDate` |
| `ValidityEndDate` | `bom_header.ValidityEndDate` |
| `BOMHeaderInternalChangeCount` | `bom_header.BOMHeaderInternalChangeCount` |
| `BOMHeaderText` | `bom_header.BOMHeaderText` |
| `BOMExplosionApplication` | `bom_header.BOMExplosionApplication` |
| `BOMUsagePriority` | `bom_header.BOMUsagePriority` |
| `BillOfMaterialAuthsnGrp` | `bom_header.BillOfMaterialAuthsnGrp` |
| `BOMTechnicalType` | `bom_header.BOMTechnicalType` |
| `BOMGroup` | `bom_header.BOMGroup` |
| `BOMAlternativeText` | `bom_header.BOMAlternativeText` |
| `BillOfMaterialStatus` | `bom_header.BillOfMaterialStatus` |
| `ChgToEngineeringChgDocument` | `bom_header.ChgToEngineeringChgDocument` |
| `IsMarkedForDeletion` | `bom_header.IsMarkedForDeletion` |
| `BOMIsArchivedForDeletion` | `bom_header.BOMIsArchivedForDeletion` |
| `IsConfiguredMaterial` | `bom_header.IsConfiguredMaterial` |
| `BOMIsConfigurable` | `bom_header.BOMIsConfigurable` |
| `IsALE` | `bom_header.IsALE` |
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
| `_Plant` | *Association* |
| `_BOMChangeNumbers` | *Association* |
| `_BillOfMaterialItem` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY 
@EndUserText.label: 'Sales Order Bill of Material'
@ObjectModel.sapObjectNodeType.name: 'SalesBillOfMaterial'
@ObjectModel.usageType: { serviceQuality: #D, sizeCategory:   #XL, dataClass: #TRANSACTIONAL }
@ObjectModel.modelingPattern:#TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]                 
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define root view entity I_SalesOrderBillOfMaterialTP_2 provider contract transactional_interface 
  as projection on R_SalesOrderBillOfMaterialTP as bom_header
   {
   
    key bom_header.BillOfMaterialCategory                                                                                                                                          as BillOfMaterialCategory,
  key bom_header.BillOfMaterial                                                                                                                                                  as BillOfMaterial,
  key bom_header.BillOfMaterialVariant                                                                                                                                           as BillOfMaterialVariant,
                                                                                                                                          
  key bom_header.EngineeringChangeDocument                                                                                                                                       as EngineeringChangeDocument,
  key bom_header.Material as Material, 
  key bom_header.Plant as Plant,
  bom_header.SalesOrder as SalesOrder,
  bom_header.SalesOrderItem as SalesOrderItem,
  bom_header.LastChangeDateTime,
  @ObjectModel.editableFieldFor: 'EngineeringChangeDocument'
  bom_header.EngineeringChangeDocForEdit                                                                   as EngineeringChangeDocForEdit, 
  bom_header.BillOfMaterialHeaderUUID                                                                                                                                        as BillOfMaterialHeaderUUID,
  bom_header.BillOfMaterialVariantUsage                                                                                                                                      as BillOfMaterialVariantUsage,
  bom_header.ValidityStartDate as ValidityStartDate,
  bom_header.ValidityEndDate as ValidityEndDate,
  bom_header.BOMHeaderInternalChangeCount,
  bom_header.BOMHeaderText,
      @Consumption.hidden: true
      bom_header.BOMExplosionApplication                                                                                                                                         as BOMExplosionApplication,
      bom_header.BOMUsagePriority                                                                                                                                                as BOMUsagePriority,
      bom_header.BillOfMaterialAuthsnGrp                                                                                                                                        as BillOfMaterialAuthsnGrp,
      bom_header.BOMTechnicalType                                                                                                                                                as BOMTechnicalType,
      bom_header.BOMGroup                                                                                                                                                        as BOMGroup,
      bom_header.BOMAlternativeText                                                                                                                                              as BOMAlternativeText,
      bom_header.BillOfMaterialStatus                                                                                                                                            as BillOfMaterialStatus,
      bom_header.ChgToEngineeringChgDocument                                                                                                                                     as ChgToEngineeringChgDocument,
      bom_header.IsMarkedForDeletion                                                                                                                                             as IsMarkedForDeletion,
      bom_header.BOMIsArchivedForDeletion,
      bom_header.IsConfiguredMaterial as IsConfiguredMaterial,  -- MAST-KZKFG
      bom_header.BOMIsConfigurable as BOMIsConfigurable,            -- MAST-KZKFG
      bom_header.IsALE                                                                                                                                                           as IsALE,
      //@Semantics.unitOfMeasure: true
      bom_header.BOMHeaderBaseUnit                                                                                                                                               as BOMHeaderBaseUnit,
     @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.BOMHeaderQuantityInBaseUnit                                                                                                                                     as BOMHeaderQuantityInBaseUnit,
      bom_header.RecordCreationDate                                                                                                                                              as RecordCreationDate,
      bom_header.LastChangeDate                                                                                                                                                  as LastChangeDate,
      bom_header.LastChangedByUser                                                                                                                                               as LastChangedByUser,
      bom_header.CreatedByUser                                                                                                                                                   as CreatedByUser,
      @Semantics.booleanIndicator: true
      bom_header.BOMIsToBeDeleted                                                                                                                                                as BOMIsToBeDeleted,
      bom_header.DocumentIsCreatedByCAD                                                                                                                                          as DocumentIsCreatedByCAD,
      bom_header.LaboratoryOrDesignOffice                                                                                                                                        as LaboratoryOrDesignOffice,
      bom_header.BOMAssetNtwkHndovrIsRelevant                                                                                                                                    as BOMAssetNtwkHndovrIsRelevant,
     // _Material, 
    //  _BillOfMaterialVariantUsage,
      _Plant,
      _BOMChangeNumbers,
      _BillOfMaterialItem : redirected to composition child I_SlsOrdBillOfMaterialItemTP_2
}
```
