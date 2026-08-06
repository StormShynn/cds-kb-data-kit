---
name: D_SALESORDERITEMDELETED
description: D Sales OrderITEMDELETED
app_component: SD-SLS-GF-BET-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-GF
  - sales-order
  - item-level
  - component:SD-SLS-GF-BET-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# D_SALESORDERITEMDELETED

**D Sales OrderITEMDELETED**

| Property | Value |
|---|---|
| App Component | `SD-SLS-GF-BET-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `EventRaisedDateTime` | `vdm_lastchangedon` |
| `SalesOrderType` | `auart_unv` |
| `SalesOrganization` | `vkorg` |
| `DistributionChannel` | `vtweg` |
| `OrganizationDivision` | `spart` |
| `SoldToParty` | `kunnr` |
| `SalesOrderItemCategory` | `pstyv` |
| `Product` | `matnr` |

## Source Code

```abap
@EndUserText.label: 'Sales Order Item Deleted'
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions: true

define abstract entity D_SalesOrderItemDeleted
{
      
      @Event.raisedAt.dateTime: true
      EventRaisedDateTime      : vdm_lastchangedon;

      SalesOrderType           : auart_unv;

      SalesOrganization        : vkorg;

      DistributionChannel      : vtweg;

      OrganizationDivision     : spart;
      
      SoldToParty              : kunnr;
      
      SalesOrderItemCategory   : pstyv;
      
      Product                  : matnr;      
}
```
