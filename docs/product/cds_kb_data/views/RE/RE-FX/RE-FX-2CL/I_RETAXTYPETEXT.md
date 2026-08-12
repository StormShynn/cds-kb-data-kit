---
name: I_RETAXTYPETEXT
description: "Retaxtypetext"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - tax
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RETAXTYPETEXT

**Retaxtypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `Country` | ✓ | |  | `country` |  |  |
| `RETaxType` | ✓ | |  | `taxtype` |  |  |
| `RETaxTypeName` |  | |  | `xmtaxtype` |  |  |
| `_RETaxType` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RETaxType` | `I_RETaxType` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRETAXTYPET'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true

@ObjectModel: {
                usageType: { 
                             dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                            },
                dataCategory: #TEXT,
                representativeKey: 'RETaxType',
                semanticKey: ['Country','RETaxType'],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY ],
                sapObjectNodeType.name: 'RealEstateTaxTypeText'
}

@Search.searchable: true
@VDM.viewType:#BASIC
@EndUserText.label: 'Real Estate Tax Type - Text'
define view entity I_RETaxTypeText
  as select from tivrataxtypet
  association [0..1] to I_RETaxType as _RETaxType on  $projection.Country   = _RETaxType.Country
                                                  and $projection.RETaxType = _RETaxType.RETaxType
  association [0..1] to I_Country   as _Country   on  $projection.Country   = _Country.Country                                                  
  association [0..1] to I_Language  as _Language  on  $projection.Language  = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras     as Language,
      @ObjectModel.foreignKey.association: '_Country'
  key country   as Country,
      @ObjectModel.foreignKey.association: '_RETaxType'
  key taxtype   as RETaxType,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      xmtaxtype as RETaxTypeName,

      _RETaxType,
      _Country,
      _Language
}
```
