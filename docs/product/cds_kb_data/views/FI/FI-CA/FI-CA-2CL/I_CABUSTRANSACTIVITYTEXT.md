---
name: I_CABUSTRANSACTIVITYTEXT
description: "Cabustransactivitytext"
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
# I_CABUSTRANSACTIVITYTEXT

**Cabustransactivitytext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABusinessTransactionActivity` | ✓ | |  | `cast( left( dd07t.domvalue_l, 4 ) as evl_actid_kk preserving type )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `CABusTransActivityName` |  | |  | `cast( ddtext as evl_actid_text_kk preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Business Transaction Activity - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CABusinessTransactionActivity',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CABusTransActivityText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( dd07t.domvalue_l, 4 ) as evl_actid_kk preserving type ) as CABusinessTransactionActivity,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )                         as Language,

      @Semantics.text
      cast( ddtext as evl_actid_text_kk preserving type )                 as CABusTransActivityName,

      _Language
}
where
      domname        = 'EVL_ACTID_KK'
  and dd07t.as4local = 'A'
```
