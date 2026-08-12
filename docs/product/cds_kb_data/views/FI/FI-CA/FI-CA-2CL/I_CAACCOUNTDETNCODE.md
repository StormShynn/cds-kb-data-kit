---
name: I_CAACCOUNTDETNCODE
description: "Caaccountdetncode"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAACCOUNTDETNCODE

**Caaccountdetncode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAAccountDeterminationCode` | ✓ | |  | `cast( kofiz as kofiz_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAccountDetnCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Account Determination Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE, 
                representativeKey: 'CAAccountDeterminationCode',
                sapObjectNodeType.name: 'ContrAcctgAccountDetnCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, 
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC


define view entity I_CAAccountDetnCode
  as select from te097a

  association [0..*] to I_CAAccountDetnCodeText as _Text on $projection.CAAccountDeterminationCode = _Text.CAAccountDeterminationCode

{
      @ObjectModel.text.association: '_Text'
  key cast( kofiz as kofiz_kk preserving type ) as CAAccountDeterminationCode,

      _Text
}
```
