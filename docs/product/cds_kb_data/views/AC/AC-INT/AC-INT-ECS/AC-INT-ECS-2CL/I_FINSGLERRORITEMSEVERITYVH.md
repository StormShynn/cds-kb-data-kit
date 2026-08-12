---
name: I_FINSGLERRORITEMSEVERITYVH
description: "Finsglerroritemseverityvh"
app_component: AC-INT-ECS-2CL
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
  - AC
  - AC-INT
  - AC-INT-ECS
  - interface-view
  - value-help
  - item-level
  - component:AC-INT-ECS-2CL
  - lob:Other
---
# I_FINSGLERRORITEMSEVERITYVH

**Finsglerroritemseverityvh**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
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
| `FinSGLErrorItemSeverity` | ✓ | |  | `cast( domvalue_l as char1 )` | `CHAR(1)` | Single-Character Flag |
| `FinSGLErrorItemSeverityText` |  | |  | `cast( ddtext as char10 )` | `CHAR(10)` | Character Field with Length 10 |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Error Item Severity'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}

@ObjectModel: {
  representativeKey: 'FinSGLErrorItemSeverity',
  dataCategory: #VALUE_HELP,
  resultSet: {
    sizeCategory: #XS
  },
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
  }
}
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER,
                                     #SQL_DATA_SOURCE]
define view entity I_FinSGLErrorItemSeverityVH
  as select from dd07t
{
          @ObjectModel.text.element: ['FinSGLErrorItemSeverityText']
          @UI.textArrangement: #TEXT_ONLY
  key     cast( domvalue_l as char1 ) as FinSGLErrorItemSeverity,
          @Semantics.text:true
          cast( ddtext as char10 )    as FinSGLErrorItemSeverityText
}
where
      domname    = 'GLE_DOM_ECS_ITEM_SEVER_LEVEL'
  and as4local   = 'A'
  and ddlanguage = $session.system_language
```
