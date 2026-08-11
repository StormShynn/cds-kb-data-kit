---
name: I_AGREEMENTPORTIONASSGMTROLE
description: "Agreement Portion Assignment Role"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONASSGMTROLE')/$value
semantic_en: "Agreement Portion Assignment Role"
semantic_vi: "Agreement Portion Assignment Role — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "portion"
  - "assignment"
  - "role"
  - "assgmt"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTIONASSGMTROLE

**Agreement Portion Assignment Role**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONASSGMTROLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionAssgmtRole` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_asgmt preserving type )` | `CHAR(2)` | Role in which Collateral Agreement Portion is Assigned |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgrmtPortionAssgmtRoleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONASSGMTROLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONASSGMTROLE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPORASGMTR',
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
    representativeKey: 'AgreementPortionAssgmtRole'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Assignment Role'
define view I_AgreementPortionAssgmtRole
  as select from dd07l
  association [0..*] to I_AgrmtPortionAssgmtRoleText as _Text on $projection.AgreementPortionAssgmtRole = _Text.AgreementPortionAssgmtRole
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_ind_cag_por_asgmt preserving type ) as AgreementPortionAssgmtRole,

      _Text
}
where
      dd07l.domname  = 'CMS_IND_CAG_POR_ASGMT'
  and dd07l.as4local = 'A'
```
