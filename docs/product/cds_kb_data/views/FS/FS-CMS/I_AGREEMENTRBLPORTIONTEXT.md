---
name: I_AGREEMENTRBLPORTIONTEXT
description: "Agreement Receivable Portion - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLPORTIONTEXT')/$value
semantic_en: "Agreement Receivable Portion - Text"
semantic_vi: "Agreement Receivable Portion - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agreement"
  - "receivable"
  - "portion"
  - "text"
  - "language"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRBLPORTIONTEXT

**Agreement Receivable Portion - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLPORTIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgreementReceivablePortion` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_cag_rbl_rbl_portion preserving type )` | `CHAR(2)` | Portion of the Receivable |
| `AgreementRblPortionText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgreementReceivablePortion` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementReceivablePortion` | `I_AgreementReceivablePortion` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLPORTIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLPORTIONTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGRBLPORTXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'AgreementReceivablePortion'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Receivable Portion - Text'
define view I_AgreementRblPortionText
  as select from dd07t
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association [0..1] to I_AgreementReceivablePortion as _AgreementReceivablePortion on $projection.AgreementReceivablePortion = _AgreementReceivablePortion.AgreementReceivablePortion
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                        as Language,
      @ObjectModel.foreignKey.association: '_AgreementReceivablePortion'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_cag_rbl_rbl_portion preserving type ) as AgreementReceivablePortion,
      @Semantics.text: true
      ddtext                                                                            as AgreementRblPortionText,

      _Language,
      _AgreementReceivablePortion
}
where
      dd07t.domname  = 'CMS_RBL_PORTION'
  and dd07t.as4local = 'A'
```
