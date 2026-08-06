---
name: I_WRNTYDEFECTCODETEXT
description: Wrntydefectcodetext
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - text-view
  - text
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYDEFECTCODETEXT

**Wrntydefectcodetext**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InspectionCode` | `InspectionCode` |
| key `Language` | `Language` |
| `InspectionCodeText` | `max(InspectionCodeText)` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
   representativeKey:'InspectionCode',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #M
   },
   //Start of KK001
     supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                #CDS_MODELING_ASSOCIATION_TARGET, 
                                #SQL_DATA_SOURCE,                                 
                                #CDS_MODELING_DATA_SOURCE, 
                                #EXTRACTION_DATA_SOURCE, 
                                #SEARCHABLE_ENTITY],
     modelingPattern: #LANGUAGE_DEPENDENT_TEXT
     //End of KK001
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Defect code for warranty - Text'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IWRNTYDFCTXT'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

define view entity I_WrntyDefectCodeText
  as select from I_InspectionCodeText
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key     InspectionCode,
          @Semantics.language: true
          @ObjectModel.foreignKey.association: '_Language'
  key     Language,
          @Semantics.text: true
          @EndUserText.label: 'Code Description'
          max(InspectionCodeText) as InspectionCodeText,
          _Language

}
group by
  InspectionCode,
  Language
```
