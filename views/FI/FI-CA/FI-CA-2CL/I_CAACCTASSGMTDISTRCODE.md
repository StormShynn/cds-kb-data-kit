---
name: I_CAACCTASSGMTDISTRCODE
description: "Caacctassgmtdistrcode"
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAACCTASSGMTDISTRCODE

**Caacctassgmtdistrcode**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACtrlFieldForAcctAssgmtDistr` | ✓ | |  | `cast( left( dd07l.domvalue_l, 1 ) as aasta_kk preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CAAcctAssgmtDistrCodeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Account Assignment Distribution Code'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACtrlFieldForAcctAssgmtDistr',
                sapObjectNodeType.name: 'ContrAcctgAcctAssgmtDistrCode',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAAcctAssgmtDistrCode
  as select from dd07l

  association [1..*] to I_CAAcctAssgmtDistrCodeText as _Text on $projection.CACtrlFieldForAcctAssgmtDistr = _Text.CACtrlFieldForAcctAssgmtDistr

{
      @ObjectModel.text.association: '_Text'
  key cast( left( dd07l.domvalue_l, 1 ) as aasta_kk preserving type ) as CACtrlFieldForAcctAssgmtDistr,

      _Text
}
where
      domname  = 'AASTA_KK'
  and as4local = 'A'
```
