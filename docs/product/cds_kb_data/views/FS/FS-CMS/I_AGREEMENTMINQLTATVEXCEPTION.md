---
name: I_AGREEMENTMINQLTATVEXCEPTION
description: "Agreement Minimum Qualitative Exception"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVEXCEPTION')/$value
semantic_en: "Agreement Minimum Qualitative Exception"
semantic_vi: "Agreement Minimum Qualitative Exception — CDS view giao diện dựa trên tcms_cag_mqexp."
keywords:
  - "agreement"
  - "minimum"
  - "qualitative"
  - "exception"
  - "colltrl"
  - "agrmt"
  - "qltatv"
  - "excptn"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTMINQLTATVEXCEPTION

**Agreement Minimum Qualitative Exception**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVEXCEPTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlAgrmtMinQltatvExcptn` | ✓ | |  | `min_ql_excep_typ` | `CHAR(6)` | Exceptions for Minimum Risk Weight |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementMinQltatvExcptnText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVEXCEPTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTMINQLTATVEXCEPTION')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGMINQEXP',
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
    representativeKey: 'ColltrlAgrmtMinQltatvExcptn'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Minimum Qualitative Exception'
define view I_AgreementMinQltatvException
  as select from tcms_cag_mqexp
  association [0..*] to I_AgreementMinQltatvExcptnText as _Text on $projection.ColltrlAgrmtMinQltatvExcptn = _Text.ColltrlAgrmtMinQltatvExcptn
{
      @ObjectModel.text.association: '_Text'
  key min_ql_excep_typ as ColltrlAgrmtMinQltatvExcptn,

      _Text
}
```
