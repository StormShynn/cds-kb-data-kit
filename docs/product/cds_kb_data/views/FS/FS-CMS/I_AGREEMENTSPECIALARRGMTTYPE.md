---
name: I_AGREEMENTSPECIALARRGMTTYPE
description: "Agreement Special Arrangement Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRGMTTYPE')/$value
semantic_en: "Agreement Special Arrangement Type"
semantic_vi: "Agreement Special Arrangement Type — CDS view giao diện dựa trên tcms_cag_sa_ty."
keywords:
  - "agreement"
  - "special"
  - "arrangement"
  - "type"
  - "arrgmt"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTSPECIALARRGMTTYPE

**Agreement Special Arrangement Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRGMTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementSpecialArrgmtType` | ✓ | |  | `sa_type` | `CHAR(6)` | Special Arrangement Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementSpclArrgmtTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRGMTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTSPECIALARRGMTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGSATYPE',
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
    representativeKey: 'AgreementSpecialArrgmtType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Special Arrangement Type'
define view I_AgreementSpecialArrgmtType
  as select from tcms_cag_sa_ty
  association [0..*] to I_AgreementSpclArrgmtTypeText as _Text on $projection.AgreementSpecialArrgmtType = _Text.AgreementSpecialArrgmtType
{
      @ObjectModel.text.association: '_Text'
  key sa_type as AgreementSpecialArrgmtType,

      _Text
}
```
