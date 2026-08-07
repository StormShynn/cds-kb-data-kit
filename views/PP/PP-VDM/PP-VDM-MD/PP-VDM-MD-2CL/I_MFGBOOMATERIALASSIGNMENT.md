---
name: I_MFGBOOMATERIALASSIGNMENT
description: Mfgboomaterialassignment
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - material
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
  - bo:Material
---
# I_MFGBOOMATERIALASSIGNMENT

**Mfgboomaterialassignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  | `Material` |
| `Plant` | ✓ | |  |  |
| `BillOfOperationsType` | ✓ | |  |  |
| `BillOfOperationsGroup` | ✓ | |  |  |
| `BillOfOperationsVariant` | ✓ | |  |  |
| `BOOToMaterialInternalID` | ✓ | |  |  |
| `_BillOfOperations` | | ✓ | | |
| `_BOOMaterialAssgmtChgSt` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ProductPlant` | | ✓ | | |
| `_ProductPlant2` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_BillOfOperationsType` | | ✓ | | |
| `_BillOfOperationsGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperations` | `I_MfgBillOfOperations` | [1..1] |
| `_BOOMaterialAssgmtChgSt` | `I_MfgBOOMaterialAssgmtChgSt` | [1..*] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductPlant` | `I_ProductPlant` | [1..1] |
| `_ProductPlant2` | `I_ProductPlantBasic` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMFGBOOMATASGNMT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ClientHandling.type: #CLIENT_DEPENDENT
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@ObjectModel.representativeKey: 'BOOToMaterialInternalID'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER}
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Material Assignment to Manufacturing Bill of Operations'

define view I_MfgBOOMaterialAssignment
  as select from I_BOOMaterialAssignment as mapl

  -- to parent
  association [1..1] to I_MfgBillOfOperations       as _BillOfOperations       on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                               and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                               and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  -- to child
  association [1..*] to I_MfgBOOMaterialAssgmtChgSt as _BOOMaterialAssgmtChgSt on  $projection.Product                  = _BOOMaterialAssgmtChgSt.Product
                                                                               and $projection.Plant                    = _BOOMaterialAssgmtChgSt.Plant
                                                                               and $projection.BillOfOperationsType     = _BOOMaterialAssgmtChgSt.BillOfOperationsType
                                                                               and $projection.BillOfOperationsGroup    = _BOOMaterialAssgmtChgSt.BillOfOperationsGroup
                                                                               and $projection.BillOfOperationsVariant  = _BOOMaterialAssgmtChgSt.BillOfOperationsVariant
                                                                               and $projection.BOOToMaterialInternalID  = _BOOMaterialAssgmtChgSt.BOOToMaterialInternalID                                                                  
                               
  association [1..1] to I_Product                   as _Product                on  $projection.Product = _Product.Product
  association [1..1] to I_ProductPlant              as _ProductPlant           on  $projection.Product = _ProductPlant.Product
                                                                               and $projection.Plant   = _ProductPlant.Plant
  association [1..1] to I_ProductPlantBasic         as _ProductPlant2          on  $projection.Product = _ProductPlant2.Product
                                                                               and $projection.Plant   = _ProductPlant2.Plant
{
      // Key
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_Product'
  key mapl.Material as Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key mapl.Plant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key mapl.BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key mapl.BillOfOperationsGroup,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MfgBillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key mapl.BillOfOperationsVariant,
      -- Representative Key
  key mapl.BOOToMaterialInternalID,

      // Associations
      _Product,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductPlant2'
      _ProductPlant,
      _ProductPlant2,
      _Plant,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      _BillOfOperations,
      _BOOMaterialAssgmtChgSt
}
where mapl.BillOfOperationsType = '2'  // Recipe
   or mapl.BillOfOperationsType = 'N'  // Standard routing
   or mapl.BillOfOperationsType = 'S'; // Reference operation set
```
