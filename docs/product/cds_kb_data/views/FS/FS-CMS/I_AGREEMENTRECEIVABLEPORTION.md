---
name: I_AGREEMENTRECEIVABLEPORTION
description: "Agreement Receivable Portion"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLEPORTION')/$value
semantic_en: "Agreement Receivable Portion"
semantic_vi: "Agreement Receivable Portion — CDS view giao diện dựa trên dd07l."
keywords:
  - "agreement"
  - "receivable"
  - "portion"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTRECEIVABLEPORTION

**Agreement Receivable Portion**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLEPORTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementReceivablePortion` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as cms_dte_cag_rbl_rbl_portion preserving type )` | `CHAR(2)` | Portion of the Receivable |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementRblPortionText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLEPORTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTRECEIVABLEPORTION')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGRBLPOR',
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
    representativeKey: 'AgreementReceivablePortion'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Receivable Portion'
define view I_AgreementReceivablePortion
  as select from dd07l
  association [0..*] to I_AgreementRblPortionText as _Text on $projection.AgreementReceivablePortion = _Text.AgreementReceivablePortion
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 2) as cms_dte_cag_rbl_rbl_portion preserving type ) as AgreementReceivablePortion,

      _Text
}
where
      dd07l.domname  = 'CMS_RBL_PORTION'
  and dd07l.as4local = 'A'
```
