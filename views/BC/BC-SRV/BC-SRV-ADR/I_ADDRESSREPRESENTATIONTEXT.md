---
name: I_ADDRESSREPRESENTATIONTEXT
description: Addressrepresentationtext
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - text-view
  - address
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSREPRESENTATIONTEXT

**Addressrepresentationtext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `AddressRepresentationCode` | ✓ | |  | `nation` |  |  |
| `AddressRepresentationDesc` |  | |  | `nation_tex` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'AddressRepresentationCode'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IADDRSCRPTTXT'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@EndUserText.label: 'Description of language scripts'
define view entity I_AddressRepresentationText
  as select from tsadvt
{
      @Semantics.language: true
  key langu      as Language,
  key nation     as AddressRepresentationCode,
      @Semantics.text: true
      nation_tex as AddressRepresentationDesc
}
```
