---
name: I_CMMDTY
description: "Commodity"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTY')/$value
semantic_en: "Commodity"
semantic_vi: "Commodity — CDS view giao diện dựa trên tbac_physcomm."
keywords:
  - "commodity"
  - "unit"
  - "type"
  - "category"
  - "first"
  - "cust"
  - "specific"
  - "cmmdty"
  - "group"
tags:
  - FIN
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_CMMDTY

**Commodity**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Commodity` | ✓ | |  | `commodity` | `CHAR(18)` | Commodity |
| `CommodityUnit` |  | |  | `uom` | `UNIT(3)` | Unit of Measure of Commodity |
| `CommodityType` |  | |  | `commodity_type` | `CHAR(3)` | Type of Commodity |
| `CommodityCategory` |  | |  | `commodity_cat` | `CHAR(3)` | Commodity Category |
| `FirstCustSpecificCmmdtyGroup` |  | |  | `group1` | `CHAR(3)` | Commodity Group1 |
| `SecondCustSpecificCmmdtyGroup` |  | |  | `group2` | `CHAR(3)` | Commodity Group2 |
| `_Text` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_Type` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |
| `_FirstGroup` | | ✓ | | | | |
| `_SecondGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CmmdtyText` | [0..*] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_Type` | `I_CmmdtyType` | [0..1] |
| `_Category` | `I_CmmdtyCategory` | [0..1] |
| `_FirstGroup` | `I_FirstCmmdtyGroup` | [0..1] |
| `_SecondGroup` | `I_SecondCmmdtyGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTY')/$value)*

```abap
@EndUserText.label: 'Commodity'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ICMMDTY'
@ObjectModel.representativeKey: 'Commodity'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey: true

define view I_Cmmdty
   as select from tbac_physcomm

   association [0..*] to I_CmmdtyText as _Text
       on $projection.Commodity = _Text.Commodity
   association [0..1] to I_UnitOfMeasure as _UnitOfMeasure
       on $projection.CommodityUnit = _UnitOfMeasure.UnitOfMeasure
   association [0..1] to I_CmmdtyType as _Type
       on $projection.CommodityType = _Type.CommodityType
   association [0..1] to I_CmmdtyCategory as _Category
       on $projection.CommodityCategory = _Category.CommodityCategory
   association [0..1] to I_FirstCmmdtyGroup as _FirstGroup
       on $projection.FirstCustSpecificCmmdtyGroup = _FirstGroup.FirstCustSpecificCmmdtyGroup
   association [0..1] to I_SecondCmmdtyGroup as _SecondGroup
       on $projection.SecondCustSpecificCmmdtyGroup = _SecondGroup.SecondCustSpecificCmmdtyGroup
{
@ObjectModel.text.association: '_Text'
    key commodity      as Commodity,
        @Semantics.unitOfMeasure: true
        uom            as CommodityUnit,
        commodity_type as CommodityType,
        commodity_cat  as CommodityCategory,
        group1         as FirstCustSpecificCmmdtyGroup,
        group2         as SecondCustSpecificCmmdtyGroup,
        _Text,
        _UnitOfMeasure,
        _Type,
        _Category,
        _FirstGroup,
        _SecondGroup
}
```
