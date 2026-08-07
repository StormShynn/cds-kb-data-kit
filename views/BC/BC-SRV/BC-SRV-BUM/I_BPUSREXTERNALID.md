---
name: I_BPUSREXTERNALID
description: "Bpusrexternalid"
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
# I_BPUSREXTERNALID

**Bpusrexternalid**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BUM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BPIdentificationType` | ✓ | |  | `type` |  |  |
| `BPIdentificationNumber` | ✓ | |  | `idnumber` |  |  |
| `ValidityStartDate` |  | |  | `valid_date_from` |  |  |
| `ValidityEndDate` |  | |  | `valid_date_to` |  |  |
| `_BusinessUserBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessUserBasic` | `I_BusinessUserBasic` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Business Partner External ID (BUM)'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view entity I_BPUsrExternalID as select from but0id 
  association [0..1] to I_BusinessUserBasic as _BusinessUserBasic on $projection.BusinessPartner = _BusinessUserBasic.BusinessPartner
{
  key partner     as BusinessPartner,
  key type        as BPIdentificationType,
  key idnumber    as BPIdentificationNumber,
      valid_date_from as ValidityStartDate,
      valid_date_to as ValidityEndDate,
      _BusinessUserBasic
}
```
