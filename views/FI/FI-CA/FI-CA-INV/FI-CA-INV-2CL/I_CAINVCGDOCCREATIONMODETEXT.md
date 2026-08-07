---
name: I_CAINVCGDOCCREATIONMODETEXT
description: Cainvcgdoccreationmodetext
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - text-view
  - text
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCCREATIONMODETEXT

**Cainvcgdoccreationmodetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgDocCreationMode` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as inv_crmode_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `CAInvcgDocCreationModeText` |  | |  | `cast ( ddtext as inv_crmode_txt_gfn_kk preserving type )` |  |  |
| `_CAInvcgDocCreationMode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocCreationMode` | `I_CAInvcgDocCreationMode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Erstellungsmodus des Fakt.belegs (Texte)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgDocCreationMode',
  sapObjectNodeType.name: 'ContrAcctgInvcgDocCrtnModeText',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@VDM.viewType: #BASIC

define view entity I_CAInvcgDocCreationModeText
  as select from dd07t
  association [1..1] to I_CAInvcgDocCreationMode as _CAInvcgDocCreationMode on $projection.CAInvcgDocCreationMode = _CAInvcgDocCreationMode.CAInvcgDocCreationMode
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocCreationMode'
  key cast ( substring( dd07t.domvalue_l,1,1 ) as inv_crmode_kk preserving type ) as CAInvcgDocCreationMode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast ( ddlanguage as spras preserving type )                                as Language,
      @Semantics.text
      cast ( ddtext as inv_crmode_txt_gfn_kk preserving type )                    as CAInvcgDocCreationModeText,

      _CAInvcgDocCreationMode,
      _Language
}
where
      domname  = 'INV_CRMODE_KK'
  and as4local = 'A'
```
