---
name: I_CNSLDTNPRODUCTGROUP
description: Cnsldtnproductgroup
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - product
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNPRODUCTGROUP

**Cnsldtnproductgroup**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductGroup` | ✓ | |  | `cast( ProductGroup as fincs_productgroup preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |
| `_Text` | | ✓ | | |
| `_MDSource` | | ✓ | | |
| `_HierarchyNode` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnProductGroupT` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |
| `_HierarchyNode` | `I_CnsldtnProductGroupHierNode` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ISOLDPRODGRP',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'ProductGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnProductGroup'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Product Group'

// C1 Released for use in Key User Apps & PaaS since CE2302

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnProductGroup
  as select distinct from P_CnsldtnProductGroup

  association [0..*] to I_CnsldtnProductGroupT        as _Text          on $projection.ProductGroup = _Text.ProductGroup

  association [1..1] to I_CnsldtnMDSource             as _MDSource      on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

  association [0..*] to I_CnsldtnProductGroupHierNode as _HierarchyNode on $projection.ProductGroup = _HierarchyNode.ProductGroup

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProductGroupVH',
          element: 'ProductGroup'
        }
      }]
  key cast( ProductGroup as fincs_productgroup preserving type )                                    as ProductGroup,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Text,
      _MDSource,
      _HierarchyNode

}
where
  ProductGroup is not initial //required to avoid access to corrupt database entries
group by
  ProductGroup
```
