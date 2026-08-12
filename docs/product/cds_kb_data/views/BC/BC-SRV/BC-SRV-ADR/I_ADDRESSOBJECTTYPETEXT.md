---
name: I_ADDRESSOBJECTTYPETEXT
description: "Addressobjecttypetext"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
