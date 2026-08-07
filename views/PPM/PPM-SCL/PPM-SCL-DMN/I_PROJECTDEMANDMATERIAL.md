---
name: I_PROJECTDEMANDMATERIAL
description: Projectdemandmaterial
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - material
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Material
  - bo:Project
---
# I_PROJECTDEMANDMATERIAL

**Projectdemandmaterial**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandMaterialUUID` | ✓ | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `MaterialPlannedDeliveryDurn` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_MaterialSupply` | | ✓ | | | | |
| `_RootTP` | | ✓ | | | | |
| `_MaterialNumber` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialSupply` | `I_ProjectDemandMaterialSupply` | [0..1] |
| `_RootTP` | `I_ProjectDemand` | [1..1] |
| `_MaterialNumber` | `I_Product` | [0..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@AbapCatalog: {
    sqlViewName: 'IPROJDMNDMATL',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   sapObjectNodeType:{name: 'DemandMaterial'},
   semanticKey:       ['Material'],
   representativeKey: 'ProjectDemandMaterialUUID',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   }
}
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Demand for Material'
define view I_ProjectDemandMaterial
  as select from R_ProjectDemandMaterial

  association [0..1] to I_ProjectDemandMaterialSupply as _MaterialSupply       on  _MaterialSupply.ProjectDemandMaterialUUID = $projection.ProjectDemandMaterialUUID
  association [1..1] to I_ProjectDemand               as _RootTP               on  $projection.ProjectDemandUUID = _RootTP.ProjectDemandUUID

  association [0..1] to I_Product                     as _MaterialNumber       on  $projection.Material = _MaterialNumber.Product
  association [0..1] to I_ProductGroup_2              as _MaterialGroup        on  $projection.MaterialGroup = _MaterialGroup.ProductGroup
  association [0..1] to I_Supplier                    as _Supplier             on  $projection.Supplier = _Supplier.Supplier
{
  key ProjectDemandMaterialUUID   as ProjectDemandMaterialUUID,

      ProjectDemandUUID           as ProjectDemandUUID,

      StorageLocation             as StorageLocation,
      @Consumption.valueHelp: '_MaterialNumber'
      Material                    as Material,

      @Consumption.valueHelpDefinition: [{
             entity: {   name:    'I_ProductGroup_2',
                         element: 'ProductGroup' }
         }]
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup               as MaterialGroup,

      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier                    as Supplier,

      PurchasingInfoRecord        as PurchasingInfoRecord,

      PurchaseContract            as PurchaseContract,

      PurchaseContractItem        as PurchaseContractItem,

      MaterialPlannedDeliveryDurn as MaterialPlannedDeliveryDurn,

      @Semantics.user.createdBy: true
      CreatedByUser               as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime            as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser           as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime          as LastChangeDateTime,

      _RootTP,
      _MaterialSupply,
      
      _MaterialNumber,
      _MaterialGroup,
      _Supplier

}
```
