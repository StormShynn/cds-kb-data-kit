---
name: I_TRDCLASSFCTNNMBRSCHMUSGE
description: "Numbering Scheme Usage"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMUSGE')/$value
semantic_en: "Numbering Scheme Usage"
semantic_vi: "Numbering Scheme Usage — CDS view giao diện dựa trên Numbering Scheme Usage."
keywords:
  - "numbering"
  - "scheme"
  - "usage"
  - "classfctn"
  - "nmbr"
  - "schm"
  - "type"
  - "country"
tags:
  - FT
  - component:FT-ITR-CLS
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
---
# I_TRDCLASSFCTNNMBRSCHMUSGE

**Numbering Scheme Usage**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMUSGE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdClassfctnNmbrSchmType` | ✓ | |  | `ctsty` | `CHAR(2)` | Type of Numbering Scheme |
| `Country` | ✓ | |  | `land1` | `CHAR(3)` | Country/Region |
| `TrdClassfctnNmbrSchm` |  | |  | `stcts` | `CHAR(10)` | Trade Classification Numbering Scheme |
| `_TrdClassfctnNmbrSchmType` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchmTypeText` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_CountryText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdClassfctnNmbrSchmType` | `I_TrdClassfctnNmbrSchmType` | [0..1] |
| `_TrdClassfctnNmbrSchmTypeText` | `I_TrdClassfctnNmbrSchmTypeText` | [0..*] |
| `_Country` | `I_Country` | [0..1] |
| `_CountryText` | `I_CountryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMUSGE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMUSGE')/$value)*

```abap
@EndUserText.label: 'Numbering Scheme Usage'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ITRDCLSNSU'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'TrdClassfctnNmbrSchmType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #SINGLE
@ObjectModel.usageType.sizeCategory: 'M'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
define view I_TrdClassfctnNmbrSchmUsge
  as select from /sapsll/tunos
  association [0..1] to I_TrdClassfctnNmbrSchmType     as _TrdClassfctnNmbrSchmType     on $projection.TrdClassfctnNmbrSchmType = _TrdClassfctnNmbrSchmType.TrdClassfctnNmbrSchmType
  association [0..*] to I_TrdClassfctnNmbrSchmTypeText as _TrdClassfctnNmbrSchmTypeText on $projection.TrdClassfctnNmbrSchmType = _TrdClassfctnNmbrSchmTypeText.TrdClassfctnNmbrSchmType
  association [0..1] to I_Country                      as _Country                      on $projection.Country = _Country.Country
  association [0..*] to I_CountryText                  as _CountryText                  on $projection.Country = _CountryText.Country
{
      @ObjectModel.foreignKey.association: '_TrdClassfctnNmbrSchmType'
      @ObjectModel.text.association: '_TrdClassfctnNmbrSchmTypeText'
  key ctsty as TrdClassfctnNmbrSchmType,
      @ObjectModel.foreignKey.association: '_Country'
      @ObjectModel.text.association: '_CountryText'
  key land1 as Country,
      stcts as TrdClassfctnNmbrSchm,

      _TrdClassfctnNmbrSchmType,
      _TrdClassfctnNmbrSchmTypeText,
      _Country,
      _CountryText
}
```
