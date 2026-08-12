---
name: I_CMMDTYCATEGORY
description: "Commodity Category"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORY')/$value
semantic_en: "Commodity Category"
semantic_vi: "Commodity Category — CDS view giao diện dựa trên trcots_cty_cat."
keywords:
  - "commodity"
  - "category"
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
# I_CMMDTYCATEGORY

**Commodity Category**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CMM-RSK` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityCategory` | ✓ | |  | `commodity_cat` | `CHAR(3)` | Commodity Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CmmdtyCategoryText` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYCATEGORY')/$value)*

```abap
@EndUserText.label: 'Commodity Category'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED  //or #CHECK
@AbapCatalog.sqlViewName: 'ICMMDTYCATEGORY'
@ObjectModel.representativeKey: 'CommodityCategory'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_CmmdtyCategory
   as select from trcots_cty_cat

   association [1..*] to I_CmmdtyCategoryText as _Text
       on $projection.CommodityCategory = _Text.CommodityCategory
{
@ObjectModel.text.association: '_Text'

    key commodity_cat as CommodityCategory,
    _Text
}
```
