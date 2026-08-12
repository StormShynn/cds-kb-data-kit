---
name: I_COSTORIGINTYPETEXT
description: "Cost Origin Type - Text"
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPETEXT')/$value
semantic_en: "Cost Origin Type - Text"
semantic_vi: "Cost Origin Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "cost"
  - "origin"
  - "type"
  - "text"
  - "language"
  - "name"
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
# I_COSTORIGINTYPETEXT

**Cost Origin Type - Text**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `CostOriginType` | ✓ | |  | `cast( dd07t.domvalue_l as hrktyp )` | `CHAR(2)` | Origin Type |
| `CostOriginTypeName` |  | |  | `cast( ddtext as fpc_cost_origin_type_name preserving type )` | `CHAR(60)` | Name of Cost Origin Type |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_CostOriginType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CostOriginType` | `I_CostOriginType` | [0..*] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTORIGINTYPETEXT')/$value)*

```abap
@ObjectModel.representativeKey: 'CostOriginType'
@EndUserText.label: 'Cost Origin Type - Text'
@AbapCatalog.sqlViewName: 'IFICOSTORITYPET'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: {
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #LANGUAGE_DEPENDENT_TEXT
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #M
  }
}

@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_CostOriginTypeText
  as select from dd07t
  association [0..*] to I_CostOriginType as _CostOriginType on $projection.DomainValue = _CostOriginType.DomainValue
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )           as Language,
      @ObjectModel.text.element: ['CostOriginTypeName']
  key cast( dd07t.domvalue_l as hrktyp )                          as CostOriginType,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( ddtext as fpc_cost_origin_type_name preserving type ) as CostOriginTypeName,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                            as DomainValue,

      _CostOriginType,
      _Language
}
where
      dd07t.domname  = 'HRKTYP'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
