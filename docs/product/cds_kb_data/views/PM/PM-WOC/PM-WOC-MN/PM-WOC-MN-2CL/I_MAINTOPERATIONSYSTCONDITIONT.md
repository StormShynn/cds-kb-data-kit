---
name: I_MAINTOPERATIONSYSTCONDITIONT
description: "Maintoperationsystconditiont"
app_component: PM-WOC-MN-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationSystemCondition` | ✓ | |  | `anlzu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `OperationSystemConditionText` |  | |  | `anlzux` |  |  |
| `_Language` | | ✓ | | | | |

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
