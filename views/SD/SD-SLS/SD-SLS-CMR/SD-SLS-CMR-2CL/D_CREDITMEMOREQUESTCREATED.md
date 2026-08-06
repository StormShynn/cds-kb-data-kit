---
name: D_CREDITMEMOREQUESTCREATED
description: D Creditmemorequestcreated
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - credit
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_CREDITMEMOREQUESTCREATED

**D Creditmemorequestcreated**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `CreditMemoRequestType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Created'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.sapObjectNodeType.name : 'CreditMemoRequest'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestCreated 
{
    @Event.raisedAt.dateTime: true
    EventRaisedDateTime               : vdm_lastchangedon;
      
    CreditMemoRequestType             : auart_unv;

    SalesOrganization                 : vkorg;

    DistributionChannel               : vtweg;

    OrganizationDivision              : spart; 

    SoldToParty                       : kunnr;  
}
```
