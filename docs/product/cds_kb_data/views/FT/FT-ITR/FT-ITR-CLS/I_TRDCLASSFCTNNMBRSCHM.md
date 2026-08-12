---
name: I_TRDCLASSFCTNNMBRSCHM
description: "Numbering Scheme"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHM')/$value
semantic_en: "Numbering Scheme"
semantic_vi: "Numbering Scheme — CDS view giao diện dựa trên Numbering Scheme."
keywords:
  - "numbering"
  - "scheme"
  - "classfctn"
  - "nmbr"
  - "schm"
  - "type"
  - "nmbrng"
  - "srce"
  - "distribution"
tags:
  - FT
  - component:FT-ITR-CLS
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
---
# I_TRDCLASSFCTNNMBRSCHM

**Numbering Scheme**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdClassfctnNmbrSchm` | ✓ | |  | `stcts` | `CHAR(10)` | Trade Classification Numbering Scheme |
| `TrdClassfctnNmbrSchmType` |  | |  | `ctsty` | `CHAR(2)` | Type of Numbering Scheme |
| `TrdClassfctnNmbrngSchmSrceType` |  | |  | `rccls` | `CHAR(1)` | Receiving of Classification |
| `TrdClassfctnDistributionType` |  | |  | `dscls` | `CHAR(1)` | Distribution of Classification |
| `_TrdClassfctnNmbrSchmText` | | ✓ | | | | |
| `_TrdClassfctnNmbrSchmTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdClassfctnNmbrSchmText` | `I_TrdClassfctnNmbrSchmText` | [0..*] |
| `_TrdClassfctnNmbrSchmTypeText` | `I_TrdClassfctnNmbrSchmTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHM')/$value)*

```abap
@EndUserText.label: 'Numbering Scheme'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ITRDCLSNS'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'TrdClassfctnNmbrSchm'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: false
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #SINGLE
@ObjectModel.usageType.sizeCategory: 'M'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
define view I_TrdClassfctnNmbrSchm
  as select from /sapsll/tdnos
  association [0..*] to I_TrdClassfctnNmbrSchmText     as _TrdClassfctnNmbrSchmText     on $projection.TrdClassfctnNmbrSchm = _TrdClassfctnNmbrSchmText.TrdClassfctnNmbrSchm
  association [0..*] to I_TrdClassfctnNmbrSchmTypeText as _TrdClassfctnNmbrSchmTypeText on $projection.TrdClassfctnNmbrSchmType = _TrdClassfctnNmbrSchmTypeText.TrdClassfctnNmbrSchmType
{
      @ObjectModel.text.association: '_TrdClassfctnNmbrSchmText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key stcts as TrdClassfctnNmbrSchm,
      @ObjectModel.text.association: '_TrdClassfctnNmbrSchmTypeText'
      ctsty as TrdClassfctnNmbrSchmType,
      rccls as TrdClassfctnNmbrngSchmSrceType,
      dscls as TrdClassfctnDistributionType,

      _TrdClassfctnNmbrSchmText,
      _TrdClassfctnNmbrSchmTypeText
}
```
