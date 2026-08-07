---
name: I_CNSLDTNCOUNTRYT
description: Cnsldtncountryt
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
  - country
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCOUNTRYT

**Cnsldtncountryt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |
| `Country` | ✓ | |  | `cast( _Source.Country as fincs_country preserving type )` |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.CountryName as fincs_description_text_50 preserving type )` |
| `CountryName` |  | |  | `cast( _Source.CountryName as fincs_countryname preserving type )` |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |
| `_Language` | | ✓ | | |
| `_Country` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Country` | `I_CnsldtnCountry` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCOUNTRYT'
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
    sizeCategory: #M },
  representativeKey: 'Country',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnCountryText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Country/Region - Txt'
define view I_CnsldtnCountryT
  as select distinct from P_CnsldtnCountryT as _Source

    inner join            I_CnsldtnCountry  as _Main on  _Main.Country                       = _Source.Country
                                                     and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language       as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnCountry as _Country  on $projection.Country = _Country.Country
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_Country'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCountryVH',
          element: 'Country'
        }
      }]
  key cast( _Source.Country as fincs_country preserving type )                             as Country,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'CountryName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CountryName' }
      cast( _Source.CountryName as fincs_description_text_50 preserving type )             as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.CountryName as fincs_countryname preserving type )                     as CountryName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Country
}
where
  _Source.Language is not null
```
