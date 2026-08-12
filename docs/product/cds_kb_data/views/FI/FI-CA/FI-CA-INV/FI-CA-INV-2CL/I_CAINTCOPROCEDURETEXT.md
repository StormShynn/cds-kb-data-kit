---
name: I_CAINTCOPROCEDURETEXT
description: "Caintcoproceduretext"
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
# I_CAINTCOPROCEDURETEXT

**Caintcoproceduretext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAIntcoProcedure` | ✓ | |  | `cast ( substring( dd07t.domvalue_l, 1, 2 ) as ico_proc_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `CAIntcoProcedureText` |  | |  | `cast ( ddtext as ico_proc_txt_gfn_kk preserving type )` |  |  |
| `_CAIntcoProcedure` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAIntcoProcedure` | `I_CAIntcoProcedure` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Verfahren d. konzernint. Verrech. - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAIntcoProcedure',
  sapObjectNodeType.name: 'CAIntcoSettlmtProcedTxt',
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

define view entity I_CAIntcoProcedureText
  as select from dd07t
  association [0..1] to I_CAIntcoProcedure as _CAIntcoProcedure on $projection.CAIntcoProcedure = _CAIntcoProcedure.CAIntcoProcedure
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAIntcoProcedure'
      @ObjectModel.text.element: ['CAIntcoProcedureText']
  key cast ( substring( dd07t.domvalue_l, 1, 2 ) as ico_proc_kk preserving type ) as CAIntcoProcedure,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast ( ddlanguage as spras preserving type )                                as Language,

      @Semantics.text: true
      cast ( ddtext as ico_proc_txt_gfn_kk preserving type )                      as CAIntcoProcedureText,

      _CAIntcoProcedure,
      _Language
}
where
      domname  = 'ICO_PROC_KK'
  and as4local = 'A'
```
