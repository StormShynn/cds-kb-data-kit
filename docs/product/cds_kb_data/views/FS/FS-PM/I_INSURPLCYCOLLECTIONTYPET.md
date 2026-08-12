---
name: I_INSURPLCYCOLLECTIONTYPET
description: "Collection Type in Insur Plcy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCOLLECTIONTYPET')/$value
semantic_en: "Collection Type in Insur Plcy - Text"
semantic_vi: "Collection Type in Insur Plcy - Text — CDS view cơ bản dựa trên Collection Type in Insur Plcy - Text."
keywords:
  - "collection"
  - "type"
  - "insur"
  - "plcy"
  - "text"
  - "language"
  - "coll"
  - "desc"
  - "name"
tags:
  - FS
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYCOLLECTIONTYPET

**Collection Type in Insur Plcy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCOLLECTIONTYPET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyCollectionType` | ✓ | |  | `colltype_id` | `CHAR(1)` | Collection Type |
| `InsurPlcyCollTypeDescName` |  | |  | `colltype_tt` | `CHAR(50)` | Collection Type Description |
| `_Language` | | ✓ | | | | |
| `_InsurPlcyCollectionType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCOLLECTIONTYPET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCOLLECTIONTYPET')/$value)*

```abap
@EndUserText.label: 'Collection Type in Insur Plcy - Text'
@ObjectModel:{
    representativeKey: 'InsurPlcyCollectionType',
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

define view entity I_InsurPlcyCollectionTypeT
  as select from /pm0/abuacollt
  association        to parent I_InsurPlcyCollectionType as _InsurPlcyCollectionType on $projection.InsurPlcyCollectionType = _InsurPlcyCollectionType.InsurPlcyCollectionType
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu       as Language,
      @ObjectModel.foreignKey.association: '_InsurPlcyCollectionType'
      @ObjectModel.text.element: ['InsurPlcyCollTypeDescName']
  key colltype_id as InsurPlcyCollectionType,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      colltype_tt as InsurPlcyCollTypeDescName,

      //Associations
      _InsurPlcyCollectionType,
      _Language

}
```
