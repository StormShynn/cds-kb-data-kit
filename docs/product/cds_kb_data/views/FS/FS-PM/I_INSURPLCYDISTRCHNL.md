---
name: I_INSURPLCYDISTRCHNL
description: "Distribution Channel in Insur Plcy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYDISTRCHNL')/$value
semantic_en: "Distribution Channel in Insur Plcy"
semantic_vi: "Distribution Channel in Insur Plcy — CDS view cơ bản dựa trên Distribution Channel in Insur Plcy."
keywords:
  - "distribution"
  - "channel"
  - "insur"
  - "plcy"
  - "distr"
  - "chnl"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYDISTRCHNL

**Distribution Channel in Insur Plcy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYDISTRCHNL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcyDistrChnl` | ✓ | |  | `salech_id` | `NUMC(3)` | Distribution Channel |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYDISTRCHNL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYDISTRCHNL')/$value)*

```abap
@EndUserText.label: 'Distribution Channel in Insur Plcy'
@ObjectModel:{
    representativeKey: 'InsurPlcyDistrChnl',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    sapObjectNodeType.name: 'InsurPolicyDistributionChannel',
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
  technicalName: 'IPDistrChnl'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurPlcyDistrChnl 
  as select from /pm0/abuasalech
  composition [0..*] of I_InsurPlcyDistrChnlT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key salech_id as InsurPlcyDistrChnl,

      _Text
}
```
