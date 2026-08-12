---
name: I_COSTORIGINGROUPSTDVH_2
description: "Cost Origin Group"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPSTDVH_2')/$value
semantic_en: "Cost Origin Group"
semantic_vi: "Cost Origin Group — CDS view giao diện dựa trên I_CostOriginGroup_2."
keywords:
  - "cost"
  - "origin"
  - "group"
tags:
  - CO
  - bo:project
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
---
# I_COSTORIGINGROUPSTDVH_2

**Cost Origin Group**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPSTDVH_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostOriginGroup` | ✓ | |  |  | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPSTDVH_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUPSTDVH_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Consumption.ranked: true

@EndUserText.label: 'Cost Origin Group'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'CostOriginGroup'
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CostOriginGroupStdVH_2
  as select from I_CostOriginGroup_2

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key CostOriginGroup,


      _Text
}
```
