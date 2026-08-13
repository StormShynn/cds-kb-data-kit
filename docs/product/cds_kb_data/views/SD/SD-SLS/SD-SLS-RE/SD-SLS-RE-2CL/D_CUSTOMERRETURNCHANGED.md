---
name: D_CUSTOMERRETURNCHANGED
description: "D Customerreturnchanged"
semantic_vi: "View này hiển thị các sự kiện thay đổi trả hàng của khách hàng, có thể được sử dụng để theo dõi các thay đổi về loại trả hàng của khách hàng trong thời gian thực."
keywords:
  - "customer return"
  - "thay đổi trả hàng"
  - "customer return type"
  - "sự kiện thay đổi"
  - "real-time"
  - "customer"
  - "khách hàng"
  - "sales and distribution"
  - "sales"
  - "distribusi"
  - "sd-sls-re-2cl"
  - "customer return changed"
semantic_en: "This view exposes customer return change events, which can be used to track changes to customer return types in real-time."
app_component: SD-SLS-RE-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `CustomerReturnType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |

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
