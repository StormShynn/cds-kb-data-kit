---
name: I_PROVIDERCONTRACTSTATUSTEXT
description: Providercontractstatustext
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
  - contract
  - text
  - status
  - component:FI-CA-2CL
  - lob:Finance
---
# I_PROVIDERCONTRACTSTATUSTEXT

**Providercontractstatustext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CAProviderContractStatus` | `cast( left( dd07t.domvalue_l,1 ) as status_vt_kk preserving type )` |
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| `CAProviderContractStatusText` | `cast ( ddtext as status_vt_text_kk preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Provider Contract Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAProviderContractStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_ProviderContractStatusText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l,1 ) as status_vt_kk preserving type ) as CAProviderContractStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                        as Language,

      @Semantics.text
      cast ( ddtext as status_vt_text_kk preserving type )               as CAProviderContractStatusText,

      _Language
}
where
      domname  = 'STATUS_VT_KK'
  and as4local = 'A'
```
