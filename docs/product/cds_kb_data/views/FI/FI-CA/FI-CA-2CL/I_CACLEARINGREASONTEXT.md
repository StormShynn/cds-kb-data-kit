---
name: I_CACLEARINGREASONTEXT
description: "Caclearingreasontext"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACLEARINGREASONTEXT

**Caclearingreasontext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAClearingReason` | ✓ | |  | `augrd` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAClearingReasonName` |  | |  | `cast( txt50 as augrd_text_gfn_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataExtraction.enabled : true

@EndUserText.label: 'Clearing Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAClearingReason',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAClearingReasonText
  as select from tfk001at

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key augrd                                              as CAClearingReason,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                              as Language,

      @Semantics.text
      cast( txt50 as augrd_text_gfn_kk preserving type ) as CAClearingReasonName,

      _Language
}
```
