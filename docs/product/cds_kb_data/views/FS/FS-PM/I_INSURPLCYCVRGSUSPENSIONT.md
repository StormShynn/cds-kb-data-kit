---
name: I_INSURPLCYCVRGSUSPENSIONT
description: "Coverage Suspension in Insur Plcy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSIONT')/$value
semantic_en: "Coverage Suspension in Insur Plcy - Text"
semantic_vi: "Coverage Suspension in Insur Plcy - Text — CDS view cơ bản dựa trên Coverage Suspension in Insur Plcy - Text."
keywords:
  - "coverage"
  - "suspension"
  - "insur"
  - "plcy"
  - "text"
  - "language"
  - "cvrg"
  - "name"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYCVRGSUSPENSIONT

**Coverage Suspension in Insur Plcy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSIONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyCoverageSuspension` | ✓ | |  | `susptp_id` | `CHAR(1)` | Suspension Type |
| `InsurPlcyCvrgSuspensionName` |  | |  | `susptp_tt` | `CHAR(50)` | Name of Suspension Type |
| `_Language` | | ✓ | | | | |
| `_InsurPlcyCvrgSuspension` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSIONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCVRGSUSPENSIONT')/$value)*

```abap
@EndUserText.label: 'Coverage Suspension in Insur Plcy - Text'
@ObjectModel:{
    representativeKey: 'InsurPlcyCoverageSuspension',
    dataCategory: #TEXT,
    usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
    },
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    supportedCapabilities: [
                            #LANGUAGE_DEPENDENT_TEXT,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #SEARCHABLE_ENTITY
                           ]
}
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}
@Search.searchable: true
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InsurPlcyCvrgSuspensionT
  as select from /pm0/abuasusptpt
  association        to parent I_InsurPlcyCvrgSuspension as _InsurPlcyCvrgSuspension on $projection.InsurPlcyCoverageSuspension = _InsurPlcyCvrgSuspension.InsurPlcyCoverageSuspension
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu     as Language,
      @ObjectModel.foreignKey.association: '_InsurPlcyCvrgSuspension'
      @ObjectModel.text.element: ['InsurPlcyCvrgSuspensionName']
  key susptp_id as InsurPlcyCoverageSuspension,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      susptp_tt as InsurPlcyCvrgSuspensionName,

      //Associations
      _InsurPlcyCvrgSuspension,
      _Language

}
```
