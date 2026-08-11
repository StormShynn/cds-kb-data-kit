---
name: I_AGREEMENTTYPE
description: "Agreement Type"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPE')/$value
semantic_en: "Agreement Type"
semantic_vi: "Agreement Type — CDS view giao diện dựa trên tcms_cag_typ."
keywords:
  - "agreement"
  - "type"
  - "collateral"
  - "process"
  - "control"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTTYPE

**Agreement Type**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralAgreementType` | ✓ | |  | `cagmt_type` | `CHAR(6)` | Collateral Agreement Type |
| `CollateralProcessControlKey` |  | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `_Text` | | ✓ | | | | |
| `_CollateralProcessControlKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementTypeText` | [0..*] |
| `_CollateralProcessControlKey` | `I_CollateralProcessControlKey` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTTYPE')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGTYPE',
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
    representativeKey: 'CollateralAgreementType'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Type'
define view I_AgreementType
  as select from tcms_cag_typ
  association [0..*] to I_AgreementTypeText           as _Text                        on  $projection.CollateralAgreementType = _Text.CollateralAgreementType
  association [0..1] to I_CollateralProcessControlKey as _CollateralProcessControlKey on  _CollateralProcessControlKey.CollateralProcessCtrlObj = 'CAG'
                                                                                      and $projection.CollateralProcessControlKey               = _CollateralProcessControlKey.CollateralProcessControlKey
{
      @ObjectModel.text.association: '_Text'
  key cagmt_type as CollateralAgreementType,
      @ObjectModel.foreignKey.association: '_CollateralProcessControlKey'
      proc_cky   as CollateralProcessControlKey,

      _Text,
      _CollateralProcessControlKey
}
```
