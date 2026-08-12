---
name: I_TRDCLASSFCTNNMBRSCHM
description: "Numbering Scheme"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
