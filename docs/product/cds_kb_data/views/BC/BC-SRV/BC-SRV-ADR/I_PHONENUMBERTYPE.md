---
name: I_PHONENUMBERTYPE
description: "Phonenumbertype"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - phone
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_PHONENUMBERTYPE

**Phonenumbertype**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhoneNumberType` | ✓ | |  | `cast ( domvalue_l as ad_flgmob )` | `CHAR(1)` | Indicator: Telephone is a Mobile Telephone |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PhoneNumberTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@EndUserText.label: 'Phone Number Type'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'PhoneNumberType'
@Analytics.technicalName: 'IPHONENMBRTYPE'
@ObjectModel.sapObjectNodeType.name: 'PhoneNumberType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_PhoneNumberType
  as select from dd07l
  association [0..*] to I_PhoneNumberTypeText as _Text on $projection.PhoneNumberType = _Text.PhoneNumberType
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ad_flgmob ) as PhoneNumberType,
      _Text
}
where
      as4local = 'A'
  and domname  = 'AD_FLGMOB'
```
