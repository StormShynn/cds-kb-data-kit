---
name: I_BPUSRROLE
description: "Bpusrrole"
app_component: BC-SRV-BUM
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
  - BC-SRV-BUM
  - interface-view
  - component:BC-SRV-BUM
  - lob:Basis Components
---
# I_BPUSRROLE

**Bpusrrole**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BUM` |
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
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerRole` | ✓ | |  |  | `CHAR(6)` | BP Role |
| `BusinessPartnerRoleCategory` |  | |  |  | `CHAR(6)` | BP Role Category |
| `ValidFrom` |  | |  |  | `DEC(15)` | Validity Start of a BP Role |
| `ValidTo` |  | |  |  | `DEC(15)` | Validity End of a BP Role |
| `_BusinessUser` | | ✓ | | | | |
| `_BusinessUserBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUser` | `I_BusinessUser` | [0..1] |
| `_BusinessUserBasic` | `I_BusinessUserBasic` | [0..1] |

## Source Code

```abap
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Business Partner Role (BUM)'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.representativeKey: 'BusinessPartnerRole'
@Metadata.ignorePropagatedAnnotations:true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_BPUsrRole
  as select from P_BPUsrRole
  association [0..1] to I_BusinessUser      as _BusinessUser      on $projection.BusinessPartner = _BusinessUser.BusinessPartner
  association [0..1] to I_BusinessUserBasic as _BusinessUserBasic on $projection.BusinessPartner = _BusinessUserBasic.BusinessPartner
{
      @ObjectModel.foreignKey.association: '_BusinessUserBasic'
  key BusinessPartner,
  key BusinessPartnerRole,
      BusinessPartnerRoleCategory,
      ValidFrom,
      ValidTo,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_BusinessUserBasic'
      _BusinessUser,
      _BusinessUserBasic
}
```
