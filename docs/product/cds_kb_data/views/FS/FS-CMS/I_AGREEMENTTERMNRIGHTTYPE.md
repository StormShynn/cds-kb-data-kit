---
name: I_AGREEMENTTERMNRIGHTTYPE
description: "Agreement Termination Right Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPE')/$value
semantic_en: "Agreement Termination Right Type"
semantic_vi: "Agreement Termination Right Type — CDS view giao diện dựa trên tcms_cag_trtyp."
keywords:
  - "agreement"
  - "termination"
  - "right"
  - "type"
  - "termn"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTERMNRIGHTTYPE

**Agreement Termination Right Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementTermnRightType` | ✓ | |  | `term_right_typ` | `CHAR(6)` | Termination Right Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementTermnRightTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGTRTYPE',
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
    representativeKey: 'AgreementTermnRightType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Termination Right Type'
define view I_AgreementTermnRightType
  as select from tcms_cag_trtyp
  association [0..*] to I_AgreementTermnRightTypeText as _Text on $projection.AgreementTermnRightType = _Text.AgreementTermnRightType
{
      @ObjectModel.text.association: '_Text'
  key term_right_typ as AgreementTermnRightType,

      _Text
}
```
