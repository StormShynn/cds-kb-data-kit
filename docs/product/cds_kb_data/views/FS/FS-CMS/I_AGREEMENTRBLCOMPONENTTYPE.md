---
name: I_AGREEMENTRBLCOMPONENTTYPE
description: "Agreement Rbl Component Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLCOMPONENTTYPE')/$value
semantic_en: "Agreement Rbl Component Type"
semantic_vi: "Agreement Rbl Component Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "rbl"
  - "component"
  - "type"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRBLCOMPONENTTYPE

**Agreement Rbl Component Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLCOMPONENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementRblComponentType` | ✓ | |  | `cast(substring(domvalue_l, 1, 3) as cms_dte_cag_rbl_rbl_comp_typ preserving type )` | `CHAR(3)` | CComponent Type of a Receivable |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementRblComponentTypeTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLCOMPONENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRBLCOMPONENTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGRBLCOMTYP',
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
    representativeKey: 'AgreementRblComponentType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Rbl Component Type'
define view I_AgreementRblComponentType
  as select from dd07l
  association [0..*] to I_AgreementRblComponentTypeTxt as _Text on $projection.AgreementRblComponentType = _Text.AgreementRblComponentType
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 3) as cms_dte_cag_rbl_rbl_comp_typ preserving type ) as AgreementRblComponentType,

      _Text
}
where
      dd07l.domname  = 'CMS_RBL_COMPONENT_TYP'
  and dd07l.as4local = 'A'
```
