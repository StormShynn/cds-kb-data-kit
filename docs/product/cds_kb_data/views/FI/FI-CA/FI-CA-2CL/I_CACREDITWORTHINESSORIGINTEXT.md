---
name: I_CACREDITWORTHINESSORIGINTEXT
description: "Cacreditworthinessorigintext"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - credit
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACREDITWORTHINESSORIGINTEXT

**Cacreditworthinessorigintext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CACreditWorthinessOrigin` | ✓ | |  | `herkf` |  |  |
| `CACreditWorthinessOriginText` |  | |  | `htext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'ICACRWORTHORIGT'

@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Creditworthiness Origin - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CACreditWorthinessOrigin',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACreditWorthinessOriginText
  as select from tfk046bt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
  key herkf as CACreditWorthinessOrigin,

      @Semantics.text
      htext as CACreditWorthinessOriginText,

      _Language
}
```
