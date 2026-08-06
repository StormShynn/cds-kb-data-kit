---
name: I_CNSLDTNSUPPLIER
description: Cnsldtnsupplier
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
  - supplier
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Supplier
---
# I_CNSLDTNSUPPLIER

**Cnsldtnsupplier**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Supplier` | `cast( Supplier as fincs_supplier preserving type )` |
| `AdditionalMasterDataSource` | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |
| `CnsldtnIsAdditionalMasterData` | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |
| `CreationDateTime` | `cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )` |
| `_Text` | *Association* |
| `_SupplierHierNode` | *Association* |
| `_MDSource` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnSupplierT` | [0..*] |
| `_SupplierHierNode` | `I_CnsldtnSupplierHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSUPPLIER',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
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
    sizeCategory: #XL},
  representativeKey: 'Supplier',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnSupplier'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Supplier'

// C1 Released NTBR-S since CE2011, full release in CE2208.
// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnSupplier
  as select distinct from P_CnsldtnSupplier

  association [0..*] to I_CnsldtnSupplierT        as _Text             on $projection.Supplier = _Text.Supplier

  association [0..*] to I_CnsldtnSupplierHierNode as _SupplierHierNode on $projection.Supplier = _SupplierHierNode.Supplier

  association [1..1] to I_CnsldtnMDSource         as _MDSource         on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_SupplierHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSupplierVH',
          element: 'Supplier'
        }
      }]
  key cast( Supplier as fincs_supplier preserving type )                                            as Supplier,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      @Semantics.systemDateTime.createdAt
      cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,


      /* associations */
      _Text,
      _SupplierHierNode,
      _MDSource
}
where
  Supplier is not initial //required to avoid access to corrupt database entries
group by
  Supplier
```
