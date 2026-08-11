---
name: I_AGREEMENTPORTIONBLOCKINGTYPE
description: "Agreement Portion Blocking Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGTYPE')/$value
semantic_en: "Agreement Portion Blocking Type"
semantic_vi: "Agreement Portion Blocking Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "portion"
  - "blocking"
  - "type"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTIONBLOCKINGTYPE

**Agreement Portion Blocking Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionBlockingType` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_blk_typ preserving type )` | `CHAR(2)` | Blocking Category for Collateral Agreement Portion |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgrmtPortionBlockingTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPORBLKG',
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
    representativeKey: 'AgreementPortionBlockingType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Blocking Type'
define view I_AgreementPortionBlockingType
  as select from dd07l
  association [0..*] to I_AgrmtPortionBlockingTypeText as _Text on $projection.AgreementPortionBlockingType = _Text.AgreementPortionBlockingType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_blk_typ preserving type ) as AgreementPortionBlockingType,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_BLK_TYP'
  and dd07l.as4local = 'A'
```
