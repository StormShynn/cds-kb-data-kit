---
name: I_FORMOFADDRESS
description: "Formofaddress"
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
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_FORMOFADDRESS

**Formofaddress**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FormOfAddress` | ✓ | |  | `title` | `CHAR(4)` | Form-of-Address Key |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FormOfAddressText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Form of Address'
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'FormOfAddress'
@Analytics.technicalName: 'I_FORM_O_ADR'
@ObjectModel.sapObjectNodeType.name: 'FormOfAddress'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations:true

define view entity I_FormOfAddress
  as select from tsad3

  association [0..*] to I_FormOfAddressText as _Text on $projection.FormOfAddress = _Text.FormOfAddress
{
      @ObjectModel.text.association: '_Text'
  key tsad3.title as FormOfAddress,
      _Text
}
```
