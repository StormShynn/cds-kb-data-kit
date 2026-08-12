---
name: I_COSTORIGINTYPE
description: "Cost Origin Type"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPE')/$value
semantic_en: "Cost Origin Type"
semantic_vi: "Cost Origin Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "cost"
  - "origin"
  - "type"
  - "domain"
  - "value"
tags:
  - CO
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
---
# I_COSTORIGINTYPE

**Cost Origin Type**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostOriginType` | ✓ | |  | `cast ( domvalue_l as hrktyp )` | `CHAR(2)` | Origin Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CostOriginTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPE')/$value)*

```abap
@EndUserText.label: 'Cost Origin Type'
@AbapCatalog.sqlViewName: 'IFICOSTORITYPE'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  representativeKey: 'CostOriginType',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [ 
    #CDS_MODELING_ASSOCIATION_TARGET, 
    #CDS_MODELING_DATA_SOURCE 
  ],
  usageType: { 
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #M
  }
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_CostOriginType
  as select from dd07l
  association [0..*] to I_CostOriginTypeText as _Text on $projection.CostOriginType = _Text.CostOriginType
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as hrktyp ) as CostOriginType,

      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l              as DomainValue,
      _Text

}
where
      domname  = 'HRKTYP'
  and as4local = 'A'
  and as4vers  = '0000'
```
