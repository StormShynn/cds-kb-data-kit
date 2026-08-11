---
name: I_ORDERPROCESSINGGROUPTEXT
description: "Order Processing Group - Text"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUPTEXT')/$value
semantic_en: "Order Processing Group - Text"
semantic_vi: "Order Processing Group - Text — CDS view giao diện dựa trên tko09."
keywords:
  - "order"
  - "processing"
  - "group"
  - "text"
  - "language"
  - "controlling"
  - "area"
  - "name"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
  - order
---
# I_ORDERPROCESSINGGROUPTEXT

**Order Processing Group - Text**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ControllingArea` | ✓ | |  | `kokrs` | `CHAR(4)` | Controlling Area |
| `OrderProcessingGroup` | ✓ | |  | `abkrs` | `NUMC(2)` | Processing Group |
| `OrderProcessingGroupName` |  | |  | `cast(aktxt as fis_abkrs_name)` | `CHAR(40)` | Order Processing Group Name |
| `_Language` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ORDERPROCESSINGGROUPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIORDPROCGGRPT'
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: false
@EndUserText.label: 'Order Processing Group - Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OrderProcessingGroup'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.buffering: {type: #GENERIC, numberOfKeyFields: 1, status: #ACTIVE}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]

define view I_OrderProcessingGroupText
  as select from tko09
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [0..1] to I_ControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                         as Language,
      @ObjectModel.foreignKey.association: '_ControllingArea'
  key kokrs                         as ControllingArea,
  key abkrs                         as OrderProcessingGroup,

      @Semantics.text: true
      cast(aktxt as fis_abkrs_name) as OrderProcessingGroupName,

      _Language,
      _ControllingArea

}
```
