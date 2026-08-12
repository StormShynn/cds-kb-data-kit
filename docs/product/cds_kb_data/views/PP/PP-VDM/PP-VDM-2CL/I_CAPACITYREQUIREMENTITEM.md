---
name: I_CAPACITYREQUIREMENTITEM
description: "Capacityrequirementitem"
app_component: PP-VDM-2CL
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
  - PP
  - PP-VDM
  - interface-view
  - item-level
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_CAPACITYREQUIREMENTITEM

**Capacityrequirementitem**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `CapacityRequirement` | ✓ | |  | `bedid` |  |  |
| `CapacityRequirementItem` | ✓ | |  | `bedzl` |  |  |
| `_CapacityRequirement` | | ✓ | | | | |
| `_CapacityRequirementItemCap` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CapacityRequirement` | `I_CapacityRequirement` | [1..1] |
| `_CapacityRequirementItemCap` | `I_CapacityRequirementItemCap` | [1..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPCAPRQMTITEM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]
@ObjectModel.representativeKey: 'CapacityRequirementItem'
@ObjectModel.sapObjectNodeType.name: 'WorkOrderCapacityRqmtItem'
@ObjectModel.semanticKey: ['CapacityRequirement', 'CapacityRequirementItem']
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Capacity Requirement Item'
// To be used for foreign key associations on the 2nd key field of table KBED

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_CapacityRequirementItem
  as select distinct from kbed
  
  -- to parent/root
  association [1..1] to I_CapacityRequirement        as _CapacityRequirement        on  $projection.CapacityRequirement = _CapacityRequirement.CapacityRequirement
  -- to child
  association [1..*] to I_CapacityRequirementItemCap as _CapacityRequirementItemCap on  $projection.CapacityRequirement     = _CapacityRequirementItemCap.CapacityRequirement
                                                                                    and $projection.CapacityRequirementItem = _CapacityRequirementItemCap.CapacityRequirementItem
{
      // Key
      @ObjectModel.foreignKey.association: '_CapacityRequirement'
  key bedid as CapacityRequirement,
  key bedzl as CapacityRequirementItem,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _CapacityRequirement,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _CapacityRequirementItemCap
};
```
