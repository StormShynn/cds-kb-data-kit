---
name: I_RETAXTYPE
description: Retaxtype
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - tax
  - component:RE-FX-2CL
  - lob:Other
---
# I_RETAXTYPE

**Retaxtype**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Country` | ✓ | |  | `country` |  |  |
| `RETaxType` | ✓ | |  | `taxtype` |  |  |
| `_Text` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RETaxTypeText` | [0..*] |
| `_Country` | `I_Country` | [0..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction.enabled: true,
              technicalName: 'IRETAXTYPE'
}

@ObjectModel: {
            usageType:{
                        dataClass: #CUSTOMIZING,
                        serviceQuality: #A,
                        sizeCategory: #S
            },
            resultSet.sizeCategory: #XS,
            representativeKey: 'RETaxType',
            semanticKey: ['Country','RETaxType'],
            sapObjectNodeType.name: 'RealEstateTaxType',
            supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY ],
            modelingPattern: #ANALYTICAL_DIMENSION
}

@VDM.viewType:#BASIC
@Search.searchable: true
@EndUserText.label: 'Real Estate Tax Type'
define view entity I_RETaxType
  as select from tivrataxtype as _TaxType
  association [0..*] to I_RETaxTypeText as _Text    on  $projection.Country   = _Text.Country
                                                    and $projection.RETaxType = _Text.RETaxType
  association [0..1] to I_Country       as _Country on  $projection.Country = _Country.Country
{
      @ObjectModel.foreignKey.association: '_Country'
  key country as Country,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key taxtype as RETaxType,

    // Associations
   // @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text,
      _Country
}
```
