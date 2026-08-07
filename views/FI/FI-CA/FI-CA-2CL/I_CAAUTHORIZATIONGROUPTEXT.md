---
name: I_CAAUTHORIZATIONGROUPTEXT
description: Caauthorizationgrouptext
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAAUTHORIZATIONGROUPTEXT

**Caauthorizationgrouptext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAAuthorizationGroupObject` | ✓ | |  | `bgobj` |
| `CAAuthorizationGroup` | ✓ | |  | `begru` |
| `Language` | ✓ | |  | `langu` |
| `CAAuthorizationGroupText` |  | |  | `text` |
| `_AuthznGroupObject` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AuthznGroupObject` | `I_CAAuthorizationGroupObject` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Authorization Group - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAAuthorizationGroup',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAuthorizationGroupText
  as select from tfk_begrut

  association [1..1] to I_CAAuthorizationGroupObject as _AuthznGroupObject on $projection.CAAuthorizationGroupObject = _AuthznGroupObject.CAAuthorizationGroupObject
  association [0..1] to I_Language                   as _Language          on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_AuthznGroupObject'
  key bgobj as CAAuthorizationGroupObject,
  key begru as CAAuthorizationGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu as Language,

      @Semantics.text
      text  as CAAuthorizationGroupText,

      _AuthznGroupObject,
      _Language
}
```
