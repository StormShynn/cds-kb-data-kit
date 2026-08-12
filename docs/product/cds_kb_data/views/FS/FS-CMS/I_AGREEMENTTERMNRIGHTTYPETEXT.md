---
name: I_AGREEMENTTERMNRIGHTTYPETEXT
description: "Agreement Termination Right Type - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPETEXT')/$value
semantic_en: "Agreement Termination Right Type - Text"
semantic_vi: "Agreement Termination Right Type - Text — CDS view giao diện dựa trên tcms_cag_trtyp_t."
keywords:
  - "agreement"
  - "termination"
  - "right"
  - "type"
  - "text"
  - "termn"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTERMNRIGHTTYPETEXT

**Agreement Termination Right Type - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementTermnRightType` | ✓ | |  | `term_right_typ` | `CHAR(6)` | Termination Right Type |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `AgreementTermnRightTypeText` |  | |  | `name` | `CHAR(40)` | Name of Termination Right Type in the Specified Language |
| `_Language` | | ✓ | | | | |
| `_AgreementTermnRightType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_AgreementTermnRightType` | `I_AgreementTermnRightType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTERMNRIGHTTYPETEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICAGTRTYPETXT',
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
    representativeKey: 'AgreementTermnRightType'
}
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Termination Right Type - Text'
define view I_AgreementTermnRightTypeText
  as select from tcms_cag_trtyp_t
  association [0..1] to I_Language                as _Language                on $projection.Language = _Language.Language
  association [0..1] to I_AgreementTermnRightType as _AgreementTermnRightType on $projection.AgreementTermnRightType = _AgreementTermnRightType.AgreementTermnRightType
{
      @ObjectModel.foreignKey.association: '_AgreementTermnRightType'
  key term_right_typ as AgreementTermnRightType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language       as Language,
      @Semantics.text: true
      name           as AgreementTermnRightTypeText,

      _Language,
      _AgreementTermnRightType
}
```
