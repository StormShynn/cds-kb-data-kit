---
name: D_SALESQUOTATIONITEMCHANGED
description: D Salesquotationitemchanged
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
  - sales-quotation
  - item-level
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# D_SALESQUOTATIONITEMCHANGED

**D Salesquotationitemchanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |
| `SalesQuotationType` |  | |  | `auart_unv` |
| `SalesOrganization` |  | |  | `vkorg` |
| `DistributionChannel` |  | |  | `vtweg` |
| `OrganizationDivision` |  | |  | `spart` |
| `SoldToParty` |  | |  | `kunnr` |
| `SalesQuotationItemCategory` |  | |  | `pstyv` |
| `Product` |  | |  | `matnr` |

## Source Code

```abap
@EndUserText.label: 'Sales Quotation Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'SalesQuotationItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_SalesQuotationItemChanged
{
      @Event.raisedAt.dateTime     : true
      EventRaisedDateTime          : vdm_lastchangedon;
      
      SalesQuotationType           : auart_unv;

      SalesOrganization            : vkorg;

      DistributionChannel          : vtweg;

      OrganizationDivision         : spart;
      
      SoldToParty                  : kunnr;
      
      SalesQuotationItemCategory   : pstyv;
      
      Product                      : matnr;
}
```
