---
name: I_COSTORIGINGROUP_2
description: "Cost Origin Group"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUP_2')/$value
semantic_en: "Cost Origin Group"
semantic_vi: "Cost Origin Group — CDS view giao diện dựa trên tkkh1."
keywords:
  - "cost"
  - "origin"
  - "group"
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
---
# I_COSTORIGINGROUP_2

**Cost Origin Group**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUP_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostOriginGroup` | ✓ | |  | `hrkft` | `CHAR(4)` | Origin Group as Subdivision of Cost Element |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostOriginGroupText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUP_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINGROUP_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL

@EndUserText.label: 'Cost Origin Group'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'CostOriginGroup'
@ObjectModel.sapObjectNodeType.name: 'CostOriginGroup'

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]

@ObjectModel.usageType: { dataClass: #CUSTOMIZING, serviceQuality: #A, sizeCategory: #S }

@Search.searchable: true

@VDM.viewType: #BASIC

define view entity I_CostOriginGroup_2
  as select from tkkh1

  association [0..*] to I_CostOriginGroupText_2 as _Text on $projection.CostOriginGroup = _Text.CostOriginGroup

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true

  key hrkft as CostOriginGroup,


      _Text
}


;
```
