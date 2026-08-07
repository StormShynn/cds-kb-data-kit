---
name: I_CNSLDTNPRODUCTGROUPT
description: Cnsldtnproductgroupt
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
# I_CNSLDTNPRODUCTGROUPT

**Cnsldtnproductgroupt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |
| `ProductGroup` | ✓ | |  | `cast( _Source.ProductGroup as fincs_productgroup preserving type )` |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.ProductGroupName as fincs_description_text_20 preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |
| `ProductGroupName` |  | |  | `cast( _Source.ProductGroupName as fincs_productgroupname preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |
| `_Language` | | ✓ | | |
| `_ProductGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ProductGroup` | `I_CnsldtnProductGroup` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPRGROUPT'
  }
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'ProductGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
 sapObjectNodeType.name: 'CnsldtnProductGroupText'                         
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Product Group - Text'

// C1 (Not to Be Released, Stable) for Key User Apps before 2302, C1 PaaS & Key User Apps released in 2302.

define view I_CnsldtnProductGroupT
  as select distinct from P_CnsldtnProductGroupT as _Source

    inner join            I_CnsldtnProductGroup  as _Main on  _Main.ProductGroup                  = _Source.ProductGroup
                                                          and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language            as _Language     on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnProductGroup as _ProductGroup on $projection.ProductGroup = _ProductGroup.ProductGroup
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnProductGroupVH',
          element: 'ProductGroup'
        }
      }]
  key cast( _Source.ProductGroup as fincs_productgroup preserving type )                   as ProductGroup,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'ProductGroupName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'ProductGroupName' }
      cast( _Source.ProductGroupName as fincs_description_text_20 preserving type )        as AdditionalMasterDataText,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource, // 4th position is required to prevent incompatible change

      @Semantics.text
      cast( _Source.ProductGroupName as fincs_productgroupname preserving type )           as ProductGroupName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _ProductGroup
}
where
  _Source.Language is not null
```
