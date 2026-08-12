---
name: I_CMMDTYPRICEFIXATIONSTATUST
description: "Commodity Price Fixation Status - Text"
app_component: FIN-FSCM-CMM-RSK
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUST')/$value
semantic_en: "Commodity Price Fixation Status - Text"
semantic_vi: "Commodity Price Fixation Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "commodity"
  - "price"
  - "fixation"
  - "status"
  - "text"
  - "language"
  - "cmmdty"
  - "name"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CMM-RSK
  - FIN-FSCM
  - FIN-FSCM-CMM
  - FIN-FSCM-CMM-RSK
  - interface-view
  - lob:finance
  - lob:sourcing & procurement
---
# I_CMMDTYPRICEFIXATIONSTATUST

**Commodity Price Fixation Status - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CommodityPriceFixationStatus` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as ftr_fixing_status )` | `CHAR(1)` | Fixation Status (OBSOLETE) |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `CmmdtyPriceFixationStatusName` |  | |  | `cast( ddtext as val_text )` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_CommodityPriceFixationStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CommodityPriceFixationStatus` | `I_CmmdtyPriceFixationStatus` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CMMDTYPRICEFIXATIONSTATUST')/$value)*

```abap
@EndUserText.label: 'Commodity Price Fixation Status - Text'
@Analytics.dataCategory: #DIMENSION
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ICMMDTYPRFIXSTST'
@ObjectModel.representativeKey: 'CommodityPriceFixationStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.preserveKey: true

define view I_CmmdtyPriceFixationStatusT
   as select from dd07t
   association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
   association [1..1] to I_CmmdtyPriceFixationStatus as _CommodityPriceFixationStatus
      on $projection.CommodityPriceFixationStatus = _CommodityPriceFixationStatus.CommodityPriceFixationStatus
{
    key cast ( substring( domvalue_l, 1, 1 ) as ftr_fixing_status ) as CommodityPriceFixationStatus,
    @Semantics.language
    key ddlanguage as Language,
    @Semantics.text
    cast( ddtext as val_text ) as CmmdtyPriceFixationStatusName,
    _CommodityPriceFixationStatus,
    _Language
}
where domname = 'FTR_FIXING_STATUS'
  and as4local = 'A'
```
