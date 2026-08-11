---
name: I_INSURPLCYACQUISITIONTYPET
description: "Acquisition Type in Insur Policy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPET')/$value
semantic_en: "Acquisition Type in Insur Policy - Text"
semantic_vi: "Acquisition Type in Insur Policy - Text — CDS view cơ bản dựa trên Acquisition Type in Insur Policy - Text."
keywords:
  - "acquisition"
  - "type"
  - "insur"
  - "policy"
  - "text"
  - "language"
  - "plcy"
  - "acqn"
  - "name"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYACQUISITIONTYPET

**Acquisition Type in Insur Policy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyAcqnType` | ✓ | |  | `acqutp_id` | `NUMC(3)` | Acquisition Type |
| `InsurPlcyAcqnTypeName` |  | |  | `acqutp_tt` | `CHAR(50)` | Name of Acquisition Type |
| `_Language` | | ✓ | | | | |
| `_InsurPlcyAcquisitionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYACQUISITIONTYPET')/$value)*

```abap
@EndUserText.label: 'Acquisition Type in Insur Policy - Text'
@ObjectModel:{
    representativeKey: 'InsurPlcyAcqnType',
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

define view entity I_InsurPlcyAcquisitionTypeT
  as select from /pm0/abuaacqutpt
  association        to parent I_InsurPlcyAcquisitionType as _InsurPlcyAcquisitionType on $projection.InsurPlcyAcqnType = _InsurPlcyAcquisitionType.InsurPlcyAcqnType
  association [0..1] to I_Language                        as _Language                 on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu     as Language,
      @ObjectModel.foreignKey.association: '_InsurPlcyAcquisitionType'
      @ObjectModel.text.element: ['InsurPlcyAcqnTypeName']
  key acqutp_id as InsurPlcyAcqnType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      acqutp_tt as InsurPlcyAcqnTypeName,

      //Associations
      _InsurPlcyAcquisitionType,
      _Language

}
```
