---
name: I_CNSLDTNINDUSTRYT
description: "Cnsldtnindustryt"
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
# I_CNSLDTNINDUSTRYT

**Cnsldtnindustryt**

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
| `Industry` | ✓ | |  | `cast( _Source.Industry as fincs_industry preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.IndustryName as fincs_description_text_20 preserving type )` |  |  |
| `IndustryName` |  | |  | `cast( _Source.IndustryName as fincs_industry_desc preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Industry` | `I_CnsldtnIndustry` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSINDUSTRYT'
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
    sizeCategory: #L },
  representativeKey: 'Industry',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnIndustryText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Industry - Text'
define view I_CnsldtnIndustryT
  as select distinct from P_CnsldtnIndustryT as _Source

    inner join            I_CnsldtnIndustry  as _Main on  _Main.Industry                      = _Source.Industry
                                                      and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language        as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnIndustry as _Industry on $projection.Industry = _Industry.Industry
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_Industry'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnIndustryVH',
          element: 'Industry'
        }
      }]
  key cast( _Source.Industry as fincs_industry preserving type )                           as Industry,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'IndustryName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'IndustryName' }
      cast( _Source.IndustryName as fincs_description_text_20 preserving type )            as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.IndustryName as fincs_industry_desc preserving type )                  as IndustryName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Industry
}
where
  _Source.Language is not null
```
