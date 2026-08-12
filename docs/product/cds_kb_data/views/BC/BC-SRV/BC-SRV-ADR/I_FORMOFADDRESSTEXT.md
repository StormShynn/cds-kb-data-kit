---
name: I_FORMOFADDRESSTEXT
description: "Formofaddresstext"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
# I_FORMOFADDRESSTEXT

**Formofaddresstext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `FormOfAddress` | ✓ | |  | `title` | `CHAR(4)` | Form-of-Address Key |
| `FormOfAddressName` |  | |  | `title_medi` | `CHAR(30)` | Title text |
| `_Language` | | ✓ | | | | |
| `_FormOfAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_FormOfAddress` | `I_FormOfAddress` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Form Of Address - Text'
@Analytics.dataExtraction.enabled : true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFORMOFADDRTEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'FormOfAddress'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #LANGUAGE_DEPENDENT_TEXT]
@Metadata.ignorePropagatedAnnotations:true

define view entity I_FormOfAddressText
  as select from tsad3t
  association [0..1] to I_Language      as _Language      on $projection.Language = _Language.Language
  association [0..1] to I_FormOfAddress as _FormOfAddress on $projection.FormOfAddress = _FormOfAddress.FormOfAddress
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key langu      as Language,
      @ObjectModel.foreignKey.association: '_FormOfAddress'
  key title      as FormOfAddress,
      @Semantics.text
      @EndUserText.label: 'Title Text'
      title_medi as FormOfAddressName,
      _Language,
      _FormOfAddress
}
```
