---
name: I_CAMAINTRANSACTIONTEXT
description: "Camaintransactiontext"
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
# I_CAMAINTRANSACTIONTEXT

**Camaintransactiontext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAApplicationArea` | ✓ | |  | `applk` |  |  |
| `CAMainTransaction` | ✓ | |  | `hvorg` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CAMainTransactionName` |  | |  | `cast( txt30 as hvorg_text_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_ApplArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ApplArea` | `I_CAApplicationArea` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Document Main Transaction - Text'

@Analytics.dataExtraction.enabled : true

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAMainTransaction',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAMainTransactionText
  as select from tfkhvot

  association [0..1] to I_Language          as _Language on $projection.Language = _Language.Language
  association [1..1] to I_CAApplicationArea as _ApplArea on $projection.CAApplicationArea = _ApplArea.CAApplicationArea

{
      @ObjectModel.foreignKey.association: '_ApplArea'
  key applk                                           as CAApplicationArea,
  key hvorg                                           as CAMainTransaction,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                           as Language,

      @Semantics.text
      cast( txt30 as hvorg_text_kk  preserving type ) as CAMainTransactionName,

      _Language,
      _ApplArea
}
```
