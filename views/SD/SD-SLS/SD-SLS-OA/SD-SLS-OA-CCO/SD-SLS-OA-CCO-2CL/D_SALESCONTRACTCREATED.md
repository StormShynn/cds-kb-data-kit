---
name: D_SALESCONTRACTCREATED
description: D Salescontractcreated
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - sales-contract
  - contract
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# D_SALESCONTRACTCREATED

**D Salescontractcreated**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |
| `SalesContractType` |  | |  | `auart_unv` |
| `SalesOrganization` |  | |  | `vkorg` |
| `DistributionChannel` |  | |  | `vtweg` |
| `OrganizationDivision` |  | |  | `spart` |
| `SoldToParty` |  | |  | `kunnr` |

## Source Code

```abap
@EndUserText.label: 'Sales Contract Created'
@ObjectModel.sapObjectNodeType.name: 'SalesContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractCreated
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesContractType    : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;

}
```
