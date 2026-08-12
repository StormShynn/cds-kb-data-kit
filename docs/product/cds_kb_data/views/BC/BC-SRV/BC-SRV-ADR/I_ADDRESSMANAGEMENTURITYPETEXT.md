---
name: I_ADDRESSMANAGEMENTURITYPETEXT
description: "Addressmanagementuritypetext"
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
# I_ADDRESSMANAGEMENTURITYPETEXT

**Addressmanagementuritypetext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressManagementURIType` | ✓ | |  | `cast ( domvalue_l as ad_uritype )` | `CHAR(3)` | URI type flag |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AddressManagementURITypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

```abap
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Address Management URI Type - Text'
@ObjectModel.dataCategory:         #TEXT
@Analytics.technicalName: 'IADMNGURITYPETXT'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]

@Search.searchable:                true
@VDM.viewType: #BASIC
define view entity I_AddressManagementURITypeText
  as select from dd07t
{
  key cast ( domvalue_l as ad_uritype ) as AddressManagementURIType,
      @Semantics:   { language: true }
  key ddlanguage as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      ddtext     as AddressManagementURITypeText
}
where
      as4local = 'A'
  and domname  = 'AD_URITYPE'
```
