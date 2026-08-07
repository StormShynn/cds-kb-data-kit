---
name: I_BOOMATERIALASSIGNMENT
description: This CDS view can build foreign key associations to the sixth key field of material assignment data (MAPL-ZKRIZ) in analytical CDS views.
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOMATERIALASSIGNMENT')/$value
semantic_en: This CDS view can build foreign key associations to the sixth key field of material assignment data (MAPL-ZKRIZ) in analytical CDS views.
semantic_vi: Material assgmt to Bill of Operations — CDS view giao diện dựa trên Material assgmt to Bill of Operations.
keywords:
  - material
  - assgmt
  - bill
  - operations
  - plant
  - type
  - group
  - variant
tags:
  - PP
  - bo:companycode
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - material
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_BOOMATERIALASSIGNMENT

**This CDS view can build foreign key associations to the sixth key field of material assignment data (MAPL-ZKRIZ) in analytical CDS views.**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOMATERIALASSIGNMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  | `matnr` | `CHAR(40)` | Material Number |
| `Plant` | ✓ | |  | `werks` | `CHAR(4)` | Plant |
| `BillOfOperationsType` | ✓ | |  | `plnty` | `CHAR(1)` | Task List Type |
| `BillOfOperationsGroup` | ✓ | |  | `plnnr` | `CHAR(8)` | Key for Task List Group |
| `BillOfOperationsVariant` | ✓ | |  | `plnal` | `CHAR(2)` | Group Counter |
| `BOOToMaterialInternalID` | ✓ | |  | `zkriz` | `NUMC(7)` | Counter for Additional Criteria |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperations` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |
| `_BillOfOperations` | `I_BillOfOperations` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Material` | `I_Material` | [1..1] |
| `_Product` | `I_Product` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOMATERIALASSIGNMENT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOMATERIALASSIGNMENT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IBOOMATASSIGN'
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'BOOToMaterialInternalID'
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Material assgmt to Bill of Operations'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@Search.searchable: true
@Metadata.allowExtensions:true
//@AbapCatalog.preserveKey:true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_BOOMaterialAssignment
  as select distinct from mapl

  association [1..1] to I_BillOfOperationsType  as _BillOfOperationsType  on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [1..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                          and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup
  association [1..1] to I_BillOfOperations      as _BillOfOperations      on  $projection.BillOfOperationsType    = _BillOfOperations.BillOfOperationsType
                                                                          and $projection.BillOfOperationsGroup   = _BillOfOperations.BillOfOperationsGroup
                                                                          and $projection.BillOfOperationsVariant = _BillOfOperations.BillOfOperationsVariant
  association [1..1] to I_Plant                 as _Plant                 on  $projection.Plant = _Plant.Plant
  association [1..1] to I_Material              as _Material              on  $projection.Material = _Material.Material
  association [1..1] to I_Product               as _Product               on  $projection.Material = _Product.Product

{
      //@Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @ObjectModel.foreignKey.association: '_Product'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key mapl.matnr as Material,
      @ObjectModel.foreignKey.association: '_Plant'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key mapl.werks as Plant,
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key mapl.plnty as BillOfOperationsType,

      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key mapl.plnnr as BillOfOperationsGroup,
      //@Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillOfOperationsStdVH', element: 'BillOfOperationsVariant' } } ]
      @ObjectModel.foreignKey.association: '_BillOfOperations'
  key mapl.plnal as BillOfOperationsVariant,
  key mapl.zkriz as BOOToMaterialInternalID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    '_Product'
      _Material,
      _Product,
      _Plant,
      _BillOfOperationsType,
      _BillOfOperationsGroup,
      // !! DO NOT USE @ObjectModel.association.type: [ #TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT ]
      _BillOfOperations
}
```
