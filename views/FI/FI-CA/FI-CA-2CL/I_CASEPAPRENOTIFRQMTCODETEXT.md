---
name: I_CASEPAPRENOTIFRQMTCODETEXT
description: Casepaprenotifrqmtcodetext
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
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASEPAPRENOTIFRQMTCODETEXT

**Casepaprenotifrqmtcodetext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CASEPAPreNotificationRqmtCode` | `cast( left( domvalue_l, 1 ) as pnctr_kk preserving type )` |
| key `Language` | `cast( ddlanguage as spras preserving type )` |
| `CASEPAPreNotifRqmtCodeText` | `cast( ddtext as pnctr_text_kk preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName : 'ICASEPAPRRQMCTXT'

@EndUserText.label: 'SEPA Prenotif Requirement Code - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASEPAPreNotificationRqmtCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASEPAPreNotifRqmtCodeText
  as select from dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key cast( left( domvalue_l, 1 ) as pnctr_kk preserving type ) as CASEPAPreNotificationRqmtCode,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )               as Language,

      @Semantics.text
      cast( ddtext as pnctr_text_kk preserving type )           as CASEPAPreNotifRqmtCodeText,

      _Language
}
where
      domname  = 'PNCTR_KK'
  and as4local = 'A'
```
