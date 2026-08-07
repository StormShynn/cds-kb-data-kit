---
name: I_CAINVCGOFFSETTINGACTIONTEXT
description: Cainvcgoffsettingactiontext
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
# I_CAINVCGOFFSETTINGACTIONTEXT

**Cainvcgoffsettingactiontext**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgOffsettingAction` | ✓ | |  | `cast ( substring( dd07t.domvalue_l,1,1 ) as inv_offset_action_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast ( ddlanguage as spras preserving type )` |  |  |
| `CAInvcgOffsettingActionText` |  | |  | `cast( ddtext as inv_offset_action_txt_gfn_kk preserving type )` |  |  |
| `_CAInvcgOffsettingAction` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ICAINV_OFFSACTT'
@EndUserText.label: 'Aktionscode bei Anrechnung (Text)'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  representativeKey: 'CAInvcgOffsettingAction',
  sapObjectNodeType.name: 'ContrAcctgInvcgOffstgActnText',
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

define view entity I_CAInvcgOffsettingActionText
  as select from dd07t
  association [0..1] to I_CAInvcgOffsettingAction as _CAInvcgOffsettingAction on $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
      @ObjectModel.text.element: ['CAInvcgOffsettingActionText']
  key cast ( substring( dd07t.domvalue_l,1,1 ) as inv_offset_action_kk preserving type ) as CAInvcgOffsettingAction,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast ( ddlanguage as spras preserving type )                                       as Language,

      @Semantics.text: true
      cast( ddtext as inv_offset_action_txt_gfn_kk preserving type )                     as CAInvcgOffsettingActionText,

      _CAInvcgOffsettingAction,
      _Language
}
where
      domname  = 'INV_OFFSET_ACTION_KK'
  and as4local = 'A'
```
