---
name: I_INSURPLCYCHANGEPROCESST
description: "Change Process in Insur Policy - Text"
app_component: FS-PM
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCHANGEPROCESST')/$value
semantic_en: "Change Process in Insur Policy - Text"
semantic_vi: "Change Process in Insur Policy - Text — CDS view cơ bản dựa trên Change Process in Insur Policy - Text."
keywords:
  - "change"
  - "process"
  - "insur"
  - "policy"
  - "text"
  - "language"
  - "plcy"
  - "name"
tags:
  - FS
  - bo:purchaseorder
  - component:FS-PM
  - FS-PM
  - interface-view
---
# I_INSURPLCYCHANGEPROCESST

**Change Process in Insur Policy - Text**

| Property | Value |
|---|---|
| App Component | `FS-PM` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCHANGEPROCESST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `InsurPlcyChangeProcessID` | ✓ | |  | `proc_id` | `CHAR(20)` | Processing |
| `InsurPlcyChangeProcessTextName` |  | |  | `processing_tt` | `CHAR(50)` | Processing Text |
| `_Language` | | ✓ | | | | |
| `_InsurPlcyChangeProcess` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCHANGEPROCESST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INSURPLCYCHANGEPROCESST')/$value)*

```abap
@EndUserText.label: 'Change Process in Insur Policy - Text'
@ObjectModel:{
    representativeKey: 'InsurPlcyChangeProcessID',
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

define view entity I_InsurPlcyChangeProcessT
  as select from /pm0/abujprcidht
  association        to parent I_InsurPlcyChangeProcess as _InsurPlcyChangeProcess on $projection.InsurPlcyChangeProcessID = _InsurPlcyChangeProcess.InsurPlcyChangeProcessID
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language

{

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu         as Language,
      @ObjectModel.foreignKey.association: '_InsurPlcyChangeProcess'
      @ObjectModel.text.element: ['InsurPlcyChangeProcessTextName']
  key proc_id       as InsurPlcyChangeProcessID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      processing_tt as InsurPlcyChangeProcessTextName,

      //Associations
      _InsurPlcyChangeProcess,
      _Language

}
```
