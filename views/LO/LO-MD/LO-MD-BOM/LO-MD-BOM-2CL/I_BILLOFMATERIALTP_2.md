---
name: I_BILLOFMATERIALTP_2
description: "Bill of MaterialTP 2"
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
# I_BILLOFMATERIALTP_2

**Bill of MaterialTP 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialCategory` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `BillOfMaterialVersion` | ✓ | |  |  |  |  |
| `EngineeringChangeDocument` | ✓ | |  |  |  |  |
| `Material` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `BillOfMaterialHeaderUUID` |  | |  |  |  |  |
| `BillOfMaterialVariantUsage` |  | |  |  |  |  |
| `EngineeringChangeDocForEdit` |  | |  |  |  |  |
| `IsMultipleBOMAlt` |  | |  |  |  |  |
| `BOMHeaderInternalChangeCount` |  | |  |  |  |  |
| `BOMUsagePriority` |  | |  |  |  |  |
| `BillOfMaterialAuthsnGrp` |  | |  |  |  |  |
| `BOMVersionStatus` |  | |  |  |  |  |
| `IsVersionBillOfMaterial` |  | |  |  |  |  |
| `IsLatestBOMVersion` |  | |  |  |  |  |
| `IsConfiguredMaterial` |  | |  |  |  |  |
| `BOMTechnicalType` |  | |  |  |  |  |
| `BOMGroup` |  | |  |  |  |  |
| `BOMHeaderText` |  | |  |  |  |  |
| `BOMAlternativeText` |  | |  |  |  |  |
| `BillOfMaterialStatus` |  | |  |  |  |  |
| `HeaderValidityStartDate` |  | |  |  |  |  |
| `HeaderValidityEndDate` |  | |  |  |  |  |
| `ChgToEngineeringChgDocument` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `IsALE` |  | |  |  |  |  |
| `MatFromLotSizeQuantity` |  | |  |  |  |  |
| `MaterialToLotSizeQuantity` |  | |  |  |  |  |
| `BOMHeaderBaseUnit` |  | |  |  |  |  |
| `BOMHeaderQuantityInBaseUnit` |  | |  |  |  |  |
| `RecordCreationDate` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `BOMIsToBeDeleted` |  | |  |  |  |  |
| `DocumentIsCreatedByCAD` |  | |  |  |  |  |
| `LaboratoryOrDesignOffice` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ProductDescription` |  | |  |  |  |  |
| `PlantName` |  | |  |  |  |  |
| `BillOfMaterialHdrDetailsText` |  | |  |  |  |  |
| `SelectedBillOfMaterialVersion` |  | |  |  |  |  |
| `_BillOfMaterialItem` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
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

define root view entity I_BillOfMaterialTP_2 
provider contract transactional_interface 
  as projection on R_BillOfMaterialTP as bom_header
  {
  key    bom_header.BillOfMaterial                                                                         as BillOfMaterial,
  key    bom_header.BillOfMaterialCategory                                                                 as BillOfMaterialCategory,
  key    bom_header.BillOfMaterialVariant                                                                  as BillOfMaterialVariant,
  key    bom_header.BillOfMaterialVersion                                                                  as BillOfMaterialVersion,
  key    bom_header.EngineeringChangeDocument                                                              as EngineeringChangeDocument,
  key    bom_header.Material                                                                               as Material,
  key    bom_header.Plant                                                                                  as Plant,
      bom_header.BillOfMaterialHeaderUUID                                                               as BillOfMaterialHeaderUUID,      
      bom_header.BillOfMaterialVariantUsage                                                             as BillOfMaterialVariantUsage,
      @ObjectModel.editableFieldFor: 'EngineeringChangeDocument'
      bom_header.EngineeringChangeDocForEdit                                                            as EngineeringChangeDocForEdit,
      bom_header.IsMultipleBOMAlt                                                                       as IsMultipleBOMAlt,
      bom_header.BOMHeaderInternalChangeCount                                                           as BOMHeaderInternalChangeCount,
      bom_header.BOMUsagePriority                                                                       as BOMUsagePriority,
      bom_header.BillOfMaterialAuthsnGrp                                                                as BillOfMaterialAuthsnGrp,
      bom_header.BOMVersionStatus                                                                       as BOMVersionStatus,
      bom_header.IsVersionBillOfMaterial                                                                as IsVersionBillOfMaterial,
      bom_header.IsLatestBOMVersion                                                                     as IsLatestBOMVersion,
      bom_header.IsConfiguredMaterial                                                                   as IsConfiguredMaterial,
      bom_header.BOMTechnicalType                                                                       as BOMTechnicalType,
      bom_header.BOMGroup                                                                               as BOMGroup,
      bom_header.BOMHeaderText                                                                          as BOMHeaderText,
      bom_header.BOMAlternativeText                                                                     as BOMAlternativeText,
      bom_header.BillOfMaterialStatus                                                                   as BillOfMaterialStatus,
      bom_header.HeaderValidityStartDate                                                                as HeaderValidityStartDate,
      bom_header.HeaderValidityEndDate                                                                  as HeaderValidityEndDate,
      bom_header.ChgToEngineeringChgDocument                                                            as ChgToEngineeringChgDocument,
      bom_header.IsMarkedForDeletion                                                                    as IsMarkedForDeletion,
      bom_header.IsALE                                                                                  as IsALE,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.MatFromLotSizeQuantity                                                                 as MatFromLotSizeQuantity,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.MaterialToLotSizeQuantity                                                              as MaterialToLotSizeQuantity,
 //     @Semantics.unitOfMeasure: true
      bom_header.BOMHeaderBaseUnit                                                                      as BOMHeaderBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      bom_header.BOMHeaderQuantityInBaseUnit                                                            as BOMHeaderQuantityInBaseUnit,
      bom_header.RecordCreationDate                                                                     as RecordCreationDate,
      bom_header.LastChangeDate                                                                         as LastChangeDate,
      bom_header.CreatedByUser                                                                          as CreatedByUser,
      bom_header.LastChangedByUser                                                                      as LastChangedByUser,
      @Semantics.booleanIndicator: true
      bom_header.BOMIsToBeDeleted                                                                       as BOMIsToBeDeleted,
      bom_header.DocumentIsCreatedByCAD                                                                 as DocumentIsCreatedByCAD,
      bom_header.LaboratoryOrDesignOffice,
      bom_header.LastChangeDateTime,
      bom_header.ProductDescription,
      bom_header.PlantName,
      bom_header.BillOfMaterialHdrDetailsText,   
      //Version BOM
      SelectedBillOfMaterialVersion,
      //Composition
      _BillOfMaterialItem        : redirected to composition child I_BillOfMaterialItemTP_2
     
}
```
