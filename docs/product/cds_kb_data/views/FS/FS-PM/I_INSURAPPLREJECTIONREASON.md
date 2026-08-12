---
name: I_INSURAPPLREJECTIONREASON
description: "Appl Rejection Reason in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLREJECTIONREASON')/$value
semantic_en: "Appl Rejection Reason in Insur Plcy"
semantic_vi: "Appl Rejection Reason in Insur Plcy — CDS view cơ bản dựa trên Appl Rejection Reason in Insur Plcy."
keywords:
  - "appl"
  - "rejection"
  - "reason"
  - "insur"
  - "plcy"
  - "rjcn"
tags:
  - FS
  - bo:salesorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURAPPLREJECTIONREASON

**Appl Rejection Reason in Insur Plcy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLREJECTIONREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurApplRjcnRsn` | ✓ | |  | `refusalreason_cd` | `NUMC(3)` | Refusal Reason |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLREJECTIONREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLREJECTIONREASON')/$value)*

```abap
@EndUserText.label: 'Appl Rejection Reason in Insur Plcy'
@ObjectModel:{
    representativeKey: 'InsurApplRjcnRsn',    
    sapObjectNodeType.name: 'InsuranceApplRejectionReason',
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
  technicalName: 'IPApplRjcnRsn'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurApplRejectionReason
  as select from /pm0/abuarefres
  composition [0..*] of I_InsurApplRejectionReasonT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key refusalreason_cd as InsurApplRjcnRsn,

      _Text
}
```
