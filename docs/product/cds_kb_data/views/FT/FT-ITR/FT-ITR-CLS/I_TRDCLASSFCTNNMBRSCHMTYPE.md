---
name: I_TRDCLASSFCTNNMBRSCHMTYPE
description: "Numbering Scheme Type"
app_component: FT-ITR-CLS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPE')/$value
semantic_en: "Numbering Scheme Type"
semantic_vi: "Numbering Scheme Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "numbering"
  - "scheme"
  - "type"
  - "classfctn"
  - "nmbr"
  - "schm"
tags:
  - FT
  - component:FT-ITR-CLS
  - FT-ITR
  - FT-ITR-CLS
  - interface-view
---
# I_TRDCLASSFCTNNMBRSCHMTYPE

**Numbering Scheme Type**

| Property | Value |
|---|---|
| App Component | `FT-ITR-CLS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TrdClassfctnNmbrSchmType` | ✓ | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TrdClassfctnNmbrSchmTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDCLASSFCTNNMBRSCHMTYPE')/$value)*

```abap
@EndUserText.label: 'Numbering Scheme Type'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ITRDCLSNSTYP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'TrdClassfctnNmbrSchmType'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: 'L'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, 
                                        #CDS_MODELING_ASSOCIATION_TARGET  ]
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_TrdClassfctnNmbrSchmType
  as select from dd07l
  association [0..*] to I_TrdClassfctnNmbrSchmTypeText as _Text on $projection.TrdClassfctnNmbrSchmType = _Text.TrdClassfctnNmbrSchmType
{
      @ObjectModel.text.association: '_Text'
  key domvalue_l as TrdClassfctnNmbrSchmType,

      _Text
}
where
      domname  = '/SAPSLL/CTSTY'
  and as4local = 'A'
```
