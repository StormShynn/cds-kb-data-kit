---
name: D_DBTMMREQITMORDBILLGSTSCHGD
description: D Dbtmmreqitmordbillgstschgd
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
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_DBTMMREQITMORDBILLGSTSCHGD

**D Dbtmmreqitmordbillgstschgd**

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
| `DebitMemoRequestType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |
| `DebitMemoRequestItemCategory` | `pstyv` |
| `Product` | `matnr` |
| `OrderRelatedBillingStatus` | `fksaa` |
| `PrevOrderRelatedBillingStatus` | `fksaa` |

## Source Code

```abap
@EndUserText.label: 'Item Ord-Reltd Billing Status Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DbtMmReqItmOrdBillgStsChgd
{
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime           : vdm_lastchangedon;
      
      DebitMemoRequestType          : auart_unv;
      
      SalesOrganization             : vkorg;
      
      DistributionChannel           : vtweg;
      
      OrganizationDivision          : spart;
      
      SoldToParty                   : kunnr;

      DebitMemoRequestItemCategory  : pstyv;

      Product                       : matnr;

      @Event.qualifiesEventType: true
      @Event.previousValue.element: 'PrevOrderRelatedBillingStatus'
      OrderRelatedBillingStatus     : fksaa;
      
      PrevOrderRelatedBillingStatus : fksaa;
}
```
