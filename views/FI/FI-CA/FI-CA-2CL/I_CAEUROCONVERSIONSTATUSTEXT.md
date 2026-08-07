---
name: I_CAEUROCONVERSIONSTATUSTEXT
description: Caeuroconversionstatustext
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAEUROCONVERSIONSTATUSTEXT

**Caeuroconversionstatustext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAStatusOfEuroConversion` | ✓ | |  | `cast( left( dd07t.domvalue_l,1 ) as eurou_kk preserving type )` |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |
| `CAStatusOfEuroConversionText` |  | |  | `cast( ddtext as eurou_text_kk preserving type )` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Euro Conversion Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAStatusOfEuroConversion',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAEuroConversionStatusText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l,1 ) as eurou_kk preserving type ) as CAStatusOfEuroConversion,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                    as Language,
      @Semantics.text
      cast( ddtext as eurou_text_kk preserving type )                as CAStatusOfEuroConversionText,

      _Language
}
where
      domname  = 'EUROU_KK'
  and as4local = 'A'
```
