---
name: I_AGREEMENTPORTIONRBLTYPETEXT
description: "Agreement Portion Receivable Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPETEXT')/$value
semantic_en: "Agreement Portion Receivable Type - Text"
semantic_vi: "Agreement Portion Receivable Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "agreement"
  - "portion"
  - "receivable"
  - "type"
  - "text"
  - "language"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTIONRBLTYPETEXT

**Agreement Portion Receivable Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `AgreementPortionRblType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lnk_rbl_typ preserving type )` | `CHAR(2)` | Indicator for Receivable Type |
| `AgreementPortionRblTypeText` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_AgreementPortionRblType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementPortionRblType` | `I_AgreementPortionRblType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGPORRBLTYPTXT',
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
    representativeKey: 'AgreementPortionRblType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Receivable Type - Text'
define view I_AgreementPortionRblTypeText
  as select from dd07t
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_AgreementPortionRblType as _AgreementPortionRblType on $projection.AgreementPortionRblType = _AgreementPortionRblType.AgreementPortionRblType
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key ddlanguage                                                                        as Language,
      @ObjectModel.foreignKey.association: '_AgreementPortionRblType'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lnk_rbl_typ preserving type ) as AgreementPortionRblType,
      @Semantics.text: true
      ddtext                                                                            as AgreementPortionRblTypeText,

      _Language,
      _AgreementPortionRblType
}
where
      dd07t.domname  = 'CMS_IND_RBL_TYP'
  and dd07t.as4local = 'A'
```
