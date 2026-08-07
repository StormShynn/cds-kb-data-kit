---
name: I_SALESDEALSTDVH
description: This CDS view provides a value help for sales deals. It shall be used for value help purposes only. If you intend to select the entire business data, use the Sales Deal view instead.
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEALSTDVH')/$value
semantic_en: This CDS view provides a value help for sales deals. It shall be used for value help purposes only. If you intend to select the entire business data, use the Sales Deal view instead.
tags:
  - SD
  - bo:purchaseorder
  - component:SD-BF-PR-2CL
  - interface-view
  - lob:sales & distribution
  - SD-BF
  - SD-BF-PR
  - SD-BF-PR-2CL
  - metadata-only
---
# I_SALESDEALSTDVH

**This CDS view provides a value help for sales deals. It shall be used for value help purposes only. If you intend to select the entire business data, use the Sales Deal view instead.**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEALSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDeal` |  | |  |  | `CHAR(10)` | Agreement (various conditions grouped together) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
