---
name: I_CNSLDTNSALESDISTRICTT
description: "Cnsldtnsalesdistrictt"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNSALESDISTRICTT

**Cnsldtnsalesdistrictt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `SalesDistrict` | ✓ | |  | `cast( _Source.SalesDistrict as fincs_salesdistrict preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.SalesDistrictName as fincs_description_text_20 preserving type )` |  |  |
| `SalesDistrictName` |  | |  | `cast( _Source.SalesDistrictName as fincs_salesdistrictname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_SalesDistrict` | `I_CnsldtnSalesDistrict` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSSALESDISTRT',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'SalesDistrict',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnSalesDistrictText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Sales District - Text'
define view I_CnsldtnSalesDistrictT
  as select distinct from P_CnsldtnSalesDistrictT as _Source

    inner join            I_CnsldtnSalesDistrict  as _Main on  _Main.SalesDistrict                 = _Source.SalesDistrict
                                                           and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language             as _Language      on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnSalesDistrict as _SalesDistrict on $projection.SalesDistrict = _SalesDistrict.SalesDistrict
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_SalesDistrict'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnSalesDistrictVH',
          element: 'SalesDistrict'
        }
      }]
  key cast( _Source.SalesDistrict as fincs_salesdistrict preserving type )                 as SalesDistrict,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'SalesDistrictName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'SalesDistrictName' }
      cast( _Source.SalesDistrictName as fincs_description_text_20 preserving type )       as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.SalesDistrictName as fincs_salesdistrictname preserving type )         as SalesDistrictName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _SalesDistrict
}
where
  _Source.Language is not null
```
