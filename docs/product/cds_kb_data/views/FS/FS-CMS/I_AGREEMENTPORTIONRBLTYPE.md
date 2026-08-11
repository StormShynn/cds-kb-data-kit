---
name: I_AGREEMENTPORTIONRBLTYPE
description: "Agreement Portion Receivable Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPE')/$value
semantic_en: "Agreement Portion Receivable Type"
semantic_vi: "Agreement Portion Receivable Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "portion"
  - "receivable"
  - "type"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTIONRBLTYPE

**Agreement Portion Receivable Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionRblType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lnk_rbl_typ preserving type )` | `CHAR(2)` | Indicator for Receivable Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementPortionRblTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONRBLTYPE')/$value)*

```abap
@AbapCatalog: {
     sqlViewName: 'ICAGPORRBLTYP',
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
    representativeKey: 'AgreementPortionRblType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Receivable Type'
define view I_AgreementPortionRblType
  as select from dd07l
  association [0..*] to I_AgreementPortionRblTypeText as _Text on $projection.AgreementPortionRblType = _Text.AgreementPortionRblType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_lnk_rbl_typ preserving type ) as AgreementPortionRblType,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_RBL_TYP'
  and dd07l.as4local = 'A'
```
