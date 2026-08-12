---
name: I_REVERSALREASON
description: "Reversalreason"
app_component: FI-GL-GL-A-2CL
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
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_REVERSALREASON

**Reversalreason**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
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
| `ReversalReason` | ✓ | |  | `stgrd` |  |  |
| `IsNegativePosting` |  | |  | `xnegp` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ReversalReasonText` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@EndUserText.label: 'Reversal Reason'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {representativeKey: 'ReversalReason',
               usageType: { dataClass: #CUSTOMIZING,
                            serviceQuality: #A,
                            sizeCategory: #S },
               supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
               modelingPattern: #ANALYTICAL_DIMENSION,
               sapObjectNodeType.name: 'ReversalReason'  
}

define view entity I_ReversalReason
  as select from t041c
  association [0..*] to I_ReversalReasonText as _Text on $projection.ReversalReason = _Text.ReversalReason
{
      @ObjectModel.text.association: '_Text'
  key t041c.stgrd                                           as ReversalReason,
      t041c.xnegp                                           as IsNegativePosting,
      _Text
}
```
