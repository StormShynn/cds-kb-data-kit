---
name: I_CONTACTPERSONDEPARTMENTT
description: Contactpersondepartmentt
app_component: AP-MD-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - component:AP-MD-BP
  - lob:Other
---
# I_CONTACTPERSONDEPARTMENTT

**Contactpersondepartmentt**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContactPersonDepartment` | ✓ | |  | `abtnr` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ContactPersonDepartmentName` |  | |  | `bez20` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'I_MD_DEPARTMENTT'
@EndUserText.label: 'Department of Contact Person Textview'
//@VDM.private: false
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
//@Analytics : { dataCategory: #TEXT }
@VDM.dclSourceNotRequired:true 
@ObjectModel.representativeKey: 'ContactPersonDepartment'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
@AccessControl.authorizationCheck: #NOT_REQUIRED

define view I_ContactPersonDepartmentT as select from tb911
association [1..1] to I_Language as _Language on $projection.Language = _Language.Language {
  key tb911.abtnr as ContactPersonDepartment,
  @Semantics.language: true
  key tb911.spras as Language,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH 
  tb911.bez20 as ContactPersonDepartmentName,
 _Language
}
```
