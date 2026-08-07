---
name: D_SLSQTANOVRLRJCNSTSCHGD
description: "D Slsqtanovrlrjcnstschgd"
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SLSQTANOVRLRJCNSTSCHGD

**D Slsqtanovrlrjcnstschgd**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesQuotationType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `OverallSDDocumentRejectionSts` |  | |  | `abstk` |  |  |
| `PreviousOvrlSDDocRejectionSts` |  | |  | `abstk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Qtan Overall Rejection Sts Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesQuotation'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SlsQtanOvrlRjcnStsChgd
{
  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;  

  SalesQuotationType            : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;
  
  SoldToParty                   : kunnr;
  
  @Event.qualifiesEventType: true
  OverallSDDocumentRejectionSts : abstk;

  PreviousOvrlSDDocRejectionSts : abstk; 

}
```
