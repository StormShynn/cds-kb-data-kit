---
name: I_CAAUTHORIZATIONGROUPOBJECTT
description: "Caauthorizationgroupobjectt"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAAUTHORIZATIONGROUPOBJECTT

**Caauthorizationgroupobjectt**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAAuthorizationGroupObject` | ✓ | |  | `bgobj` |  |  |
| `Language` | ✓ | |  | `langu` |  |  |
| `CAAuthorizationGroupObjectText` |  | |  | `text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICAAUGRPOBJT'

@EndUserText.label: 'Authorization Group Object - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAAuthorizationGroupObject',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAuthorizationGroupObjectT
  as select from tfk_bgobjt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key bgobj as CAAuthorizationGroupObject,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,

      @Semantics.text
      text  as CAAuthorizationGroupObjectText,

      _Language
}
```
