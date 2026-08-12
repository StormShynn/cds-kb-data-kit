---
name: I_CAINTCOSUBTYPETEXT
description: "Caintcosubtypetext"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CAINTCOSUBTYPETEXT

**Caintcosubtypetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAIntcoType` | ✓ | |  | `cast( _tfk8250st.ico_type as ico_type_gfn_kk preserving type )` |  |  |
| `CAIntcoSubtype` | ✓ | |  | `cast( _tfk8250st.ico_subtype as ico_subtype_gfn_kk preserving type )` |  |  |
| `Language` | ✓ | | `_tfk8250st` | `langu` |  |  |
| `CAIntcoSubtypeText` |  | |  | `cast( _tfk8250st.text as ico_subtype_txt_gfn_kk preserving type )` |  |  |
| `_CAIntcoType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAIntcoType` | `I_CAIntcoType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Unterart d. konzernint. Verrech. (Txt)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAIntcoSubtype',
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
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

define view entity I_CAIntcoSubtypeText
  as select from tfk8250st as _tfk8250st

  association [0..1] to I_CAIntcoType as _CAIntcoType on $projection.CAIntcoType = _CAIntcoType.CAIntcoType
  association [0..1] to I_Language    as _Language    on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAIntcoType'
  key cast( _tfk8250st.ico_type as ico_type_gfn_kk preserving type )       as CAIntcoType,

  key cast( _tfk8250st.ico_subtype as ico_subtype_gfn_kk preserving type ) as CAIntcoSubtype,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key _tfk8250st.langu                                                     as Language,
      @Semantics.text: true
      cast( _tfk8250st.text as ico_subtype_txt_gfn_kk preserving type )    as CAIntcoSubtypeText,

      _CAIntcoType,
      _Language
}
```
