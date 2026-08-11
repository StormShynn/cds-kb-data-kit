---
name: I_INSURAPPLCHANGEREASONT
description: "Appl Change Reason in Insur Plcy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASONT')/$value
semantic_en: "Appl Change Reason in Insur Plcy - Text"
semantic_vi: "Appl Change Reason in Insur Plcy - Text — CDS view cơ bản dựa trên Appl Change Reason in Insur Plcy - Text."
keywords:
  - "appl"
  - "change"
  - "reason"
  - "insur"
  - "plcy"
  - "text"
  - "language"
  - "name"
tags:
  - FS
  - bo:salesorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURAPPLCHANGEREASONT

**Appl Change Reason in Insur Plcy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASONT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurApplChgRsn` | ✓ | |  | `chgreason_id` | `NUMC(4)` | Change Reason for Business Process |
| `InsurApplChgRsnName` |  | |  | `chgreason_tt` | `CHAR(50)` | Description of Business Process Change Reason |
| `_Language` | | ✓ | | | | |
| `_InsurInsurApplChangeReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASONT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURAPPLCHANGEREASONT')/$value)*

```abap
@EndUserText.label: 'Appl Change Reason in Insur Plcy - Text'
@ObjectModel:{
    representativeKey: 'InsurApplChgRsn',
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

define view entity I_InsurApplChangeReasonT
  as select from /pm0/abuachgreat
  association        to parent I_InsurApplChangeReason as _InsurInsurApplChangeReason on $projection.InsurApplChgRsn = _InsurInsurApplChangeReason.InsurApplChgRsn
  association [0..1] to I_Language                     as _Language                   on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu        as Language,
      @ObjectModel.foreignKey.association: '_InsurInsurApplChangeReason'
      @ObjectModel.text.element: ['InsurApplChgRsnName']
  key chgreason_id as InsurApplChgRsn,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      chgreason_tt as InsurApplChgRsnName,

      //Associations
      _InsurInsurApplChangeReason,
      _Language

}
```
