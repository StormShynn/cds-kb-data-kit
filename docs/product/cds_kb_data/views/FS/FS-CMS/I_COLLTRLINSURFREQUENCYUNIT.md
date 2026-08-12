---
name: I_COLLTRLINSURFREQUENCYUNIT
description: "Frequency Unit for Collateral Insurance"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFREQUENCYUNIT')/$value
semantic_en: "Frequency Unit for Collateral Insurance"
semantic_vi: "Frequency Unit for Collateral Insurance — CDS view giao diện dựa trên dd07l."
keywords:
  - "frequency"
  - "unit"
  - "for"
  - "collateral"
  - "insurance"
  - "colltrl"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLINSURFREQUENCYUNIT

**Frequency Unit for Collateral Insurance**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFREQUENCYUNIT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlInsuranceFrequencyUnit` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ins_freq_unit preserving type )` | `CHAR(2)` | Indicator: Units of time for revaluation |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlInsurFrqcyUnitText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFREQUENCYUNIT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLINSURFREQUENCYUNIT')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICINSURFRQCYUNIT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'ColltrlInsuranceFrequencyUnit'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Frequency Unit for Collateral Insurance'
define view I_ColltrlInsurFrequencyUnit
  as select from dd07l
  association [0..*] to I_ColltrlInsurFrqcyUnitText as _Text on $projection.ColltrlInsuranceFrequencyUnit = _Text.ColltrlInsuranceFrequencyUnit
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ins_freq_unit preserving type ) as ColltrlInsuranceFrequencyUnit,

      _Text
}
where
      dd07l.domname  = 'CMS_INS_IND_FREQ_UNT'
  and dd07l.as4local = 'A'
```
