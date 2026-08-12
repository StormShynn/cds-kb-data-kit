---
name: I_CAAUTHORIZATIONGROUPOBJECT
description: "Caauthorizationgroupobject"
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
# I_CAAUTHORIZATIONGROUPOBJECT

**Caauthorizationgroupobject**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAAuthorizationGroupObject` | ✓ | |  | `bgobj` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAuthorizationGroupObjectT` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Authorization Group Object'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAAuthorizationGroupObject',
                sapObjectNodeType.name: 'ContrAcctgAuthznGroupObject',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAuthorizationGroupObject
  as select from tfk_bgobj

  association [0..*] to I_CAAuthorizationGroupObjectT as _Text on $projection.CAAuthorizationGroupObject = _Text.CAAuthorizationGroupObject

{
  @ObjectModel.text.association: '_Text'
  key bgobj as CAAuthorizationGroupObject,

  _Text
}
```
