---
name: I_INSURCONTRCANCLNREASON
description: "Contr Cancellation Reason in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRCANCLNREASON')/$value
semantic_en: "Contr Cancellation Reason in Insur Plcy"
semantic_vi: "Contr Cancellation Reason in Insur Plcy — CDS view cơ bản dựa trên Contr Cancellation Reason in Insur Plcy."
keywords:
  - "contr"
  - "cancellation"
  - "reason"
  - "insur"
  - "plcy"
  - "cancln"
tags:
  - FS
  - bo:salesorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURCONTRCANCLNREASON

**Contr Cancellation Reason in Insur Plcy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRCANCLNREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurContrCanclnRsn` | ✓ | |  | `cancreas_id` | `NUMC(5)` | Reversal Reason |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRCANCLNREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURCONTRCANCLNREASON')/$value)*

```abap
@EndUserText.label: 'Contr Cancellation Reason in Insur Plcy'
@ObjectModel:{
    representativeKey: 'InsurContrCanclnRsn',
    sapObjectNodeType.name: 'InsurContrCancellationReason',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #ANALYTICAL_DIMENSION,
    resultSet.sizeCategory: #XS,
    supportedCapabilities: [#ANALYTICAL_DIMENSION,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE,
                            #VALUE_HELP_PROVIDER]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'IPContrCanclnRsn'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurContrCanclnReason
  as select from /pm0/abuacancre
  composition [0..*] of I_InsurContrCanclnReasonT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key cancreas_id as InsurContrCanclnRsn,

      _Text
}
```
