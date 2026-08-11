---
name: I_COLLTRLREFIXTUREFITTINGTYPE
description: "Fixture and Fitting Type for Colltrl RE"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFIXTUREFITTINGTYPE')/$value
semantic_en: "Fixture and Fitting Type for Colltrl RE"
semantic_vi: "Fixture and Fitting Type for Colltrl RE — CDS view giao diện dựa trên tcms_re_fx_fit."
keywords:
  - "fixture"
  - "and"
  - "fitting"
  - "type"
  - "for"
  - "colltrl"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLREFIXTUREFITTINGTYPE

**Fixture and Fitting Type for Colltrl RE**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFIXTUREFITTINGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREFixtureFittingType` | ✓ | |  | `fix_fitting_type` | `CHAR(6)` | Fixtures and Fittings Type ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ColltrlREFxtreFttgTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFIXTUREFITTINGTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLREFIXTUREFITTINGTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICREFIXFITTYPE',
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
    representativeKey: 'ColltrlREFixtureFittingType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Fixture and Fitting Type for Colltrl RE'
define view I_ColltrlREFixtureFittingType
  as select from tcms_re_fx_fit
  association [0..*] to I_ColltrlREFxtreFttgTypeText as _Text on $projection.ColltrlREFixtureFittingType = _Text.ColltrlREFixtureFittingType
{
      @ObjectModel.text.association: '_Text'
  key fix_fitting_type as ColltrlREFixtureFittingType,

      _Text
}
```
