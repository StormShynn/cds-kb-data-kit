---
name: I_BPUSRROLE
description: Bpusrrole
app_component: BC-SRV-BUM
software_component: SAP_BASIS
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `BusinessPartnerRole` | ✓ | |  |  |  |  |
| `BusinessPartnerRoleCategory` |  | |  |  |  |  |
| `ValidFrom` |  | |  |  |  |  |
| `ValidTo` |  | |  |  |  |  |
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
