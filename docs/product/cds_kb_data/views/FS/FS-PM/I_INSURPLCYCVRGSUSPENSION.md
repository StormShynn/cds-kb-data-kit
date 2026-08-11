---
name: I_INSURPLCYCVRGSUSPENSION
description: "Coverage Suspension in Insurance Policy"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSION')/$value
semantic_en: "Coverage Suspension in Insurance Policy"
semantic_vi: "Coverage Suspension in Insurance Policy — CDS view cơ bản dựa trên Coverage Suspension in Insurance Policy."
keywords:
  - "coverage"
  - "suspension"
  - "insurance"
  - "policy"
  - "insur"
  - "plcy"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYCVRGSUSPENSION

**Coverage Suspension in Insurance Policy**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InsurPlcyCoverageSuspension` | ✓ | |  | `susptp_id` | `CHAR(1)` | Suspension Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSION')/$value)*

```abap
@EndUserText.label: 'Coverage Suspension in Insurance Policy'
@ObjectModel:{
    representativeKey: 'InsurPlcyCoverageSuspension',
    sapObjectNodeType.name: 'InsurPolicyCoverageSuspension',
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
  technicalName: 'IPCvrgSuspn'
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define root view entity I_InsurPlcyCvrgSuspension
  as select from /pm0/abuasusptp
  composition [0..*] of I_InsurPlcyCvrgSuspensionT as _Text
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
  key susptp_id as InsurPlcyCoverageSuspension,

      _Text
}
```
