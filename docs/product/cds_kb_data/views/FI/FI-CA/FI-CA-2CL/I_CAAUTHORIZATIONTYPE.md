---
name: I_CAAUTHORIZATIONTYPE
description: "Caauthorizationtype"
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
# I_CAAUTHORIZATIONTYPE

**Caauthorizationtype**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAAuthorizationType` | ✓ | |  | `cast ( left( dd07l.domvalue_l, 1 ) as auart_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAuthorizationTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Authorization Type'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CAAuthorizationType',
                sapObjectNodeType.name: 'ContrAcctgAuthorizationType',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAuthorizationType
  as select from dd07l

  association [1..*] to I_CAAuthorizationTypeText as _Text on $projection.CAAuthorizationType = _Text.CAAuthorizationType

{
      @ObjectModel.text.association: '_Text'
  key cast ( left( dd07l.domvalue_l, 1 ) as auart_kk preserving type ) as CAAuthorizationType,

      _Text
}
where
      domname  = 'AUART_KK'
  and as4local = 'A'
```
