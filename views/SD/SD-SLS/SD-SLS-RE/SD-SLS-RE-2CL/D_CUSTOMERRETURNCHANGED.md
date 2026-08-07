---
name: D_CUSTOMERRETURNCHANGED
description: D Customerreturnchanged
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-RE
  - customer
  - component:SD-SLS-RE-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# D_CUSTOMERRETURNCHANGED

**D Customerreturnchanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-RE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |
| `CustomerReturnType` |  | |  | `auart_unv` |
| `SalesOrganization` |  | |  | `vkorg` |
| `DistributionChannel` |  | |  | `vtweg` |
| `OrganizationDivision` |  | |  | `spart` |
| `SoldToParty` |  | |  | `kunnr` |

## Source Code

```abap
@EndUserText.label: 'Returns Order Changed'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions 
@ObjectModel.sapObjectNodeType.name : 'CustomerReturn'
define abstract entity D_CustomerReturnChanged 
{
  @Event.raisedAt.dateTime : true
  EventRaisedDateTime      : vdm_lastchangedon;    

  CustomerReturnType       : auart_unv;

  SalesOrganization        : vkorg;

  DistributionChannel      : vtweg;

  OrganizationDivision     : spart;

  SoldToParty              : kunnr;
}
```
