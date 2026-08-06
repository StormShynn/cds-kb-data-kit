---
name: I_SALESORDERTYPETEXT
description: Sales OrderTYPETEXT
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - text-view
  - sales-order
  - text
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERTYPETEXT

**Sales OrderTYPETEXT**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrderType` | `SalesOrderType.SalesOrderType` |
| key `Language` | `Text.Language` |
| `SalesOrderTypeName` | `cast( Text.SalesDocumentTypeName as sd_sales_order_type_name preserving type )` |
| `_SalesOrderType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderType` | `I_SalesOrderType` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Consumption.ranked: true
@EndUserText.label: 'Sales Order Type - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.representativeKey: 'SalesOrderType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_SalesOrderTypeText
  as select from I_SalesDocumentTypeText as Text
    inner join   I_SalesOrderType        as SalesOrderType on Text.SalesDocumentType = SalesOrderType.SalesOrderType

  association [0..1] to I_SalesOrderType as _SalesOrderType on $projection.SalesOrderType = _SalesOrderType.SalesOrderType

{
      @ObjectModel.foreignKey.association: '_SalesOrderType'
      @ObjectModel.text.element: ['SalesOrderTypeName']
  key SalesOrderType.SalesOrderType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Text.Language,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.9,
        ranking: #LOW }
      @Semantics.text: true
      cast( Text.SalesDocumentTypeName as sd_sales_order_type_name preserving type ) as SalesOrderTypeName,

      _SalesOrderType,
      Text._Language
}
```
