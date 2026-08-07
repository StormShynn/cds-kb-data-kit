---
name: I_CAINVCGOFFSETTINGPROCEDTXT
description: Cainvcgoffsettingprocedtxt
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
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGOFFSETTINGPROCEDTXT

**Cainvcgoffsettingprocedtxt**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInvcgOffsettingProcedure` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1,2 ) as inv_offset_proc_kk preserving type )` |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |
| `CAInvcgOffsettingProcedText` |  | |  | `cast( ddtext as inv_offset_proc_txt_gfn_kk preserving type )` |
| `_CAInvcgOffsettingProcedure` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Anrechnungsverfahren (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgOffsettingProcedure',
  sapObjectNodeType.name: 'ContrAcctgInvcgOffstgProcText',
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

define view entity I_CAInvcgOffsettingProcedTxt
  as select from dd07t
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure on $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      @ObjectModel.text.element: ['CAInvcgOffsettingProcedText']
  key cast ( substring( dd07t.domvalue_l, 1,2 ) as inv_offset_proc_kk preserving type ) as CAInvcgOffsettingProcedure,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast ( ddlanguage as spras preserving type )                                      as Language,

      @Semantics.text: true
      cast( ddtext as inv_offset_proc_txt_gfn_kk preserving type )                      as CAInvcgOffsettingProcedText,

      _CAInvcgOffsettingProcedure,
      _Language
}
where
      domname  = 'INV_OFFSET_PROC_KK'
  and as4local = 'A'
```
