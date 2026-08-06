---
name: I_BILLOFMATERIALTP_3
description: Bill of MaterialTP 3
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
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALTP_3

**Bill of MaterialTP 3**

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
| `BillOfMaterialHeaderUUID` | `bom_header.BillOfMaterialHeaderUUID` |
| `BillOfMaterialVariantUsage` | `bom_header.BillOfMaterialVariantUsage` |
| `EngineeringChangeDocForEdit` | `bom_header.EngineeringChangeDocForEdit` |
| `IsMultipleBOMAlt` | `bom_header.IsMultipleBOMAlt` |
| `BOMHeaderInternalChangeCount` | `bom_header.BOMHeaderInternalChangeCount` |
| `BOMUsagePriority` | `bom_header.BOMUsagePriority` |
| `BillOfMaterialAuthsnGrp` | `bom_header.BillOfMaterialAuthsnGrp` |
| `DefaultValidFromDate` | `bom_header.DefaultValidFromDate` |
| `AlternativeUnit` | `bom_header.AlternativeUnit` |
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
| `CreatedByUser` | `bom_header.CreatedByUser` |
| `LastChangedByUser` | `bom_header.LastChangedByUser` |
| `BOMIsToBeDeleted` | `bom_header.BOMIsToBeDeleted` |
| `IndicatorIsBOMChangedWithHist` | `bom_header.IndicatorIsBOMChangedWithHist` |
| `DocumentIsCreatedByCAD` | `bom_header.DocumentIsCreatedByCAD` |
| `LaboratoryOrDesignOffice` | `bom_header.LaboratoryOrDesignOffice` |
| `LastChangeDateTime` | `bom_header.LastChangeDateTime` |
| `ProductDescription` | `bom_header.ProductDescription` |
| `PlantName` | `bom_header.PlantName` |
| `BillOfMaterialHdrDetailsText` | `bom_header.BillOfMaterialHdrDetailsText` |
| `_BillOfMaterialItem` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Bill of Material - TP'
  
@ObjectModel: { 
  sapObjectNodeType:{
                     name: 'BillOfMaterial'},
  usageType: { serviceQuality: #C, 
               sizeCategory:   #XL, 
               dataClass: #TRANSACTIONAL
             },
  modelingPattern:       #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER, #UI_PROVIDER_PROJECTION_SOURCE ]         
 }           
@Metadata.ignorePropagatedAnnotations: true


@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_BillOfMaterialTP_3 
provider contract transactional_interface 
  as projection on R_MatBillOfMaterialTP as bom_header
 {
  key    bom_header.BillOfMaterial                                 as BillOfMaterial,
  key    bom_header.BillOfMaterialCategory                         as BillOfMaterialCategory,
  key    bom_header.BillOfMaterialVariant                          as BillOfMaterialVariant,
  key    bom_header.BillOfMaterialVersion                          as BillOfMaterialVersion,
  key    bom_header.EngineeringChangeDocument                      as EngineeringChangeDocument,
  key    bom_header.Material                                       as Material,
         @Consumption.valueHelpDefinition: [
         { entity: { name:    'I_PlantStdVH',
                     element: 'Plant' } }]
         @ObjectModel.text.element: [ 'Plant' ]
  key    bom_header.Plant                                          as Plant,
         bom_header.BillOfMaterialHeaderUUID                          as BillOfMaterialHeaderUUID,     
      bom_header.BillOfMaterialVariantUsage                        as BillOfMaterialVariantUsage,
      @ObjectModel.editableFieldFor: 'EngineeringChangeDocument'
      bom_header.EngineeringChangeDocForEdit                       as EngineeringChangeDocForEdit,
      bom_header.IsMultipleBOMAlt                                  as IsMultipleBOMAlt,
      bom_header.BOMHeaderInternalChangeCount                      as BOMHeaderInternalChangeCount,
      bom_header.BOMUsagePriority                                  as BOMUsagePriority,
      bom_header.BillOfMaterialAuthsnGrp                           as BillOfMaterialAuthsnGrp,
      @EndUserText.label: 'Default Valid From Date'
      bom_header.DefaultValidFromDate                              as DefaultValidFromDate,
      bom_header.AlternativeUnit                                   as AlternativeUnit,
      bom_header.IsConfiguredMaterial                              as IsConfiguredMaterial,
      bom_header.BOMTechnicalType                                  as BOMTechnicalType,
      bom_header.BOMGroup                                          as BOMGroup,
      bom_header.BOMHeaderText                                     as BOMHeaderText,
      bom_header.BOMAlternativeText                                as BOMAlternativeText,
      bom_header.BillOfMaterialStatus                              as BillOfMaterialStatus,
      bom_header.ValidityStartDate                                 as ValidityStartDate,
      bom_header.ValidityEndDate                                   as ValidityEndDate,
      bom_header.ChgToEngineeringChgDocument                       as ChgToEngineeringChgDocument,
      bom_header.IsMarkedForDeletion                               as IsMarkedForDeletion,
      bom_header.IsALE                                             as IsALE,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.MatFromLotSizeQuantity                            as MatFromLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.MaterialToLotSizeQuantity                         as MaterialToLotSizeQuantity,
      bom_header.BOMHeaderBaseUnit                                 as BOMHeaderBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.BOMHeaderQuantityInBaseUnit                       as BOMHeaderQuantityInBaseUnit,
      bom_header.RecordCreationDate                                as RecordCreationDate,
      bom_header.LastChangeDate                                    as LastChangeDate,
      bom_header.CreatedByUser                                     as CreatedByUser,
      bom_header.LastChangedByUser                                 as LastChangedByUser,
      @Semantics.booleanIndicator: true
      bom_header.BOMIsToBeDeleted                                  as BOMIsToBeDeleted,
      @Semantics.booleanIndicator
      bom_header.IndicatorIsBOMChangedWithHist                     as IndicatorIsBOMChangedWithHist,
      bom_header.DocumentIsCreatedByCAD                            as DocumentIsCreatedByCAD,
      bom_header.LaboratoryOrDesignOffice,
      bom_header.LastChangeDateTime,
      bom_header.ProductDescription,
      bom_header.PlantName,
      @EndUserText.label: 'Bill Of Material Hdr Details Text'
      bom_header.BillOfMaterialHdrDetailsText,
      _BillOfMaterialItem        : redirected to composition child I_BillOfMaterialItemTP_3
     
}
```
