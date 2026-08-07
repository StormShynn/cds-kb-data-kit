---
name: I_MAINTOPERATIONSYSTCONDITIONT
description: Maintoperationsystconditiont
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MN
  - interface-view
  - pricing-condition
  - component:PM-WOC-MN-2CL
  - lob:Plant Maintenance
---
# I_MAINTOPERATIONSYSTCONDITIONT

**Maintoperationsystconditiont**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `OperationSystemCondition` | ✓ | |  | `anlzu` |
| `Language` | ✓ | |  | `spras` |
| `OperationSystemConditionText` |  | |  | `anlzux` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Maint Operation System Condition - Text'
@VDM.viewType: #BASIC
@ObjectModel:{  dataCategory: #TEXT,
                representativeKey: 'OperationSystemCondition',
                usageType: {  dataClass: #META,
                              serviceQuality: #A,
                              sizeCategory: #S },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE ],
                sapObjectNodeType.name: 'MaintOpSystemConditionText' }
@Analytics: { technicalName: 'IMAINTOPSYSCONDT',
              dataExtraction.enabled: true }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_MaintOperationSystConditionT
  as select from t357m_t
  association [0..1] to I_Language as _Language on _Language.Language = $projection.Language
{
      @ObjectModel.text.element: [ 'OperationSystemConditionText']
  key anlzu  as OperationSystemCondition,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras  as Language,

      @Semantics.text: true
      anlzux as OperationSystemConditionText,

      // Associations
      _Language
}
```
