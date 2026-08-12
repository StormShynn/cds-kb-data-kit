---
name: I_WRNTYDEFECTCODETEXT
description: "Wrntydefectcodetext"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionCode` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `InspectionCodeText` |  | |  | `max(InspectionCodeText)` |  |  |
| `_Language` | | ✓ | | | | |

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
