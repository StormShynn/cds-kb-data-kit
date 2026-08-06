---
name: D_SALESCONTRACTITEMCREATED
description: D Salescontractitemcreated
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
  - item-level
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# D_SALESCONTRACTITEMCREATED

**D Salescontractitemcreated**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `SalesContractType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |
| `SalesContractItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Source Code

```abap
@EndUserText.label: 'Sales Contract Item Created'
@ObjectModel.sapObjectNodeType.name: 'SalesContractItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractItemCreated
{
 @Event.raisedAt.dateTime     : true
  EventRaisedDateTime       : vdm_lastchangedon;

  SalesContractType         : auart_unv;

  SalesOrganization         : vkorg;

  DistributionChannel       : vtweg;

  OrganizationDivision      : spart;

  SoldToParty               : kunnr;

  SalesContractItemCategory : pstyv;

  Product                   : matnr;
}
```
