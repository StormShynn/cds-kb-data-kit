---
name: I_AGREEMENTMINQLTATVCRITERIA
description: "Agreement Minimum Qualitative Criteria"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITERIA')/$value
semantic_en: "Agreement Minimum Qualitative Criteria"
semantic_vi: "Agreement Minimum Qualitative Criteria — CDS view giao diện dựa trên tcms_cag_mqcrt."
keywords:
  - "agreement"
  - "minimum"
  - "qualitative"
  - "criteria"
  - "colltrl"
  - "agrmt"
  - "qltatv"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTMINQLTATVCRITERIA

**Agreement Minimum Qualitative Criteria**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITERIA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlAgrmtMinQltatvCriteria` | ✓ | |  | `min_ql_criterion` | `CHAR(6)` | MInimum Qualitative Criterion |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementMinQltatvCritraTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITERIA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVCRITERIA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGMINQCRT',
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
    representativeKey: 'ColltrlAgrmtMinQltatvCriteria'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Minimum Qualitative Criteria'
define view I_AgreementMinQltatvCriteria
  as select from tcms_cag_mqcrt
  association [0..*] to I_AgreementMinQltatvCritraTxt as _Text on $projection.ColltrlAgrmtMinQltatvCriteria = _Text.ColltrlAgrmtMinQltatvCriteria
{
      @ObjectModel.text.association: '_Text'
  key min_ql_criterion as ColltrlAgrmtMinQltatvCriteria,

      _Text
}
```
