---
name: I_CASEPAPRENOTIFRQMTCODE
description: "Casepaprenotifrqmtcode"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CASEPAPRENOTIFRQMTCODE

**Casepaprenotifrqmtcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASEPAPreNotificationRqmtCode` | ✓ | |  | `cast( left( domvalue_l,1 ) as pnctr_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CASEPAPreNotifRqmtCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'SEPA Prenotification Requirement Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CASEPAPreNotificationRqmtCode',
                sapObjectNodeType.name: 'ContrAcctgSEPAPreNotifRqmtCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASEPAPreNotifRqmtCode
  as select from dd07l

  association [1..*] to I_CASEPAPreNotifRqmtCodeText as _Text on $projection.CASEPAPreNotificationRqmtCode = _Text.CASEPAPreNotificationRqmtCode

{
      @ObjectModel.text.association: '_Text'
  key cast( left( domvalue_l,1 ) as pnctr_kk preserving type ) as CASEPAPreNotificationRqmtCode,

      _Text
}
where
      domname  = 'PNCTR_KK'
  and as4local = 'A'
```
