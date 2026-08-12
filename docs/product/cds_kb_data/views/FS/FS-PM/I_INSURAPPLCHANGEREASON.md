---
name: I_INSURAPPLCHANGEREASON
description: "Appl Change Reason in Insurance Policy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASON')/$value
semantic_en: "Appl Change Reason in Insurance Policy"
semantic_vi: "Appl Change Reason in Insurance Policy — CDS view cơ bản dựa trên Appl Change Reason in Insurance Policy."
keywords:
  - "appl"
  - "change"
  - "reason"
  - "insurance"
  - "policy"
  - "insur"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURAPPLCHANGEREASON

**Appl Change Reason in Insurance Policy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurApplChgRsn` | ✓ | |  | `chgreason_id` | `NUMC(4)` | Change Reason for Business Process |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASON')/$value)*

```abap
@EndUserText.label: 'Appl Change Reason in Insurance Policy'
@ObjectModel:{
    representativeKey: 'InsurApplChgRsn',
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
  technicalName: 'IPApplChgRsn'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurApplChangeReason
  as select from /pm0/abuachgrea
  composition [0..*] of I_InsurApplChangeReasonT as _Text
{
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key chgreason_id as InsurApplChgRsn,

      _Text
}
```
