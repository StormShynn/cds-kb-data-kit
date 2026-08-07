---
name: I_ADDRESSOBJECTTYPETEXT
description: Addressobjecttypetext
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
# I_ADDRESSOBJECTTYPETEXT

**Addressobjecttypetext**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AddressObjectType` | ✓ | |  | `cast ( domvalue_l as ad_adrtype )` | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AddressObjectTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

```abap
@AccessControl.authorizationCheck:#NOT_REQUIRED
@EndUserText.label: 'Address Object Type - Text'
@ObjectModel.dataCategory:         #TEXT
@Analytics.technicalName: 'IADDROBJTYPETXT'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@Search.searchable:                true
@VDM.viewType: #BASIC
define view entity I_AddressObjectTypeText
  as select from dd07t
{
  key cast ( domvalue_l as ad_adrtype ) as AddressObjectType,
      @Semantics:   { language: true }
  key ddlanguage as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      ddtext     as AddressObjectTypeText    
}
where
      as4local = 'A'
  and domname  = 'AD_ADRTYPE'
```
