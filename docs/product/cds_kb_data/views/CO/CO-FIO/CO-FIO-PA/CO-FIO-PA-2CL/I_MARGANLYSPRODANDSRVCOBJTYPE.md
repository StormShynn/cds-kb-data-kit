---
name: I_MARGANLYSPRODANDSRVCOBJTYPE
description: "Product and Service Object Type"
app_component: CO-FIO-PA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPE')/$value
semantic_en: "Product and Service Object Type"
semantic_vi: "Product And Service Object Type — CDS view giao diện dựa trên tbo00."
keywords:
  - "product"
  - "and"
  - "service"
  - "object"
  - "type"
  - "margin"
  - "analysis"
tags:
  - CO
  - bo:material
  - CO-FIO
  - CO-FIO-PA
  - CO-FIO-PA-2CL
  - component:CO-FIO-PA-2CL
  - interface-view
  - lob:controlling
  - lob:finance
  - product
---
# I_MARGANLYSPRODANDSRVCOBJTYPE

**Product and Service Object Type**

| Property | Value |
|---|---|
| App Component | `CO-FIO-PA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MarginAnalysisObjectType` | ✓ | |  | `cast(obart as j_obart preserving type )` | `CHAR(2)` | Object Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MargAnlysProdAndSrvcObjTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MARGANLYSPRODANDSRVCOBJTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPROSRVOBJTYPE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
//@AccessControl.authorizationCheck:#CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Product And Service Object Type'
@ObjectModel.representativeKey: 'MarginAnalysisObjectType'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass:  #META
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@Search.searchable: true
define view I_MargAnlysProdAndSrvcObjType as select from tbo00
  association [0..*] to I_MargAnlysProdAndSrvcObjTypeT as _Text on $projection.MarginAnalysisObjectType = _Text.MarginAnalysisObjectType
{
  @Search.defaultSearchElement: true
  @ObjectModel.text.association: '_Text'
  key cast(obart as j_obart preserving type ) as MarginAnalysisObjectType,
  _Text
}
where 
  obart = 'PR' or
  obart = 'EO' or
  obart = 'SV' or
  obart = 'SC' or
  obart = 'PD' or
  obart = 'OR'
```
