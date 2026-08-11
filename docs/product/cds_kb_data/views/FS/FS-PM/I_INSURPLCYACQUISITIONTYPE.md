---
name: I_INSURPLCYACQUISITIONTYPE
description: "Acquisition Type in Insurance Policy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPE')/$value
semantic_en: "Acquisition Type in Insurance Policy"
semantic_vi: "Acquisition Type in Insurance Policy — CDS view cơ bản dựa trên Acquisition Type in Insurance Policy."
keywords:
  - "acquisition"
  - "type"
  - "insurance"
  - "policy"
  - "insur"
  - "plcy"
  - "acqn"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYACQUISITIONTYPE

**Acquisition Type in Insurance Policy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcyAcqnType` | ✓ | |  | `acqutp_id` | `NUMC(3)` | Acquisition Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPE')/$value)*

```abap
@EndUserText.label: 'Acquisition Type in Insurance Policy'
@ObjectModel:{
    representativeKey: 'InsurPlcyAcqnType',
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    sapObjectNodeType.name: 'InsurPolicyAcquisitionType',
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
  technicalName: 'IPAcqnType'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurPlcyAcquisitionType
  as select from /pm0/abuaacqutp
  composition [0..*] of I_InsurPlcyAcquisitionTypeT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key acqutp_id as InsurPlcyAcqnType,

      _Text
}
```
