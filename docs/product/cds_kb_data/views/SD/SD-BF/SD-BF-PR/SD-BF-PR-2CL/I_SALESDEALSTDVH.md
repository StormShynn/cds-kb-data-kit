---
name: I_SALESDEALSTDVH
description: "This CDS view provides a value help for sales deals. It shall be used for value help purposes only. If you intend to select the entire business data, use the Sales Deal view instead."
app_component: SD-BF-PR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEALSTDVH')/$value
semantic_en: "This CDS view provides a value help for sales deals. It shall be used for value help purposes only. If you intend to select the entire business data, use the Sales Deal view instead."
semantic_vi: "Sales Deal — CDS view giao diện dựa trên I_SalesDeal."
keywords:
  - "sales"
  - "deal"
  - "distribution"
  - "channel"
  - "division"
  - "organization"
tags:
  - SD
  - bo:purchaseorder
  - component:SD-BF-PR-2CL
  - interface-view
  - lob:sales & distribution
  - SD-BF
  - SD-BF-PR
  - SD-BF-PR-2CL
  - bo:salesorganization
---
# I_SALESDEALSTDVH

**This CDS view provides a value help for sales deals. It shall be used for value help purposes only. If you intend to select the entire business data, use the Sales Deal view instead.**

| Property | Value |
|---|---|
| App Component | `SD-BF-PR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEALSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDeal` | ✓ | |  |  | `CHAR(10)` | Agreement (various conditions grouped together) |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEALSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SALESDEALSTDVH')/$value)*

```abap
//GENERATED:003:ZDpK08xG7jU}dLKhzUU3fG
@AbapCatalog.sqlViewName: 'ISD__VH'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'SalesDeal'
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER]
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M

@AccessControl.authorizationCheck: #CHECK

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Sales Deal'
define view I_SalesDealStdVH as select from I_SalesDeal {
  key SalesDeal,

  @Consumption.hidden: true
  DistributionChannel,
  @Consumption.hidden: true
  Division,
  @Consumption.hidden: true
  SalesOrganization
}
```
