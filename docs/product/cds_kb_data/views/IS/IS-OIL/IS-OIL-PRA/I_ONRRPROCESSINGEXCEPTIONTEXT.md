---
name: I_ONRRPROCESSINGEXCEPTIONTEXT
description: "ONRR Processing Exception - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPROCESSINGEXCEPTIONTEXT')/$value
semantic_en: "ONRR Processing Exception - Text"
semantic_vi: "ONRR Processing Exception - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "onrr"
  - "processing"
  - "exception"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONRRPROCESSINGEXCEPTIONTEXT

**ONRR Processing Exception - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPROCESSINGEXCEPTIONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessingException` | ✓ | |  | `cast (domvalue_l as /pra/fp_disposition_code )` | `CHAR(1)` | ONRR-2014 - Disposition Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ProcessingExceptionName` |  | |  | `cast (ddtext as oiu_vdm_onrr_disp_cd_name )` | `CHAR(60)` | Disposition Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPROCESSINGEXCEPTIONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPROCESSINGEXCEPTIONTEXT')/$value)*

```abap
@EndUserText.label: 'ONRR Processing Exception - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRPROCEXCT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProcessingException'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ONRRProcessingExceptionText
  as select from dd07t
{
  key cast (domvalue_l as /pra/fp_disposition_code )       as ProcessingException,
      @Semantics.language
  key cast( ddlanguage as spras )                          as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_onrr_disp_cd_name )          as ProcessingExceptionName
}
where
      domname  = '/PRA/FP_DISPOSITION_CODE'
  and as4local = 'A';
```
