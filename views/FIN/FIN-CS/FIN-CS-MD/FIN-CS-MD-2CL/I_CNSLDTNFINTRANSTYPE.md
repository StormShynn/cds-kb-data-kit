---
name: I_CNSLDTNFINTRANSTYPE
description: Cnsldtnfintranstype
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINTRANSTYPE

**Cnsldtnfintranstype**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FinancialTransactionType` | ✓ | |  | `cast( FinancialTransactionType as fincs_financialtransactiontype preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |
| `_Text` | | ✓ | | |
| `_FinTransTypeHierNode` | | ✓ | | |
| `_MDSource` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFinTransTypeT` | [0..*] |
| `_FinTransTypeHierNode` | `I_CnsldtnFinTransTypeHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFINTRANSTYPE',
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
    sizeCategory: #S},
  representativeKey: 'FinancialTransactionType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SQL_DATA_SOURCE,
                           #EXTRACTION_DATA_SOURCE,
                           #ANALYTICAL_DIMENSION ],
  sapObjectNodeType.name: 'CnsldtnFinTransactionType'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Cmbnd Fin Transaction Type'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnFinTransType
  as select distinct from P_CnsldtnFinTransType

  association [0..*] to I_CnsldtnFinTransTypeT        as _Text                 on $projection.FinancialTransactionType = _Text.FinancialTransactionType

  association [0..*] to I_CnsldtnFinTransTypeHierNode as _FinTransTypeHierNode on $projection.FinancialTransactionType = _FinTransTypeHierNode.FinancialTransactionType

  association [1..1] to I_CnsldtnMDSource             as _MDSource             on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel: {
        text.association: '_Text',
        hierarchy.association: '_FinTransTypeHierNode'
        }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinTransTypeVH',
          element: 'FinancialTransactionType'
        }
      }]
  key cast( FinancialTransactionType as fincs_financialtransactiontype preserving type )            as FinancialTransactionType,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _MDSource,
      _Text,
      _FinTransTypeHierNode
}
where
  FinancialTransactionType is not initial //required to avoid access to corrupt database entries
group by
  FinancialTransactionType;
```
