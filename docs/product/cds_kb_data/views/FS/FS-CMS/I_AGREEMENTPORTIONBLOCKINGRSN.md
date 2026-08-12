---
name: I_AGREEMENTPORTIONBLOCKINGRSN
description: "Agreement Portion Blocking Reason"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGRSN')/$value
semantic_en: "Agreement Portion Blocking Reason"
semantic_vi: "Agreement Portion Blocking Reason — CDS view giao diện dựa trên tcms_cag_blkrs."
keywords:
  - "agreement"
  - "portion"
  - "blocking"
  - "reason"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_AGREEMENTPORTIONBLOCKINGRSN

**Agreement Portion Blocking Reason**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGRSN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AgreementPortionBlockingReason` | ✓ | |  | `blocking_reason` | `CHAR(6)` | Portion Restriction |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AgreementPortionBlkgRsnText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGRSN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_AGREEMENTPORTIONBLOCKINGRSN')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICAGPORBLKRSN',
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
    representativeKey: 'AgreementPortionBlockingReason'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Agreement Portion Blocking Reason'
define view I_AgreementPortionBlockingRsn
  as select from tcms_cag_blkrs
  association [0..*] to I_AgreementPortionBlkgRsnText as _Text on $projection.AgreementPortionBlockingReason = _Text.AgreementPortionBlockingReason
{
      @ObjectModel.text.association: '_Text'
  key blocking_reason as AgreementPortionBlockingReason,

      _Text
}
```
