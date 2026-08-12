---
name: I_OPERATINGCONCERN
description: "Operatingconcern"
app_component: FI-GL-IS-2CL
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_OPERATINGCONCERN

**Operatingconcern**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `OperatingConcern` | ✓ | |  | `erkrs` |  |  |
| `OperatingConcernName` |  | |  | `_Text[1:Language = $session.system_language].OperatingConcernName` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OperatingConcernText` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'OperatingConcern' //Inserted by VDM CDS Suite Plugin
@AccessControl.authorizationCheck: #CHECK //NOT_REQUIRED
@EndUserText.label: 'Operating Concern'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIOPERCONCERN'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_OperatingConcern
  as select from tkeb
  association [0..*] to I_OperatingConcernText as _Text on $projection.OperatingConcern = _Text.OperatingConcern
{
      @ObjectModel.text.element: ['OperatingConcernName']
  key erkrs                                                             as OperatingConcern,

      @Semantics.text: true
      _Text[1:Language = $session.system_language].OperatingConcernName as OperatingConcernName,

      _Text
};
```
